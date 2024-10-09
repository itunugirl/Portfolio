import { firestore } from "firebase-functions/v2"; // Use v2 import
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure the email transport using nodemailer and environment variables
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider
  auth: {
    user: process.env.GMAIL_EMAIL, // Access environment variables directly
    pass: process.env.GMAIL_PASSWORD, // Access environment variables directly
  },
});

// Trigger on new Firestore document creation
export const sendEmailNotification = firestore.onDocumentCreated("messages/{docId}", async (event) => {
  const data = event.data?.data(); // Access document data from the event

  // Check if data exists and validate required fields
  if (!data || !data.name || !data.email || !data.message) {
    console.error("Missing required fields!");
    return;
  }

  // Prepare email data
  const mailOptions = {
    from: process.env.GMAIL_EMAIL, // Your email from environment variables
    to: process.env.GMAIL_EMAIL, // Change this to your admin email
    subject: "New Contact Form Submission",
    text: `You have received a new message from ${data.name} (${data.email}):\n\n${data.message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
});
