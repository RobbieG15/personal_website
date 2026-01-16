from app.schemas.contact import ContactRequest
from app.utils.email import send_contact_email
from fastapi import APIRouter, HTTPException, status

router = APIRouter()


@router.post("/", status_code=status.HTTP_204_NO_CONTENT)
def submit_contact_form(payload: ContactRequest):
    try:
        send_contact_email(
            name=payload.name,
            email=payload.email,
            contact_type=payload.contactType,
            message=payload.message,
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Failed to send contact message",
        ) from e
