# Shubh Vivah — Aditya weds Ayushi

Static invitation site. No build step. Works on GitHub Pages, Netlify or any static host.

## Files
- `index.html` — page structure and WhatsApp / Open Graph tags
- `config.js` — all wedding data (names, dates, countdown target, assets, gallery, R.S.V.P. numbers)
- `i18n.js` — English and Hindi wording. The family wording is copied exactly from the card; do not rephrase
- `styles.css`, `app.js` — design and behaviour
- `assets/` — photos, `og-cover.jpg`, and the files you add below

## Add before sharing
1. **Song**: save the instrumental as `assets/song.mp3`. It starts at 50% volume when the guest taps Open Invitation.
2. **Monogram** (optional): save as `assets/monogram.png` and set `assets.monogram` in `config.js`. Blank shows the A · A seal.
3. **Invitation film** (optional): save as `assets/invitation-film.mp4` and set `assets.film`. The "Watch the invitation film" button then appears on the Wedding Ceremony card.
4. **WhatsApp preview**: after deploying, in `index.html` change `og:image` to the full address (for example `https://your-site/assets/og-cover.jpg`) and set `siteUrl` in `config.js`. WhatsApp ignores relative image paths.

## Fields left blank on purpose
Nothing on the site is invented. These were not on the card, so they are empty and hidden until you fill them in:
- Phera muhurat and dress code — `pherasMuhurat`, `dressCode` in `i18n.js` (both languages)
- Venues for Tilak and Haldi/Mehendi/Sangeet — add `venue` in `i18n.js` and `mapsQuery` in `config.js` to show Get Directions
- Bride-side host wording — `cardBride` in `i18n.js`. Until then `yoursite/#bride` only puts the bride's name first
- Countdown — `countdownTo` in `config.js` points at the Baraat departure (9 Dec 2026, 3:00 PM IST), the only time the card gives for the wedding day

## Deploy
- **Netlify**: drag this folder onto app.netlify.com/drop
- **GitHub Pages**: push the folder to a repository, then Settings → Pages → deploy from branch, root

Links: `yoursite/` (groom side) · `yoursite/#bride` (bride's name first)
