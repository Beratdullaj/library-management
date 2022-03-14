import admin from 'firebase-admin';
import serviceAccount from "../../credentials/menaxhimilibrarise-firebase-adminsdk-hsdtq-2ff32cd0c3.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;