import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAlerts() {
  const alertRef = collection(db, "alerts");
  const snapshot = await getDocs(alertRef);
  return snapshot.docs.map(doc => doc.data());
}
