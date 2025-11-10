import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    service,
    peopleCount,
    level,
    details,
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const text = [
    `Nowe zapytanie ze strony Ski Sensei`,
    ``,
    `Imię: ${name}`,
    `Email: ${email}`,
    `Telefon: ${phone || '-'}`,
    `Usługa: ${service || '-'}`,
    `Liczba osób: ${peopleCount || '-'}`,
    `Poziom: ${level || '-'}`,
    ``,
    `Szczegóły / cele:`,
    `${details || '-'}`,
  ].join('\n');

  try {
    await resend.emails.send({
      from: 'Ski Sensei Formularz <onboarding@resend.dev>',
      to: 'info.skiwithme@gmail.com', // <- zmień na adres, na który chcesz dostać wiadomość
      subject: `Nowe zapytanie od ${name}`,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
