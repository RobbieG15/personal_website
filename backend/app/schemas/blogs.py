from datetime import datetime
from typing import Optional

from pydantic import BaseModel


class BlogBase(BaseModel):
    title: str
    summary: str
    content: str
    slug: str
    image_url: Optional[str]


class BlogCreate(BlogBase):
    pass


class Blog(BlogBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
