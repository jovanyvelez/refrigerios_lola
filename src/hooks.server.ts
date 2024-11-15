import { db } from '$lib/server/database/client'
import { estudiantes } from '$lib/server/database/schema'
import { eq } from 'drizzle-orm'
import { page } from '$app/stores'


export const handle = async ({ event, resolve }) => {

    const session = event.cookies.get('session')
    event.locals.user = session;



    if (!session) {
        // if there is no session load page as normal
        console.log('no se encuentra sesión');
        return await resolve(event)
    }

    const user = await db.select().from(estudiantes).where(eq(estudiantes.token, session));

    if (!user || user.length === 0) {
        // if the session is invalid, remove the cookie and load page as normal
        event.cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
          }
        )
        return await resolve(event)
    }


    event.locals.user = user[0]

    return await resolve(event)
}
