"use client";

export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}=${width}&q=${quality || 75}`;
}
