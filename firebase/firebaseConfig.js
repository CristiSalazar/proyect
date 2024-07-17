import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD82fEdQZi-9cObG-MJZLlv9lFKzn8_fIc",
  authDomain: "harry-potter-7e6ab.firebaseapp.com",
  databaseURL: "https://harry-potter-7e6ab-default-rtdb.firebaseio.com",
  projectId: "harry-potter-7e6ab",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };