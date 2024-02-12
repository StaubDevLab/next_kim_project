import withAuth from "next-auth/middleware"
import { authOptions } from "@/lib/auth-options";

export default withAuth({
    jwt: { decode: authOptions.jwt?.decode },
    callbacks: {
        authorized: ({ token }) => !!token,
    },
})

export const config = { matcher: ["/admin"] }