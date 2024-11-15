import type { UserSession } from '$lib/server/auth';

declare global {
    namespace App {
        interface Locals {
            user: UserSession | null;
        }
        interface PageData {
            user?: UserSession | null;
        }
    }
}

export {};