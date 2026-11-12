/* ------------------------------------------------------------------
   WEDDING DATA — edit this file only. All wording lives in i18n.js.
   Leave a field empty ("") to hide it on the site. Nothing is invented:
   a blank field simply does not render.
------------------------------------------------------------------- */
window.WEDDING = {
  timezone: "Asia/Kolkata",

  /* Full public URL once deployed, e.g. "https://example.github.io/shubh-vivah/".
     Used for Share / Copy link. Blank = use the address in the browser. */
  siteUrl: "https://shubh-vivaah.netlify.app/",

  /* Short names for the gate, hero and monogram */
  groom: { en: "Aditya", hi: "आदित्य", initial: "A" },
  bride: { en: "Ayushi", hi: "आयुषी", initial: "A" },

  city: { en: "Muzaffarpur", hi: "मुजफ्फरपुर" },

  /* Countdown target (ISO with +05:30). The card gives no Phera muhurat,
     so this points at the one time it does give for the wedding day:
     Baraat departure, 9 December 2026, 3:00 PM. Change it when the
     muhurat is fixed, and set pherasMuhurat in i18n.js. */
  countdownTo: "2026-12-09T15:00:00+05:30",

  assets: {
    monogram: "",                 // e.g. "assets/monogram.png" — blank = typographic A · A seal
    song: "assets/song.mp3",      // instrumental mp3 — drop the file in /assets
    film: "",                     // e.g. "assets/invitation-film.mp4" — blank hides the button
    filmPoster: ""
  },
  songVolume: 0.5,
  songStart: 6,                   // seconds into the track where the song begins (and loops back to)

  /* Functions, in time order. `parts` = the functions listed inside each day card,
     as [key, icon]; their names and one-line descriptions are in i18n.js.
     Functions, in time order. Titles/lines come from i18n.js by id.
     date = all-day calendar entry. mapsUrl = a Google Maps link used as-is;
     otherwise mapsQuery is searched. Both blank = no Directions button. */
  events: [
    { id: "tilak", parts: [["tilak", "🪔"], ["faldan", "🧺"], ["dinner", "🍽️"]], date: "2026-12-04", mapsQuery: "", mapsUrl: "https://maps.app.goo.gl/WXsgYWhxC4WnuBVh6?g_st=aw" },
    { id: "haldi", parts: [["haldi", "🌼"], ["mehendi", "🌿"], ["sangeet", "🎶"]], date: "2026-12-08", mapsQuery: "" },
    { id: "vivah", parts: [["baraat", "🐎"], ["vivah", "💐"]], date: "2026-12-09", isWedding: true,
      mapsQuery: "Shivam Vivah Bhawan, Bhikhanpur, NH-77, Muzaffarpur" }
  ],

  /* Photo behind the "Our Invitation" message */
  storyPhoto: "assets/photo-3.JPG",

  /* The gallery section is currently removed from index.html, so the three
     gallery settings below are unused. */
  /* Gallery: add photo paths here. `placeholders` = empty Jharokha frames. */
  gallery: ["assets/photo-1.jpg", "assets/photo-2.jpg", "assets/photo-3.JPG", "assets/photo-4.JPG", "assets/photo-5.JPG"],
  /* Photo shown large in the arch frame at the centre of the gallery.
     Blank = the first photo in the list above. */
  galleryFeatured: "assets/photo-5.JPG",
  galleryPlaceholders: 0,

  /* R.S.V.P. numbers exactly as printed on the card */
  rsvpPhones: ["9431603985", "9431813159"],
  phoneCountryCode: "+91"
};
