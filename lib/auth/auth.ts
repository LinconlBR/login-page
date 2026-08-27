import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import getMongoClient from "./mongoClient";

const client = getMongoClient();
const db = client.db();

// Monta a lista de origens confiáveis dinamicamente:
// - a URL de produção fixa
// - a URL do deploy atual (Vercel expõe isso automaticamente em VERCEL_URL)
// - um curinga para qualquer preview deploy do seu projeto (opcional)
const trustedOrigins = [
    "https://login-page-nu-weld-36.vercel.app",
];

if (process.env.VERCEL_URL) {
    trustedOrigins.push(`https://${process.env.VERCEL_URL}`);
}

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins,
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