# Product Image Prompts — "The Google Search Ranking System" (2026 Edition)

Use these with any FLUX / SDXL text-to-image app (Hugging Face, Replicate, etc.).
Keep the brand: **premium blush-pink & white, minimal, high-end.**

## Required specs (Getvik form, Step 2)
- Product Thumbnail: aspect ratio **locked to 4:3** (e.g., 1280x960 or 1600x1200).
- Public Previews: PNG / JPG / WEBP, max 50MB each.
- Never upload paid files as previews.

---

## 1) PRODUCT THUMBNAIL (primary, 4:3)

> Professional studio product photograph, 4:3. A thick matte-softcover guidebook standing upright, front cover facing camera, titled **"THE GOOGLE SEARCH RANKING SYSTEM"** in a modern minimal font, cover design in **premium blush pink and white** with a small glowing upward arrow icon. Rested on a clean blush-pink podium against a soft cream studio backdrop. Soft studio lighting, gentle drop shadow, subtle pink gradient glow. High-end digital-product marketing photo, crisp, sharp focus, minimal elegant composition.

Negative prompt: `text errors, misspelled words, blurry, warped cover, distorted typography, cluttered background, harsh shadows, low resolution, watermark`

Tip: most models garble title text. Generate 4–6 variants and pick the one with the cleanest lettering; tiny flaws in the title are accepted.

---

## 2) PUBLIC PREVIEW A — "Inside the playbook" (4:3)

> Top-down flat lay photo, 4:3. An open premium guidebook with blush-pink and white pages beside a closed copy of "The Google Search Ranking System" pink softcover book, surrounded by a small notebook, a coffee cup on cream saucer, and a gold pen. Cream marble desk, blush pink accent, soft natural window light, shallow depth of field, commercial product photography, minimal premium aesthetic.

---

## 3) PUBLIC PREVIEW B — "The execution system" (4:3)

> Laptop on a clean white desk showing a minimal pink dashboard with a rising bar chart, ranking line graph and checklist panels, next to a printed blush-pink SEO guidebook closed with title "The Google Search Ranking System". Soft daylight, white and blush-pink palette, premium minimal workspace, shallow depth of field, commercial photography, 4:3.

---

## 4) BONUS PREVIEW C — "Bundle / what you get" (4:3)

> Minimal product lineup photo, 4:3. A blush-pink softcover guidebook standing upright, next to three cleanly stacked file cards labeled "ROADMAP", "TRACKER", "AUDIT" in small modern typography, on a cream desk with soft pink decorative shapes blurred in background. Premium digital-product listing photo, soft studio light, elegant, minimal.

---

## Recommended model + settings (HF free/open-weight)
- Fast: `black-forest-labs/FLUX.1-schnell` — steps 4, guidance 0, 1024x1024 (crop to 4:3 after), or use app's 4:3 mode.
- Higher quality: `stabilityai/stable-diffusion-xl-base-1.0` — steps 30–40, guidance 7, 1344x768 (≈16:9; crop sides to 4:3 = 1024x768). Use 768x1024 and crop top/bottom instead for book-close-up.
- Generate each at 4:3 directly if the app allows (e.g., 1280x960).
- Run 4–6 seeds per prompt; keep the sharpest with the least text garble.

## Direct HF API (if you want, on your own machine)
```
curl -X POST "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell" \
  -H "Authorization: Bearer hf_XXXXXXXX" -H "Content-Type: application/json" \
  --data '{"inputs":"<PROMPT>","parameters":{"guidance_scale":0,"num_inference_steps":4}}' \
  --output thumb.png
```

> SECURITY: the token you shared is now exposed in this conversation — revoke it at
> https://huggingface.co/settings/tokens and create a fresh one before using it again.