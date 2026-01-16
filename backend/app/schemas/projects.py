from typing import List, Optional

from pydantic import BaseModel


class ProjectBase(BaseModel):
    title: str
    description: str
    tech_stack: List[str]
    github_link: Optional[str]
    live_demo_link: Optional[str]
    image_url: Optional[str]


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int

    class Config:
        from_attributes = True
