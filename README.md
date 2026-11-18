# Velvet Panda press kit

A static site for GitHub Pages. No account, installation, build step, API key or backend is needed to view it locally.

## Preview

Open `index.html` directly, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. Use the HTTP preview for YouTube embeds; local-file previews may be rejected by YouTube. The background film works locally.

## Publish later

1. Create your GitHub account and a public repository named `velvetpanda`.
2. Upload `index.html`, `style.css`, `script.js`, `.nojekyll`, and the complete `assets`, `images`, and `downloads` folders into the repository root. Keep the original filename capitalization.
3. In repository Settings → Pages, choose **Deploy from a branch**, **main**, and **/ (root)**, then Save.
4. The site will be at `https://YOUR-USERNAME.github.io/velvetpanda/` once deployment completes.

All local paths are relative so project Pages URLs work. See https://docs.github.com/en/pages/quickstart for GitHub setup. No site has been published yet.

## Content

- `index.html`: biography (English and Portuguese), six YouTube sets and a professional background film, Instagram booking links, and gallery.
- `style.css`: responsive styles, coral/cream/charcoal palette.
- `script.js`: click-to-load YouTube players and background playback controls, photo dialog, biography language controls. Normal links work without JavaScript.
- `images/`: six original supplied photographs, preserved unchanged.
- `assets/`: lightweight WebP display copies, the legacy VP favicon (unused), and `videos/` with five optimized MP4s and JPG posters.
- `videos/`: original professional video masters, kept local and excluded by `.gitignore`. Do not upload this root folder; publish `assets/videos/`.
- `downloads/`: original photographs ZIP and bilingual text biography.

Update the HTML and downloaded text together when changing the bio. When replacing photos, also regenerate display copies and the downloadable ZIP. The background film and its poster are local. The background section uses professional clip 3, muted and looping, and loads when its section enters view. A pause button is provided; playback pauses offscreen, in hidden tabs and while a media dialog is open. Reduced-motion preferences show the poster until the visitor chooses Play. YouTube players load only when selected; thumbnails come from YouTube. Fonts use Google Fonts with system fallbacks. Instagram is a profile/booking link, not an automatic feed; individual Reel URLs can be added later.

## Editorial notes

The biography is a proposed editorial draft based on the titles and themes on https://www.youtube.com/@VelvetPandaDJ (inspected 18 November 2026), including House Party Sessions, Paradise Sessions, Groove Therapy, Pool Party Groove Therapy, and House & Disco / B2B sessions. Words such as warm and playful describe a proposed positioning, rather than a verified quote from the artist. Please review this positioning before publishing.

Instagram did not expose a readable biography during research. No birthplace, nationality, career length, awards, follower counts or management contact has been assumed. Booking links use the Instagram handle supplied by the artist. No logo or technical rider was supplied. Public event listings were not used to infer personal background.

The live background section uses the supplied Toklab Santuário clip 3, selected from the second comparison block. Clips 1, 2, 4 and 5 remain available on disk but are not loaded by the page. To change the background, update its `data-src` and `poster` in `index.html`. Web copies retain the original 1080 × 1920 portrait framing, H.264 video and AAC audio, with fast-start MP4 metadata. Compression uses CRF 23; the originals remain untouched. The YouTube gallery contains six click-to-play sets. The first desktop row is Paradise Sessions, Live at Velvet Secret, and Warm-up Sunset Rooftop (B2B DJ Ayre). The remaining sets follow in their previous order.

GitHub Pages has a 1 GB published-site limit and a soft 100 GB/month bandwidth limit: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits . If video traffic grows, these web copies can move to external hosting without changing the gallery design.

## Contact form

The booking section embeds `https://m.pineappletheory.eu/form/1` in a responsive, titled iframe, with a direct link fallback and Instagram as an alternative. The explicit HTTPS URL works for GitHub Pages and local previews. Form fields, validation, delivery, and success messages are managed by the hosted Mautic form. Change those at the form provider; the parent page cannot style the contents of a cross-origin iframe. The iframe permits scrolling if the hosted form grows. No generated-script embed is also loaded, so the form appears only once. Rendering is checked without submitting an enquiry.


The supplied `images/velvetpandalogoOfficial.png` is used as the browser icon, Apple touch icon, header mark and footer logo. The original artwork is unchanged.
