import { getFunctions, httpsCallable } from "firebase/functions";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export async function triggerBackup() {
  try {
    const backup = httpsCallable(functions, "runSystemBackup");
    const result = await backup();
    return result.data.success;
  } catch (error) {
    console.error("Backup error:", error);
    return false;
  }
}
