export interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  companyPosition: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateFormData(data: FormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Full Name validation
  if (!data.fullName.trim()) {
    errors.push({ field: 'fullName', message: 'Full name is required' });
  } else if (data.fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters' });
  }

  // Email validation
  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push({ field: 'email', message: 'Please enter a valid email address' });
    }
  }

  // Phone Number validation
  if (!data.phoneNumber.trim()) {
    errors.push({ field: 'phoneNumber', message: 'Phone number is required' });
  } else {
    // More flexible phone number validation
    const phoneRegex = /^[\+]?[0-9][\d\s\-\(\)]{7,15}$/;
    const cleanPhone = data.phoneNumber.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(data.phoneNumber) || cleanPhone.length < 8 || cleanPhone.length > 15) {
      errors.push({ field: 'phoneNumber', message: 'Please enter a valid phone number (8-15 digits)' });
    }
  }

  // Company Name validation
  if (!data.companyName.trim()) {
    errors.push({ field: 'companyName', message: 'Company name is required' });
  } else if (data.companyName.trim().length < 2) {
    errors.push({ field: 'companyName', message: 'Company name must be at least 2 characters' });
  }

  // Company Position validation
  if (!data.companyPosition.trim()) {
    errors.push({ field: 'companyPosition', message: 'Company position is required' });
  } else if (data.companyPosition.trim().length < 2) {
    errors.push({ field: 'companyPosition', message: 'Company position must be at least 2 characters' });
  }

  return errors;
}
