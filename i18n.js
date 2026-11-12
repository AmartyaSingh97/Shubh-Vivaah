/* ------------------------------------------------------------------
   TRANSLATIONS
   `card`, `events`, `awaiting` and `sender` are the family's wording,
   copied character for character from the card text. Do not rephrase.
   `ui` holds only interface labels. `parts` (function names and one-line
   descriptions inside each day card), `quote` and `story*` are decorative copy.
------------------------------------------------------------------- */
window.I18N = {
  en: {
    om: "ॐ श्री गणेशाय नमः",
    connector: "Weds",
    heroDate: "December 9, 2026, Wednesday",

    /* Decorative copy (not from the card). {a} {b} = the couple, *word* = accent. */
    quote: "“Two hearts, one sacred promise — joined by love, guided by blessings, and celebrated with everyone we hold dear.”",
    storyTitle: "Two Families, One Celebration",
    story: "With joyful hearts and the blessings of our elders, we invite you to the wedding of {a} and {b}. As they begin their *forever*, your presence will make the moment complete.",
    storySub: "Come share the colours of haldi, the music of sangeet and the warmth of two families becoming one.",

    card: {
      salutation: "Respected Sir/Madam,",
      grace: "With the infinite grace of Jagat Janani Maa Janki,",
      relation: "My grandson,",
      groomName: "Aditya Raj",
      groomParents: "Son of - Smt. Mridula Kumari & Shri Ashutosh Kumar",
      groomAddress: "Village + Post - Chandauli, Police Station - Belsand, Sitamarhi",
      weds: "Weds",
      brideName: "Ayushi Kumari",
      brideParents: "Daughter of - Smt. Priti Kumari & Shri Prabhash Ranjan",
      brideAddress: "Bhikhanpur, Behind Musafir Petrol Pump, Ahiyapur, Muzaffarpur"
    },
    /* Bride-side host wording for URL#bride. None was supplied, so this is
       empty and the card above is shown as printed. To use it, copy the
       `card` object here with the bride-side text. */
    cardBride: null,

    awaiting: "Eagerly Awaiting Your Presence: Ashutosh, Paritosh, Manish, Madhusudan, Nihal, Balaji, Vasu and Entire Family.",
    sender: "Preshak: Shree Ratneshwar Prasad Singh (Ph No - 9431603985, 9431813159)",
    senderName: "Preshak: Shree Ratneshwar Prasad Singh",

    events: {
      tilak: {
        title: "Tilak and Faldan",
        parts: {
          tilak: { name: "Tilak", desc: "An auspicious tilak and blessings for the groom" },
          faldan: { name: "Faldan", desc: "Fruits, gifts and good wishes exchanged" },
          dinner: { name: "Dinner", desc: "Evening from 06:00 PM onwards" }
        },
        lines: ["Date: December 4, 2026, Friday", "Dinner - Evening from 06:00 PM onwards"]
      },
      haldi: {
        title: "Haldi, Mehendi and Sangeet",
        parts: {
          haldi: { name: "Haldi", desc: "The golden glow of turmeric and blessings" },
          mehendi: { name: "Mehendi", desc: "Henna, laughter and togetherness" },
          sangeet: { name: "Sangeet", desc: "An evening of music and dance" }
        },
        lines: ["Date: December 8, 2026, Tuesday"]
      },
      vivah: {
        title: "Wedding Ceremony",
        parts: {
          baraat: { name: "Baraat", desc: "Departs from Village Chandauli at 3:00 PM" },
          vivah: { name: "Wedding Ceremony", desc: "The sacred vows at Shivam Vivah Bhawan" }
        },
        lines: ["Date: December 9, 2026, Wednesday"],
        note: "Baraat will depart from my residence (Village Chandauli) at 3:00 PM in the evening for Shivam Vivah Bhawan, Bhikhanpur, NH-77, Muzaffarpur.",
        venue: "Shivam Vivah Bhawan, Bhikhanpur, NH-77, Muzaffarpur",
        dressCode: "",
        pherasMuhurat: ""
      }
    },

    shloka: ["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"],

    ui: {
      open: "Open Invitation",
      titleSuffix: "Wedding Invitation", celebrate: "Celebrate With Us", secStory: "Our Invitation",
      navInvite: "Invitation", navEvents: "Events", navGallery: "Gallery",
      langSwitch: "हिंदी",
      playMusic: "Play music", pauseMusic: "Pause music", noMusic: "Music file not added yet",
      secBlessings: "Blessings",
      secInvitation: "The Invitation",
      secCountdown: "Counting the Days",
      countdownTo: "Until the Baraat departs for the Shubh Vivah",
      countdownDone: "The auspicious day is here",
      days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
      secFunctions: "Wedding Functions",
      venue: "Venue", dressCode: "Dress code", muhurat: "Shubh Muhurat",
      directions: "Get Directions", gcal: "Google Calendar", ics: "Add to Calendar (.ics)",
      film: "Watch the invitation film",
      secGallery: "Gallery",
      photoSoon: "Photo to follow",
      secClosing: "With Gratitude",
      thanks: "Your presence and blessings will make this occasion complete.",
      share: "Share Invitation", copy: "Copy Link", copied: "Link copied", pdf: "Save as PDF",
      rsvp: "R.S.V.P.", top: "Back to top",
      shareText: "You are invited",
      close: "Close", prev: "Previous photo", next: "Next photo"
    }
  },

  hi: {
    om: "ॐ श्री गणेशाय नमः",
    connector: "संग",
    heroDate: "09 दिसम्बर 2026 बुधवार",

    quote: "“दो दिल, एक पवित्र वचन — प्रेम से जुड़े, आशीर्वाद से सँवरे, और अपनों के संग मनाया जाने वाला उत्सव ।”",
    storyTitle: "दो परिवार, एक उत्सव",
    story: "हर्षित हृदय और बड़ों के आशीर्वाद के साथ, हम आपको {a} और {b} के *शुभ विवाह* में सादर आमंत्रित करते हैं । इस मंगल आरंभ में आपकी उपस्थिति ही इस क्षण को पूर्ण करेगी ।",
    storySub: "आइए, हल्दी के रंग, संगीत की धुन और दो परिवारों के मिलन की खुशी में शामिल हों ।",

    card: {
      salutation: "मान्यवर,",
      grace: "जगत जननी माँ जानकी की असीम अनुकम्पा से,",
      relation: "मेरे सुपौत्र,",
      groomName: "चि० आदित्य राज",
      groomParents: "सुपुत्र - श्रीमती मृदुला कुमारी एवं श्री आशुतोष कुमार",
      groomAddress: "ग्राम+पोस्ट-चन्दौली थाना-बेलसंड, सीतामढ़ी",
      weds: "संग",
      brideName: "आयु० आयुषी कुमारी",
      brideParents: "सुपुत्री - श्रीमती प्रीति कुमारी एवं श्री प्रभाष रंजन",
      brideAddress: "भीखनपुर, मुसाफिर पेट्रोल पंप के पीछे, अहियापुर, मुजफ्फरपुर"
    },
    cardBride: null,

    awaiting: "दर्शनाभिलाषी : आशुतोष, परितोष, मनीष, मधुसुदन, निहाल, बालाजी, वासु एवं समस्त परिवार ।",
    sender: "आकांक्षी : श्री रत्नेश्वर प्रसाद सिंह (Ph No. - 9431603985, 9431813159)",
    senderName: "आकांक्षी : श्री रत्नेश्वर प्रसाद सिंह",

    events: {
      tilak: {
        title: "तिलक एवं फलदान",
        parts: {
          tilak: { name: "तिलक", desc: "वर को शुभ तिलक एवं आशीर्वाद" },
          faldan: { name: "फलदान", desc: "फल, उपहार एवं शुभकामनाओं का आदान-प्रदान" },
          dinner: { name: "प्रीति-भोज", desc: "संध्या 06 बजे से" }
        },
        lines: ["दिनांक : 04 दिसम्बर 2026 शुक्रवार ।।", "प्रीति-भोज-संध्या 06 बजे से"]
      },
      haldi: {
        title: "हल्दी, मेंहदी एवं संगीत",
        parts: {
          haldi: { name: "हल्दी", desc: "हल्दी का सुनहरा रंग और आशीर्वाद" },
          mehendi: { name: "मेंहदी", desc: "मेंहदी, हँसी और अपनों का साथ" },
          sangeet: { name: "संगीत", desc: "गीत-संगीत और नृत्य की शाम" }
        },
        lines: ["दिनांक : 08 दिसम्बर 2026, मंगलवार ।।"]
      },
      vivah: {
        title: "शुभ विवाह",
        parts: {
          baraat: { name: "बारात", desc: "ग्राम चन्दौली से संध्या 3 बजे प्रस्थान" },
          vivah: { name: "शुभ विवाह", desc: "शिवम विवाह भवन में पवित्र फेरे" }
        },
        lines: ["दिनांक : 09 दिसम्बर 2026 बुधवार ।।"],
        note: "बारात मेरे निवास स्थान ग्राम चन्दौली से संध्या 3 बजे शिवम विवाह भवन, भीखनपुर, NH-77, मुजफ्फरपुर के लिए प्रस्थान करेगी ।",
        venue: "शिवम विवाह भवन, भीखनपुर, NH-77, मुजफ्फरपुर",
        dressCode: "",
        pherasMuhurat: ""
      }
    },

    shloka: ["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"],

    ui: {
      open: "निमंत्रण खोलें",
      titleSuffix: "शुभ विवाह निमंत्रण", celebrate: "उत्सव में शामिल हों", secStory: "हमारा निमंत्रण",
      navInvite: "निमंत्रण", navEvents: "कार्यक्रम", navGallery: "चित्र",
      langSwitch: "English",
      playMusic: "संगीत चलाएँ", pauseMusic: "संगीत रोकें", noMusic: "संगीत फ़ाइल अभी जोड़ी नहीं गई",
      secBlessings: "मंगलाचरण",
      secInvitation: "निमंत्रण",
      secCountdown: "शुभ घड़ी की प्रतीक्षा",
      countdownTo: "शुभ विवाह हेतु बारात प्रस्थान तक",
      countdownDone: "शुभ दिन आ गया है",
      days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड",
      secFunctions: "मांगलिक कार्यक्रम",
      venue: "स्थान", dressCode: "परिधान", muhurat: "शुभ मुहूर्त",
      directions: "रास्ता देखें", gcal: "Google Calendar", ics: "कैलेंडर में जोड़ें (.ics)",
      film: "निमंत्रण फ़िल्म देखें",
      secGallery: "चित्र दीर्घा",
      photoSoon: "चित्र शीघ्र",
      secClosing: "सादर आभार",
      thanks: "आपकी उपस्थिति एवं आशीर्वाद से ही यह शुभ अवसर पूर्ण होगा ।",
      share: "निमंत्रण साझा करें", copy: "लिंक कॉपी करें", copied: "लिंक कॉपी हो गया", pdf: "PDF सहेजें",
      rsvp: "R.S.V.P.", top: "ऊपर जाएँ",
      shareText: "आप सादर आमंत्रित हैं",
      close: "बंद करें", prev: "पिछला चित्र", next: "अगला चित्र"
    }
  }
};
