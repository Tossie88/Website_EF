import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company, name, email, phone, message, interests } = body

    if (!company || !name || !email) {
      return NextResponse.json(
        { error: 'Pflichtfelder fehlen' },
        { status: 400 }
      )
    }

    await transporter.sendMail({
      from: `"Eis Freude Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Neue Anfrage von ${company} – ${name}`,
      text: [
        `Firma: ${company}`,
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || 'nicht angegeben'}`,
        `Interesse an: ${interests?.join(', ') || 'keine Auswahl'}`,
        ``,
        `Nachricht:`,
        message || '(keine Nachricht)',
      ].join('\n'),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('E-Mail-Fehler:', err)
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
