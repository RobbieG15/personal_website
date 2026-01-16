from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    contactType: str = Field(..., min_length=1)
    message: str = Field(..., min_length=1)
