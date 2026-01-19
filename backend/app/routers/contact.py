from app.schemas.contact import ContactRequest
from app.utils.email import send_contact_email
from fastapi import APIRouter
from fastapi.responses import JSONResponse

router = APIRouter()


@router.post("/")
def submit_contact_form(payload: ContactRequest):
    try:
        send_contact_email(
            name=payload.name,
            email=payload.email,
            contact_type=payload.contactType,
            message=payload.message,
        )
        return JSONResponse(
            status_code=200, content={"message": "Email sent successfully!"}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500, content={"message": f"Failed to send email: {str(e)}"}
        )
