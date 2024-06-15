"use server"
import GoogleProvider from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";
import { connectdb } from "./mongodb";
import { User } from "@/models/user";

export let authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("User Object:", user);
      try {
        await connectdb(); 

     
        const { name, email } = user;

    
      

        if (true) {

          await User.create({
            name,
            email,
        
          });
        }

      
        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false; 
      }
    }
  }
};
