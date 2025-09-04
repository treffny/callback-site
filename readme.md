# Canva OAuth App (Next.js + Vercel)

This is a minimal Canva OAuth handler you can deploy on Vercel.

## 🚀 Setup

1. Fork this repo & push to your GitHub.
2. Connect it to Vercel → Deploy.
3. Add environment variables in Vercel dashboard:
   - `CANVA_CLIENT_ID`
   - `CANVA_CLIENT_SECRET`
   - `CANVA_REDIRECT_URI` = `https://<your-vercel-app>.vercel.app/api/callback`
4. In Canva Developer dashboard, set your redirect URI to the same URL.
5. Start the OAuth flow and Canva will redirect back with `?code=...`.

✅ Once redirected, the server will log the code and exchange it for tokens automatically.
