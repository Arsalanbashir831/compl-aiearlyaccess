import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';
import { validateFormData, type FormData } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();
    
    // Validate form data
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationErrors 
        },
        { status: 400 }
      );
    }

    // Add data to Realtime Database
    const waitlistRef = ref(db, 'compl-ai-early-access-form');
    const newEntryRef = await push(waitlistRef, {
      fullName: body.fullName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      companyName: body.companyName,
      companyPosition: body.companyPosition,
      submittedAt: serverTimestamp(),
      status: 'pending',
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined the waitlist!',
        id: newEntryRef.key 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting waitlist:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
