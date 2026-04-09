
import { API_BASE_URL } from '@/lib/config';

export interface Document {
    id: string;
    filename: string;
    type: string;
    createdAt: string;
}

export async function getDocuments(accessToken: string): Promise<Document[]> {
    const response = await fetch(`${API_BASE_URL}/documents`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch documents');
    }

    return response.json();
}

export async function uploadDocument(file: File, accessToken: string): Promise<Document> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/documents/upload`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            // key: 'Content-Type' must NOT be set manually for FormData; browser sets it with boundary
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload document');
    }

    return response.json();
}

export async function deleteDocument(id: string, accessToken: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to delete document');
    }
}
