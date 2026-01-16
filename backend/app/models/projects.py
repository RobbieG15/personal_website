from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    tech_stack = Column(String, nullable=False)
    github_link = Column(String, nullable=True)
    live_demo_link = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
