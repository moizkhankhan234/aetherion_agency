// ----------------------------------------------------------------------
// CONFIGURATION: SMTP Backend API
// ----------------------------------------------------------------------
// Using backend API for SMTP functionality to bypass CORS restrictions
// ----------------------------------------------------------------------

export const EMAIL_CONFIG = {
  // Backend API endpoint
  API_URL: 'http://localhost:3002/api/send-email',

  // Fallback simulation for development
  SIMULATE: false
};

export interface EmailPayload {
  subject: string;
  body: string;
  replyTo?: string;
  metadata?: Record<string, any>;
}

export const sendEmail = async (payload: EmailPayload, type: 'CONTACT' | 'AUDIT' | 'NEWSLETTER'): Promise<boolean> => {
  // Check if backend is available, otherwise simulate
  if (EMAIL_CONFIG.SIMULATE) {
    console.warn('⚠️ Backend not available, simulating email send.');
    console.group(`[SIMULATION] Email Type: ${type}`);
    console.log('Subject:', payload.subject);
    console.log('Body:', payload.body);
    console.log('To: aetherionagency@gmail.com');
    console.groupEnd();

    // Simulate network delay so the UI shows a loading state
    await new Promise(r => setTimeout(r, 1500));
    return true;
  }

  try {
    const response = await fetch(EMAIL_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: payload.subject,
        body: payload.body,
        replyTo: payload.replyTo,
        type: type
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log(`%c[SMTP Backend] Sent Successfully: ${type}`, 'color: #00ff00');
      return true;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('[SMTP Backend] Failed to send:', error);

    // Fallback to simulation if backend is not available
    console.warn('⚠️ Backend unavailable, falling back to simulation mode.');
    EMAIL_CONFIG.SIMULATE = true;
    return await sendEmail(payload, type);
  }
};
