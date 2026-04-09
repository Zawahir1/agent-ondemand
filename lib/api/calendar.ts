
import { API_BASE_URL } from '@/lib/config';

export interface Resource {
    id: string;
    name: string;
    type: string; // 'AGENT', 'ROOM', 'SERVICE'
    availability?: string;
    timezone: string;
    bufferBefore: number;
    bufferAfter: number;
    _count?: {
        bookings: number;
    }
}

export interface Booking {
    id: string;
    resourceId: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    status: 'CONFIRMED' | 'CANCELLED' | 'BLOCKED';
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    resource?: Resource;
}

// Resources
export async function getResources(accessToken: string): Promise<Resource[]> {
    const response = await fetch(`${API_BASE_URL}/resources`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to fetch resources');
    return response.json();
}

export async function createResource(data: Partial<Resource>, accessToken: string): Promise<Resource> {
    const response = await fetch(`${API_BASE_URL}/resources`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create resource');
    return response.json();
}

export async function updateResource(id: string, data: Partial<Resource>, accessToken: string): Promise<Resource> {
    const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update resource');
    return response.json();
}

export async function deleteResource(id: string, accessToken: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/resources/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to delete resource');
}

// Bookings
export async function getBookings(accessToken: string, filters?: { resourceId?: string; start?: string; end?: string }): Promise<Booking[]> {
    const params = new URLSearchParams();
    if (filters?.resourceId) params.append('resourceId', filters.resourceId);
    if (filters?.start) params.append('start', filters.start);
    if (filters?.end) params.append('end', filters.end);

    const response = await fetch(`${API_BASE_URL}/bookings?${params.toString()}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to fetch bookings');
    return response.json();
}

export async function createBooking(data: Partial<Booking>, accessToken: string): Promise<Booking> {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create booking');
    }
    return response.json();
}

export async function deleteBooking(id: string, accessToken: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to delete booking');
}
