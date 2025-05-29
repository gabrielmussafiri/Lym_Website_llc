import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validate that the API key is present
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('Newsletter API: Received request');
  
  try {
    // Log request headers for debugging
    console.log('Newsletter API: Request headers:', request.headers);
    
    const body = await request.json();
    console.log('Newsletter API: Request body:', body);
    
    const { email } = body;

    if (!email) {
      console.error('Newsletter API: Email is missing');
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Newsletter API: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Newsletter API: Sending welcome email to:', email);

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'info@compliantas.com',
      to: email,
      subject: 'Welcome to Complianta Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to Complianta!</h1>
          <p>Thank you for subscribing to our newsletter. We're excited to share our insights on:</p>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin: 10px 0;">✓ Compliance best practices</li>
            <li style="margin: 10px 0;">✓ Security updates</li>
            <li style="margin: 10px 0;">✓ Industry insights</li>
            <li style="margin: 10px 0;">✓ Expert tips and guides</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            You're receiving this email because you subscribed to Complianta's newsletter.
            <br />
            To unsubscribe, simply reply to this email with "Unsubscribe" in the subject line.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Newsletter API: Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    console.log('Newsletter API: Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Newsletter API: Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 