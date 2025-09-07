import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadVoucher(file) {
  try {
    const fileRef = ref(storage, `vouchers/${Date.now()}_${file.name}`);
    await uploadBytes(fileRef, file);
    return true;
  } catch (error) {
    console.error("Upload error:", error);
    return false;
  }
}
