import { API_BASE_URL } from '@/lib/config';

export interface CallLog {
    id: string;
    startedAt: string;
    durationMs?: number;
    transcript: string; // JSON string
    summary?: string; // JSON string
}

export interface Contact {
    id: string;
    name: string;
    phone: string;
    email?: string;
}

export interface CampaignItem {
    id: string;
    status: string; // PENDING, QUEUED, IN_PROGRESS, COMPLETED, FAILED, SKIPPED
    contact: Contact;
    callLog?: CallLog;
    createdAt: string;
    updatedAt: string;
}

export interface Campaign {
    id: string;
    title: string;
    status: string;
    scheduledStart: string;
    windowStart: string;
    windowEnd: string;
    // AI Config
    systemPrompt?: string;
    firstMessage?: string;

    items?: CampaignItem[];
    _count?: { items: number };
}

export async function createCampaign(accessToken: string, data: {
    title: string;
    scheduledStart: string;
    windowStart: string;
    windowEnd: string;
    timezone?: string;
    contactIds: string[];
    systemPrompt?: string;
    firstMessage?: string;
}) {
    const res = await fetch(`${API_BASE_URL}/campaigns`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to create campaign');
    return res.json();
}

export async function getCampaigns(accessToken: string): Promise<Campaign[]> {
    const res = await fetch(`${API_BASE_URL}/campaigns`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!res.ok) throw new Error('Failed to fetch campaigns');
    return res.json();
}

export async function getCampaignDetails(accessToken: string, id: string): Promise<Campaign> {
    const res = await fetch(`${API_BASE_URL}/campaigns/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!res.ok) throw new Error('Failed to fetch campaign details');
    return res.json();
}
