import os
import shutil
from typing import List

from app.database import get_db
from app.models import projects as model_projects
from app.schemas import projects
from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from sqlalchemy.orm import Session

router = APIRouter()
UPLOAD_DIR = "app/uploads"


@router.get("/", response_model=List[projects.Project])
def get_projects(db: Session = Depends(get_db)):
    """
    Get all projects.
    """
    projects = db.query(model_projects.Project).all()
    # Convert tech_stack string back to list
    for p in projects:
        p.tech_stack = p.tech_stack.split(",") if p.tech_stack else []
    return projects


@router.get("/{project_id}", response_model=projects.Project)
def get_project(project_id: int, db: Session = Depends(get_db)):
    """
    Get a single project by ID.
    """
    project = (
        db.query(model_projects.Project)
        .filter(model_projects.Project.id == project_id)
        .first()
    )
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    project.tech_stack = project.tech_stack.split(",") if project.tech_stack else []
    return project


@router.post("/", response_model=projects.Project)
async def add_project(
    title: str,
    description: str,
    tech_stack: str,  # comma-separated string from form
    github_link: str = None,
    live_demo_link: str = None,
    image: UploadFile = File(None),  # optional file
    db: Session = Depends(get_db),
):
    # Save uploaded file if provided
    image_url = None
    if image:
        file_ext = os.path.splitext(image.filename)[1]
        filename = f"{title.replace(' ', '_')}{file_ext}"
        file_path = os.path.join(UPLOAD_DIR, filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        # URL for frontend
        image_url = f"/uploads/{filename}"

    db_project = model_projects.Project(
        title=title,
        description=description,
        tech_stack=tech_stack,  # store as comma-separated
        github_link=github_link,
        live_demo_link=live_demo_link,
        image_url=image_url,
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)

    # convert tech_stack string back to list
    db_project.tech_stack = (
        db_project.tech_stack.split(",") if db_project.tech_stack else []
    )

    return db_project


@router.post("/batch", response_model=List[projects.Project])
def add_projects(projects: List[projects.ProjectCreate], db: Session = Depends(get_db)):
    """
    Add multiple projects at once.
    """
    db_projects = []
    for project in projects:
        db_project = model_projects.Project(
            title=project.title,
            description=project.description,
            tech_stack=",".join(project.tech_stack),
            github_link=project.github_link,
            live_demo_link=project.live_demo_link,
            image_url=project.image_url,
        )
        db.add(db_project)
        db_projects.append(db_project)

    db.commit()
    for p in db_projects:
        db.refresh(p)
        p.tech_stack = p.tech_stack.split(",") if p.tech_stack else []

    return db_projects


@router.delete("/{project_id}", response_model=dict)
def delete_project(project_id: int, db: Session = Depends(get_db)):
    """
    Delete a project by its ID.
    """
    project = (
        db.query(model_projects.Project)
        .filter(model_projects.Project.id == project_id)
        .first()
    )
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()
    return {"message": f"Project with ID {project_id} has been deleted."}
