// Language data 
const translations = {
    en:{
        heroTitle: "Hi, I'm Victor 👋"
        heroSubtitle: "Creative Developer & Violinist",
        aboutTitle:"About Me", 
        aboutText:"I'm a passionate creative who blends music and technonology. I build website. play the violin, and explpre AI tools.", 
    },
    ru: {
        heroTitle: "Привет, я Виктор 👋",
        heroSubtitle: "Креативный разработчик и скрипач",
        aboutTitle:  "Обо мне",
        aboutText: "Я увлечённый творец, который сочетает музыку и технологии. Я создаю сайты, играю на скрипке и исследую инструменты искусственного интеллекта.",

    },
     zh: {
        heroTitle: "嗨，我是Victor 👋",
        heroSubtitle: "创意开发者和小提琴家",
        aboutTitle: "关于我",
        aboutText: "我是一名充满激情的创意者，融合了音乐与技术。我开发网站，拉小提琴，并探索人工智能工具。",
    },
     hi: {
        heroTitle: "नमस्ते, मैं विक्टर हूँ 👋",
        heroSubtitle: "क्रिएटिव डेवलपर और वायलिन वादक",
        aboutTitle: "मेरे बारे में",
        aboutText: "मैं एक उत्साही रचनात्मक व्यक्ति हूँ जो संगीत और तकनीक को जोड़ता है। मैं वेबसाइट बनाता हूँ, वायलिन बजाता हूँ, और एआई टूल्स का अन्वेषण करता हूँ।",
    },
};

// Grab elements
const languageSelect = document.getElementById('language');

lamguageSelect.addEventListener('change', (e) => {
    const lang = e. target.value;
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').innerText = translation[lang].heroSubtitle;
    document.getElementById('about-title').innerTExt = translation[lang].aboutTitle;
    document.getElementById('about-text').innerText = translations[lang].aboutText;
});