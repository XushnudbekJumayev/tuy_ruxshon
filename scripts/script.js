const intro = document.getElementById("intro");
const invitation = document.getElementById("invitation");
const openInviteBtn = document.getElementById("openInviteBtn");
const letterHero = document.getElementById("letterHero");
const languageSwitcher = document.querySelector(".language-switcher");
const languageButtons = document.querySelectorAll(".language-option");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const backgroundMusic = document.getElementById("backgroundMusic");

const targetWeddingDate = new Date("2026-12-15T19:30:00+05:00").getTime();
const OPENING_DURATION_MS = 1000;
const DEFAULT_LANGUAGE = "uz";
const LANGUAGE_STORAGE_KEY = "weddingInvitationLanguage";
const MUSIC_VOLUME = 0.16;
const ONE_SECOND_MS = 1000;
const ONE_MINUTE_MS = ONE_SECOND_MS * 60;
const ONE_HOUR_MS = ONE_MINUTE_MS * 60;
const ONE_DAY_MS = ONE_HOUR_MS * 24;

const LOCALES = {
  ru: {
    pageTitle: "Абдурасул и Муниса | Свадебное приглашение",
    metaDescription: "Свадебное приглашение Абдурасула и Мунисы на 15 Декабря 2026 года.",
    ariaIntro: "Конверт с приглашением",
    ariaEnvelope: "Запечатанный бумажный конверт",
    ariaWeddingDate: "Дата свадьбы",
    ariaCalendar: "Календарь Декабрь 2026 с выделенным 15 Декабря",
    ariaWeddingDay: "День свадьбы",
    ariaOrnamentHero: "Традиционная страница с именами молодоженов",
    ariaVenueDetails: "Место проведения",
    ariaCountdown: "Обратный отсчет",
    envelopeTopNote:
      "<span class=\"flap-note-top\">ВЫ</span><span class=\"flap-note-middle\">ПРИГЛАШЕНЫ</span><span class=\"flap-note-script\">на свадьбу</span>",
    withLove: "с любовью,",
    signatureNames: "Абдурасул\u00a0и\u00a0Муниса",
    ornamentNames:
      "<span class=\"ornament-name-line\">Абдурасул</span><span class=\"ornament-name-amp\">и</span><span class=\"ornament-name-line\">Муниса</span>",
    ornamentMessage: "Спешим сообщить<br />радостную новость:<br />мы женимся!",
    ornamentDay: "15",
    ornamentMonth: "12",
    ornamentYear: "26",
    heroNames: "Дорогие&nbsp;наши<br />родные&nbsp;и&nbsp;<span class=\"no-break\">близкие!</span>",
    openHere: "нажмите",
    lead: "В этот прекрасный день мы соединяем наши сердца и начинаем новую историю - историю нашей любви.<br /><br />Будем счастливы разделить радость этого особенного момента вместе с вами.<br /><br /><strong>С любовью приглашаем вас на нашу свадьбу.</strong>",
    scrollHint: "Прокрутите вниз",
    calendarMonth: "Декабрь, 2026",
    weekdayMon: "ПН",
    weekdayTue: "ВТ",
    weekdayWed: "СР",
    weekdayThu: "ЧТ",
    weekdayFri: "ПТ",
    weekdaySat: "СБ",
    weekdaySun: "ВС",
    locationTitle: "Место проведения",
    venueName: "Ресторан «Oq saroy»",
    venueAddress: "Бухарская область, Пешкунский район",
    venueAddresstuman: "Ориентир: после стадиона Пешку",
    mapLinkYandex: "Яндекс Карты",
    mapLinkGoogle: "Google Карты",
    countdownTitle: "Считаем каждое мгновение",
    unitDays: "Дней",
    unitHours: "Часов",
    unitMinutes: "Минут",
    unitSeconds: "Секунд",
    countdownWaiting: "Мы ждем вас.",
    countdownToday: "Этот день настал. Мы ждем вас.",
    languageSwitcher: "Выбор языка",
    languageRuLabel: "Русский",
    languageUzLabel: "O'zbekcha",
    musicPlayLabel: "Включить музыку",
    musicPauseLabel: "Остановить музыку",
    staticWeddingDate: "15 Декабря 2026, 19:30",
  },
  uz: {
    pageTitle: "Abdurasul va Munisa | To'y taklifnomasi",
    metaDescription: "Abdurasul va Munisaning 2026-yil 15-dekabrdagi to'y taklifnomasi.",
    ariaIntro: "Taklifnoma konverti",
    ariaEnvelope: "Muhrlangan qog'oz konvert",
    ariaWeddingDate: "To'y sanasi",
    ariaCalendar: "2026-yil dekabr kalendari, 15-dekabr belgilangan",
    ariaWeddingDay: "To'y kuni",
    ariaOrnamentHero: "Yoshlar ismlari tushirilgan an'anaviy sahifa",
    ariaVenueDetails: "To'yxona manzili",
    ariaCountdown: "Orqaga sanoq",
    envelopeTopNote:
      "<span class=\"flap-note-top\">SIZNI</span><span class=\"flap-note-middle\">VISOL OQSHOMIGA</span><span class=\"flap-note-script\">taklif etamiz</span>",
    withLove: "muhabbat ila,",
    signatureNames: "Abdurasul\u00a0va\u00a0Munisa",
    ornamentNames:
      "<span class=\"ornament-name-line\">Abdurasul</span><span class=\"ornament-name-amp\">va</span><span class=\"ornament-name-line\">Munisa</span>",
    ornamentMessage: "Quvonchli yangilik:<br />biz turmush<br />quramiz!",
    ornamentDay: "15",
    ornamentMonth: "12",
    ornamentYear: "26",
    heroNames: "Aziz\u00a0va\u00a0qadrdon<br /><span class=\"no-break\">Mehmonimiz!</span>",
    openHere: "ochish",
    lead: "Hayotimizdagi eng baxtli kunlardan biri - nikoh to'yimizni siz bilan birga nishonlashni niyat qildik.<br /><br />Sizni ushbu kechamizga samimiy taklif etamiz.<br /><br /><strong>Quvonchli kunimizda aziz mehmonimiz bo'lishingizni intizorlik bilan kutamiz.</strong>",
    scrollHint: "Pastga tushuring",
    calendarMonth: "Dekabr, 2026",
    weekdayMon: "DU",
    weekdayTue: "SE",
    weekdayWed: "CHOR",
    weekdayThu: "PAY",
    weekdayFri: "JU",
    weekdaySat: "SHA",
    weekdaySun: "YA",
    locationTitle: "To'y manzili",
    venueName: "Oq saroy to'yxonasi",
    venueAddress: "Buxoro viloyati, Peshku tumani",
    venueAddresstuman: "Mo'ljal: Peshku futbol stadionidan keyin",
    mapLinkYandex: "Yandex xarita",
    mapLinkGoogle: "Google xarita",
    countdownTitle: "Har lahzani sanayapmiz",
    unitDays: "Kun",
    unitHours: "Soat",
    unitMinutes: "Daqiqa",
    unitSeconds: "Soniya",
    countdownWaiting: "Sizni intiqlik bilan kutamiz.",
    countdownToday: "Bugun aynan o'sha kun. Sizni kutamiz.",
    languageSwitcher: "Til tanlash",
    languageRuLabel: "Ruscha",
    languageUzLabel: "O'zbekcha",
    musicPlayLabel: "Musiqani yoqish",
    musicPauseLabel: "Musiqani to'xtatish",
    staticWeddingDate: "15 Dekabr 2026, 19:30",
  },
};

