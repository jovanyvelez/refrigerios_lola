import { fail, redirect } from '@sveltejs/kit';
import { estudiantes } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm';
import { createSession } from '$lib/server/database/auth.js';
import type { Cookies } from '@sveltejs/kit';
import { db } from '$lib/server/database/client';

export const load = async() => {};

export const actions = {
	login: async ({ request, cookies }: { request: Request; cookies: Cookies }) => {
		const data = Object.fromEntries(await request.formData());
		const pin = String(data.pin);
        const email = String(data.email);

		if (
			typeof data.email !== 'string' ||
			typeof data.pin !== 'string' ||
			!data.email ||
			!data.pin
		) {
			return fail(400, { invalid: true });
		}

		const user = await db.select().from(estudiantes).where(eq(estudiantes.correo, data.email));

		if (!user || user.length === 0 || !user[0].pin) {
			return fail(400, { credentials: true });
		}

		if (user.length > 1) {
			return fail(400, { duplicate: true });
		}


		if (pin != user[0].pin) {
			return fail(400, { credentials: true });
		}

		const sessionToken = crypto.randomUUID();


		await db
			.update(estudiantes)
			.set({ token: sessionToken })
			.where(eq(estudiantes.correo, data.email));

		cookies.set('session', sessionToken, {
			// enviara la cookie en cada request
			path: '/',
			// vencimiento en 30 días
			maxAge: 60 * 60 * 24 * 30
		});

		// redirect the user
		redirect(302, '/');
	}
};