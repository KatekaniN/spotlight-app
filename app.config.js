import { config } from 'dotenv';
config();

export default {
    expo: {
        "name": "spotlight-app",
        "slug": "spotlight-app",
        extra: {
            clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
        },
    },
}