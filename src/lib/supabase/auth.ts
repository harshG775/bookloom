import { createServerFn } from "@tanstack/react-start"
import { getSupabaseServerClient } from "./server"

export const getUserFn = createServerFn().handler(async () => {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase.auth.getUser()
    if (error) throw new Error(error.message)
    return data
})
