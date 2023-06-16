import ContactForm from "@/components/ContactForm";

function Contact() {
    return (
        <div>
            <h1 className="pb-8 pt-4 text-2xl font-bold leading-[1] tracking-tighter hover:animate-pulse sm:text-4xl md:text-5xl">
                Contact
            </h1>
            <ContactForm />
        </div>
    )
}

export default Contact