import { type Cookies } from '@sveltejs/kit';

const SESSION_COOKIE_NAME = 'session';

export function createSession(cookies: Cookies, userData: { id: number; nombre: string }) {
    // Crear un objeto de sesión
    const session = {
        id: userData.id,
        nombre: userData.nombre,
        // Puedes agregar más datos según necesites
    };

    // Convertir a string y codificar en base64
    const sessionData = Buffer.from(JSON.stringify(session)).toString('base64');

    // Establecer la cookie de sesión
    cookies.set(SESSION_COOKIE_NAME, sessionData, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 horas
    });

    return session;
}

export function getSession(cookies: Cookies) {
    const sessionData = cookies.get(SESSION_COOKIE_NAME);
    if (!sessionData) return null;

    try {
        const session = JSON.parse(Buffer.from(sessionData, 'base64').toString());
        return session;
    } catch {
        return null;
    }
}

export function destroySession(cookies: Cookies) {
    cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
}