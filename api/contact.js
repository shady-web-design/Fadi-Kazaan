export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Fadi Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      reply_to: email,
      subject: "New contact form message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
  });

  if (!response.ok) {
    return res.status(500).json({ error: "Email failed" });
  }

  return res.status(200).json({ success: true });
}



/*    re_aRVEMUPJ_4MmoJWWoeFUvfBmXwSrazM3z   */