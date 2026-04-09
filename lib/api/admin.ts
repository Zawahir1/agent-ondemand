// API client for admin endpoints

import { API_BASE_URL } from '@/lib/config';

export interface CreateTenantRequest {
    email: string;
    password: string;
    name: string;
    role?: 'ADMIN' | 'TENANT';
    businessName?: string;
    timezone?: string;
    twilioNumber?: string;
    contactPhone?: string;
    planTier?: string;
    minutesAllotted?: number;
    agentConfig?: {
        prompt?: string;
        voice?: string;
        model?: string;
    };
    businessHours?: {
        [key: string]: { start: string; end: string };
    };
}

export interface UpdateUserRequest {
    name?: string;
    role?: 'ADMIN' | 'TENANT';
    businessName?: string;
    timezone?: string;
    twilioNumber?: string;
    contactPhone?: string;
    planTier?: string;
    minutesAllotted?: number;
    agentConfig?: {
        prompt?: string;
        voice?: string;
        model?: string;
    };
    businessHours?: {
        [key: string]: { start: string; end: string };
    };
}

export async function createTenant(data: CreateTenantRequest, accessToken: string) {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create tenant');
    }

    return response.json();
}

export async function updateUser(userId: string, data: UpdateUserRequest, accessToken: string) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update user');
    }

    return response.json();
}

export async function getAllUsers(accessToken: string) {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return response.json();
}

export async function getUserById(userId: string, accessToken: string) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    return response.json();
}

export async function deleteUser(userId: string, accessToken: string) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

    return response.json();
}
