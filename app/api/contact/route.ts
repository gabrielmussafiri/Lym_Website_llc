import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validate that the API key is present
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Add a GET method for testing
export async function GET() {
  try {
    console.log('Testing Resend API connection...');
    // Test the Resend API key with a simple test email
    try {
      const { data, error } = await resend.emails.send({
        from: 'info@compliantas.com',
        to: ['info@compliantas.com'],
        subject: 'Test Email',
        html: '<p>Testing Resend API connection</p>',
      });

      if (error) {
        console.error('Resend API test failed:', error);
        return NextResponse.json(
          { 
            success: false, 
            error: 'Resend API configuration error',
            details: error.message
          },
          { status: 500 }
        );
      }

      console.log('Resend API test successful:', data);
    } catch (testError) {
      console.error('Error testing Resend API:', testError);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Resend API configuration error',
          details: testError instanceof Error ? testError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      message: 'Contact API is working',
      resendStatus: 'configured'
    });
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  console.log('Received POST request to /api/contact');
  console.log('Request headers:', request.headers);

  try {
    const body = await request.json();
    console.log('Parsed request body:', body);

    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !company || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Preparing to send email with Resend...');
    const emailDetails = {
      from: 'info@compliantas.com',
      to: ['info@compliantas.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from the contact form on Complianta's website.
          </p>
        </div>
      `,
    };
    console.log('Email details:', emailDetails);

    const { data, error } = await resend.emails.send(emailDetails);

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 