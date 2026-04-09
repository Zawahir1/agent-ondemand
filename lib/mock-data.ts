import { addDays, subMinutes, format } from 'date-fns';

export const MOCK_CLIENTS = [
  {
    id: 'cl_1',
    business_name: 'Aura AI Clinic',
    status: 'active',
    timezone: 'America/New_York',
    twilio_number: '+1 (555) 019-2834',
    created_at: '2023-11-15T10:00:00Z',
    admin_email: 'dr.user@noxatech.com',
    plan: 'Pro'
  },
  {
    id: 'cl_2',
    business_name: 'Radiant Skin Spa',
    status: 'active',
    timezone: 'America/Los_Angeles',
    twilio_number: '+1 (555) 022-4411',
    created_at: '2023-12-01T14:30:00Z',
    admin_email: 'sarah@radiantskin.com',
    plan: 'Starter'
  },
  {
    id: 'cl_3',
    business_name: 'Downtown Dental',
    status: 'disabled',
    timezone: 'Europe/London',
    twilio_number: '',
    created_at: '2023-10-05T09:15:00Z',
    admin_email: 'info@downtowndental.co.uk',
    plan: 'Enterprise'
  }
];

export const MOCK_CALLS = [
  {
    id: 'call_992',
    client_id: 'cl_1',
    caller_id: '+1 (202) 555-0101',
    start_time: subMinutes(new Date(), 15).toISOString(),
    duration: 145, // seconds
    status: 'completed',
    summary: 'Patient John Doe asking for appointment availability next Tuesday.',
    outcome: 'appointment_booked'
  },
  {
    id: 'call_993',
    client_id: 'cl_1',
    caller_id: '+1 (202) 555-0144',
    start_time: subMinutes(new Date(), 60).toISOString(),
    duration: 45,
    status: 'completed',
    summary: 'Caller hung up after greeting.',
    outcome: 'hung_up'
  },
  {
    id: 'call_994',
    client_id: 'cl_2',
    caller_id: '+1 (310) 555-0888',
    start_time: subMinutes(new Date(), 120).toISOString(),
    duration: 320,
    status: 'completed',
    summary: 'Rescheduling a spa treatment.',
    outcome: 'rescheduled'
  }
];

export const DEFAULT_WORKING_HOURS = {
  mon: { isOpen: true, start: "09:00", end: "17:00" },
  tue: { isOpen: true, start: "09:00", end: "17:00" },
  wed: { isOpen: true, start: "09:00", end: "17:00" },
  thu: { isOpen: true, start: "09:00", end: "17:00" },
  fri: { isOpen: true, start: "09:00", end: "17:00" },
  sat: { isOpen: false, start: "09:00", end: "17:00" },
  sun: { isOpen: false, start: "09:00", end: "17:00" },
};