// Deployment config — fill in with your own Firebase web app values (Stage 2:
// recording + shareable gallery). The core face→avatar demo needs none of this.
export const FIREBASE_CONFIG = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.firebasestorage.app',
  appId: 'YOUR_APP_ID',
};
export const APPCHECK_SITE_KEY = '';          // reCAPTCHA v3 site key ('' disables App Check)
export const CANON_HOST = '';                  // e.g. 'airmask.dorkalev.com' ('' disables the redirect)
export const ADMIN_EMAIL = 'you@example.com';  // must match isAdmin() in storage.rules
