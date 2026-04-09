
import { API_BASE_URL } from '@/lib/config';

export interface Contact {
    id: string;
    name: string;
    phone: string;
    email?: string;
    notes?: string;
    tags?: string[];
    preferences?: Record<string, any>;
    updatedAt: string;
    _count?: {
        bookings: number;
        calls?: number;
    };
}

export interface PaginatedContacts {
    data: Contact[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

export async function getContacts(accessToken: string, page: number = 1, limit: number = 20, search: string = ''): Promise<PaginatedContacts> {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        search
    });
    const response = await fetch(`${API_BASE_URL}/contacts?${params}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to fetch contacts');
    return response.json();
}

export async function createContact(data: Partial<Contact>, accessToken: string): Promise<Contact> {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create contact');
    return response.json();
}

export async function importContacts(contacts: any[], accessToken: string): Promise<{ count: number }> {
    const response = await fetch(`${API_BASE_URL}/contacts/import`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ contacts }),
    });
    if (!response.ok) throw new Error('Failed to import contacts');
    return response.json();
}

export async function updateContact(id: string, data: Partial<Contact>, accessToken: string): Promise<Contact> {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update contact');
    return response.json();
}

export async function deleteContact(id: string, accessToken: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!response.ok) throw new Error('Failed to delete contact');
}
