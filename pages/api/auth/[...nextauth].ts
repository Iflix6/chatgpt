import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const secret = process.env.NEXTAUTH_SECRET;



export const authOptions: AuthOptions = {
 providers: [
  GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
  }),

  GithubProvider({    
  clientId: process.env.GITHUB_ID!,      
  clientSecret: process.env.GITHUB_SECRET!,    
}),
 ],
 secret,
};

export default NextAuth(authOptions);