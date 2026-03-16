import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { company, name, email, phone, message, interests } = body

    // Validate required fields
    if (!company || !name || !email) {
      return NextResponse.json(
        { error: 'Pflichtfelder fehlen' },
        { status: 400 }
      )
    }

    // Log the inquiry (in production, send email here)
    console.log('Neue Anfrage:', {
      company,
      name,
      email,
      phone: phone || 'nicht angegeben',
      interests: interests?.join(', ') || 'keine',
      message: message || 'keine Nachricht',
      timestamp: new Date().toISOString(),
    })

    // In production: integrate email service (nodemailer, Resend, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'website@eisfreude.de',
    //   to: 'info@eisfreude.de',
    //   subject: `Neue Anfrage von ${company} – ${name}`,
    //   text: `...`,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}
