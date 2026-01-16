import os
import smtplib
from email.message import EmailMessage


def send_contact_email(
    *,
    name: str,
    email: str,
    contact_type: str,
    message: str,
):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", 587))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    recipient = os.getenv("CONTACT_RECIPIENT_EMAIL")

    if not all([smtp_host, smtp_user, smtp_password, recipient]):
        raise RuntimeError("SMTP environment variables not set")

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio Contact: {contact_type}"
    msg["From"] = smtp_user
    msg["To"] = recipient
    msg["Reply-To"] = email

    msg.set_content(
        f"""
        New contact form submission:

        Name: {name}
        Email: {email}
        Type: {contact_type}

        Message:
        {message}
        """
    )

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
