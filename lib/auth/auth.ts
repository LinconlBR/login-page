import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import clientPromise from "./mongoClient"; // ajuste o caminho conforme onde você salvar o arquivo

const client = await clientPromise;
const db = client.db();

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [
        "https://login-page-nu-weld-36.vercel.app",
    ],
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
});

export async function getSession () {
    const result = await auth.api.getSession({
        headers: await headers(),
    })
    return result ;

}

export async function signOut () {
    const result = await auth.api.signOut({
        headers: await headers(),
    })
    if(result.success){
        redirect("/sign-in")
    }else{
         alert("error no sign out !")
    } 

}