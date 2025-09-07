import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function loginUser(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const roleDoc = await getDoc(doc(db, "roles", userCred.user.uid));
    const role = roleDoc.exists() ? roleDoc.data().role : "User";
    return { success: true, role };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function getUsers() {
  const snapshot = await getDocs(collection(db, "roles"));
  return snapshot.docs.map(doc => ({
    uid: doc.id,
    ...doc.data(),
  }));
}

export async function assignRole(uid, role) {
  await setDoc(doc(db, "roles", uid), { role });
}

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      if (currentUser) {
        const roleDoc = await getDoc(doc(db, "roles", currentUser.uid));
        const role = roleDoc.exists() ? roleDoc.data().role : "User";
        setUser({ ...currentUser, role });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
