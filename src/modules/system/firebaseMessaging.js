import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function sendNotification(message) {
  try {
    // This would typically call a Firebase Function to broadcast
    console.log("Sending message:", message);
    return true;
  } catch (error) {
    console.error("Notification error:", error);
    return false;
  }
}
