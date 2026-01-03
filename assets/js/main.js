document.addEventListener('DOMContentLoaded', () => {
    // Default language is Hindi as per the document nature, or English.
    // Checking localStorage or defaulting to Hindi (since organization name is Hindi).
    const currentLang = localStorage.getItem('srs-lang') || 'hi';
    setLanguage(currentLang);

    // Button Event Listener
    const langToggle = document.getElementById('langToggle');
    if(langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = document.body.classList.contains('lang-hi') ? 'en' : 'hi';
            setLanguage(newLang);
        });
    }
});

function setLanguage(lang) {
    // Remove both classes first
    document.body.classList.remove('lang-en', 'lang-hi');
    
    // Add specific class
    document.body.classList.add(`lang-${lang}`);
    
    // Update Button Text
    const btn = document.getElementById('langToggle');
    if(btn) {
        btn.innerText = lang === 'en' ? 'हिंदी में पढ़ें' : 'Read in English';
    }

    // Save preference
    localStorage.setItem('srs-lang', lang);
}