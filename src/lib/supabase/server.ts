import { createServerClient } from "@supabase/ssr"
import { getCookies, setCookie } from "@tanstack/react-start/server"
import { env } from "@/env"

export function getSupabaseServerClient() {
    return createServerClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_API_KEY, {
        cookies: {
            getAll() {
                return Object.entries(getCookies()).map(
                    ([name, value]) =>
                        ({
                            name,
                            value,
                        }) as { name: string; value: string },
                )
            },
            setAll(cookies) {
                cookies.forEach((cookie) => {
                    setCookie(cookie.name, cookie.value)
                })
            },
        },
    })
}
