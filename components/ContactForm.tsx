"use client";

import {FormEvent, useState} from "react";
import {motion} from "framer-motion";
import sendEmail from "@/lib/sendEmail";

interface ContactFormProps {
    className?: string;
    props?: any;
}

function ContactForm({className, ...props}: ContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [emailStatus, setEmailStatus] = useState("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmailStatus("loading");
        // const data = new FormData(e.currentTarget)
        const data = {
            name,
            email,
            subject,
            message,
        };
        try {
            const res = await sendEmail(data);
            if (res != 200) {
                throw new Error();
            }
            setEmailStatus("success");
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
        } catch (err) {
            console.error(err);
            setEmailStatus("error");
        }
    }

    return (
        <motion.div className={className}>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="flex flex-col "
            >

                <label htmlFor="name" className="mt-8 font-light text-gray-500">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-slate-500 focus:rounded-md focus:outline-none focus:ring-1"
                />

                <label htmlFor="email" className="mt-4 font-light text-gray-500 ">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-slate-500 focus:rounded-md focus:outline-none focus:ring-1"
                />

                <label htmlFor="subject" className="mt-4 font-light text-gray-500 ">
                    Subject
                </label>
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-slate-500 focus:rounded-md focus:outline-none focus:ring-1"
                />

                <label htmlFor="message" className="mt-4 font-light text-gray-500 ">
                    Message
                </label>
                <textarea
                    name="message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-b bg-transparent py-2 pl-4 font-light text-gray-500 ring-slate-500 focus:rounded-md focus:outline-none focus:ring-1"
                ></textarea>
                <div className="flex flex-row items-center justify-start">
                    <button
                        type="submit"
                        className="mt-8 flex flex-row items-center rounded-md bg-slate-900 px-10 py-2 text-lg font-light text-gray-50 delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 hover:bg-slate-600 hover:transition"
                    >
                        Send
                    </button>
                </div>
                {emailStatus === "loading" && (
                    <motion.div
                        className="mt-4 flex flex-row items-center justify-center rounded-2xl bg-blue-200 px-8 py-2"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        Sending email...
                    </motion.div>
                )}

                {emailStatus === "success" && (
                    <motion.div
                        className="mt-4 flex flex-row items-center justify-center rounded-2xl bg-green-200 px-8 py-2"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        Email sent!
                    </motion.div>
                )}

                {emailStatus === "error" && (
                    <motion.div
                        className="mt-4 flex flex-row items-center justify-center bg-red-200 px-8 py-2"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        There was an error sending this email.
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}

export default ContactForm;
