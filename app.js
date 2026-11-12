/* Shubh Vivah invitation — plain JS, no dependencies.
   Data: config.js (window.WEDDING) · Wording: i18n.js (window.I18N) */
(function () {
  "use strict";
  var W = window.WEDDING, I = window.I18N, root = document.documentElement;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---------- state ---------- */
  var lang = "en";
  try { lang = localStorage.getItem("sv-lang") || "en"; } catch (e) {}
  if (!I[lang]) lang = "en";
  var side = function () { return location.hash === "#bride" ? "bride" : "groom"; };
  var T = function () { return I[lang]; };
  var get = function (path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, T()); };
  var pair = function () { return side() === "bride" ? [W.bride, W.groom] : [W.groom, W.bride]; };
  var namesText = function () { var p = pair(); return p[0][lang] + " " + T().connector + " " + p[1][lang]; };

  /* ---------- ornaments built in code ---------- */
  function archPath(x0, y0, w, h) {
    var P = [[30, 400], [30, 170], [28, 142, 52, 138], [52, 106, 78, 100], [84, 70, 112, 66], [128, 52, 150, 28],
             [172, 52, 188, 66], [216, 70, 222, 100], [248, 106, 248, 138], [272, 142, 270, 170], [270, 400]];
    var X = function (v) { return (x0 + v / 300 * w).toFixed(2); }, Y = function (v) { return (y0 + v / 400 * h).toFixed(2); };
    return P.map(function (p, i) {
      if (p.length === 2) return (i ? "L" : "M") + X(p[0]) + " " + Y(p[1]);
      return "Q" + X(p[0]) + " " + Y(p[1]) + " " + X(p[2]) + " " + Y(p[3]);
    }).join("") + "Z";
  }
  function doorSVG() {
    var g = "#94733A";
    return '<svg class="door-panel" viewBox="0 0 100 260" aria-hidden="true">' +
      '<defs><pattern id="jali" width="9" height="9" patternUnits="userSpaceOnUse">' +
      '<path d="M4.5 0L9 4.5L4.5 9L0 4.5Z" fill="none" stroke="' + g + '" stroke-width=".7"/><circle cx="4.5" cy="4.5" r=".9" fill="' + g + '"/></pattern></defs>' +
      '<rect x="1" y="1" width="98" height="258" fill="none" stroke="' + g + '" stroke-width=".8"/>' +
      '<path d="' + archPath(0, 2.3, 100, 167.7) + '" fill="rgba(91,48,39,.10)" stroke="' + g + '" stroke-width="1.2"/>' +
      '<path d="' + archPath(10, 20, 80, 144) + '" fill="url(#jali)" stroke="' + g + '" stroke-width=".9"/>' +
      '<rect x="10" y="182" width="80" height="68" fill="rgba(91,48,39,.08)" stroke="' + g + '" stroke-width=".9"/>' +
      '<path d="M50 188L84 216L50 244L16 216Z" fill="url(#jali)" stroke="' + g + '" stroke-width=".9"/>' +
      '<circle cx="50" cy="216" r="11" fill="#EDDFC9" stroke="' + g + '" stroke-width=".9"/>' +
      '<path d="M50 208L56 216L50 224L44 216Z" fill="none" stroke="' + g + '" stroke-width=".9"/>' +
      '</svg>' +
      '<svg class="handle" viewBox="0 0 40 74" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">' +
      [-40, -20, 0, 20, 40].map(function (a) {
        return '<g transform="rotate(' + a + ' 20 40)"><ellipse cx="20" cy="22" rx="3.6" ry="13" fill="#EDDFC9"/><circle cx="20" cy="14" r="1.6" fill="currentColor"/></g>';
      }).join("") +
      '<path d="M20 42C14 38 14 30 19 26C21 24 21 21 20 19" stroke-width="2.4"/><circle cx="20" cy="17" r="2.2" fill="currentColor"/>' +
      '<path d="M20 15V11M18 15L16.5 11.500M22 15L23.500 11.500"/>' +
      '<circle cx="20" cy="44" r="3" fill="currentColor"/><circle cx="20" cy="58" r="13" stroke-width="2.6"/><circle cx="20" cy="58" r="9.500" stroke-width=".7"/>' +
      '</svg>';
  }
  function mandalaSVG() {
    var s = '<svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" stroke-width=".35">';
    [98, 82, 60, 38, 17].forEach(function (r) { s += '<circle r="' + r + '"/>'; });
    s += '<circle r="79" stroke-dasharray=".6 2.400"/>';
    for (var i = 0; i < 24; i++) {
      var a = i * 15;
      s += '<g transform="rotate(' + a + ')"><path d="M0 -82L5 -90L0 -98L-5 -90Z"/><path d="M0 -60V-79"/></g>';
      if (i % 2 === 0) s += '<g transform="rotate(' + a + ')"><path d="M0 -38C7 -46 7 -53 0 -60C-7 -53 -7 -46 0 -38Z"/></g>';
      if (i % 3 === 0) s += '<g transform="rotate(' + (a + 22.5) + ')"><path d="M0 -17C5 -24 5 -31 0 -38C-5 -31 -5 -24 0 -17Z"/></g>';
    }
    return s + "</svg>";
  }

  /* ---------- rendering ---------- */
  function monogramHTML() {
    if (W.assets.monogram) return '<img src="' + esc(W.assets.monogram) + '" alt="">';
    var p = pair(); return esc(p[0].initial) + "<i></i>" + esc(p[1].initial);
  }
  function renderNames() {
    var p = pair(), c = T().connector;
    $$("[data-names]").forEach(function (el) {
      el.setAttribute("aria-label", namesText());
      if (el.dataset.names === "plain") {
        el.innerHTML = '<span aria-hidden="true">' + esc(p[0][lang]) + '<span class="amp">' + esc(c) + "</span>" + esc(p[1][lang]) + "</span>";
        return;
      }
      /* English rises letter by letter; Devanagari rises word by word so matras never split */
      var i = 0;
      var rise = function (name) {
        var parts = lang === "hi" ? name.split(" ") : Array.from(name);
        return parts.map(function (ch) {
          if (ch === " ") return " ";
          return '<span class="ch" style="--i:' + (i++) + '">' + esc(ch) + "</span>";
        }).join(lang === "hi" ? " " : "");
      };
      var a = rise(p[0][lang]);
      var mid = '<span class="amp"><span class="ch" style="--i:' + (i++) + '">' + esc(c) + "</span></span>";
      var b = rise(p[1][lang]);
      el.innerHTML = '<span aria-hidden="true"><span class="name">' + a + "</span>" + mid + '<span class="name">' + b + "</span></span>";
    });
  }
  function renderCard() {
    var c = (side() === "bride" && T().cardBride) || T().card;
    var first = [["c-name", c.groomName], ["c-par", c.groomParents], ["c-addr", c.groomAddress]];
    var second = [["c-name", c.brideName], ["c-par", c.brideParents], ["c-addr", c.brideAddress]];
    var rows = [["c-sal", c.salutation], ["c-grace", c.grace], ["c-rel", c.relation]].concat(first, [["c-weds", c.weds]], second);
    $("[data-card]").innerHTML = rows.filter(function (r) { return r[1]; }).map(function (r) {
      return '<p class="' + r[0] + '">' + esc(r[1]) + "</p>";
    }).join("") + '<div class="divider" aria-hidden="true"><i></i></div>' +
      '<p class="c-await">' + esc(T().awaiting) + '</p><p class="c-sender">' + esc(T().sender) + "</p>";
  }
  var ymd = function (d) { return d.replace(/-/g, ""); };
  function nextDay(d) {
    var p = d.split("-").map(Number), n = new Date(Date.UTC(p[0], p[1] - 1, p[2] + 1));
    return n.toISOString().slice(0, 10);
  }
  function eventText(ev) {
    var t = T().events[ev.id];
    return { title: t.title + " · " + namesText(), details: t.lines.concat(t.note ? [t.note] : []).join("\n"), location: t.venue || "" };
  }
  function gcalUrl(ev) {
    var x = eventText(ev);
    return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(x.title) +
      "&dates=" + ymd(ev.date) + "/" + ymd(nextDay(ev.date)) + "&details=" + encodeURIComponent(x.details) +
      (x.location ? "&location=" + encodeURIComponent(x.location) : "") + "&ctz=" + encodeURIComponent(W.timezone);
  }
  function icsText(ev) {
    var x = eventText(ev), e = function (s) { return s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/([,;])/g, "\\$1"); };
    return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Shubh Vivah//Invitation//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
      "UID:" + ev.id + "-" + ymd(ev.date) + "@shubh-vivah", "DTSTAMP:" + new Date().toISOString().replace(/[-:]|\.\d+/g, ""),
      "DTSTART;VALUE=DATE:" + ymd(ev.date), "DTEND;VALUE=DATE:" + ymd(nextDay(ev.date)),
      "SUMMARY:" + e(x.title), "DESCRIPTION:" + e(x.details)].concat(x.location ? ["LOCATION:" + e(x.location)] : [],
      ["END:VEVENT", "END:VCALENDAR"]).join("\r\n");
  }
  function renderEvents() {
    var ui = T().ui;
    $("#events").innerHTML = W.events.map(function (ev, n) {
      var t = T().events[ev.id], h = '<article class="event reveal" data-ev="' + n + '"><h3>' + esc(t.title) + "</h3>";
      h += t.lines.map(function (l) { return '<p class="e-line">' + esc(l) + "</p>"; }).join("");
      if (t.note) h += '<p class="e-note">' + esc(t.note) + "</p>";
      var meta = "";
      if (t.venue) meta += "<div><span>" + esc(ui.venue) + "</span>" + esc(t.venue) + "</div>";
      if (t.pherasMuhurat) meta += "<div><span>" + esc(ui.muhurat) + "</span>" + esc(t.pherasMuhurat) + "</div>";
      if (t.dressCode) meta += "<div><span>" + esc(ui.dressCode) + "</span>" + esc(t.dressCode) + "</div>";
      if (meta) h += '<div class="e-meta">' + meta + "</div>";
      h += '<div class="e-actions">';
      if (ev.mapsUrl || ev.mapsQuery) h += '<a class="btn btn-solid" target="_blank" rel="noopener" href="' + esc(ev.mapsUrl || "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ev.mapsQuery)) + '">' + esc(ui.directions) + "</a>";
      h += '<a class="btn" target="_blank" rel="noopener" href="' + esc(gcalUrl(ev)) + '">' + esc(ui.gcal) + "</a>";
      h += '<button class="btn" type="button" data-ics="' + n + '">' + esc(ui.ics) + "</button>";
      if (ev.isWedding && W.assets.film) h += '<button class="btn" type="button" data-film>' + esc(ui.film) + "</button>";
      return h + "</div></article>";
    }).join("");
    observeReveals();
    updateThread();
  }
  function renderGallery() {
    var ratios = ["3 / 4", "4 / 5", "2 / 3", "3 / 4", "4 / 5", "2 / 3"], ph = W.galleryPlaceholders || 0, out = [], used = 0;
    var frame = function () {
      return '<div class="g-ph" style="aspect-ratio:' + ratios[used++ % ratios.length] + '"><svg class="lotus" aria-hidden="true"><use href="#i-lotus"/></svg><span>' + esc(T().ui.photoSoon) + "</span></div>";
    };
    var per = W.gallery.length ? Math.ceil(ph / W.gallery.length) : ph;
    W.gallery.forEach(function (src, n) {
      out.push('<button class="g-photo" type="button" data-photo="' + n + '" aria-label="' + (n + 1) + " / " + W.gallery.length + '"><img src="' + esc(src) + '" alt="' + esc(namesText()) + '"></button>');
      for (var k = 0; k < per && used < ph; k++) out.push(frame());
    });
    while (used < ph) out.push(frame());
    $("#masonry").innerHTML = out.join("");
  }
  function renderAll() {
    root.lang = lang;
    $$("[data-t]").forEach(function (el) { var v = get(el.dataset.t); el.textContent = v == null ? "" : v; });
    $$("[data-city]").forEach(function (el) { el.textContent = W.city[lang]; });
    $$("[data-monogram]").forEach(function (el) { el.innerHTML = monogramHTML(); });
    $("[data-brand]").innerHTML = monogramHTML();
    $$("[data-action=lang]").forEach(function (b) { b.textContent = T().ui.langSwitch; });
    $("[data-shloka]").innerHTML = T().shloka.map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("");
    $("#rsvpPhones").innerHTML = W.rsvpPhones.map(function (p) { return '<a href="tel:' + esc(W.phoneCountryCode + p) + '">' + esc(p) + "</a>"; }).join("");
    $$("[data-lb=close], #filmClose").forEach(function (b) { b.setAttribute("aria-label", T().ui.close); });
    $("[data-lb=prev]").setAttribute("aria-label", T().ui.prev);
    $("[data-lb=next]").setAttribute("aria-label", T().ui.next);
    document.title = namesText();
    renderNames(); renderCard(); renderEvents(); renderGallery(); tick(); syncMusicBtn(); syncShare();
  }

  /* ---------- reveal on scroll ---------- */
  var io = null;
  function observeReveals() {
    var els = $$(".reveal:not(.in)");
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- countdown ---------- */
  var target = new Date(W.countdownTo).getTime();
  function tick() {
    var d = Math.max(0, target - Date.now()), s = Math.floor(d / 1000), p = function (n) { return (n < 10 ? "0" : "") + n; };
    $("#cd-d").textContent = Math.floor(s / 86400);
    $("#cd-h").textContent = p(Math.floor(s % 86400 / 3600));
    $("#cd-m").textContent = p(Math.floor(s % 3600 / 60));
    $("#cd-s").textContent = p(s % 60);
    $("#countNote").textContent = d ? T().ui.countdownTo : T().ui.countdownDone;
  }
  setInterval(tick, 1000);

  /* ---------- timeline thread + active section ---------- */
  var sections = $$("section[data-flowers]"), activeFlowers = "hero";
  function updateThread() {
    var tl = $("#timeline"); if (!tl) return;
    var r = tl.getBoundingClientRect(), vh = window.innerHeight;
    var filled = Math.max(0, Math.min(r.height, vh * 0.62 - r.top));
    $("#threadFill").style.height = filled + "px";
    $$(".event", tl).forEach(function (e) { e.classList.toggle("lit", e.offsetTop + 30 <= filled); });
  }
  var lastY = window.scrollY, wind = 0, scrollShift = 0, ticking = false;
  function onScroll() {
    var y = window.scrollY, dy = y - lastY; lastY = y;
    scrollShift += dy; wind += Math.max(-60, Math.min(60, dy)) * 0.012;
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false; updateThread();
      var mid = window.innerHeight / 2;
      for (var i = 0; i < sections.length; i++) {
        var r = sections[i].getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) { activeFlowers = sections[i].dataset.flowers; break; }
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { updateThread(); sizeCanvas(); });

  /* ---------- petals: 3-layer parallax canvas ---------- */
  var cv = $("#petals"), cx = cv.getContext("2d"), dpr = 1, CW = 0, CH = 0, parts = [], running = false;
  var FLOWERS = {
    hero: ["rose", "rose", "mogra"], blessings: ["gendaY", "gendaO"], invitation: ["lotus", "rose"], countdown: ["lotus"],
    functions: ["ashoka", "gendaO", "ashoka"], gallery: ["bougain"], closing: ["rose", "glitter", "glitter"]
  };
  var sprites = {};
  function sprite(type) {
    if (sprites[type]) return sprites[type];
    var S = 64, c = document.createElement("canvas"); c.width = c.height = S;
    var g = c.getContext("2d"); g.translate(S / 2, S / 2);
    var petal = function (len, wid, fill, edge) {
      g.beginPath(); g.moveTo(0, len * 0.5);
      g.bezierCurveTo(wid, len * 0.2, wid * 0.9, -len * 0.45, 0, -len * 0.5);
      g.bezierCurveTo(-wid * 0.9, -len * 0.45, -wid, len * 0.2, 0, len * 0.5);
      g.fillStyle = fill; g.fill(); if (edge) { g.strokeStyle = edge; g.lineWidth = 1; g.stroke(); }
    };
    var grad = function (a, b) { var l = g.createLinearGradient(0, -24, 0, 24); l.addColorStop(0, a); l.addColorStop(1, b); return l; };
    var k;
    if (type === "rose") { petal(44, 22, grad("#C4313A", "#7E1420")); g.beginPath(); g.moveTo(0, 18); g.quadraticCurveTo(5, 0, 0, -16); g.strokeStyle = "rgba(255,200,200,.25)"; g.stroke(); }
    else if (type === "lotus") { petal(50, 15, grad("#F7C3CF", "#E27A98")); g.beginPath(); g.moveTo(0, 22); g.lineTo(0, -18); g.strokeStyle = "rgba(255,255,255,.4)"; g.stroke(); }
    else if (type === "ashoka") { petal(54, 9, grad("#7FA24A", "#4F7430")); g.beginPath(); g.moveTo(0, 26); g.lineTo(0, -24); g.strokeStyle = "rgba(240,255,220,.4)"; g.stroke(); }
    else if (type === "mogra") { for (k = 0; k < 6; k++) { g.save(); g.rotate(k * Math.PI / 3); g.translate(0, -11); petal(22, 8, "#FFFDF6", "rgba(194,155,88,.5)"); g.restore(); } g.beginPath(); g.arc(0, 0, 3.5, 0, 7); g.fillStyle = "#EFD68A"; g.fill(); }
    else if (type === "gendaY" || type === "gendaO") {
      var cols = type === "gendaY" ? ["#E9A51C", "#F5C22E", "#FADB61"] : ["#D9670F", "#F08A1D", "#F7AE3B"];
      [[24, 16], [17, 12], [10, 8]].forEach(function (rg, n) {
        for (k = 0; k < rg[1]; k++) { var a = k / rg[1] * Math.PI * 2 + n * 0.3; g.beginPath(); g.arc(Math.cos(a) * rg[0] * 0.72, Math.sin(a) * rg[0] * 0.72, rg[0] * 0.3, 0, 7); g.fillStyle = cols[n]; g.fill(); }
        g.beginPath(); g.arc(0, 0, rg[0] * 0.72, 0, 7); g.fillStyle = cols[n]; g.fill();
      });
    }
    else if (type === "bougain") { for (k = 0; k < 3; k++) { g.save(); g.rotate(k * Math.PI * 2 / 3); g.translate(0, -12); petal(28, 13, grad("#DB4F96", "#B02A72")); g.restore(); } g.beginPath(); g.arc(0, 0, 2.5, 0, 7); g.fillStyle = "#FFF3C4"; g.fill(); }
    else { g.beginPath(); for (k = 0; k < 8; k++) { var r = k % 2 ? 4 : 20, a2 = k * Math.PI / 4; g.lineTo(Math.cos(a2) * r, Math.sin(a2) * r); } g.closePath(); g.fillStyle = "#C29B58"; g.fill(); }
    return (sprites[type] = c);
  }
  function sizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2); CW = window.innerWidth; CH = window.innerHeight;
    cv.width = CW * dpr; cv.height = CH * dpr;
  }
  function spawn(p, burstType) {
    var list = FLOWERS[activeFlowers] || FLOWERS.hero;
    p.type = burstType || list[Math.floor(Math.random() * list.length)];
    p.layer = p.layer == null ? Math.floor(Math.random() * 3) : p.layer;       // 0 far · 1 mid · 2 near
    var base = p.type === "glitter" ? 7 : (p.type === "rose" || p.type === "lotus" || p.type === "ashoka" ? 17 : 13);
    p.size = base * (0.55 + p.layer * 0.32) * (0.85 + Math.random() * 0.3);
    p.x = Math.random() * CW; p.y = -30 - Math.random() * (burstType ? CH * 0.9 : 60);
    p.vy = (0.25 + p.layer * 0.22) * (0.8 + Math.random() * 0.5) * (burstType ? 5 : 1);
    p.vx = (Math.random() - 0.5) * 0.3; p.rot = Math.random() * 6.28; p.vr = (Math.random() - 0.5) * 0.02;
    p.ph = Math.random() * 6.28; p.alpha = 0.4 + p.layer * 0.2; p.once = !!burstType;
    return p;
  }
  function startPetals() {
    if (reduce || running) return; running = true; sizeCanvas();
    var n = CW < 600 ? 22 : 40, i;
    for (i = 0; i < n; i++) { var p = spawn({}); p.y = Math.random() * CH; parts.push(p); }
    for (i = 0; i < 46; i++) parts.push(spawn({ layer: 1 + (i % 2) }, i % 3 ? "gendaO" : "rose"));   // marigold + rose shower at the gate
    requestAnimationFrame(frame);
  }
  var lastT = 0;
  function frame(t) {
    if (document.hidden) { lastT = 0; requestAnimationFrame(frame); return; }
    var dt = lastT ? Math.min(3, (t - lastT) / 16.7) : 1; lastT = t;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0); cx.clearRect(0, 0, CW, CH);
    var shift = scrollShift; scrollShift = 0; wind *= 0.94;
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i], depth = 0.12 + p.layer * 0.2;
      p.ph += 0.02 * dt;
      p.x += (p.vx + Math.sin(p.ph) * 0.35 + wind * (1 + p.layer)) * dt;
      p.y += p.vy * dt - shift * depth;                    // parallax: nearer layers travel further
      p.rot += (p.vr + wind * 0.01) * dt;
      if (p.x < -40) p.x = CW + 30; else if (p.x > CW + 40) p.x = -30;
      if (p.y > CH + 40 || p.y < -CH * 0.8) {
        if (p.once) { parts.splice(i, 1); continue; }
        var up = p.y < 0; spawn(p); if (up) p.y = CH + 20;
      }
      var s = p.size * 2;
      cx.save(); cx.globalAlpha = p.alpha; cx.translate(p.x, p.y); cx.rotate(p.rot);
      cx.scale(1, 0.55 + 0.45 * Math.abs(Math.cos(p.ph * 1.3)));       // gentle tumble
      cx.drawImage(sprite(p.type), -s / 2, -s / 2, s, s); cx.restore();
    }
    requestAnimationFrame(frame);
  }

  /* ---------- music ---------- */
  var audio = null, musicOk = !!W.assets.song, wantMusic = false, pausedBy = null;
  var musicBtn = $("#musicBtn");
  if (musicOk) {
    audio = new Audio(); audio.loop = true; audio.preload = "metadata"; audio.volume = W.songVolume;
    audio.addEventListener("error", function () { musicOk = false; wantMusic = false; syncMusicBtn(); });
    audio.addEventListener("play", syncMusicBtn); audio.addEventListener("pause", syncMusicBtn);
    audio.src = W.assets.song;
  }
  function syncMusicBtn() {
    var on = !!(audio && musicOk && !audio.paused), ui = T().ui;
    musicBtn.setAttribute("aria-pressed", on ? "true" : "false");
    musicBtn.disabled = !musicOk;
    musicBtn.setAttribute("aria-label", !musicOk ? ui.noMusic : on ? ui.pauseMusic : ui.playMusic);
    musicBtn.title = musicBtn.getAttribute("aria-label");
  }
  function playMusic() { if (!musicOk) return; wantMusic = true; var p = audio.play(); if (p && p.catch) p.catch(function () { syncMusicBtn(); }); }
  musicBtn.addEventListener("click", function () { if (!musicOk) return; if (audio.paused) playMusic(); else { wantMusic = false; audio.pause(); } });
  document.addEventListener("visibilitychange", function () {
    if (!audio || !musicOk) return;
    if (document.hidden) { if (!audio.paused) { pausedBy = "tab"; audio.pause(); } }
    else if (pausedBy === "tab" && wantMusic) { pausedBy = null; playMusic(); }
  });

  /* ---------- invitation film ---------- */
  var film = $("#film"), filmBox = $("#filmBox");
  film.addEventListener("play", function () { if (audio && !audio.paused) { pausedBy = "film"; audio.pause(); } });
  function closeFilm() { film.pause(); filmBox.hidden = true; if (pausedBy === "film" && wantMusic) { pausedBy = null; playMusic(); } }
  $("#filmClose").addEventListener("click", closeFilm);

  /* ---------- lightbox ---------- */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbI = 0, tx = null;
  function showPhoto(i) {
    var n = W.gallery.length; lbI = (i + n) % n; lbImg.src = W.gallery[lbI]; lbImg.alt = namesText();
    $("#lbCount").textContent = (lbI + 1) + " / " + n; lb.hidden = false;
  }
  lb.addEventListener("click", function (e) {
    var a = e.target.closest("[data-lb]");
    if (a) { if (a.dataset.lb === "close") lb.hidden = true; else showPhoto(lbI + (a.dataset.lb === "next" ? 1 : -1)); }
    else if (e.target === lb) lb.hidden = true;
  });
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (tx == null) return; var dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 44) showPhoto(lbI + (dx < 0 ? 1 : -1));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { lb.hidden = true; if (!filmBox.hidden) closeFilm(); }
    if (lb.hidden) return;
    if (e.key === "ArrowRight") showPhoto(lbI + 1); if (e.key === "ArrowLeft") showPhoto(lbI - 1);
  });

  /* ---------- share, copy, pdf ---------- */
  var toastT;
  function toast(msg) { var t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  function shareUrl() { return (W.siteUrl || location.href.split("#")[0]) + (side() === "bride" ? "#bride" : ""); }
  function shareMsg() { return T().ui.shareText + " · " + namesText() + " · " + T().heroDate + " · " + W.city[lang]; }
  function syncShare() { $("#shareBtn").href = "https://wa.me/?text=" + encodeURIComponent(shareMsg() + "\n" + shareUrl()); }
  $("#shareBtn").addEventListener("click", function (e) {
    if (!navigator.share) return;                       // no native sheet: the link opens WhatsApp
    e.preventDefault(); var href = this.href;
    navigator.share({ title: namesText(), text: shareMsg(), url: shareUrl() }).catch(function (err) {
      if (err && err.name !== "AbortError") window.open(href, "_blank", "noopener");
    });
  });
  $("#copyBtn").addEventListener("click", function () {
    var url = shareUrl(), ok = function () { toast(T().ui.copied); };
    var fallback = function () {
      var ta = document.createElement("textarea"); ta.value = url; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); ok(); } catch (e) { toast(url); } ta.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, fallback); else fallback();
  });
  $("#pdfBtn").addEventListener("click", function () { window.print(); });

  /* ---------- delegated clicks ---------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action=lang], [data-ics], [data-film], [data-photo], a[href='#top']");
    if (!el) return;
    if (el.matches("[data-action=lang]")) {
      lang = lang === "en" ? "hi" : "en"; try { localStorage.setItem("sv-lang", lang); } catch (x) {}
      renderAll();
    } else if (el.matches("[data-ics]")) {
      var ev = W.events[+el.dataset.ics], a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([icsText(ev)], { type: "text/calendar;charset=utf-8" }));
      a.download = ev.id + ".ics"; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    } else if (el.matches("[data-film]")) {
      if (!film.src) { film.src = W.assets.film; if (W.assets.filmPoster) film.poster = W.assets.filmPoster; }
      filmBox.hidden = false; var p = film.play(); if (p && p.catch) p.catch(function () {});
    } else if (el.matches("[data-photo]")) {
      showPhoto(+el.dataset.photo);
    } else {                                             // back to top without losing #bride
      e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  });
  window.addEventListener("hashchange", renderAll);

  /* ---------- gate ---------- */
  var gate = $("#gate");
  $$(".door-face").forEach(function (d) { d.innerHTML = doorSVG(); });
  $$("[data-mandala]").forEach(function (m) { m.innerHTML = mandalaSVG(); });
  root.classList.add("locked");
  $("#openBtn").addEventListener("click", function () {
    gate.classList.add("open"); root.classList.remove("locked"); root.classList.add("opened");
    window.scrollTo(0, 0);
    playMusic();                                         // starts on this tap, 50% volume, looped
    startPetals();
    setTimeout(function () { gate.hidden = true; observeReveals(); }, 2700);
  });

  renderAll();
  observeReveals();
})();
