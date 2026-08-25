import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI não está definida");
}
const client = new MongoClient(uri);

const db = client.db();

export const auth = betterAuth({
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

