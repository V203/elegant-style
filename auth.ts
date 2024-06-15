
import NextAuth from 'next-auth';

import GoogleProviders from "next-auth/providers/google";
import type { Account, NextAuthConfig, User as IUsuer, Profile } from "next-auth"
import { connectdb } from './lib/mongodb';
import { User } from './models/user';
import { AdapterUser } from 'next-auth/adapters';



// export const { handlers: {GET,POST}, signIn, signOut, auth } = NextAuth({
//     providers: [

//         GoogleProviders({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret: process.env.GOOGLE_CLIENT_SECRET}),
// ],
// })


const config = {
    providers: [GoogleProviders({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })],
    callbacks: {
        async signIn({ user, account, profile }: {
            user: any | AdapterUser;
            account: Account | null;
            profile?: Profile;
            email?: { verificationRequest?: boolean };
            credentials?: Record<string, unknown>;
        }) {

            try {

                await connectdb();
                let { name, email } = user;

                // let userExist = await User.findOne({email });
                // console.log(userExist);
                
                // if (!userExist) {
                    if (account?.provider === "google") {
                        let res = await fetch("http://localhost:3000/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name,  email })
                        })

                        if (res.ok) {
                            return user
                        }
                    }

                // }
            } catch (error) {
                console.log("error in the callback signin function...");

            }

            return user

        }
    }

} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config)