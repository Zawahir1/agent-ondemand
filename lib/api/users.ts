import { API_BASE_URL } from '@/lib/config';

export interface User {
    id: string;
    email: string;
    name?: string;
    businessName?: string;
    paymentLink?: string;
    role: string;
    planTier: string;
    minutesAllotted: number;
    minutesUsed: number;
    twilioNumber?: string;
    twilioAccountSid?: string;
    twilioSipTrunkSid?: string;
    contactPhone?: string;
    timezone: string;
    totalCallsMade: number;
    totalCallsAnswered: number;
    totalMeetingsBooked: number;
}

export interface AgentConfig {
    prompt?: string;
    voice?: string;
    model?: string;
    firstMessage?: string;
}

export interface UserConfig {
    agentConfig?: AgentConfig;
    calendarConfig?: any;
    businessHours?: any;
}

export interface UpdateProfileDto {
    name?: string;
    businessName?: string;
    paymentLink?: string;
    timezone?: string;
    contactPhone?: string;
}

export interface UpdateConfigDto {
    agentConfig?: AgentConfig;
    businessHours?: any;
}

/**
 * Get current user's full profile
 */
export async function getCurrentUser(accessToken: string): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }

    return response.json();
}

/**
 * Update current user's profile
 */
export async function updateProfile(
    data: UpdateProfileDto,
    accessToken: string
): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to update profile');
    }

    return response.json();
}

/**
 * Get current user's configuration
 */
export async function getUserConfig(accessToken: string): Promise<UserConfig> {
    const response = await fetch(`${API_BASE_URL}/users/me/config`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch config');
    }

    return response.json();
}

/**
 * Update current user's configuration
 */
export async function updateUserConfig(
    config: UpdateConfigDto,
    accessToken: string
): Promise<UserConfig> {
    const response = await fetch(`${API_BASE_URL}/users/me/config`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(config),
    });

    if (!response.ok) {
        throw new Error('Failed to update config');
    }

    return response.json();
}


/**
 * Get all team members
 */
export async function getTeam(accessToken: string): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users/team`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch team');
    }

    return response.json();
}

/**
 * Invite a new team member
 */
export async function inviteTeamMember(
    data: { name: string; email: string; role: string },
    accessToken: string
): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/team`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to invite user');
    }

    return response.json();
}

/**
 * Remove a team member
 */
export async function removeTeamMember(
    memberId: string,
    accessToken: string
): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/users/team/${memberId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to remove user');
    }
}
