import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  // Configure your email service here
})

export async function sendReminderEmail(to: string, subject: string, text: string) {
  try {
    await transporter.sendMail({
      from: "noreply@syntaxspring.com",
      to,
      subject,
      text,
    })
    console.log("Reminder email sent successfully")
  } catch (error) {
    console.error("Error sending reminder email:", error)
  }
}

