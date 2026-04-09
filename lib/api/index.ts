import axios from 'axios';
import { getSession } from 'next-auth/react';

const api = axios.create({
    baseURL: '/api', // Use relative path to go through Next.js proxy
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(async (config) => {
    // Only fetch session if specific header not already present
    if (!config.headers.Authorization) {
        try {
            const session = await getSession();
            if (session?.user?.accessToken) {
                config.headers.Authorization = `Bearer ${session.user.accessToken}`;
            }
        } catch (error) {
            // ignore error
        }
    }
    return config;
});

export default api;
