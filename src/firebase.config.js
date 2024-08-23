import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxp1CYBJKoe-QGud7OMsU_hUDt7jprKQE",
  authDomain: "prochat-f6cc1.firebaseapp.com",
  projectId: "prochat-f6cc1",
  storageBucket: "prochat-f6cc1.appspot.com",
  messagingSenderId: "795938729605",
  appId: "1:795938729605:web:41f2f387f41146e8b403ec",
  measurementId: "G-0XCR5H1EM5"
};

const app = initializeApp(firebaseConfig);
const mainFirebaseData = getDatabase(app)

export default mainFirebaseData