let isOpening = false;
let currentLanguage = DEFAULT_LANGUAGE;
let ornamentNameFitFrame = null;

function resetPageScrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getLocale() {
  return LOCALES[currentLanguage] || LOCALES[DEFAULT_LANGUAGE];
}

function isMusicPlaying() {
  if (!backgroundMusic) {
    return false;
  }

  return !backgroundMusic.paused && !backgroundMusic.ended;
}

function updateMusicToggleState(isPlaying = false) {
  if (!musicToggleBtn) {
    return;
  }

  const locale = getLocale();
  const label = isPlaying ? locale.musicPauseLabel : locale.musicPlayLabel;

  musicToggleBtn.classList.toggle("is-playing", isPlaying);
  musicToggleBtn.setAttribute("aria-pressed", isPlaying ? "true" : "false");
  musicToggleBtn.setAttribute("aria-label", label);
  musicToggleBtn.setAttribute("title", label);
}

function playBackgroundMusic() {
  if (!backgroundMusic) {
    return;
  }

  backgroundMusic.loop = true;
  backgroundMusic.volume = MUSIC_VOLUME;

  const playPromise = backgroundMusic.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise
      .then(() => {
        updateMusicToggleState(true);
      })
      .catch(() => {
        updateMusicToggleState(false);
      });
    return;
  }

  updateMusicToggleState(isMusicPlaying());
}

