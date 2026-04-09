export interface Client {
  id: string;
  business_name: string;
  status: 'active' | 'disabled';
  timezone: string;
  twilio_number?: string;
  created_at: string;
  admin_email: string;
  plan: string;
}

export interface CallLog {
  id: string;
  client_id: string;
  caller_id: string;
  start_time: string;
  duration: number;
  status: 'completed' | 'ongoing' | 'failed';
  summary: string;
  outcome: 'appointment_booked' | 'hung_up' | 'rescheduled' | 'inquiry';
}