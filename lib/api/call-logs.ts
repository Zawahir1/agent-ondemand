import { API_BASE_URL } from '@/lib/config';

export interface CallLog {
    id: string;
    callId: string;
    direction: 'INBOUND' | 'OUTBOUND';
    from: string | null;
    to: string | null;
    startedAt: string;
    endedAt: string | null;
    durationMs: number | null;
    transcript: any; // JSON array
    summary: any; // JSON object
    createdAt: string;
}

export interface CallLogsResponse {
    data: CallLog[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

export interface CallStats {
    totalCalls: number;
    totalAnswered: number;
    totalMeetingsBooked: number;
    totalDurationMs: number;
    totalDurationMinutes: number;
}

/**
 * Get current user's call logs (paginated)
 */
export async function getCallLogs(
    accessToken: string,
    page: number = 1,
    limit: number = 20
): Promise<CallLogsResponse> {
    const response = await fetch(`${API_BASE_URL}/call-logs?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch call logs');
    }

    return response.json();
}

/**
 * Get single call log details
 */
export async function getCallLog(
    id: string,
    accessToken: string
): Promise<CallLog> {
    const response = await fetch(`${API_BASE_URL}/call-logs/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch call log');
    }

    return response.json();
}

/**
 * Get call statistics
 */
export async function getCallStats(accessToken: string): Promise<CallStats> {
    const response = await fetch(`${API_BASE_URL}/call-logs/stats/summary`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch stats');
    }


    return response.json();
}

/**
 * Get AI insights
 */
export async function getInsights(accessToken: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/call-logs/stats/insights`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch insights');
    }

    return response.json();
}
