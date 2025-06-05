import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const formId = process.env.FORMSPARK_FORM_ID;

    if (!formId) {
      return NextResponse.json({
        success: false,
        message: 'Formspark Form ID is missing in environment variables.',
      }, { status: 400 });
    }

    const response = await axios.post(`https://submit-form.com/${formId}`, {
      name,
      email,
      message,
    });

    if (response.status === 200) {
      return NextResponse.json({
        success: true,
        message: 'Message sent via Formspark!',
      }, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to send to Formspark.',
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Formspark API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}
