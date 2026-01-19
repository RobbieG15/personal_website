import os

import resend

# Set Resend API key
resend.api_key = os.getenv("RESEND_API_KEY")
recipient = os.getenv("CONTACT_RECIPIENT_EMAIL")


def send_contact_email(*, name: str, email: str, contact_type: str, message: str):
    if not recipient:
        raise RuntimeError("CONTACT_RECIPIENT_EMAIL not set")
    # Build email params for Resend
    params = {
        "from": "Portfolio Contact <noreply@robertgreenslade.dev>",
        "to": [recipient],
        "subject": f"Portfolio Contact ({name}) <{email}>",
        "html": f"""
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Type:</strong> {contact_type}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        """,
    }

    # Send email via Resend API
    try:
        r = resend.Emails.send(params)
    except Exception as e:
        print(e)
    print(r)
