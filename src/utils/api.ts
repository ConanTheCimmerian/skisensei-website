import { projectId, publicAnonKey } from './supabase/info';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-29c50369`;

async function apiCall(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    console.error(`API call failed for ${endpoint}: ${error}`);
    throw new Error(`API call failed: ${error}`);
  }

  return response.json();
}

export const api = {
  // Hero Slides
  getHeroSlides: () => apiCall('/hero-slides'),
  saveHeroSlides: (slides: any[]) => apiCall('/hero-slides', {
    method: 'POST',
    body: JSON.stringify(slides),
  }),

  // Karate Images
  getKarateImages: () => apiCall('/karate-images'),
  saveKarateImages: (images: any[]) => apiCall('/karate-images', {
    method: 'POST',
    body: JSON.stringify(images),
  }),

  // Portfolio
  getPortfolio: () => apiCall('/portfolio'),
  savePortfolio: (portfolio: any[]) => apiCall('/portfolio', {
    method: 'POST',
    body: JSON.stringify(portfolio),
  }),

  // Pricing
  getPricing: () => apiCall('/pricing'),
  savePricing: (pricing: any[]) => apiCall('/pricing', {
    method: 'POST',
    body: JSON.stringify(pricing),
  }),

  // Texts
  getTexts: () => apiCall('/texts'),
  saveTexts: (texts: any) => apiCall('/texts', {
    method: 'POST',
    body: JSON.stringify(texts),
  }),

  // Messages
  getMessages: () => apiCall('/messages'),
  saveMessage: (message: any) => apiCall('/messages', {
    method: 'POST',
    body: JSON.stringify(message),
  }),
  deleteMessage: (id: string) => apiCall(`/messages/${id}`, {
    method: 'DELETE',
  }),

  // Videos
  getVideos: () => apiCall('/videos'),
  saveVideos: (videos: any) => apiCall('/videos', {
    method: 'POST',
    body: JSON.stringify(videos),
  }),

  // Hero Video
  getHeroVideo: () => apiCall('/hero-video'),
  saveHeroVideo: (heroVideo: any) => apiCall('/hero-video', {
    method: 'POST',
    body: JSON.stringify(heroVideo),
  }),
};