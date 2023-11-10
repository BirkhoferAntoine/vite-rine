/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

require("firebase-functions/logger/compat");
const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const {Resend} = require("resend");

exports.sendEmail = onRequest(
    {secrets: ["RESEND_APIKEY"], cors: true},
    async (req, res) => {
      if (req.method === "OPTIONS") {
        res.set("Access-Control-Allow-Methods", "POST");
        res.set("Access-Control-Allow-Headers", "Content-Type");
        return res.sendStatus(204);
      }

      if (req.method !== "POST") {
        return res.sendStatus(405).send("Method Not Allowed");
      }
      console.warn("REQ QUERY", req.body);

      const {subject, email, message} = req.body;

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
          return res.status(200).json({data});
        } catch (error) {
          console.error("sendEmail", error, req.body);
          return res.status(500).json({error});
        }
      } else {
        return res.sendStatus(400);
      }
    });
