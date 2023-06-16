"use client"

import {FormEvent, useState} from "react";
import {clsx} from "clsx";
import {motion} from "framer-motion";
import sendEmail from "@/lib/sendEmail";


interface ContactFormProps {
    className?: string,
    props?: any
}

function ContactForm({className, ...props}: ContactFormProps) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [emailStatus, setEmailStatus] = useState("idle")

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();
        setEmailStatus("loading")
        // const data = new FormData(e.currentTarget)
        const data = {
            name,
            email,
            subject,
            message
        }
        try {
            const res = await sendEmail(data);
            if (res != 200) {
                throw new Error();
            }
            setEmailStatus("success")
            setName("")
            setSubject("")
            setEmail("")
            setMessage("")
        } catch (err) {
            console.error(err);
            setEmailStatus("error")

        }
    }

    return (
        <motion.div className={className}>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className="rounded-lg flex flex-col px-8 py-8 shadow-xl dark:bg-slate-500">
                <h1 className="text-xl font-bold dark:text-gray-50">Shoot me a message</h1>

                <label htmlFor="name" className="text-gray-500 font-light mt-8 dark:text-gray-50">Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName((e.target.value))}
                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-500 font-light text-gray-500"/>

                <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail((e.target.value))}
                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-500 font-light text-gray-500"/>

                <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject</label>
                <input type="text" name="subject" value={subject} onChange={(e) => setSubject((e.target.value))}
                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-500 font-light text-gray-500"/>

                <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message</label>
                <textarea name="message" value={message} onChange={(e) => setMessage((e.target.value))}
                          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-slate-500 font-light text-gray-500"></textarea>
                <div className="flex flex-row items-center justify-start">
                    <button
                        type="submit"
                        className="px-10 mt-8 py-2 bg-slate-900 text-gray-50 font-light rounded-md text-lg flex flex-row items-center hover:bg-slate-600 hover:transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300">
                        Send
                    </button>
                </div>
                {emailStatus === 'loading' && (
                    <motion.div
                        className="bg-blue-200 flex flex-row items-center justify-center py-2 px-8 mt-4 rounded-2xl"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        Sending email...
                    </motion.div>
                )}

                {emailStatus === 'success' && (
                    <motion.div
                        className="bg-green-200 flex flex-row items-center justify-center py-2 px-8 mt-4 rounded-2xl"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        Email sent!
                    </motion.div>
                )}

                {emailStatus === 'error' && (
                    <motion.div
                        className="bg-red-200 flex flex-row items-center justify-center py-2 px-8 mt-4"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                    >
                        There was an error sending this email.
                    </motion.div>
                )}
            </form>
        </motion.div>
    )
}

export default ContactForm