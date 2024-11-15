import { redirect } from '@sveltejs/kit';


export const load = async ({ locals }) => {
    if (!locals.user) {
        throw redirect(302, '/login');
    }

    return {
        user: locals.user // Asegúrate de que estás pasando el usuario aquí
    };
};