import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fname, lname, email, phone, product, volume } = body

    if (!fname || !lname || !email || !phone) {
      return NextResponse.json(
        { status: 'error', message: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    // For now, log the submission. In production, integrate with
    // an email service (Resend, SendGrid) or CRM.
    console.log('Contact form submission:', {
      fname,
      lname,
      email,
      phone,
      product,
      volume,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ status: 'success' })
  } catch {
    return NextResponse.json(
      { status: 'error', message: 'Invalid request.' },
      { status: 400 },
    )
  }
}
