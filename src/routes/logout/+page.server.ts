import { redirect } from '@sveltejs/kit';
import type { Cookies } from '@sveltejs/kit';

console.log('pasa por el archivo');

export const load = async () => {
	// we only use this endpoint for the api
	// and don't need to see the page
	redirect(302, '/');
};

export const actions = {
    salir: async ({ cookies }: { cookies: Cookies }) => {
        try {
            cookies.set('session', '', {
                path: '/',
                expires: new Date(0)
            });
            throw redirect(302, '/login');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            // Puedes manejar el error de otra manera si es necesario
        }
    }
};