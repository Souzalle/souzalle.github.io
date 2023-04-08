import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorizationUrl:"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&acess_type=offline&response_type=code",
      })
  ],

  session: {
    jwt: true,
},
jwt: {
    secret: process.env.JWT_SECRET,
},
}
export default NextAuth(authOptions)