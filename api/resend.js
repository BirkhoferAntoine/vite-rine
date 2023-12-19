import {Resend} from 'resend';
export default async function handler(request, response) {
    if (request.method === "OPTIONS") {
        response.set("Access-Control-Allow-Methods", "POST");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        return response.status(204);
    }

    if (request.method !== "POST") {
        return response.status(405).send("Method Not Allowed");
    }
    console.warn("REQ QUERY", request.body);

    const {subject, email, message} = request.body;

    if (subject && email && message) {
        const apikey = process.env.RESEND_APIKEY;
        const resend = new Resend(apikey);

        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["birkhoferantoine@gmail.com"],
                subject: subject+" - "+email,
                html: message,
            });
            console.log("sendEmail", "success", {data});
            return response.status(200).json({data});
        } catch (error) {
            console.error("sendEmail", error, request.body);
            return response.status(500).json({error});
        }
    } else {
        return response.status(400);
    }
}