function stopBackgroundMusic() {
  if (!backgroundMusic) {
    return;
  }

  backgroundMusic.pause();
  updateMusicToggleState(false);
}

function toggleBackgroundMusic() {
  if (!backgroundMusic) {
    return;
  }

  if (isMusicPlaying()) {
    stopBackgroundMusic();
    return;
  }

  playBackgroundMusic();
}

function setLanguageSwitcherState(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function saveLanguagePreference(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (_error) {
    // Ignore storage access issues (private mode, disabled storage, etc.).
  }
}

function getSavedLanguagePreference() {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return LOCALES[savedLanguage] ? savedLanguage : null;
  } catch (_error) {
    return null;
  }
}

function getInitialLanguage() {
  return getSavedLanguagePreference() || DEFAULT_LANGUAGE;
}

function fitOrnamentNames() {
  const namesBlock = document.querySelector(".ornament-names");
  if (!namesBlock) {
    return;
  }

  const nameLines = Array.from(namesBlock.querySelectorAll(".ornament-name-line"));
  if (!nameLines.length) {
    return;
  }

  namesBlock.style.setProperty("--ornament-name-fit-scale", "1");
  nameLines.forEach((line) => {
    line.style.setProperty("--line-fit-scale", "1");
  });

  const availableWidth = namesBlock.clientWidth;
  if (!availableWidth) {
    return;
  }

  const sideSafePadding = Math.max(8, availableWidth * 0.045);
  const safeWidth = Math.max(0, availableWidth - sideSafePadding * 2);
  if (!safeWidth) {
    return;
  }

  nameLines.forEach((line) => {
    const lineWidth = line.scrollWidth;
    if (!lineWidth) {
      return;
    }

    const fitScale = Math.max(0.68, Math.min(1, (safeWidth / lineWidth) * 0.985));
    line.style.setProperty("--line-fit-scale", fitScale.toFixed(3));
  });
}

function scheduleOrnamentNameFit() {
  if (ornamentNameFitFrame !== null) {
    window.cancelAnimationFrame(ornamentNameFitFrame);
  }

  ornamentNameFitFrame = window.requestAnimationFrame(() => {
    fitOrnamentNames();
    ornamentNameFitFrame = null;
  });
}

function applyTranslations(lang = DEFAULT_LANGUAGE) {
  if (!LOCALES[lang]) {
    return;
  }

  currentLanguage = lang;
  setLanguageSwitcherState(lang);
  const locale = getLocale();

  document.documentElement.lang = lang;
  document.title = locale.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", locale.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && Object.prototype.hasOwnProperty.call(locale, key)) {
      node.textContent = locale[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.getAttribute("data-i18n-html");
    if (key && Object.prototype.hasOwnProperty.call(locale, key)) {
      node.innerHTML = locale[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const rawMapping = node.getAttribute("data-i18n-attr");
    if (!rawMapping) {
      return;
    }

    rawMapping.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((item) => item.trim());
      if (!attr || !key) {
        return;
      }
      if (Object.prototype.hasOwnProperty.call(locale, key)) {
        node.setAttribute(attr, locale[key]);
      }
    });
  });

  const countdownMessage = document.getElementById("countdownMessage");
  if (countdownMessage) {
    countdownMessage.textContent = locale.countdownWaiting;
  }

  scheduleOrnamentNameFit();
  updateMusicToggleState(isMusicPlaying());
}

