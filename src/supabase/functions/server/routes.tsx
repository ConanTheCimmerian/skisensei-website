import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

export const routes = new Hono();

// Hero Slides
routes.get("/hero-slides", async (c) => {
  try {
    const slides = await kv.get("hero_slides");
    return c.json(slides || []);
  } catch (error) {
    console.log(`Error fetching hero slides: ${error}`);
    return c.json({ error: "Failed to fetch hero slides" }, 500);
  }
});

routes.post("/hero-slides", async (c) => {
  try {
    const slides = await c.req.json();
    await kv.set("hero_slides", slides);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving hero slides: ${error}`);
    return c.json({ error: "Failed to save hero slides" }, 500);
  }
});

// Karate Images
routes.get("/karate-images", async (c) => {
  try {
    const images = await kv.get("karate_images");
    return c.json(images || []);
  } catch (error) {
    console.log(`Error fetching karate images: ${error}`);
    return c.json({ error: "Failed to fetch karate images" }, 500);
  }
});

routes.post("/karate-images", async (c) => {
  try {
    const images = await c.req.json();
    await kv.set("karate_images", images);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving karate images: ${error}`);
    return c.json({ error: "Failed to save karate images" }, 500);
  }
});

// Portfolio Items
routes.get("/portfolio", async (c) => {
  try {
    const portfolio = await kv.get("portfolio");
    return c.json(portfolio || []);
  } catch (error) {
    console.log(`Error fetching portfolio: ${error}`);
    return c.json({ error: "Failed to fetch portfolio" }, 500);
  }
});

routes.post("/portfolio", async (c) => {
  try {
    const portfolio = await c.req.json();
    await kv.set("portfolio", portfolio);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving portfolio: ${error}`);
    return c.json({ error: "Failed to save portfolio" }, 500);
  }
});

// Pricing
routes.get("/pricing", async (c) => {
  try {
    const pricing = await kv.get("pricing");
    return c.json(pricing || []);
  } catch (error) {
    console.log(`Error fetching pricing: ${error}`);
    return c.json({ error: "Failed to fetch pricing" }, 500);
  }
});

routes.post("/pricing", async (c) => {
  try {
    const pricing = await c.req.json();
    await kv.set("pricing", pricing);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving pricing: ${error}`);
    return c.json({ error: "Failed to save pricing" }, 500);
  }
});

// Site Texts
routes.get("/texts", async (c) => {
  try {
    const texts = await kv.get("site_texts");
    return c.json(texts || {});
  } catch (error) {
    console.log(`Error fetching texts: ${error}`);
    return c.json({ error: "Failed to fetch texts" }, 500);
  }
});

routes.post("/texts", async (c) => {
  try {
    const texts = await c.req.json();
    await kv.set("site_texts", texts);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving texts: ${error}`);
    return c.json({ error: "Failed to save texts" }, 500);
  }
});

// Contact Messages
routes.get("/messages", async (c) => {
  try {
    const messages = await kv.get("contact_messages") || [];
    return c.json(messages);
  } catch (error) {
    console.log(`Error fetching messages: ${error}`);
    return c.json({ error: "Failed to fetch messages" }, 500);
  }
});

routes.post("/messages", async (c) => {
  try {
    const message = await c.req.json();
    const messages = await kv.get("contact_messages") || [];
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    messages.push(newMessage);
    await kv.set("contact_messages", messages);
    
    // Send email notification using Resend
    try {
      const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
      
      if (RESEND_API_KEY) {
        const emailBody = {
          from: "SkiSensei <onboarding@resend.dev>", // Change to your verified domain later
          to: ["info.skiwithme@gmail.com"],
          subject: `Nowa wiadomość z formularza: ${message.name}`,
          html: `
            <h2>Nowa wiadomość z formularza kontaktowego SkiSensei</h2>
            <p><strong>Imię:</strong> ${message.name}</p>
            <p><strong>Email:</strong> ${message.email}</p>
            <p><strong>Telefon:</strong> ${message.phone || 'Nie podano'}</p>
            <p><strong>Typ usługi:</strong> ${message.serviceType}</p>
            <p><strong>Liczba osób:</strong> ${message.numberOfPeople}</p>
            <p><strong>Poziom:</strong> ${message.experienceLevel}</p>
            <p><strong>Wiadomość:</strong></p>
            <p>${message.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">Data: ${new Date().toLocaleString('pl-PL')}</p>
          `,
        };

        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify(emailBody),
        });

        if (!emailResponse.ok) {
          const error = await emailResponse.text();
          console.log(`Email sending failed: ${error}`);
        } else {
          console.log("Email sent successfully");
        }
      } else {
        console.log("RESEND_API_KEY not set - skipping email");
      }
    } catch (emailError) {
      console.log(`Error sending email: ${emailError}`);
      // Don't fail the request if email fails
    }
    
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving message: ${error}`);
    return c.json({ error: "Failed to save message" }, 500);
  }
});

routes.delete("/messages/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const messages = await kv.get("contact_messages") || [];
    const filtered = messages.filter((m: any) => m.id !== id);
    await kv.set("contact_messages", filtered);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error deleting message: ${error}`);
    return c.json({ error: "Failed to delete message" }, 500);
  }
});

// Video Backgrounds
routes.get("/videos", async (c) => {
  try {
    const videos = await kv.get("background_videos");
    return c.json(videos || {});
  } catch (error) {
    console.log(`Error fetching videos: ${error}`);
    return c.json({ error: "Failed to fetch videos" }, 500);
  }
});

routes.post("/videos", async (c) => {
  try {
    const videos = await c.req.json();
    await kv.set("background_videos", videos);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving videos: ${error}`);
    return c.json({ error: "Failed to save videos" }, 500);
  }
});

// Hero Video (new endpoint)
routes.get("/hero-video", async (c) => {
  try {
    const heroVideo = await kv.get("hero_video");
    return c.json(heroVideo || {});
  } catch (error) {
    console.log(`Error fetching hero video: ${error}`);
    return c.json({ error: "Failed to fetch hero video" }, 500);
  }
});

routes.post("/hero-video", async (c) => {
  try {
    const heroVideo = await c.req.json();
    await kv.set("hero_video", heroVideo);
    return c.json({ success: true });
  } catch (error) {
    console.log(`Error saving hero video: ${error}`);
    return c.json({ error: "Failed to save hero video" }, 500);
  }
});