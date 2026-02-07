import { useState } from "react"
import { LoginForm } from "./login-form"
import { SignUpForm } from "./signup-form"

export default function LoginOrSignUp() {
    const [isLoginForm, setIsLoginForm] = useState(true)
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                {isLoginForm ? (
                    <LoginForm switchToSignUp={() => setIsLoginForm(false)} />
                ) : (
                    <SignUpForm switchToLogIn={() => setIsLoginForm(true)} />
                )}
            </div>
        </div>
    )
}
