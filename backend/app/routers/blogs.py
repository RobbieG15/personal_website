import os
import shutil
from typing import List

from app.database import get_db
from app.models import blogs as model_blogs
from app.schemas import blogs
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

router = APIRouter()
UPLOAD_DIR = "app/uploads"


@router.get("/", response_model=List[blogs.Blog])
def get_blogs(db: Session = Depends(get_db)):
    return db.query(model_blogs.Blog).order_by(model_blogs.Blog.created_at.desc()).all()


@router.get("/{slug}", response_model=blogs.Blog)
def get_blog(slug: str, db: Session = Depends(get_db)):
    blog = db.query(model_blogs.Blog).filter(model_blogs.Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog


@router.post("/", response_model=blogs.Blog)
async def add_blog(
    title: str = Form(...),
    summary: str = Form(...),
    content: str = Form(...),
    slug: str = Form(...),
    image: UploadFile = File(None),
    db: Session = Depends(get_db),
):
    image_url = None

    if image:
        ext = os.path.splitext(image.filename)[1]
        filename = f"{slug}{ext}"
        path = os.path.join(UPLOAD_DIR, filename)

        with open(path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        image_url = f"/uploads/{filename}"

    blog = model_blogs.Blog(
        title=title,
        summary=summary,
        content=content,
        slug=slug,
        image_url=image_url,
    )

    db.add(blog)
    db.commit()
    db.refresh(blog)
    return blog
