export const ZIKRS = {
  Bismillah: "In the name of Allah",
  Alhamdulillah: "All praise is due to Allah",
  "Allahu Akbar": "Allah is the Greatest",
  Subhanallah: "Allah is free from imperfection",
  "La ilaha illallah": "There is none worthy of worship except Allah",
  "Subhan-Allahi wa bihamdih": "Allah is free from imperfection",
  Astaghfirullah: "I seek forgiveness from Allah",
  "Subhan-Allahi wa bihamdihi, Subhan-Allahil-Azim":
    "Glory be to Allah and His is the praise, (and) Allah, the Greatest is free from imperfection",
  "Ya hayyu ya qayyum bi-rahmatika astagheeth":
    "O Living, O Self-Sustaining Sustainer! In Your Mercy do I seek relief",
  "Subhan-Allah, wal-hamdu-lillah, wa la ilaha illallah, wa Allahu Akbar":
    "Glory is to Allah, praise is to Allah, none has the right to be worshiped but Allah and Allah is the Most Great",
  "La hawla wa la quwwata illa billah":
    "There is no power and no strength except with Allah",
  "Subhan-Allahi wa bihamdih, Astaghfirullah wa atubu ilaih":
    "Allah is free from imperfection, I beg forgiveness from Allah and I turn to Him in repentance",
};

export const WAQT_OPTIONS = [
  { value: "All", label: "All" },
  { value: "Fajr", label: "Fajr" },
  { value: "Duhr", label: "Duhr" },
  { value: "Asr", label: "Asr" },
  { value: "Maghrib", label: "Maghrib" },
  { value: "Isha", label: "Isha" },
  { value: "Tahajjud", label: "Tahajjud" },
];

export const TIMING_VIEW_OPTIONS = [
  { value: "Daywise", label: "Daywise" },
  { value: "Weekwise", label: "Weekwise" },
  { value: "Monthwise", label: "Monthwise" },
];

export const WAQT_NAMAJ = {
  Fajr: [
    "Sunnah Muakkadah: <span>2 Rakats</span>",
    "Farz: <span>2 Rakats</span>",
  ],
  Duhr: [
    "Sunnah Muakkadah: <span>4 Rakats</span>",
    "Farz: <span>4 Rakats</span>",
    "Sunnah Muakkadah: <span>2 Rakats</span>",
    "Nawafil: <span>2 Rakats</span> (Optional)",
  ],
  Asr: [
    "Sunnah Ghair Muakkadah: <span>4 Rakats</span> (Optional)",
    "Farz: <span>4 Rakats</span>",
  ],
  Maghrib: [
    "Farz: <span>3 Rakats</span>",
    "Sunnah Muakkadah: <span>2 Rakats</span>",
    "Nawafil: <span>2 Rakats</span> (Optional)",
  ],
  Isha: [
    "Sunnah Ghair Muakkadah: <span>4 Rakats</span> (Optional)",
    "Farz: <span>4 Rakats</span>",
    "Sunnah Muakkadah: <span>2 Rakats</span>",
    "Nawafil: <span>2 Rakats</span> (Optional)",
    "Witr: <span>3 Rakats</span>",
  ],
};

export const WAQT_TASBIH = {
  Fajr: "",
  Duhr: "",
  Asr: "",
  Maghrib: "",
  Isha: "",
};

