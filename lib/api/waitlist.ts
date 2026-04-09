import { API_BASE_URL } from '@/lib/config';

export interface WaitlistEntry {
    id: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    requestedDate?: string;
    status: 'PENDING' | 'NOTIFIED' | 'BOOKED' | 'EXPIRED';
    createdAt: string;
}

export async function getWaitlist(accessToken: string): Promise<WaitlistEntry[]> {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to fetch waitlist');
    return response.json();
}

export async function addToWaitlist(data: Partial<WaitlistEntry>, accessToken: string): Promise<WaitlistEntry> {
    const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to add to waitlist');
    return response.json();
}

export async function updateWaitlistStatus(id: string, status: string, accessToken: string): Promise<WaitlistEntry> {
    const response = await fetch(`${API_BASE_URL}/waitlist/${id}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update waitlist status');
    return response.json();
}

export async function deleteWaitlistEntry(id: string, accessToken: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/waitlist/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to delete waitlist entry');
}
