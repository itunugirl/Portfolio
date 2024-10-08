import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Configure the email transport using nodemailer and environment variables
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider
  auth: {
    user: functions.config().gmail.email, // Your email from Firebase config
    pass:
    functions.config().gmail.password, // Your email password or app password
  },
});

// Trigger on new Firestore document creation
export const sendEmailNotification = functions.firestore
  .document("messages/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    // Check if data exists and validate required fields
    if (!data || !data.name || !data.email || !data.message) {
      console.error("Missing required fields!");
      return;
    }

    // Prepare email data
    const mailOptions = {
      from: functions.config().gmail.email, // Your email from Firebase config
      to: functions.config().gmail.email, // Change this to your admin email
      subject: "New Contact Form Submission",
      text: `You have received a new message from ${data.name}
       (${data.email}):\n\n${data.message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }); // Ensure a newline at the end of this file
