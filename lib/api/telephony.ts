import { API_BASE_URL } from '@/lib/config';

export interface TwilioNumber {
    sid: string;
    phoneNumber: string;
    friendlyName: string;
    trunkSid: string | null;
}

export async function validateTwilioCredentials(accountSid: string, authToken: string, accessToken: string): Promise<TwilioNumber[]> {
    const res = await fetch(`${API_BASE_URL}/telephony/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ accountSid, authToken })
    });
    if (!res.ok) throw new Error('Invalid Credentials');
    return res.json();
}

export async function provisionTrunk(accountSid: string, authToken: string, phoneNumberSid: string, accessToken: string) {
    const res = await fetch(`${API_BASE_URL}/telephony/provision`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ accountSid, authToken, phoneNumberSid })
    });
    if (!res.ok) throw new Error('Provisioning failed');
    return res.json();
}

export async function disconnectTelephony(accessToken: string) {
    const res = await fetch(`${API_BASE_URL}/telephony/disconnect`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    if (!res.ok) throw new Error('Disconnect failed');
    return res.json();
}
