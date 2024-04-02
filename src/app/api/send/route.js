import { EmailTemplate } from '../../components'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()

    const { name, email, wish, subject } = body

    const data = await resend.emails.send({
      from: 'Santa Claus <info@claussanta.com>',
      to: email,
      subject: `${subject || 'Christmas Wishes'}: ${name}`,
      react: EmailTemplate({ name, wish, subject })
    })

    if (data.status === 'success') {
      return NextResponse.json({ message: 'Message sent successfully.' })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
