export default async function handler(req, res) {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).send("❌ No code received from Canva.");
  }

  console.log("✅ Authorization code received:", code);

  // (Optional) Exchange code for tokens directly from here
  try {
    const tokenRes = await fetch("https://www.canva.com/api/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.CANVA_REDIRECT_URI,
        client_id: process.env.CANVA_CLIENT_ID,
        client_secret: process.env.CANVA_CLIENT_SECRET,
      }),
    });

    const tokenData = await tokenRes.json();
    console.log("🎟️ Token response:", tokenData);

    res.status(200).json({
      message: "OAuth flow complete. Tokens received.",
      tokens: tokenData,
    });
  } catch (err) {
    console.error("Token exchange failed:", err);
    res.status(500).send("❌ Token exchange failed.");
  }
}
