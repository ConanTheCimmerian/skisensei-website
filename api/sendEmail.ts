import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Ski Sensei Formularz <onboarding@resend.dev>";
const TO_EMAIL = "info.skiwithme@gmail.com";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    name,
    email,
    phone,
    serviceType,
    numberOfPeople,
    experienceLevel,
    message,
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const text = [
    `Nowe zapytanie ze strony Ski Sensei`,
    ``,
    `Imię: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || "-"}`,
    ``,
    `Usługa: ${serviceType || "-"}`,
    `Liczba osób: ${numberOfPeople || "-"}`,
    `Poziom: ${experienceLevel || "-"}`,
    ``,
    `Szczegóły / wiadomość:`,
    `${message || "-"}`,
  ].join("\n");

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      // 👇 poprawiona nazwa pola
      replyTo: email || undefined,
      subject: `Nowe zapytanie – ${name}`,
      text,
    });

    console.log("Resend response:", data);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
