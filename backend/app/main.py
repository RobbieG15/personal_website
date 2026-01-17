import os

import uvicorn
from app import models
from app.database import engine
from app.routers import blogs, contact, projects
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Initialize Database
# If using SQLAlchemy models, create tables
models.projects.Base.metadata.create_all(bind=engine)
models.blogs.Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title="Robert Greenslade Portfolio API",
    description="API backend for my software developer portfolio",
    version="1.0.0",
)

# serve uploaded images
app.mount("/uploads", StaticFiles(directory="app/uploads"), name="uploads")


# CORS Middleware
FRONTEND_HOST = os.getenv("FRONTEND_HOST", "http://localhost:5173")
origins = [FRONTEND_HOST, "robertgreenslade.dev"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # allow your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(projects.router, prefix="/projects", tags=["Projects"])
app.include_router(contact.router, prefix="/contact", tags=["Contact"])
app.include_router(blogs.router, prefix="/blogs", tags=["Blogs"])


# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to my Developer Portfolio API!"}


# Run with: uvicorn app.main:app --reload
if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
