interface sendEmailProps {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export default async function sendEmail(data: sendEmailProps) {
    const res = await fetch('/api/email', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    });
    console.log(res)

    if (!res.ok) {
        throw new Error(`Invalid response: ${res.status}`);
    }

    return res.status
}