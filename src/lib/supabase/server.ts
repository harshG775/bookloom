import { env } from "@/env"
import { createServerClient } from "@supabase/ssr"
import { getCookies, setCookie } from "@tanstack/react-start/server"

export function getSupabaseServerClient() {
    return createServerClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY, {
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
