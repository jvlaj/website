'use server'

import { Resend } from 'resend';
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const {name, email, subject, message} = await req.json()

    const resend = new Resend(process.env.EMAIL_APIKEY)

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'jvlaj@protonmail.com',
            subject: `${subject}`,
            html: `
                <h1>Message from jvlaj.com contact form</h1>
                <h2>From ${name} at ${email}</h2>
                <p><b>${subject}</b></p>
                <p>${message}</p>
                 `
        });
        return NextResponse.json(data, {status: 200})
    }
    catch (error) {
        console.error(error);
        return NextResponse.json(error, {status: 500})
    }
}