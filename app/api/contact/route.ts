import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const RESEND_API_KEY = 're_fYuN4RiQ_5a9ktJu83LaGKdrfee4m3Yg1';

// Validate API key format
if (!RESEND_API_KEY.startsWith('re_')) {
  console.error('Invalid Resend API key format');
}

const resend = new Resend(RESEND_API_KEY);

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
  try {
    console.log('Received POST request to /api/contact');
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));

    // Parse the request body
    let body;
    try {
      body = await request.json();
      console.log('Parsed request body:', body);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = body;

    // Validate all required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!company) missingFields.push('company');
    if (!service) missingFields.push('service');
    if (!message) missingFields.push('message');

    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields',
          details: `Missing fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Preparing to send email with Resend...');
    console.log('Email details:', {
      from: 'info@compliantas.com',
      to: ['info@compliantas.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'info@compliantas.com',
      to: ['info@compliantas.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send email',
          details: error.message
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: data?.id
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Unexpected error in contact form handler:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        details: error?.message || 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
} 