export const LOCATIONS = [
  { label: "Amritsar", value: "+00:53:56" },
  { label: "Ayodhya", value: "+00:24:24" },
  { label: "Agartala", value: "-00:01:04" },
  { label: "Agra", value: "+00:51:16" },
  { label: "Ajmer", value: "+00:54:44" },
  { label: "Aligarh", value: "+00:41:04" },
  { label: "Asansol", value: "+00:05:32" },
  { label: "Ahmedabad", value: "+01:03:00" },
  { label: "Imphal", value: "-00:00:20" },
  { label: "EnglishBazar", value: "+00:00:52" },
  { label: "Allahabad", value: "+00:25:56" },
  { label: "Cuttack", value: "+00:09:56" },
  { label: "Kathmandu", value: "+00:12:12" },
  { label: "Kathi", value: "+00:02:32" },
  { label: "Kanpur", value: "+00:32:00" },
  { label: "Kashi", value: "+00:21:16" },
  { label: "Canning", value: "-00:01:16" },
  { label: "Coochbihar", value: "-00:08:32" },
  { label: "Krishnanagar", value: "-00:00:36" },
  { label: "Cochin", value: "+00:48:28" },
  { label: "Katihar", value: "+00:03:08" },
  { label: "Katwa", value: "+00:00:52" },
  { label: "Kohima", value: "-00:23:00" },
  { label: "Calicut", value: "+01:00:42" },
  { label: "Khudra", value: "+00:11:08" },
  { label: "Gaya", value: "+00:13:16" },
  { label: "Gazipur", value: "+00:19:00" },
  { label: "Giridi", value: "+00:08:08" },
  { label: "Goyalpara", value: "-00:09:00" },
  { label: "Gwalior", value: "+00:40:44" },
  { label: "Guwahati", value: "-00:13:36" },
  { label: "Goa", value: "+00:57:48" },
  { label: "Garhbeta", value: "+00:04:08" },
  { label: "Gopiballavpur", value: "+00:05:48" },
  { label: "Ghatshila", value: "+00:07:32" },
  { label: "Ghatal", value: "+00:02:28" },
  { label: "Chaibasa", value: "+00:10:08" },
  { label: "Chandannagar", value: "+00:00:04" },
  { label: "Chuchura", value: "+00:00:36" },
  { label: "Chhapra", value: "+00:14:32" },
  { label: "Jabbalpur", value: "+00:01:32" },
  { label: "Jalpaiguri", value: "-00:01:32" },
  { label: "Jammu", value: "+00:51:08" },
  { label: "Jara", value: "+00:03:00" },
  { label: "Jamirta", value: "-00:05:04" },
  { label: "Kolkata", value: "+00:00:00" },
  { label: "Junagarh", value: "-01:11:44" },
  { label: "Tatanagar", value: "+00:08:33" },
  { label: "DiamondHarbour", value: "+00:00:32" },
  { label: "Daltonnagar", value: "+00:17:08" },
  { label: "Dibrugarh", value: "+00:26:11" },
  { label: "Travancore", value: "-00:45:24" },
  { label: "Trivandrum", value: "+00:45:25" },
  { label: "Tarkeshwar", value: "+00:01:16" },
  { label: "Tamluk", value: "+00:02:12" },
  { label: "Tejpur", value: "-00:17:44" },
  { label: "Darjeeling", value: "+00:00:20" },
  { label: "Delhi", value: "+00:44:32" },
  { label: "Dumka", value: "00:04:28" },
  { label: "Dehradun", value: "+00:41:12" },
  { label: "Darbhanga", value: "+00:09:48" },
  { label: "Deoghar", value: "+00:05:36" },
  { label: "Darka", value: "+01:17:32" },
];

export const URLS = {
  HOME: "/PrayerTimings/",
  LEARN_ARABIC: "/PrayerTimings/learn-arabic",
  TASBIH_COUNTER: "/PrayerTimings/tasbih-counter",
  HIJRI_CALENDAR: "/PrayerTimings/hijri-calendar",
  NAMES_OF_ALLAH: "/PrayerTimings/99-names-of-Allah",
  DUAS: "/PrayerTimings/duas",
};

export const ACTIONS = {
  NAMES_OF_ALLAH: "ACTIONS/NAMES_OF_ALLAH",
};

export const SAGA_ACTIONS = {
  NAMES_OF_ALLAH: "SAGA_ACTIONS/NAMES_OF_ALLAH",
  DUAS: "SAGA_ACTIONS/DUAS",
};