function openInvitation() {
  if (isOpening) {
    return;
  }

  isOpening = true;
  intro.classList.add("opened");
  openInviteBtn.setAttribute("aria-expanded", "true");
  playBackgroundMusic();

  window.setTimeout(() => {
    openInviteBtn.blur();
    document.body.classList.remove("intro-active");
    resetPageScrollToTop();
    window.requestAnimationFrame(resetPageScrollToTop);

    document.body.classList.add("invitation-visible");
    invitation.setAttribute("aria-hidden", "false");
    intro.classList.add("fade-out");

    revealVisibleSections();
    window.setTimeout(() => {
      intro.hidden = true;
    }, 900);
  }, OPENING_DURATION_MS);
}

function revealVisibleSections() {
  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((node) => node.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  reveals.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
    observer.observe(node);
  });
}

function observeHeroVisibility() {
  if (!letterHero) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document.body.classList.add("hero-in-view");
    return;
  }

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        document.body.classList.toggle("hero-in-view", entry.isIntersecting);
      });
    },
    {
      threshold: 0.22,
    }
  );

  heroObserver.observe(letterHero);
}

function setCountdownValues(days, hours, minutes, seconds) {
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function updateCountdown() {
  const now = Date.now();
  const difference = targetWeddingDate - now;
  const countdownMessage = document.getElementById("countdownMessage");
  const locale = getLocale();

  if (difference <= 0) {
    setCountdownValues(0, 0, 0, 0);
    countdownMessage.textContent = locale.countdownToday;
    return false;
  }

  const days = Math.floor(difference / ONE_DAY_MS);
  const hours = Math.floor((difference % ONE_DAY_MS) / ONE_HOUR_MS);
  const minutes = Math.floor((difference % ONE_HOUR_MS) / ONE_MINUTE_MS);
  const seconds = Math.floor((difference % ONE_MINUTE_MS) / ONE_SECOND_MS);

  setCountdownValues(days, hours, minutes, seconds);
  countdownMessage.textContent = locale.countdownWaiting;
  return true;
}

function handleLanguageSwitcherClick(event) {
  const button = event.target.closest(".language-option");
  if (!button) {
    return;
  }

  const selectedLanguage = button.dataset.language;
  if (!selectedLanguage || selectedLanguage === currentLanguage || !LOCALES[selectedLanguage]) {
    return;
  }

  applyTranslations(selectedLanguage);
  updateCountdown();
  saveLanguagePreference(selectedLanguage);
}

openInviteBtn.addEventListener("click", openInvitation);
if (languageSwitcher) {
  languageSwitcher.addEventListener("click", handleLanguageSwitcherClick);
}
if (musicToggleBtn) {
  musicToggleBtn.addEventListener("click", toggleBackgroundMusic);
}
if (backgroundMusic) {
  backgroundMusic.loop = true;
  backgroundMusic.volume = MUSIC_VOLUME;
}

document.body.classList.add("intro-active");
resetPageScrollToTop();
observeHeroVisibility();
applyTranslations(getInitialLanguage());
window.addEventListener("resize", scheduleOrnamentNameFit);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    scheduleOrnamentNameFit();
  });
}
updateCountdown();
const countdownInterval = window.setInterval(() => {
  const hasTimeLeft = updateCountdown();
  if (!hasTimeLeft) {
    window.clearInterval(countdownInterval);
  }
}, 1500);

function toggleCountdownState() {
  const countdown = document.getElementById("countdown");
  const countdownStatic = document.getElementById("countdownStatic");
  if (!countdown || !countdownStatic) return;

  if (countdown.classList.contains("hide-state")) {
    countdown.classList.remove("hide-state");
    countdownStatic.classList.remove("show-state");
    countdownStatic.setAttribute("aria-hidden", "true");
    countdown.setAttribute("aria-hidden", "false");
  } else {
    countdown.classList.add("hide-state");
    countdownStatic.classList.add("show-state");
    countdownStatic.setAttribute("aria-hidden", "false");
    countdown.setAttribute("aria-hidden", "true");
  }
}

window.setInterval(toggleCountdownState, 2500);
