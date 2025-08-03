// Language switching system
let currentLanguage = localStorage.getItem('language') || 'th';

const translations = {
    th: {
        title: "🌟 ไพ่ดวงดาว 7 ดวง 🌟",
        subtitle: "🔮 ปลดล็อกความลึกลับในการเดินทางทางจิตวิญญาณ", 
        // Navigation
        navDaily: "วันนี้",
        navSpreads: "การดูไพ่", 
        navJournal: "บันทึก",
        navAnalytics: "สถิติ",
        navMeditation: "ทำสมาธิ",
        // Settings
        settings: "การตั้งค่า",
        soundEffects: "เสียงประกอบ",
        backgroundMusic: "เพลงพื้นหลัง",
        notifications: "การแจ้งเตือนประจำวัน",
        theme: "ธีม",
        language: "ภาษา",
        themeDefault: "ดั้งเดิม",
        themeDark: "มืด", 
        themeGolden: "ทอง",
        themeNature: "ธรรมชาติ",
        resetDaily: "รีเซ็ตไพ่ประจำวัน",
        close: "ปิด",
        // Daily Reading
        dailyReading: "การดูไพ่ประจำวัน",
        dailyDescription: "เลือกไพ่หนึ่งใบเพื่อดูดวงประจำวันของคุณ",
        clickCard: "คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน",
        yourDailyCard: "ไพ่ประจำวันของคุณ",
        share: "แชร์",
        save: "บันทึก", 
        read: "อ่าน",
        luckyColor: "สีมงคล",
        luckyNumbers: "เลขมงคล", 
        luckyTime: "เวลาดี",
        dailyAffirmation: "คำยืนยันประจำวัน",
        yourSelectedCard: "ไพ่ที่คุณเลือก",
        clickForNew: "คลิกเพื่อเลือกไพ่ใหม่",
        // Three Cards Reading
        threeCardsTitle: "🔮 ดูไพ่ 3 ใบ",
        threeCardsDescription: "เลือกไพ่ 3 ใบสำหรับการดูดวงแบบละเอียด - อดีต ปัจจุบัน อนาคต",
        pickThreeCards: "เลือกไพ่ 3 ใบ",
        pickThreeCardsNew: "ดูไพ่ 3 ใบใหม่",
        past: "อดีต (Past)",
        present: "ปัจจุบัน (Present)",
        future: "อนาคต (Future)",
        threeCardsSummary: "🌟 สรุปการดูไพ่ 3 ใบ",
        saveReading: "บันทึกการดูไพ่นี้",
        newReading: "ดูไพ่ใหม่",
        or: "หรือ",
        // Reset button
        resetDaily: "รีเซ็ต",
        resetDailyTooltip: "รีเซ็ตไพ่ประจำวันเพื่อเลือกใหม่",
        // Numerical table
        numericalTableTitle: "📊 ตารางตัวเลขไพ่ 3 ใบ",
        numericalTableExplanation: "ตารางแสดงการเรียงลำดับตัวเลขจากไพ่ทั้ง 3 ใบ และเลขที่เน้นคือยามปัจจุบัน",
        currentYam: "ยามปัจจุบัน",
        yamHighlightNote: "เลขที่เน้นสีแดง 🌟 คือเลขที่ตรงกับยามปัจจุบัน",
        // Star Sevy-Taek
        navStarSevy: "ดาวเสวยแทรก",
        starSevyTitle: "ตำราดาวเสวยดาวแทรก",
        starSevySubtitle: "ศาสตร์แห่งดาว 7 ดวง - อาทิตย์ จันทร์ อังคาร พุธ พฤหัส ศุกร์ เสาร์",
        starSevyDefinition: "ดาวที่อยู่ในตำแหน่งที่มีอิทธิพลเสริมพลังให้กับบุคคล",
        starTaekDefinition: "ดาวที่อยู่ในตำแหน่งที่สร้างอุปสรรคหรือความท้าทายให้กับบุคคล",
        starCalculationTitle: "คำนวณดาวเสวยดาวแทรก",
        birthDate: "วันเกิด",
        birthTime: "เวลาเกิด",
        calculate: "คำนวณ",
        starSevy: "ดาวเสวย",
        starTaek: "ดาวแทรก",
        interpretation: "ตีความดาวเสวยดาวแทรก",
        manualSelectionTitle: "เลือกดาวเสวยดาวแทรกด้วยตนเอง",
        selectSevyStar: "เลือกดาวเสวย",
        selectTaekStar: "เลือกดาวแทรก",
        interpretationResult: "ผลการตีความ",
        guideTitle: "คู่มือการใช้งาน",
        autoCalculationGuide: "การคำนวณอัตโนมัติ",
        autoCalculationDesc: "ใส่วันเกิดและเวลาเกิดเพื่อให้ระบบคำนวณดาวเสวยและดาวแทรกให้อัตโนมัติ",
        manualSelectionGuide: "การเลือกด้วยตนเอง",
        manualSelectionDesc: "หากทราบดาวเสวยและดาวแทรกแล้ว สามารถเลือกจาก dropdown เพื่อดูการตีความได้ทันที",
        interpretationGuide: "การตีความ",
        interpretationDesc: "ระบบจะแสดงการตีความตามตำราโบราณไทยเมื่อดาวเสวยกระทบกับดาวแทรก"
    },
    en: {
        title: "🌟 Seven Wonderful Stars 🌟",
        subtitle: "🔮 Unlock the mysteries of your spiritual journey",
        // Navigation
        navDaily: "Today",
        navSpreads: "Card Spreads",
        navJournal: "Journal", 
        navAnalytics: "Analytics",
        navMeditation: "Meditation",
        // Settings
        settings: "Settings",
        soundEffects: "Sound Effects",
        backgroundMusic: "Background Music",
        notifications: "Daily Notifications",
        theme: "Theme",
        language: "Language",
        themeDefault: "Default",
        themeDark: "Dark",
        themeGolden: "Golden", 
        themeNature: "Nature",
        resetDaily: "Reset Daily Card",
        close: "Close",
        // Daily Reading
        dailyReading: "Daily Card Reading",
        dailyDescription: "Choose one card to reveal your daily fortune",
        clickCard: "Click the card below to reveal your daily fortune",
        yourDailyCard: "Your Daily Card",
        share: "Share",
        save: "Save",
        read: "Read Aloud",
        luckyColor: "Lucky Color",
        luckyNumbers: "Lucky Numbers", 
        luckyTime: "Lucky Time",
        dailyAffirmation: "Daily Affirmation",
        yourSelectedCard: "Your Selected Card",
        clickForNew: "Click to draw a new card",
        // Three Cards Reading
        threeCardsTitle: "🔮 Pick 3 Cards",
        threeCardsDescription: "Choose 3 cards for a detailed reading - Past, Present, Future",
        pickThreeCards: "Pick 3 Cards",
        pickThreeCardsNew: "Pick 3 New Cards",
        past: "Past",
        present: "Present",
        future: "Future",
        threeCardsSummary: "🌟 Three Cards Reading Summary",
        saveReading: "Save This Reading",
        newReading: "New Reading",
        or: "or",
        // Reset button
        resetDaily: "Reset",
        resetDailyTooltip: "Reset daily card to pick a new one",
        // Numerical table
        numericalTableTitle: "📊 3-Card Numerical Table",
        numericalTableExplanation: "Table showing numerical sequences from all 3 cards with current Yam numbers highlighted",
        currentYam: "Current Yam",
        yamHighlightNote: "Red highlighted numbers 🌟 match the current Yam",
        // Star Sevy-Taek
        navStarSevy: "Star Sevy-Taek",
        starSevyTitle: "Star Sevy-Taek System",
        starSevySubtitle: "Science of 7 Stars - Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn",
        starSevyDefinition: "Sevy Star: A star positioned to enhance and empower the individual",
        starTaekDefinition: "Taek Star: A star positioned to create obstacles or challenges for the individual",
        starCalculationTitle: "Calculate Star Sevy-Taek",
        birthDate: "Birth Date",
        birthTime: "Birth Time",
        calculate: "Calculate",
        starSevy: "Sevy Star",
        starTaek: "Taek Star",
        interpretation: "Star Sevy-Taek Interpretation",
        manualSelectionTitle: "Manual Star Sevy-Taek Selection",
        selectSevyStar: "Select Sevy Star",
        selectTaekStar: "Select Taek Star",
        interpretationResult: "Interpretation Result",
        guideTitle: "User Guide",
        autoCalculationGuide: "Automatic Calculation",
        autoCalculationDesc: "Enter birth date and time for automatic star calculations",
        manualSelectionGuide: "Manual Selection",
        manualSelectionDesc: "If you know your stars, select from dropdowns for instant interpretation",
        interpretationGuide: "Interpretation",
        interpretationDesc: "System displays interpretation based on ancient Thai astrological texts when Sevy and Taek stars interact"
    }
};

// Daily quotes rotation
const dailyQuotes = {
    th: [
        "🔮 ปลดล็อกความลึกลับในการเดินทางทางจิตวิญญาณ",
        "ค้นพบชะตากรรมของคุณ ทีละใบไพ่",
        "ทุกช่วงเวลามีความเป็นไปได้ไร้ขีดจำกัด",
        "ที่ซึ่งภูมิปัญญาโบราณพบกับข้อมูลเชิงลึกสมัยใหม่",
        "เปลี่ยนแปลงชีวิตผ่านการนำทางจากจักรวาล",
        "โอบกอดพลังวิเศษภายในตัวคุณ",
        "อนาคตของคุณเริ่มต้นด้วยทางเลือกวันนี้"
    ],
    en: [
        "🔮 Unlock the mysteries of your spiritual journey",
        "Discover your destiny, one card at a time",
        "Every moment holds infinite possibilities", 
        "Where ancient wisdom meets modern insight",
        "Transform your life through cosmic guidance",
        "Embrace the magic within you",
        "Your future begins with today's choice"
    ]
};

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUILanguage();
    updateDailyQuote();
}

function updateUILanguage() {
    const t = translations[currentLanguage];
    
    // Update title and subtitle
    document.querySelector('h1').innerHTML = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    
    // Update navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    const navKeys = ['navDaily', 'navSpreads', 'navJournal', 'navAnalytics', 'navMeditation'];
    navTabs.forEach((tab, index) => {
        const icon = tab.querySelector('i').outerHTML;
        tab.innerHTML = `${icon} ${t[navKeys[index]]}`;
    });
    
    // Update main content sections
    updateMainContent(t);
    
    // Update 3-card section
    updateThreeCardsLanguage(t);
}

function updateThreeCardsLanguage(t) {
    // Update 3-card section title and description
    const threeCardsTitle = document.querySelector('.three-cards-section h3');
    if (threeCardsTitle) {
        threeCardsTitle.textContent = t.threeCardsTitle;
    }
    
    const threeCardsDescription = document.querySelector('.three-cards-section .description');
    if (threeCardsDescription) {
        threeCardsDescription.textContent = t.threeCardsDescription;
    }
    
    // Update section divider
    const sectionDivider = document.querySelector('.section-divider span');
    if (sectionDivider) {
        sectionDivider.textContent = t.or;
    }
    
    // Update button text
    const pickButton = document.getElementById('pick3CardsBtn');
    if (pickButton) {
        if (pickButton.innerHTML.includes('ใหม่') || pickButton.innerHTML.includes('New')) {
            pickButton.innerHTML = `<i class="fas fa-redo"></i> ${t.pickThreeCardsNew}`;
        } else {
            pickButton.innerHTML = `<i class="fas fa-magic"></i> ${t.pickThreeCards}`;
        }
    }
    
    // Update position labels
    const pastLabel = document.querySelector('#pastCard').parentNode.querySelector('.position-label');
    const presentLabel = document.querySelector('#presentCard').parentNode.querySelector('.position-label');
    const futureLabel = document.querySelector('#futureCard').parentNode.querySelector('.position-label');
    
    if (pastLabel) pastLabel.textContent = t.past;
    if (presentLabel) presentLabel.textContent = t.present;
    if (futureLabel) futureLabel.textContent = t.future;
    
    // Update summary section
    const summaryTitle = document.querySelector('#threeCardsSummary h4');
    if (summaryTitle) {
        summaryTitle.textContent = t.threeCardsSummary;
    }
    
    // Update action buttons
    const saveButton = document.querySelector('[onclick="saveThreeCardsReading()"]');
    const resetButton = document.querySelector('[onclick="resetThreeCards()"]');
    
    if (saveButton) {
        saveButton.innerHTML = `<i class="fas fa-save"></i> ${t.saveReading}`;
    }
    if (resetButton) {
        resetButton.innerHTML = `<i class="fas fa-redo"></i> ${t.newReading}`;
    }
    
    // Update reset daily button
    const resetDailyBtn = document.querySelector('.reset-daily-btn');
    if (resetDailyBtn) {
        resetDailyBtn.innerHTML = `<i class="fas fa-redo"></i> ${t.resetDaily}`;
        resetDailyBtn.title = t.resetDailyTooltip;
    }
    
    // Update numerical table elements
    const numericalTableTitle = document.getElementById('numericalTableTitle');
    const numericalTableExplanation = document.getElementById('numericalTableExplanation');
    
    if (numericalTableTitle) {
        numericalTableTitle.textContent = t.numericalTableTitle;
    }
    if (numericalTableExplanation) {
        numericalTableExplanation.textContent = t.numericalTableExplanation;
    }
}

function updateMainContent(t) {
    // Daily Reading Tab
    const dailyTitle = document.querySelector('#dailyTab h2');
    if (dailyTitle) dailyTitle.textContent = t.dailyReading;
    
    const dailyDesc = document.querySelector('#dailyTab .description');
    if (dailyDesc) dailyDesc.textContent = t.dailyDescription;
    
    const statusText = document.getElementById('statusText');
    if (statusText && !hasPickedToday) statusText.textContent = t.clickCard;
    
    // Update settings
    const settingsTitle = document.querySelector('.settings-content h3');
    if (settingsTitle) {
        settingsTitle.innerHTML = `<i class="fas fa-cog"></i> ${t.settings}`;
    }
}

function updateDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quotes = dailyQuotes[currentLanguage];
    const selectedQuote = quotes[dayOfYear % quotes.length];
    
    const quoteElement = document.getElementById('dailyQuote');
    if (quoteElement) {
        quoteElement.textContent = `"${selectedQuote}"`;
    }
}

// English translations for card meanings
const CARD_TRANSLATIONS = {
    'กดุมภะ1.png': {
        name: 'Kumbha (Water Bearer)',
        meaning: 'Financial fortune, wealth, asset accumulation. Today is a good day for investment and savings.',
        description: 'This card signifies abundance and prosperity in life. It shows good financial opportunities, asset accumulation, and economic growth.'
    },
    'กดุมภะ2.png': {
        name: 'Kumbha (Water Bearer)',
        meaning: 'Financial wealth, prosperity, returns from investments. Be careful with spending.',
        description: 'Wealth and prosperity, showing returns from past efforts and growth in financial stability.'
    },
    'กัมมะ1.png': {
        name: 'Kamma (Karma)',
        meaning: 'Karma, actions, consequences. Today, do good deeds as you will receive good returns.',
        description: 'The card of karmic law, showing the consequences of actions that return to us. Good deeds bring happiness, bad deeds bring suffering.'
    },
    'กัมมะ2.png': {
        name: 'Kamma (Karma)',
        meaning: 'Receiving consequences from past actions. Stay calm and patient, good things are coming.',
        description: 'Present actions determine the future. Use wisdom in all decisions and actions.'
    },
    'เคหัง.png': {
        name: 'Kehang (Property)',
        meaning: 'Property, real estate, housing. Today is good for real estate matters.',
        description: 'Card of property and real estate, signifying investment in housing, land trading, and creating value from assets.'
    }
    // Add more translations as needed...
};

function getCardData(cardFile) {
    const originalData = CARD_DATA[cardFile];
    if (currentLanguage === 'en' && CARD_TRANSLATIONS[cardFile]) {
        return {
            ...originalData,
            name: CARD_TRANSLATIONS[cardFile].name,
            meaning: CARD_TRANSLATIONS[cardFile].meaning,
            description: CARD_TRANSLATIONS[cardFile].description
        };
    }
    return originalData;
}

// Enhanced Thai Fortune Cards Configuration
const CARD_DATA = {
    'กดุมภะ1.png': {
        name: 'กดุมภะ (Money)',
        innerText: 'affluence',
        meaning: 'การเงินรุ่งเรือง ความมั่งคั่งกำลังมาหาคุณ ธุรกิจเติบโต รายได้เพิ่มขึ้น โอกาสทางการเงินใหม่ๆ กำลังเข้ามา',
        number:'6',
        description: 'ไพ่กดุมภะด้วยความหมายแห่งความมั่งคั่ง เมื่อได้ไพ่นี้ในด้านความร่ำรวย หมายถึงคุณกำลังเข้าสู่ช่วงเวลาแห่งการเจริญรุ่งเรืองทางการเงิน อาจมีโอกาสใหม่ๆ ทางธุรกิจ เงินทองไหลเวียนดี การลงทุนได้ผล หรือได้รับความช่วยเหลือจากผู้มีอำนาจ ควรใช้โอกาสนี้อย่างชาญฉลาดและออมเงินไว้สำหรับอนาคต',
        cardNameMeaning: 'การเงิน รวมไปถึงรายรับ-รายจ่ายที่เกิดขึ้นกับตัวเจ้าชะตา หรือการที่เลี้ยงดูบุคคลที่อยู่ในการดูแลของตนเอง หรือ บริวารที่เจ้าชะตาดูแล'
    },
    'กดุมภะ2.png': {
        name: 'กดุมภะ (Money)',
        innerText: 'Expense',
        number:'6',
        meaning: 'ระวังเรื่องการเงิน รายจ่ายเพิ่มขึ้น อาจมีค่าใช้จ่ายที่ไม่คาดคิด ควรใช้จ่ายอย่างรอบคอบ',
        description: 'ไพ่กดุมภะในด้านการใช้จ่าย เตือนให้ระมัดระวังเรื่องการเงิน อาจมีรายจ่ายที่เพิ่มขึ้นกว่าปกติ หรือมีค่าใช้จ่ายฉุกเฉินที่ต้องจ่าย การลงทุนควรพิจารณาให้รอบคอบ อย่าใช้จ่ายฟุ่มเฟือย ควรทำบัญชีรายรับรายจ่ายและวางแผนการเงินให้ดี อาจเป็นช่วงที่ต้องเสียสละหรือจ่ายเพื่อสิ่งที่สำคัญ แต่จงใช้จ่ายอย่างมีเหตุผล',
        cardNameMeaning: 'การเงิน รวมไปถึงรายรับ-รายจ่ายที่เกิดขึ้นกับตัวเจ้าชะตา หรือการที่เลี้ยงดูบุคคลที่อยู่ในการดูแลของตนเอง หรือ บริวารที่เจ้าชะตาดูแล'
    },
    'กัมมะ1.png': {
        name: 'กัมมะ (Karma)',
        innerText: 'Work',
        number:'2',
        meaning:'ความขะมักเขม้น ความพยายามจะส่งผลดี งานการมีความคืบหน้า ผลงานได้รับการยอมรับ',
        description: 'ไพ่กัมมะในด้านการงาน หมายถึงคุณกำลังเข้าสู่ช่วงแห่งการทำงานหนัก และความพยายามจะเริ่มเห็นผล งานที่ทำจะมีความคืบหน้าไปในทิศทางที่ดี อาจได้รับมอบหมายงานใหม่ หรือได้โอกาสแสดงความสามารถ การกระทำดีในอดีตจะส่งผลให้ได้รับความไว้วางใจจากเพื่อนร่วมงานและหัวหน้า ควรมุ่งมั่นทำงานด้วยใจซื่อสัตย์และไม่ย่อท้อ',
        cardNameMeaning: 'การทำมาหากิน วิถีการทำมาหากินของเจ้าชะตา กรรมที่เกิดขึ้นจากอดีตชาติ การถึงแก่มรณะกรรมของดวงชะตา'
    },
    'กัมมะ2.png': {
        name: 'กัมมะ (Karma)',
        innerText: 'Karma',
        number:'2',
        meaning: 'กรรมดีส่งผลดี สิ่งที่ทำในอดีตจะส่งผลในปัจจุบัน ได้รับสิ่งที่สมควรแก่การกระทำ',
        description: 'ไพ่กัมมะในด้านกรรม เตือนให้คิดถึงกฎแห่งกรรม สิ่งที่เราทำไปจะส่งผลกลับมา หากทำดีย่อมได้ดี หากทำชั่วย่อมได้ชั่ว ช่วงนี้อาจเป็นเวลาที่ได้รับผลจากการกระทำในอดีต ทั้งดีและไม่ดี ควรทำแต่สิ่งดีๆ มีใจเมตตา ช่วยเหลือผู้อื่น และอดทนต่อสิ่งที่เกิดขึ้น เพราะทุกอย่างมีเหตุผลของมัน การทำบุญและกุศลจะช่วยบรรเทาและสร้างกรรมดีสำหรับอนาคต',
        cardNameMeaning: 'การทำมาหากิน วิถีการทำมาหากินของเจ้าชะตา กรรมที่เกิดขึ้นจากอดีตชาติ การถึงแก่มรณะกรรมของดวงชะตา'
    },
    'เคหัง.png': {
        name: 'เคหัง (House)',
        innerText: 'Property',
        number:'5',
        meaning: 'เรื่องบ้านเรือนมีความเคลื่อนไหว อาจได้ที่ดินหรืออสังหาริมทรัพย์ใหม่ การย้ายบ้านเป็นไปด้วยดี',
        description: 'ไพ่เคหังในด้านทรัพย์สิน บ่งบอกถึงความเคลื่อนไหวในเรื่องบ้านและที่ดิน อาจมีโอกาสซื้อขายอสังหาริมทรัพย์ ได้ที่ดินหรือบ้านใหม่ หรือมีการปรับปรุงบ้านให้ดีขึ้น การลงทุนด้านอสังหาริมทรัพย์มีแนวโน้มดี บ้านเป็นที่พักพิงและฐานที่มั่นคงของชีวิต ควรดูแลรักษาบ้านให้อบอุ่นและเป็นสุข เพราะบ้านที่ดีจะนำพาความเจริญมาให้ทั้งครอบครัว',
        cardNameMeaning: 'เรื่องบ้านเรือนมีความเคลื่อนไหว อาจได้ที่ดินหรืออสังหาริมทรัพย์ใหม่ การย้ายบ้านเป็นไปด้วยดี'
    },
    'เคหัง (2).png': {
        name: 'เคหัง (House)',
        innerText: 'Constructing',
        number:'5',
        meaning: 'การสร้างบ้านหรือปรับปรุงที่อยู่ งานก่อสร้างมีความคืบหน้า ฐานรากชีวิตกำลังแข็งแกร่งขึ้น',
        description: 'ไพ่เคหังในด้านการก่อสร้าง แสดงถึงการสร้างสรรค์และพัฒนาที่อยู่อาศัย อาจมีการสร้างบ้านใหม่ ต่อเติม หรือปรับปรุงบ้านให้ดีขึ้น นอกจากนี้ยังหมายถึงการสร้างฐานรากที่แข็งแกร่งในชีวิต ทั้งทางด้านการเงิน ครอบครัว และอาชีพ เป็นช่วงเวลาแห่งการลงทุนเพื่ออนาคต การวางแผนระยะยาว และการสร้างสิ่งที่ยั่งยืน ควรใช้ความอดทนและมุ่งมั่นในการดำเนินโครงการต่างๆ ให้สำเร็จ',
        cardNameMeaning: 'เรื่องบ้านเรือนมีความเคลื่อนไหว อาจได้ที่ดินหรืออสังหาริมทรัพย์ใหม่ การย้ายบ้านเป็นไปด้วยดี'
    },
    'ญาติ.png': {
        name: 'ญาติ (Relatives)',
        innerText: 'Family',
        number:'6',
        meaning: 'ครอบครัวมีความสุข ญาติพี่น้องให้ความช่วยเหลือ ความสัมพันธ์ในครอบครัวอบอุ่น มีกิจกรรมร่วมกัน',
        description: 'ไพ่ญาติในด้านครอบครัว บ่งบอกถึงความอบอุ่นและความสัมพันธ์ที่ดีในครอบครัว ญาติพี่น้องจะมีความเอื้อเฟื้อเผื่อแผ่กัน อาจมีการรวมตัวกันในโอกาสพิเศษ หรือได้รับความช่วยเหลือจากสมาชิกในครอบครัว ความรักและความผูกพันของครอบครัวจะเป็นกำลังใจสำคัญ ควรให้เวลากับครอบครัวมากขึ้น เอาใจใส่ดูแลผู้ใหญ่ และสร้างความสัมพันธ์ที่ดีกับญาติพี่น้อง เพราะครอบครัวคือรากฐานสำคัญของชีวิต',
        cardNameMeaning: 'ครอบครัวมีความสุข ญาติพี่น้องให้ความช่วยเหลือ ความสัมพันธ์ในครอบครัวอบอุ่น มีกิจกรรมร่วมกัน'
    },
    'ญาติ2.png': {
        name: 'ญาติ (Relatives)',
        innerText: 'Pass Away',
        number:'6',
        meaning: 'การจากลาของคนใกล้ชิด ความเศร้าโศกแต่ต้องยอมรับ อาจมีข่าวไม่ดีเกี่ยวกับญาติพี่น้อง ควรเตรียมใจ',
        description: 'ไพ่ญาติในด้านการจากลา เป็นไพ่ที่เตือนให้เตรียมใจกับการสูญเสีย อาจมีข่าวไม่ดีเกี่ยวกับสุขภาพของคนในครอบครัว หรือการจากลาของคนใกล้ชิด แม้จะเป็นเรื่องเศร้า แต่ควรมองว่าเป็นวงจรธรรมชาติของชีวิต ในช่วงนี้ควรใช้เวลากับครอบครัวให้มากที่สุด บอกรักและขอบคุณผู้ที่เราห่วงใย ทำบุญอุทิศส่วนกุศลให้ผู้ล่วงลับ และเป็นกำลังใจให้กันในครอบครัว ความทรงจำดีๆ จะคงอยู่ตลอดไป',
        cardNameMeaning: 'ครอบครัวมีความสุข ญาติพี่น้องให้ความช่วยเหลือ ความสัมพันธ์ในครอบครัวอบอุ่น มีกิจกรรมร่วมกัน'
    },
    'ตนุ1.png': {
        name: 'ตนุ (Body)',
        innerText: 'Bond',
        number:'1',
        meaning:'ความผูกพันทางใจ ความสัมพันธ์แน่นแฟ้น พบเจอกับคนที่ใช่ มิตรภาพที่ยาวนาน',
        description: 'ไพ่ตนุในด้านความผูกพัน แสดงถึงการเชื่อมโยงที่ลึกซึ้งกับคนรอบข้าง อาจพบกับเพื่อนแท้หรือคู่แท้ ความรักและมิตรภาพจะมีความหมาย ความสัมพันธ์ที่มีอยู่จะแน่นแฟ้นขึ้น มีคนที่เข้าใจและรับฟังเรา ในช่วงนี้ควรใช้เวลากับคนที่เรารัก สร้างความทรงจำดีๆ ร่วมกัน และเปิดใจรับเพื่อนใหม่ เพราะความสัมพันธ์ที่ดีคือสมบัติล้ำค่าของชีวิต',
        cardNameMeaning: 'ตัวตนเจ้าชะตา การกระทำสิ่งใดสิ่งหนึ่งของเจ้าชะตา ที่บ่งบอกถึงตัวตนเจ้าชะตาและแสดงออกถึงการที่ตัวเจ้าชะตานั้นได้มีการลงมือกระทำสิ่งใดสิ่งหนึ่งเข้าไปและเอาตัวเองเข้าไปผูกพันกับเรื่องนั้น'
    },
    'ตนุ2.png': {
        name: 'ตนุ (Body)',
        innerText: 'Physique',
        number:'1',
        meaning:'สุขภาพกายแข็งแรง ร่างกายมีพลัง ควรออกกำลังกายและดูแลสุขภาพ การปรากฏภายนอกดีขึ้น',
        description:'ไพ่ตนุในด้านร่างกาย เน้นเรื่องสุขภาพและการดูแลตนเอง ร่างกายจะมีพลังและสุขภาพแข็งแรง เป็นเวลาดีสำหรับการออกกำลังกาย การดูแลสุขภาพ หรือการปรับปรุงภาพลักษณ์ ความมั่นใจในตนเองจะเพิ่มขึ้น ควรใส่ใจเรื่องอาหารการกิน การพักผ่อน และการออกกำลังกาย เพราะร่างกายที่แข็งแรงคือพื้นฐานของความสุขในชีวิต',
        cardNameMeaning: 'ตัวตนเจ้าชะตา การกระทำสิ่งใดสิ่งหนึ่งของเจ้าชะตา ที่บ่งบอกถึงตัวตนเจ้าชะตาและแสดงออกถึงการที่ตัวเจ้าชะตานั้นได้มีการลงมือกระทำสิ่งใดสิ่งหนึ่งเข้าไปและเอาตัวเองเข้าไปผูกพันกับเรื่องนั้น'
    },
    'ทานัง.png': {
        name: 'ทานัง (Sharing)',
        innerText: 'Sharing',
        number:'3',
        meaning:'การให้และการแบ่งปัน ความเมตตากรุณา ได้รับกลับมาจากการให้ การทำบุญเป็นผล',
        description:'ไพ่ทานังในด้านการให้ แสดงถึงจิตใจที่เอื้อเฟื้อเผื่อแผ่ การแบ่งปันสิ่งดีๆ ให้ผู้อื่น จะได้รับพรและความเจริญกลับมา การทำบุญ การช่วยเหลือผู้อื่น จะสร้างกรรมดีและเปิดเส้นทางแห่งความสำเร็จ ในช่วงนี้ควรใจกว้าง ให้ความช่วยเหลือแก่ผู้ที่ต้องการ และแบ่งปันความรู้ประสบการณ์ เพราะการให้คือการได้ที่แท้จริง',
        cardNameMeaning: 'การให้และการแบ่งปัน ความเมตตากรุณา ได้รับกลับมาจากการให้ การทำบุญเป็นผล'
    },
    'ทานัง2.png': {
        name: 'ทานัง (Sharing)',
        innerText: 'Loss',
        number:'3',
        meaning:'การสูญเสีย ต้องจากลาสิ่งที่รัก อาจต้องเสียสละเพื่อคนอื่น แต่จะได้บุญกุศลและการเรียนรู้',
        description:'ไพ่ทานังในด้านการสูญเสีย แม้จะเป็นการจากลา แต่มักเกิดจากความรักและการเสียสละ อาจต้องแยกจากสิ่งที่รัก หรือให้สิ่งที่มีค่าแก่ผู้อื่น การสูญเสียนี้จะนำมาซึ่งการเรียนรู้และความเข้าใจชีวิตที่ลึกซึ้งขึ้น ควรมองการสูญเสียเป็นการเปิดโอกาสให้สิ่งใหม่ๆ เข้ามา และเชื่อว่าการเสียสละด้วยใจรักจะนำพาความดีมาสู่ชีวิต',
        cardNameMeaning: 'การให้และการแบ่งปัน ความเมตตากรุณา ได้รับกลับมาจากการให้ การทำบุญเป็นผล'
    },
    'ทาสา1.png': {
        name: 'ทาสา (Public Service)',
        innerText: 'Underling',
        number:'7',
        meaning:'การรับใช้และการทำงานให้ผู้อื่น ตำแหน่งผู้ใต้บังคับบัญชา การเรียนรู้จากผู้เชี่ยวชาญ ความอ่อนน้อมถ่อมตน',
        description:'ไพ่ทาสาในด้านผู้รับใช้ แสดงถึงการอยู่ในตำแหน่งที่ต้องเรียนรู้และรับคำสั่ง เป็นช่วงเวลาแห่งการพัฒนาตนเองและการสั่งสม แม้จะเป็นตำแหน่งที่ต้องนำ แต่เป็นโอกาสในการเรียนรู้ทักษะและประสบการณ์ ควรรักษาจิตใจที่อ่อนน้อมถ่อมตน ตั้งใจทำงาน และดูดซับความรู้จากผู้เชี่ยวชาญ เพราะการเป็นลูกน้องที่ดีคือก้าวแรกของการเป็นผู้นำที่ดี',
        cardNameMeaning: 'เหน็ดเหนื่อย หรือ ทำเพื่อคนอื่น หรือเกี่ยวข้องกับสิ่งที่ด้อยกว่า หรือ มีน้อยกว่าเนื่องจากมาจากคำว่าทาส คือผู้ต่ำต้อย ถ้าสัมพันธ์กับสิ่งใดก็จะแปลว่าได้มาแบบด้อยกว่า หรือ น้อยกว่า'
    },
    'ทาสา2.png': {
        name: 'ทาสา (Public Service)',
        innerText: 'Submission',
        number:'7',
        meaning:'การยอมจำนนและการเชื่อฟัง การมอบตัวให้กับองค์กรหรือหลักการ การปฏิบัติตามกฎระเบียบ ความอดทนและการสละตัว',
        description:'ไพ่ทาสาในด้านการยอมจำนน แสดงถึงการยอมรับและปฏิบัติตามระบบที่มีอยู่ อาจต้องสละเสรีภาพบางอย่างเพื่อความก้าวหน้าในอนาคต การยอมจำนนนี้ไม่ใช่ความอ่อนแอ แต่เป็นการแสดงวุฒิภาวะและการรอคอยโอกาสที่เหมาะสม ควรใช้เวลานี้ในการสังเกตการณ์ เรียนรู้กลยุทธ์ และเตรียมพร้อมสำหรับโอกาสที่จะมาถึง',
        cardNameMeaning: 'เหน็ดเหนื่อย หรือ ทำเพื่อคนอื่น หรือเกี่ยวข้องกับสิ่งที่ด้อยกว่า หรือ มีน้อยกว่าเนื่องจากมาจากคำว่าทาส คือผู้ต่ำต้อย ถ้าสัมพันธ์กับสิ่งใดก็จะแปลว่าได้มาแบบด้อยกว่า หรือ น้อยกว่า'
    },
    'ทาสี.png': {
        name: 'ทาสี (Private Service)',
        innerText: 'Servant',
        number:'4',
        meaning:'การรับใช้ส่วนตัว การดูแลเอาใจใส่อย่างใกล้ชิด ความจงรักภักดี การทำงานเบื้องหลัง',
        description:'ไพ่ทาสีในด้านการรับใช้ส่วนตัว แสดงถึงการทำงานที่ต้องใช้ความละเอียดและความเอาใจใส่ เป็นงานที่อาจไม่ค่อยมีคนเห็น แต่สำคัญมาก การทำงานเบื้องหลังนี้จะสร้างความไว้วางใจและเปิดโอกาสใหม่ๆ ในอนาคต ควรทำงานด้วยความซื่อสัตย์และความรับผิดชอบ เพราะการรับใช้ที่ดีจะได้รับการยอมรับและความเคารพ',
        cardNameMeaning: 'เหน็ดเหนื่อย แต่ใช้สำหรับคนภายในวงหรือครอบครัวหรือญาติ หรือเกี่ยวข้องกับสิ่งที่ด้อยกว่า หรือ มีน้อยกว่าเนื่องจากมาจากคำว่าทาส คือผู้ต่ำต้อย ถ้าสัมพันธ์กับสิ่งใดก็จะแปลว่าได้มาแบบด้อยกว่า หรือ น้อยกว่า'
    },
    'ทาสี2.png': {
        name: 'ทาสี (Private Service)',
        innerText: 'Affair',
        number:'4',
        meaning:'ความลับและเรื่องส่วนตัว การดูแลเรื่องภายในบ้าน ความสัมพันธ์ที่ซับซ้อน การจัดการเรื่องละเอียดอ่อน',
        description:'ไพ่ทาสีในด้านเรื่องส่วนตัว แสดงถึงการจัดการกับเรื่องละเอียดอ่อนและความลับ อาจต้องรับผิดชอบเรื่องส่วนตัวของผู้อื่น หรือจัดการกับสถานการณ์ที่ซับซ้อน ต้องใช้ความรอบคอบและดุลยพินิจในการตัดสินใจ ควรรักษาความลับและความไว้วางใจที่ได้รับ เพราะความน่าเชื่อถือคือคุณสมบัติที่มีค่าที่สุด',
        cardNameMeaning: 'เหน็ดเหนื่อย แต่ใช้สำหรับคนภายในวงหรือครอบครัวหรือญาติ หรือเกี่ยวข้องกับสิ่งที่ด้อยกว่า หรือ มีน้อยกว่าเนื่องจากมาจากคำว่าทาส คือผู้ต่ำต้อย ถ้าสัมพันธ์กับสิ่งใดก็จะแปลว่าได้มาแบบด้อยกว่า หรือ น้อยกว่า'
    },
    'ธนัง.png': {
        name: 'ธนัง (Savings)',
        innerText: 'Abundance',
        number:'6',
        meaning: 'ความอุดมสมบูรณ์ทางการเงิน เงินออมเพิ่มพูน การสะสมทรัพย์สินจะได้ผล มีเงินส่วนเกินจากรายได้',
        description: 'ไพ่ธนังในด้านความอุดมสมบูรณ์ แสดงถึงการสะสมทรัพย์สินและการออมเงินที่ได้ผล เป็นช่วงเวลาที่การเงินมั่นคง มีเงินส่วนเกินจากรายได้ปกติ การลงทุนระยะยาวจะเติบโต ความมั่งคั่งจะค่อยๆ เพิ่มพูนขึ้น ควรใช้โอกาสนี้ในการสร้างความมั่นคงทางการเงิน วางแผนการออมและการลงทุนที่ชาญฉลาด เพราะความอุดมสมบูรณ์นี้เป็นผลมาจากการบริหารเงินที่ดีและการอดทนในการสะสม',
        cardNameMeaning: 'เกี่ยวข้องกับเรื่องทรัพย์สินและเป็นเรื่องเกี่ยวกับตำแหน่งหน้าที่การงานของตัวเจ้าชะตา ไม่ใช่เงินตรงๆแต่เป็นฐานะ หรือ สถานะของการเงินเจ้าชะตาเป็นอย่างไรมากกว่า'
    },
    'ธนัง2.png': {
        name: 'ธนัง (Savings)',
        innerText: 'Virtue',
        number:'6',
        meaning: 'คุณความดีจากการให้ การใช้เงินเพื่อสิ่งดีๆ การแบ่งปันและทำบุญ เงินที่ได้มาด้วยวิธีชอบธรรม',
        description: 'ไพ่ธนังในด้านความดีงาม แสดงถึงการใช้เงินทองเพื่อประโยชน์และความดีงาม การแบ่งปันความมั่งคั่งให้ผู้อื่น การทำบุญและการให้ทาน เงินทองที่ได้มาด้วยวิธีชอบธรรมจะนำมาซึ่งความสุขและความสงบใจ ความมั่งคั่งที่แท้จริงคือการมีใจใสและใช้ทรัพย์สินเพื่อสร้างคุณประโยชน์แก่สังคม ในช่วงนี้ควรใช้โอกาสในการทำความดี เพราะการให้จะนำพาความเจริญมาสู่ชีวิต',
        cardNameMeaning: 'เกี่ยวข้องกับเรื่องทรัพย์สินและเป็นเรื่องเกี่ยวกับตำแหน่งหน้าที่การงานของตัวเจ้าชะตา ไม่ใช่เงินตรงๆแต่เป็นฐานะ หรือ สถานะของการเงินเจ้าชะตาเป็นอย่างไรมากกว่า'
    },
    'นาวัง.png': {
        name: 'นาวัง (Travel)',
        innerText: 'Vehicle',
        number:'7',
        meaning: 'การเดินทางและยานพาหนะ โอกาสในการเคลื่อนย้าย การขยายขอบเขตชีวิต เครื่องมือช่วยให้เราไปถึงเป้าหมาย',
        description: 'ไพ่นาวังในด้านยานพาหนะ แสดงถึงเครื่องมือและวิธีการที่จะช่วยให้เราเดินทางไปสู่เป้าหมาย อาจมีโอกาสซื้อรถ การเดินทาง หรือการย้ายที่อยู่ การเคลื่อนไหวนี้จะเปิดโอกาสใหม่ๆ ในชีวิต ควรเตรียมพร้อมสำหรับการเปลี่ยนแปลงที่จะเกิดขึ้น และใช้โอกาสในการขยายขอบเขตประสบการณ์ชีวิต',
        cardNameMeaning: 'การเดินทางและยานพาหนะ โอกาสในการเคลื่อนย้าย การขยายขอบเขตชีวิต เครื่องมือช่วยให้เราไปถึงเป้าหมาย'
    },
    'นาวัง2.png': {
        name: 'นาวัง (Travel)',
        innerText: 'Exploration',
        number:'7',
        meaning: 'การสำรวจและผจญภัย การค้นหาสิ่งใหม่ การออกไปสู่โลกกว้าง ประสบการณ์ชีวิตที่กว้างไกล',
        description: 'ไพ่นาวังในด้านการสำรวจ เป็นไพ่แห่งการผจญภัยและการค้นหาสิ่งใหม่ อาจมีโอกาสเดินทางไกล เรียนรู้วัฒนธรรมใหม่ หรือเริ่มต้นการผจญภัยในชีวิต การสำรวจนี้จะขยายวิสัยทัศน์และเปิดมุมมองใหม่ ควรเปิดใจรับประสบการณ์ใหม่ๆ และไม่หวาดกลัวต่อสิ่งที่ไม่คุ้นเคย เพราะการผจญภัยจะทำให้เราเติบโตและเข้าใจชีวิตมากขึ้น',
        cardNameMeaning: 'การเดินทางและยานพาหนะ โอกาสในการเคลื่อนย้าย การขยายขอบเขตชีวิต เครื่องมือช่วยให้เราไปถึงเป้าหมาย'
    },
    'ปัตนิ1.png': {
        name: 'ปัตนิ (Relationship)',
        innerText: 'Spouse',
        number:'3',
        meaning: 'คู่ครองและความรัก ความสัมพันธ์ที่มั่นคง การแต่งงานหรือการครองรู้ ความผูกพันทางใจที่ลึกซึ้ง',
        description: 'ไพ่ปัตนิในด้านคู่ครอง แสดงถึงความรักที่แท้จริงและความสัมพันธ์ที่ยั่งยืน อาจมีโอกาสพบรักแท้ การแต่งงาน หรือความสัมพันธ์ที่มีอยู่จะแน่นแฟ้นขึ้น ความรักนี้ตั้งอยู่บนพื้นฐานของความเข้าใจและการดูแลกัน ควรใช้เวลาร่วมกัน เปิดใจสื่อสาร และสร้างความไว้วางใจ เพราะความสัมพันธ์ที่ดีต้องอาศัยการดูแลและการใส่ใจซึ่งกันและกัน',
        cardNameMeaning: 'อยู่ตรงข้าม คนรักอยู่ในสถานะของคนที่รักกัน สิ่งที่ตรงกันข้าม จับกันเป็นคู่ อยู่กันเป็นคู่ สิ่งที่เป็นคู่ๆ หรือ หุ้นส่วน คู่ครอง คู่ค้า และความรักที่เกิดขึ้นกับเจ้าชะตา'
    },
    'ปัตนิ2.png': {
        name: 'ปัตนิ (Relationship)',
        innerText: 'Partnership',
        number:'3',
        meaning: 'ความร่วมมือและพันธมิตร การทำงานเป็นทีม ความสัมพันธ์ทางธุรกิจ การจับมือเป็นหุ้นส่วน',
        description: 'ไพ่ปัตนิในด้านความร่วมมือ แสดงถึงการสร้างพันธมิตรและการทำงานร่วมกัน อาจมีโอกาสร่วมงานกับคนที่มีวิสัยทัศน์เดียวกัน การลงทุนร่วม หรือการสร้างธุรกิจร่วมกัน ความสำเร็จจะมาจากการรวมพลังและความสามารถของทุกฝ่าย ควรเลือกพันธมิตรที่เชื่อถือได้ มีเป้าหมายร่วมกัน และพร้อมแบ่งปันทั้งความสำเร็จและความเสี่ยง',
        cardNameMeaning: 'อยู่ตรงข้าม คนรักอยู่ในสถานะของคนที่รักกัน สิ่งที่ตรงกันข้าม จับกันเป็นคู่ อยู่กันเป็นคู่ สิ่งที่เป็นคู่ๆ หรือ หุ้นส่วน คู่ครอง คู่ค้า และความรักที่เกิดขึ้นกับเจ้าชะตา'
    },
    'ศุภะ.png': {
        name: 'ศุภะ (Growth)',
        innerText: 'Blessed',
        number:'5',
        meaning: 'ความเป็นสิริมงคล โชคดีและความเจริญรุ่งเรือง ได้รับพรจากสิ่งศักดิ์สิทธิ์ ความสุขและความสำเร็จ',
        description: 'ไพ่ศุภะในด้านความเป็นสิริมงคล แสดงถึงการได้รับพรและความเจริญรุ่งเรือง ช่วงนี้เป็นเวลาแห่งโชคดีและความสำเร็จ สิ่งดีๆ จะเข้ามาในชีวิต ได้รับการสนับสนุนจากบุคคลสำคัญ หรือมีเหตุการณ์มงคลเกิดขึ้น ควรใช้โอกาสนี้ในการทำความดี ขยายขอบเขตการทำงาน และแบ่งปันความสุขให้ผู้อื่น เพราะความเป็นสิริมงคลจะยิ่งเพิ่มพูนเมื่อเราแบ่งปันสิ่งดีๆ',
        cardNameMeaning: 'ระเบียบ พิธี จารีตประเพณี และสิ่งที่ดีงาม หรือ การศึกษาต่างๆ หรือความก้าวหน้า การเฉลิมฉลอง สังสรรค์ หรือ การเลี้ยงดู การดูแล ผู้หลักผู้ใหญ่ เกี่ยวข้องกับศาสนา หรือพิธีกรรม และความเชื่อ'
    },
    'ศุภะ2.png': {
        name: 'ศุภะ (Growth)',
        innerText: 'Educate',
        number:'5',
        meaning: 'การศึกษาและการเรียนรู้ ความรู้ใหม่ๆ การพัฒนาตนเอง ครูบาอาจารย์ การถ่ายทอดความรู้',
        description: 'ไพ่ศุภะในด้านการศึกษา แสดงถึงโอกาสในการเรียนรู้และพัฒนาตนเอง อาจมีโอกาสศึกษาต่อ เรียนรู้ทักษะใหม่ หรือได้รับการแนะนำจากผู้รู้ การศึกษาจะเปิดประตูสู่โอกาสใหม่ๆ ในชีวิต ควรเปิดใจเรียนรู้ หาความรู้เพิ่มเติม และไม่หยุดพัฒนาตนเอง เพราะความรู้คือสมบัติที่ไม่มีใครแย่งไปได้ และจะเป็นรากฐานของความสำเร็จในอนาคต',
        cardNameMeaning: 'ระเบียบ พิธี จารีตประเพณี และสิ่งที่ดีงาม หรือ การศึกษาต่างๆ หรือความก้าวหน้า การเฉลิมฉลอง สังสรรค์ หรือ การเลี้ยงดู การดูแล ผู้หลักผู้ใหญ่ เกี่ยวข้องกับศาสนา หรือพิธีกรรม และความเชื่อ'
    },
    'ปิตา1.png': {
        name: 'ปิตา (Father)',
        innerText: 'Founder',
        number:'5',
        meaning: 'พ่อและผู้ก่อตั้ง อำนาจและความเป็นผู้นำ การสร้างรากฐานและการเริ่มต้น ความรับผิดชอบต่อครอบครัว',
        description: 'ไพ่ปิตาในด้านผู้ก่อตั้ง แสดงถึงการเป็นผู้นำและการสร้างสิ่งใหม่ๆ ขึ้นมา เป็นเวลาที่ต้องแสดงภาวะผู้นำ รับผิดชอบต่อครอบครัวหรือองค์กร และวางรากฐานสำหรับอนาคต ความมั่นคงและการปกป้องเป็นสิ่งสำคัญ ควรใช้ปัญญาและประสบการณ์ในการตัดสินใจ เป็นแบบอย่างที่ดีให้ลูกหลาน และสร้างมรดกที่มีค่าให้กับรุ่นต่อไป',
        cardNameMeaning: 'บุคคลที่เป็นพ่อ หรือ การมีโอกาสที่จะได้เป็นพ่อของลูก หรือ เป็นการออกคำสั่งบังคับการ หรือ เป็นช่วงเวลาทีได้มีโอกาสเจอเพศตรงข้าม'
    },
    'ปิตา2.png': {
        name: 'ปิตา (Father)',
        innerText: 'Leader',
        number:'5',
        meaning: 'ความเป็นผู้นำและการปกครอง อำนาจการตัดสินใจ การดูแลและการนำทาง ความเป็นพ่อที่เข้มแข็ง',
        description: 'ไพ่ปิตาในด้านผู้นำ แสดงถึงการใช้อำนาจและอิทธิพลอย่างชาญฉลาด เป็นเวลาที่ต้องตัดสินใจสำคัญและนำทางผู้อื่น ความยุติธรรมและความเมตตาต้องไปด้วยกัน ควรใช้อำนาจเพื่อปกป้องและส่งเสริมผู้อื่น ไม่ใช่เพื่อครอบงำ การเป็นผู้นำที่ดีคือการรู้จักเมื่อไหร่ควรใช้ความเข้มงวดและเมื่อไหร่ควรใช้ความเมตตา',
        cardNameMeaning: 'บุคคลที่เป็นพ่อ หรือ การมีโอกาสที่จะได้เป็นพ่อของลูก หรือ เป็นการออกคำสั่งบังคับการ หรือ เป็นช่วงเวลาทีได้มีโอกาสเจอเพศตรงข้าม'
    },
    'ปุตตะ1.png': {
        name: 'ปุตตะ (Child)',
        innerText: 'Offspring',
        number:'7',
        meaning: 'ลูกและรุ่นต่อไป ความบริสุทธิ์และการเริ่มต้นใหม่ ความสุขจากลูกหลาน การสืบทอดและการเจริญเติบโต',
        description: 'ไพ่ปุตตะในด้านลูกหลาน แสดงถึงความสุขและความภาคภูมิใจจากรุ่นต่อไป อาจมีข่าวดีเกี่ยวกับลูกหลาน การมีบุตร หรือการได้เห็นคนรุ่นใหม่เติบโต ความบริสุทธิ์และความไร้เดียงสาของเด็กจะเป็นแรงบันดาลใจ ควรใส่ใจดูแลและให้การศึกษาที่ดี เพราะเด็กคือความหวังและอนาคตของครอบครัวและสังคม',
        cardNameMeaning: 'ลูก บุตร หรือ บริวาร หรือ การริเริ่มสร้างสิ่งใหม่ๆ หรือ สิ่งใหม่ที่เกิดขึ้น มักจะเป็นเรื่องเกี่ยวข้องกับการลงทุน หรือ ลงทุนอะไรใหม่ๆ'
    },
    'ปุตตะ2.png': {
        name: 'ปุตตะ (Child)',
        innerText: 'Karmic Bond',
        number:'7',
        meaning: 'พันธะกรรมกับลูกหลาน ความผูกพันข้ามชาติ หนี้บุญคุณระหว่างพ่อแม่ลูก ความรับผิดชอบต่อรุ่นต่อไป',
        description: 'ไพ่ปุตตะในด้านพันธะกรรม แสดงถึงความเชื่อมโยงที่ลึกซึ้งระหว่างพ่อแม่และลูก ความสัมพันธ์นี้มีรากฐานมาจากกรรมในอดีต การดูแลลูกและการได้รับการดูแลจากพ่อแม่เป็นวงจรแห่งความรักและความกตัญญู ควรปฏิบัติต่อลูกด้วยความรักและความเข้าใจ และกตัญญูต่อพ่อแม่ เพราะพันธะนี้จะต่อเนื่องไปยังรุ่นต่อๆ ไป',
        cardNameMeaning: 'ลูก บุตร หรือ บริวาร หรือ การริเริ่มสร้างสิ่งใหม่ๆ หรือ สิ่งใหม่ที่เกิดขึ้น มักจะเป็นเรื่องเกี่ยวข้องกับการลงทุน หรือ ลงทุนอะไรใหม่ๆ'
    },
    'พยายะ1.png': {
        name: 'พยายะ (Illness)',
        innerText: 'Sickness',
        number:'3',
        meaning: 'ความเจ็บป่วยและความทุกข์ร้อน สุขภาพที่ต้องดูแล การเอาใจใส่ร่างกายและจิตใจ ความท้าทายที่ต้องผ่านไป',
        description: 'ไพ่พยายะในด้านความเจ็บป่วย เตือนให้ใส่ใจดูแลสุขภาพอย่างจริงจัง อาจมีความไม่สบายกาย หรือความเครียดทางจิตใจ แต่นี่เป็นสัญญาณให้เราหยุดพักและปรับตัว ควรพักผ่อนให้เพียงพอ กินอาหารที่มีประโยชน์ ออกกำลังกายสม่ำเสมอ และหาเวลาผ่อนคลาย เพราะร่างกายและจิตใจที่แข็งแรงคือฐานสำคัญของความสุขในชีวิต',
        cardNameMeaning: 'โรคภัยไข้เจ็บ หรือ สิ่งที่ถูกเบียดเบียน ความล้มเหลว มีศัตรูเบียดเบียน สิ่งที่ซ่อนเร้น หรือปิดบังอำพรางไม่เปิดเผย หรือ ช่องทางลับ หรือ ความพยายามที่จะแก้ไขแต่ยังไม่ประสบความสำเร็จภายในระยะเวลา'
    },
    'พยายะ2.png': {
        name: 'พยายะ (Illness)',
        innerText: 'Persistence',
        number:'3',
        meaning: 'ความพยายามและความมุ่งมั่น การอดทนต่ออุปสรรค การฟื้นตัวและการสู้ชีวิต พลังใจที่ไม่ย่อท้อ',
        description: 'ไพ่พยายะในด้านความพยายาม แสดงถึงการไม่ยอมแพ้และการฟื้นตัวจากความยากลำบาก เป็นพลังภายในที่ช่วยให้เราผ่านพ้นวิกฤต ความมุ่งมั่นและการอดทนจะนำไปสู่การเอาชนะอุปสรรค ควรมีเป้าหมายที่ชัดเจน แบ่งปัญหาออกเป็นส่วนเล็กๆ และก้าวไปทีละขั้น เพราะความพยายามอย่างต่อเนื่องจะส่งผลให้บรรลุความสำเร็จในที่สุด',
        cardNameMeaning: 'โรคภัยไข้เจ็บ หรือ สิ่งที่ถูกเบียดเบียน ความล้มเหลว มีศัตรูเบียดเบียน สิ่งที่ซ่อนเร้น หรือปิดบังอำพรางไม่เปิดเผย หรือ ช่องทางลับ หรือ ความพยายามที่จะแก้ไขแต่ยังไม่ประสบความสำเร็จภายในระยะเวลา'
    },
    'พันธุ1.png': {
        name: 'พันธุ (Affinity)',
        innerText: 'Heritage',
        number:'2',
        meaning:'มรดกและสิ่งที่ได้รับทอด ประเพณีและวัฒนธรรม ความภาคภูมิใจในรากเหง้า ความเชื่อมโยงกับบรรพบุรุษ',
        description:'ไพ่พันธุในด้านมรดก แสดงถึงสิ่งมีค่าที่ได้รับจากรุ่นก่อน ทั้งในรูปของทรัพย์สิน ความรู้ ประเพณี หรือคุณค่าต่างๆ เป็นเวลาที่ควรทำความเข้าใจและชื่นชมในสิ่งที่บรรพบุรุษได้สั่งสมไว้ให้ ควรรักษาและสืบทอดสิ่งดีๆ ไปยังรุ่นลูกรุ่นหลาน พร้อมทั้งปรับปรุงให้เหมาะสมกับยุคสมัย เพราะมรดกที่แท้จริงคือความรู้และคุณค่าที่ดีงาม',
        cardNameMeaning: 'เกี่ยวข้องกับสถานะภายในครอบครัวและความผูกพัน หรือ ครอบครัวเผ่าพันธุ์ต่างๆ ไม่ว่าจะเป็นพ่อแม่พี่น้องปู่ย่าตายายญาติสนิทมิตรสหายที่มีความสัมพันธ์ใกล้ชิดกันทางสายเลือด หรือ รวมกันเป็นเครือญาติ'
    },
    'พันธุ2.png': {
        name: 'พันธุ (Kinship)',
        innerText: 'Affinity',
        number:'2',
        meaning:'ความสัมพันธ์และความผูกพัน การเชื่อมโยงด้วยเลือดเนื้อ ความเข้าใจกันโดยธรรมชาติ ความรักที่ฝังลึกในใจ',
        description:'ไพ่พันธุในด้านความผูกพัน แสดงถึงความสัมพันธ์ที่เกิดจากสายเลือดและการเติบโตร่วมกัน ความเข้าใจที่ไม่ต้องอธิบาย และความรักที่มาตามธรรมชาติ ในช่วงนี้ความสัมพันธ์ในครอบครัวจะแน่นแฟ้นขึ้น ควรใช้เวลากับญาติพี่น้อง แบ่งปันความสุขและความทุกข์ และสร้างความทรงจำดีๆ ร่วมกัน เพราะครอบครัวคือขุมพลังที่สำคัญที่สุดในชีวิต',
        cardNameMeaning: 'เกี่ยวข้องกับสถานะภายในครอบครัวและความผูกพัน หรือ ครอบครัวเผ่าพันธุ์ต่างๆ ไม่ว่าจะเป็นพ่อแม่พี่น้องปู่ย่าตายายญาติสนิทมิตรสหายที่มีความสัมพันธ์ใกล้ชิดกันทางสายเลือด หรือ รวมกันเป็นเครือญาติ'
    },
    'ภริยัง.png': {
        name: 'ภริยัง (Mate)',
        innerText: 'Affection',
        number:'2',
        meaning:'ความรักและความผูกพันใจ คู่ชีวิตที่เข้าใจกัน ความอบอุ่นในความสัมพันธ์ การดูแลเอาใจใส่ซึ่งกันและกัน',
        description:'ไพ่ภริยังในด้านความรัก แสดงถึงความสัมพันธ์ที่อบอุ่นและเข้าใจกัน มีการดูแลและให้ความรักแก่กัน ช่วงนี้ความสัมพันธ์จะมีความหวานชื่นและความใกล้ชิด ควรแสดงความรักและความห่วงใยให้คู่รักได้รู้สึก ใช้เวลาที่มีคุณภาพร่วมกัน และสร้างความทรงจำดีๆ เพราะความรักที่แท้จริงต้องอาศัยการเอาใจใส่และการแสดงออกอย่างต่อเนื่อง',
        cardNameMeaning: 'ความรักและความผูกพันใจ คู่ชีวิตที่เข้าใจกัน ความอบอุ่นในความสัมพันธ์ การดูแลเอาใจใส่ซึ่งกันและกัน'
    },
    'ภริยัง2.png': {
        name: 'ภริยัง (Mate)',
        innerText: 'Parting ways',
        number:'2',
        meaning:'การแยกทางและการจากลา ความเศร้าโศกจากการสูญเสียความรัก การเรียนรู้จากความสัมพันธ์ที่ผ่านมา',
        description:'ไพ่ภริยังในด้านการแยกทาง แสดงถึงการสิ้นสุดของความสัมพันธ์หรือการจากลาชั่วคราว แม้จะเศร้าโศก แต่การแยกทางบางครั้งเป็นสิ่งที่จำเป็น อาจเป็นเพราะทิศทางชีวิตที่แตกต่าง หรือการเติบโตที่ไม่สอดคล้องกัน ควรยอมรับและให้อภัยทั้งตนเองและอีกฝ่าย เรียนรู้จากประสบการณ์ และเชื่อมั่นว่าจะมีความรักใหม่ที่เหมาะสมกว่าเข้ามา',
        cardNameMeaning: 'ความรักและความผูกพันใจ คู่ชีวิตที่เข้าใจกัน ความอบอุ่นในความสัมพันธ์ การดูแลเอาใจใส่ซึ่งกันและกัน'
    },
    'โภคา1.png': {
        name: 'โภคา (Real Estate)',
        innerText: 'Resources',
        number:'3',
        meaning:'ทรัพยากรและสิ่งของมีค่า การจัดการทรัพย์สิน ความมั่งคั่งที่ใช้ประโยชน์ได้ การลงทุนที่คุ้มค่า',
        description:'ไพ่โภคาในด้านทรัพยากร แสดงถึงการมีทรัพย์สินและความสามารถในการจัดการ เป็นเวลาที่เหมาะสมสำหรับการลงทุนในอสังหาริมทรัพย์ หรือการใช้ทรัพยากรที่มีอยู่ให้เกิดประโยชน์สูงสุด ควรวางแผนการเงินระยะยาว ดูแลรักษาทรัพย์สินที่มี และหาโอกาสในการเพิ่มมูลค่า เพราะการจัดการทรัพยากรอย่างชาญฉลาดจะนำมาซึ่งความมั่นคงทางการเงิน',
        cardNameMeaning: 'หลักทรัพย์ บ้านเรือน ทรัพย์ที่เคลื่อนที่ได้ยาก สิ่งที่เกี่ยวข้องกับที่เราใช้ทำมาหากิน ที่อยู่อาศัย ยวดยานพาหนะ หรือ อาจจะเป็นวัตถุดิบต้นทุนในการผลิตสินค้าหรือบริการต่างๆ ไม่จำเป็นต้องเป็นอสังหาริมทรัพย์เพียงอย่างเดียว'
    },
    'โภคา2.png': {
        name: 'โภคา (Real Estate)',
        innerText:'Inventory',
        number:'3',
        meaning:'การตรวจสอบและจัดการสิ่งของ การทำบัญชีทรัพย์สิน การประเมินมูลค่าและการจัดระเบียบ',
        description:'ไพ่โภคาในด้านการจัดเก็บ แสดงถึงความจำเป็นในการตรวจสอบและจัดระเบียบทรัพย์สิน เป็นเวลาที่ควรทำการประเมินสิ่งที่มีอยู่ กำจัดสิ่งที่ไม่จำเป็น และจัดระเบียบให้เป็นหมวดหมู่ การจัดการที่ดีจะช่วยให้รู้ว่ามีอะไรบ้าง และสามารถใช้ประโยชน์ได้อย่างเต็มที่ ควรทำบัญชีทรัพย์สิน วางแผนการใช้ และรักษาสิ่งของให้อยู่ในสภาพดี',
        cardNameMeaning: 'หลักทรัพย์ บ้านเรือน ทรัพย์ที่เคลื่อนที่ได้ยาก สิ่งที่เกี่ยวข้องกับที่เราใช้ทำมาหากิน ที่อยู่อาศัย ยวดยานพาหนะ หรือ อาจจะเป็นวัตถุดิบต้นทุนในการผลิตสินค้าหรือบริการต่างๆ ไม่จำเป็นต้องเป็นอสังหาริมทรัพย์เพียงอย่างเดียว'
    },
    'มรณะ1.png': {
        name: 'มรณะ(Death)',
        innerText:'Demise',
        number:'1',
        meaning:'การเปลี่ยนแปลงครั้งใหญ่ จุดจบของสิ่งเก่า เริ่มต้นใหม่ การปลดปล่อยและการแปรสภาพ',
        description:'ไพ่มรณะ ไม่ได้หมายถึงความตายทางกายภาพ แต่เป็นการแปรสภาพและการเปลี่ยนแปลงครั้งใหญ่ในชีวิต สิ่งเก่าๆ จะจบลง เพื่อให้สิ่งใหม่เริ่มต้นขึ้น อาจเป็นการเปลี่ยนงาน การจบความสัมพันธ์ หรือการเริ่มต้นชีวิตใหม่ การเปลี่ยนแปลงนี้แม้จะท้าทาย แต่จำเป็นสำหรับการเติบโต ควรปล่อยวางสิ่งที่ไม่เหมาะสมแล้ว และเปิดใจรับการเปลี่ยนแปลงที่จะนำมาซึ่งความก้าวหน้า',
        cardNameMeaning: 'การจบไปแล้ว การสูญหาย ไม่จำเป็นต้องตายอย่างเดียว อาจแปลว่าสิ้นสุดได้ หรือ อยู่ที่ไกลๆ หรือ มาจากที่ไกล หรือแปลว่าการได้ดีในที่ไกลๆได้อีกด้วย'
    },
    'มรณะ2.png': {
        name: 'มรณะ(Death)',
        innerText: 'Longing',
        number:'1',
        meaning:'ความคิดถึงและความปรารถนา การโหยหาสิ่งที่จากไป ความรักที่ยาวนาน ความผูกพันที่ไม่มีวันลืม',
        description:'ไพ่มรณะในด้านความโหยหา แสดงถึงความรู้สึกคิดถึงและความผูกพันกับสิ่งที่จากไป อาจเป็นคนที่รัก ความทรงจำดีๆ หรือช่วงเวลาที่มีความสุข ความโหยหานี้เป็นเรื่องธรรมชาติของมนุษย์ แต่ไม่ควรให้มันครอบงำใจจนเกินไป ควรให้เกียรติกับความทรงจำดีๆ แต่ยังคงเดินหน้าต่อไป เพราะชีวิตยังมีสิ่งดีๆ รออยู่ข้างหน้า การรำลึกถึงอดีตควรเป็นแรงบันดาลใจ ไม่ใช่อุปสรรค',
        cardNameMeaning: 'การจบไปแล้ว การสูญหาย ไม่จำเป็นต้องตายอย่างเดียว อาจแปลว่าสิ้นสุดได้ หรือ อยู่ที่ไกลๆ หรือ มาจากที่ไกล หรือแปลว่าการได้ดีในที่ไกลๆได้อีกด้วย'
    },
    'มัชฌิมา1.png': {
        name: 'มัชฌิมา (Middle)',
        innerText: 'Harmonious',
        number:'2',
        meaning:'ความสมดุลและความกลมกลืน ทางสายกลาง ความสามัคคี ชีวิตที่ไม่เอนเอียงไปทางใดทางหนึ่ง',
        description:'ไพ่มัชฌิมาในด้านความกลมกลืน แสดงถึงการดำเนินชีวิตอย่างสมดุล ไม่เอนเอียงไปในทางใดทางหนึ่งมากเกินไป เป็นไพ่แห่งทางสายกลางที่พุทธศาสนาสอน ในช่วงนี้ควรหาจุดสมดุลระหว่างการทำงานและการพักผ่อน ระหว่างการให้และการรับ ความสัมพันธ์จะมีความกลมกลืน ข้อขัดแย้งจะได้รับการแก้ไข ควรใช้สติปัญญาในการตัดสินใจ และรักษาความสมดุลในทุกด้านของชีวิต',
        cardNameMeaning: 'การแบ่ง หรือ สิ่งที่ได้มานั้นถูกทะยอย แบ่งปันส่วนออกมา หรือ การร่วมกันทำงาน หรือ ความค่อยๆเป็นค่อยๆไป หรือ การใช้ร่วมกับผู้อื่น หรือ ถ้าเกี่ยวกับความรักแปลว่าถูกแบ่งปัน หรืออาจจะมือที่สามเข้ามานั่นเอง'
    },
    'มัชฌิมา2.png': {
        name: 'มัชฌิมา (Middle)',
        innerText: 'Equilibrium',
        number:'2',
        meaning:'ความสมดุลและความเสถียร การหาจุดสมดุลในชีวิต ความมั่นคงทางอารมณ์ การไม่เอนเอียงไปข้างใดข้างหนึ่ง',
        description:'ไพ่มัชฌิมาในด้านความสมดุล แสดงถึงการบรรลุจุดสมดุลที่สมบูรณ์ในชีวิต ทุกด้านของชีวิตอยู่ในสภาวะที่เสถียรและกลมกลืนกัน ไม่มีส่วนใดเกินหรือขาดไป เป็นช่วงเวลาแห่งความสงบและความพอใจ ควรรักษาสภาวะนี้ไว้ด้วยการใส่ใจในทุกด้าน ไม่ปล่อยปละละเลยส่วนใด เพราะความสมดุลที่แท้จริงต้องใช้ความพยายามในการรักษาไว้อย่างต่อเนื่อง',
        cardNameMeaning: 'การแบ่ง หรือ สิ่งที่ได้มานั้นถูกทะยอย แบ่งปันส่วนออกมา หรือ การร่วมกันทำงาน หรือ ความค่อยๆเป็นค่อยๆไป หรือ การใช้ร่วมกับผู้อื่น หรือ ถ้าเกี่ยวกับความรักแปลว่าถูกแบ่งปัน หรืออาจจะมือที่สามเข้ามานั่นเอง'
    },
    'มาตา1.png': {
        name: 'มาตา(Mother)',
        innerText: 'Guardian',
        number:'4',
        meaning:'แม่และผู้ปกป้อง ความรักไม่มีเงื่อนไข การดูแลและเลี้ยงดู ความอบอุ่นและความปลอดภัย',
        description:'ไพ่มาตาในด้านผู้ปกป้อง แสดงถึงพลังแห่งความรักของแม่และการดูแลเอาใจใส่ มีผู้ที่คอยช่วยเหลือและปกป้องเราอยู่เสมอ ไม่ว่าจะเป็นแม่ ครู หรือผู้ใหญ่ที่มีจิตใจเมตตา ในช่วงนี้จะรู้สึกอบอุ่นและมีความมั่นคงทางใจ ควรขอบคุณและตอบแทนผู้ที่เคยดูแลเรา และขยายความเมตตานี้ไปสู่ผู้อื่น เพราะความรักแม่คือพลังที่ยิ่งใหญ่ที่สุดในโลก',
        cardNameMeaning: 'บุคคลที่เป็นแม่ หรือ การช่วยเหลือ ดูแล หรือ ต้องการความช่วยเหลือจากบุคคลอื่น'
    },
    'มาตา2.png': {
        name: 'มาตา(Mother)',
        innerText: 'Caregiver',
        number:'4',
        meaning:'ผู้ดูแลและให้การอุปถัมภ์ การเลี้ยงดูอย่างใส่ใจ ความเสียสละเพื่อคนที่รัก บทบาทการดูแลครอบครัว',
        description:'ไพ่มาตาในด้านผู้ดูแล แสดงถึงการให้การดูแลและการอุปถัมภ์อย่างไม่มีเงื่อนไข เป็นเวลาที่ต้องแสดงบทบาทการดูแลคนที่เรารัก หรือได้รับการดูแลจากผู้อื่น การเสียสละและการให้เวลากับครอบครัวจะนำมาซึ่งความสุขและความสงบใจ ควรใส่ใจดูแลสุขภาพของตนเองและคนใกล้ชิด เพราะการดูแลที่ดีคือการแสดงความรักที่ลึกซึ้งที่สุด',
        cardNameMeaning: 'บุคคลที่เป็นแม่ หรือ การช่วยเหลือ ดูแล หรือ ต้องการความช่วยเหลือจากบุคคลอื่น'
    },
    'ลาภะ1.png': {
        name: 'ลาภะ (Profit)',
        innerText: 'Fortune',
        number:'6',
        meaning:'โชคลาภและความมั่งคั่ง การได้กำไรจากการลงทุน ความสำเร็จทางธุรกิจ เงินทองไหลเวียนเข้ามา',
        description:'ไพ่ลาภะในด้านความโชคดี แสดงถึงการได้รับผลตอบแทนจากการลงทุนและความพยายาม เป็นช่วงเวลาที่ธุรกิจเจริญรุ่งเรือง การเงินมั่นคง และมีโอกาสทำกำไรได้ดี อาจได้รับโชคลาภจากการลงทุน หรือมีรายได้เสริมจากแหล่งที่ไม่คาดคิด ควรใช้โอกาสนี้ในการขยายธุรกิจ วางแผนการเงินระยะยาว และลงทุนอย่างชาญฉลาด',
        cardNameMeaning: 'โอกาสที่เป็นโชคลาภที่เกิดขึ้นกับเจ้าชะตา ได้ลาภ สิ่งที่มีมาก และ หลากหลาย ถ้าสัมพันธ์กับนิยามภพใด ก็จะได้สิ่งนั้นมากกว่าปกติ หรือ มีมากกว่าปกติ'
    },
    'ลาภะ2.png': {
        name: 'ลาภะ (Profit)',
        innerText: 'Journey',
        number:'6',
        meaning:'การเดินทางเพื่อหาผลกำไร ความสำเร็จจากการเคลื่อนไหว โอกาสทางธุรกิจในต่างถิ่น การขยายตลาด',
        description:'ไพ่ลาภะในด้านการเดินทาง แสดงถึงโอกาสทางธุรกิจที่เกิดจากการเคลื่อนไหวและการขยายขอบเขต อาจมีโอกาสทำธุรกิจในต่างถิ่น การเดินทางเพื่อหาลูกค้าใหม่ หรือการขยายตลาดไปยังพื้นที่ใหม่ ความสำเร็จจะมาจากการก้าวออกไปจากเขตความสะดวกสบาย ควรเปิดใจรับโอกาสใหม่ๆ และพร้อมลงทุนเวลาและความพยายามในการสำรวจตลาดใหม่',
        cardNameMeaning: 'โอกาสที่เป็นโชคลาภที่เกิดขึ้นกับเจ้าชะตา ได้ลาภ สิ่งที่มีมาก และ หลากหลาย ถ้าสัมพันธ์กับนิยามภพใด ก็จะได้สิ่งนั้นมากกว่าปกติ หรือ มีมากกว่าปกติ'
    },
    'สหัชชะ1.png': {
        name: 'สหัชชะ(Friendship)',
        innerText: 'Companion',
        number:'4',
        meaning:'เพื่อนแท้และสหาย ความสัมพันธ์ที่ไว้ใจได้ การมีคนเดินทางไปด้วยกันในชีวิต ความช่วยเหลือซึ่งกันและกัน',
        description:'ไพ่สหัชชะในด้านเพื่อนสนิท แสดงถึงมิตรภาพที่แท้จริงและความสัมพันธ์ที่มั่นคง มีเพื่อนที่คอยช่วยเหลือและให้กำลังใจในยามลำบาก ความสัมพันธ์ที่มีอยู่จะแน่นแฟ้นขึ้น หรืออาจพบเพื่อนใหม่ที่ใช่ ควรใช้เวลากับเพื่อนฝูง แบ่งปันความสุขและความทุกข์ร่วมกัน และให้ความช่วยเหลือเมื่อเพื่อนต้องการ เพราะมิตรภาพที่ดีคือสมบัติล้ำค่าของชีวิต',
        cardNameMeaning: 'เพื่อนฝูง การสื่อสาร การติดต่อนัดหมาย การเรียนรู้ การทำหน้าที่เป็นคนกลางในการสื่อสารเจรจา หรือ การเดินทางแบบที่มีกำหนดการไปแล้วกลับ การเดินทางมีแผนการณ์ไปและกลับมา'
    },
    'สหัชชะ2.png': {
        name: 'สหัชชะ(Friendship)',
        innerText: 'Discussion',
        number:'4',
        meaning:'การสนทนาและแลกเปลี่ยนความคิดเห็น การปรึกษาหารือ การรวมกลุ่มและการประชุม ความคิดเห็นที่หลากหลาย',
        description:'ไพ่สหัชชะในด้านการสื่อสาร แสดงถึงการแลกเปลี่ยนความคิดเห็นและการเรียนรู้จากกันและกัน เป็นเวลาดีสำหรับการปรึกษาหารือ การประชุม หรือการรวมกลุ่มเพื่อหาทางออกร่วมกัน ความคิดที่หลากหลายจะนำไปสู่การแก้ปัญหาที่ดี ควรเปิดใจรับฟังความคิดเห็นของผู้อื่น แบ่งปันประสบการณ์ และร่วมมือกันสร้างสรรค์สิ่งดีๆ เพราะปัญญาหมู่มากกว่าปัญญาคน',
        cardNameMeaning: 'เพื่อนฝูง การสื่อสาร การติดต่อนัดหมาย การเรียนรู้ การทำหน้าที่เป็นคนกลางในการสื่อสารเจรจา หรือ การเดินทางแบบที่มีกำหนดการไปแล้วกลับ การเดินทางมีแผนการณ์ไปและกลับมา'
    },
    'สักกะ.png': {
        name: 'สักกะ (Recognition)',
        innerText: 'Superstar',
        number:'4',
        meaning:'ชื่อเสียงและความมีชื่อเสียง การเป็นที่รู้จักและยอมรับ ความสำเร็จในสายตาคนอื่น ดาวเด่นและความโดดเด่น',
        description:'ไพ่สักกะในด้านความมีชื่อเสียง แสดงถึงการได้รับการยอมรับและความโดดเด่นในสิ่งที่ทำ มีโอกาสเป็นที่รู้จักในวงกว้าง ผลงานจะได้รับความสนใจ และอาจมีโอกาสก้าวขึ้นสู่ตำแหน่งที่สำคัญ ควรใช้ความมีชื่อเสียงนี้อย่างสร้างสรรค์ เป็นแบบอย่างที่ดี และไม่ลืมรากเหง้าที่ทำให้เราเป็นคนทุกวันนี้ เพราะชื่อเสียงที่ยั่งยืนต้องมาจากการกระทำที่ดีงาม',
        cardNameMeaning: 'ชื่อเสียงและความมีชื่อเสียง การเป็นที่รู้จักและยอมรับ ความสำเร็จในสายตาคนอื่น ดาวเด่นและความโดดเด่น'
    },
    'สักกะ2.png': {
        name: 'สักกะ (Recognition)',
        innerText: 'Bullied',
        number:'4',
        meaning:'การถูกกดขี่และการรังแก ความยากลำบากจากการถูกผู้อื่นเบียดเบียน ความอดทนและการเอาตัวรอด',
        description:'ไพ่สักกะในด้านการถูกกดขี่ แสดงถึงความยากลำบากจากการถูกผู้อื่นเบียดเบียน อาจเป็นการถูกรังแกที่ทำงาน การถูกใช้อำนาจกดขี่ หรือการถูกเอาเปรียบ แต่นี่เป็นการทดสอบความแข็งแกร่งของจิตใจ ควรหาทางออกที่เหมาะสม ขอความช่วยเหลือจากคนที่เชื่อถือได้ และเสริมสร้างจิตใจให้แข็งแกร่ง เพราะการผ่านพ้นอุปสรรคนี้ไปได้จะทำให้เราเป็นคนที่แข็งแกร่งขึ้น',
        cardNameMeaning: 'ชื่อเสียงและความมีชื่อเสียง การเป็นที่รู้จักและยอมรับ ความสำเร็จในสายตาคนอื่น ดาวเด่นและความโดดเด่น'
    },
    'หินะ1.png': {
        name: 'หินะ (Tough)',
        innerText: 'Vulgar',
        number:'7',
        meaning:'ความหยาบคายและความไม่เหมาะสม พฤติกรรมที่ขาดความละเอียดอ่อน ความจำเป็นที่ต้องแก้ไขนิสัยไม่ดี',
        description:'ไพ่หินะในด้านความหยาบคาย เตือนให้ตรวจสอบพฤติกรรมและการแสดงออกของตนเอง อาจมีการกระทำหรือคำพูดที่ไม่เหมาะสม ส่งผลให้เกิดปัญหาในความสัมพันธ์ ควรฝึกควบคุมอารมณ์ พูดจาให้สุภาพ และปรับปรุงบุคลิกให้น่าเคารพ เพราะความหยาบคายจะเป็นอุปสรรคต่อความสำเร็จ การเป็นคนที่มีมารยาทดีจะเปิดประตูสู่โอกาสใหม่ๆ',
        cardNameMeaning: 'สิ่งที่เป็นความอึดอัด และ อัตคัด จำต้องยอมทำใจ ความเสื่อมเสียปมของชีวิตสิ่งที่เราเจอปัญหานั้นแล้วเกิดความสะเทือนใจจำใจรับสภาพเป็นปมด้อยของจิตใจของตัวเราถูกเปรียบเทียบกับคนอื่น ภาวะจำยอม มักถูกกดขี่ข่มเหง สิ่งที่ไม่ถนัด'
    },
    'หินะ2.png': {
        name: 'หินะ (Tough)',
        innerText: 'Defilement',
        number:'7',
        meaning:'ความเสื่อมเสียและการทำลาย ความบกพร่องทางจิตใจหรือจริยธรรม สิ่งที่ต้องล้างความผิดหรือชดใช้',
        description:'ไพ่หินะในด้านความเสื่อมเสีย แสดงถึงการกระทำที่ไม่ถูกต้องหรือผิดศีลธรรม อาจเป็นความผิดพลาดในอดีตที่ต้องรับผิดชอบ หรือพฤติกรรมที่ทำลายชื่อเสียงและความน่าเชื่อถือ ควรสำนึกผิด ขอโทษอย่างจริงใจ และแก้ไขสิ่งที่ทำผิดไป การชดใช้และการทำความดีจะช่วยล้างความผิดและฟื้นฟูศักดิ์ศรี เพราะการกลับตัวที่แท้จริงจะนำมาซึ่งการให้อภัยและโอกาสใหม่',
        cardNameMeaning: 'สิ่งที่เป็นความอึดอัด และ อัตคัด จำต้องยอมทำใจ ความเสื่อมเสียปมของชีวิตสิ่งที่เราเจอปัญหานั้นแล้วเกิดความสะเทือนใจจำใจรับสภาพเป็นปมด้อยของจิตใจของตัวเราถูกเปรียบเทียบกับคนอื่น ภาวะจำยอม มักถูกกดขี่ข่มเหง สิ่งที่ไม่ถนัด'
    },
    'อริ1.png': {
        name: 'อริ (Trouble)',
        innerText: 'Obstacle',
        number:'5',
        meaning:'อุปสรรคและสิ่งขัดขวาง ปัญหาที่ต้องแก้ไข ความท้าทายที่ทดสอบความสามารถ การเผชิญหน้ากับความยากลำบาก',
        description:'ไพ่อริในด้านอุปสรรค แสดงถึงการเผชิญหน้ากับปัญหาและความยากลำบาก อาจมีสิ่งขัดขวางแผนการหรือเป้าหมาย แต่นี่เป็นการทดสอบความสามารถและความมุ่งมั่น ควรวิเคราะห์ปัญหาอย่างรอบคอบ หาทางแก้ไขที่เหมาะสม และไม่ย่อท้อต่ออุปสรรค เพราะการเอาชนะอุปสรรคจะทำให้เราเติบโตและมีประสบการณ์มากขึ้น',
        cardNameMeaning: 'ศัตรูกัน หรือ การแสดงตัวเป็นปฏิปักษ์ต่อกัน หรือต่อสู้ หรือ แม้กระทั่งการแสดงออกถึงการกีดกันใดๆ ก็ตาม หรือ การมีคดีความที่เกิดขึ้นได้ หรือ การดำเนินงานที่ค้างคาต่อที่ยังไม่เสร็จสิ้น'
    },
    'อริ2.png': {
        name: 'อริ (Trouble)',
        innerText: 'Adversary',
        number:'5',
        meaning:'ศัตรูและคู่แข่ง ความขัดแย้งกับผู้อื่น การต่อสู้และการแข่งขัน ความจำเป็นที่ต้องป้องกันตัวเอง',
        description:'ไพ่อริในด้านศัตรู แสดงถึงการเผชิญหน้ากับผู้ที่มีเจตนาไม่ดี หรือมีการแข่งขันที่รุนแรง อาจมีคนที่พยายามขัดขวางหรือทำร้าย ควรระมัดระวังและป้องกันตัวเอง วิเคราะห์สถานการณ์ให้รอบคอบ และใช้สติปัญญาในการจัดการ ไม่ควรใช้อารมณ์ในการตัดสินใจ เพราะการจัดการความขัดแย้งอย่างชาญฉลาดจะนำไปสู่การแก้ไขที่ดีกว่าการใช้กำลัง',
        cardNameMeaning: 'ศัตรูกัน หรือ การแสดงตัวเป็นปฏิปักษ์ต่อกัน หรือต่อสู้ หรือ แม้กระทั่งการแสดงออกถึงการกีดกันใดๆ ก็ตาม หรือ การมีคดีความที่เกิดขึ้นได้ หรือ การดำเนินงานที่ค้างคาต่อที่ยังไม่เสร็จสิ้น'
    },
    'อัตตะ1.png': {
        name: 'อัตตะ (Will)',
        innerText: 'Will',  
        number:'1',
        meaning:'พลังแห่งเจตจำนง ความมุ่งมั่นและความตั้งใจ การครองตัวเองและการตัดสินใจ พลังใจที่แข็งแกร่ง',
        description:'ไพ่อัตตะในด้านเจตจำนง แสดงถึงพลังแห่งการตัดสินใจและความมุ่งมั่นในสิ่งที่ต้องการ เป็นช่วงเวลาที่ต้องใช้พลังใจและความตั้งใจอย่างเต็มที่ในการบรรลุเป้าหมาย ความสำเร็จจะขึ้นอยู่กับความแน่วแน่ของใจและการไม่ย่อท้อต่ออุปสรรค ควรมีเป้าหมายที่ชัดเจน วางแผนอย่างรอบคอบ และใช้พลังใจอย่างสร้างสรรค์ เพราะเจตจำนงที่มั่นคงคือรากฐานของทุกความสำเร็จ',
        cardNameMeaning: 'ตัวตนของเจ้าชะตา ความเป็นตัวเราเองเป็นความต้องการ ความปรารถนา ตัวตนเจ้าชะตา เป็นสิ่งที่เราอยากจะเป็นอยากให้เป็นเกี่ยวกับตัวเรา'
    },
    'อัตตะ2.png': {
        name: 'อัตตะ (Self)',
        innerText: 'Want',
        number:'1',
        meaning:'ความปรารถนาและความต้องการ สิ่งที่หัวใจปรารถนา การแสวงหาและการได้รับ ความอยากที่ต้องควบคุม',
        description:'ไพ่อัตตะในด้านความปรารถนา แสดงถึงสิ่งที่หัวใจต้องการและความปรารถนาที่ลึกซึ้ง เป็นเวลาที่ต้องทำความเข้าใจกับตัวเองว่าต้องการอะไรจริงๆ และหาทางบรรลุสิ่งนั้น แต่ควรระวังไม่ให้ความอยากครอบงำจิตใจ ความปรารถนาที่สร้างสรรค์จะนำไปสู่การพัฒนา แต่ความโลภจะนำไปสู่ความทุกข์ ควรแยกแยะระหว่างความต้องการที่แท้จริงกับความอยากที่เกินจำเป็น',
        cardNameMeaning: 'ตัวตนของเจ้าชะตา ความเป็นตัวเราเองเป็นความต้องการ ความปรารถนา ตัวตนเจ้าชะตา เป็นสิ่งที่เราอยากจะเป็นอยากให้เป็นเกี่ยวกับตัวเรา'
    },
    'อัตตา.png': {
        name: 'อัตตา(Mind)',
        innerText: 'Reflection',
        number:'1',
        meaning: 'การไตร่ตรองและการครุ่นคิด การมองกลับไปในใจ ความเข้าใจตนเอง การทบทวนและการเรียนรู้',
        description: 'ไพ่อัตตาในด้านการไตร่ตรอง แสดงถึงเวลาแห่งการมองเข้าไปในจิตใจและการทำความเข้าใจตนเอง เป็นช่วงที่ควรใช้เวลาเงียบๆ คิดทบทวนการกระทำและประสบการณ์ที่ผ่านมา การไตร่ตรองอย่างลึกซึ้งจะนำไปสู่ความเข้าใจชีวิตที่มากขึ้น ควรหาเวลาอยู่กับตัวเอง ทำสมาธิ หรือเขียนบันทึก เพราะการรู้จักตัวเองคือจุดเริ่มต้นของการพัฒนาที่แท้จริง',
        cardNameMeaning: 'ตัวตนของเจ้าชะตา ความเป็นตัวเราเองเป็นความต้องการ ความปรารถนา ตัวตนเจ้าชะตา เป็นสิ่งที่เราอยากจะเป็นอยากให้เป็นเกี่ยวกับตัวเรา'
    },
    'อัตตา2.png': {
        name: 'อัตตา (Mind)',
        innerText: 'Rejection',
        number:'1',
        meaning:'การปฏิเสธและการต่อต้าน ความขัดแย้งภายในใจ การไม่ยอมรับความจริง ความต้านทานการเปลี่ยนแปลง',
        description:'ไพ่อัตตาในด้านการปฏิเสธ แสดงถึงความขัดแย้งภายในจิตใจและการต่อต้านสิ่งที่ไม่ต้องการ อาจมีการปฏิเสธความจริงหรือไม่ยอมรับสถานการณ์ที่เกิดขึ้น ความต้านทานนี้อาจเป็นการป้องกันตัวเอง แต่ก็อาจเป็นอุปสรรคต่อการเติบโต ควรทำความเข้าใจว่าเหตุใดจึงมีการปฏิเสธ และค่อยๆ เปิดใจรับความจริง เพราะการยอมรับคือก้าวแรกของการเยียวยาและการเปลี่ยนแปลง',
        cardNameMeaning: 'ตัวตนของเจ้าชะตา ความเป็นตัวเราเองเป็นความต้องการ ความปรารถนา ตัวตนเจ้าชะตา เป็นสิ่งที่เราอยากจะเป็นอยากให้เป็นเกี่ยวกับตัวเรา'
    }
};

// Application State
let dailyCard = null;
let hasPickedToday = false;
let cardHistory = [];
let journalEntries = [];
let currentTab = 'daily';
let currentTheme = 'default';
let soundEnabled = true;
let musicEnabled = false;
let notificationsEnabled = false;
let currentMeditation = null;

// DOM Elements - will be initialized when DOM is loaded
let cardGrid;
let statusText;
let revealedCard;
let dailyCardImage;
let cardName;
let cardMeaning;
let toggleHistoryBtn;
let clearHistoryBtn;
let historyGrid;

// User Management System
let currentUser = null;
let isUserLoggedIn = false;

class UserManager {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        // Your Google OAuth 2.0 client ID (needs proper setup in Google Cloud Console)
        this.googleClientId = "167508382816-6qhne506iv67hgfuc5ksbd8qp3hk7qos.apps.googleusercontent.com";
        this.demoMode = true; // Temporarily enable demo mode until OAuth is properly configured
        this.fallbackToDemo = true; // Enable automatic fallback to demo on OAuth errors
    }

    init() {
        this.loadUserFromStorage();
        this.initSocialProviders();
    }
    
    loadUserFromStorage() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            isUserLoggedIn = true;
            this.updateUIForLoggedInUser();
            this.loadUserData();
        }
    }
    
    async initSocialProviders() {
        // Always use demo mode for now to prevent Google API errors
        console.log('🎯 Social providers initialization - Demo mode active');
        
        // Check if we have a valid Google client ID
        const hasValidClientId = this.googleClientId && 
                                this.googleClientId !== "YOUR_GOOGLE_CLIENT_ID_HERE" && 
                                this.googleClientId.includes('.apps.googleusercontent.com');
        
        // Explicitly prevent any Google API initialization in demo mode
        if (this.demoMode) {
            console.log('🛡️ Demo mode: Skipping Google Sign-In initialization to prevent API errors');
            return; // Exit early to prevent any Google API calls
        }
        
        // Load Google Sign-In script only if we have a valid client ID and not in demo mode
        if (hasValidClientId && !this.demoMode) {
            await this.loadGoogleSignInScript();
        }
        
        // Initialize Google Sign-In only if we have a valid client ID and not in demo mode
        if (typeof google !== 'undefined' && hasValidClientId && !this.demoMode) {
            try {
                await google.accounts.id.initialize({
                    client_id: this.googleClientId,
                    callback: this.handleGoogleSignIn.bind(this),
                    auto_select: false,
                    cancel_on_tap_outside: true
                });
                
                // Also initialize the button
                google.accounts.id.renderButton(
                    document.getElementById("googleSignInButton"),
                    { 
                        theme: "filled_blue", 
                        size: "large",
                        type: "standard",
                        text: "continue_with"
                    }
                );
                
                console.log('Google Sign-In initialized successfully with client ID:', this.googleClientId);
            } catch (error) {
                console.error('Failed to initialize Google Sign-In:', error);
                this.demoMode = true;
                console.log('Switched to demo mode due to initialization error');
            }
        } else {
            console.log('Google Sign-In running in demo mode. Reasons:');
            console.log('- Google API available:', typeof google !== 'undefined');
            console.log('- Valid client ID:', hasValidClientId);
            console.log('- Demo mode:', this.demoMode);
            console.log('- Current client ID:', this.googleClientId);
        }
        
        // Initialize Facebook SDK
        if (typeof FB !== 'undefined') {
            try {
                FB.init({
                    appId: 'YOUR_FACEBOOK_APP_ID', // Replace with actual app ID
                    cookie: true,
                    xfbml: true,
                    version: 'v18.0'
                });
                console.log('Facebook SDK initialized');
            } catch (error) {
                console.error('Failed to initialize Facebook SDK:', error);
            }
        }
    }

    async loadGoogleSignInScript() {
        return new Promise((resolve, reject) => {
            if (typeof google !== 'undefined') {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Google Sign-In script'));
            document.head.appendChild(script);
        });
    }
     
     async handleGoogleSignIn(response) {
        try {
            // Decode the JWT token from Google
            const userInfo = JSON.parse(atob(response.credential.split('.')[1]));
            const user = {
                id: userInfo.sub,
                name: userInfo.name,
                email: userInfo.email,
                avatar: userInfo.picture,
                provider: 'google',
                joinDate: new Date().toISOString(),
                verified: userInfo.email_verified
            };
            
            this.loginUser(user);
            showNotification(`🎉 Welcome ${user.name}! Successfully signed in with Google.`, 'success');
        } catch (error) {
            console.error('Google sign-in error:', error);
                         showNotification('❌ Google sign-in failed. Please try again.', 'error');
         }
     }
    
    async handleFacebookSignIn() {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                if (response.authResponse) {
                    FB.api('/me', { fields: 'name,email,picture' }, (userInfo) => {
                        const user = {
                            id: userInfo.id,
                            name: userInfo.name,
                            email: userInfo.email,
                            avatar: userInfo.picture.data.url,
                            provider: 'facebook',
                            joinDate: new Date().toISOString()
                        };
                        this.loginUser(user);
                        resolve(user);
                    });
                } else {
                    reject('Facebook login cancelled');
                }
                         }, { scope: 'email' });
         });
     }
    
    // Simulated LINE login (requires actual LINE Login setup)
    async handleLineSignIn() {
                 // This would integrate with LINE Login API
         showNotification('LINE login will be available soon!', 'info');
     }
    
    async handleEmailSignIn(email, password) {
        // Simulated email authentication
        // In production, this would connect to your backend
        try {
            const user = {
                id: 'email_' + Date.now(),
                name: email.split('@')[0],
                email: email,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(email)}&background=random`,
                provider: 'email',
                joinDate: new Date().toISOString()
            };
            
            this.loginUser(user);
            return user;
                 } catch (error) {
             throw new Error('Email sign-in failed');
         }
     }
    
    async handleEmailRegister(name, email, password) {
        // Simulated registration
        try {
            const user = {
                id: 'email_' + Date.now(),
                name: name,
                email: email,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
                provider: 'email',
                joinDate: new Date().toISOString()
            };
            
            this.loginUser(user);
            return user;
                 } catch (error) {
             throw new Error('Registration failed');
         }
     }
    
    loginUser(user) {
        currentUser = user;
        isUserLoggedIn = true;
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Update UI
        this.updateUIForLoggedInUser();
        
        // Load user's data
        this.loadUserData();
        
        // Close login modal
        closeLoginModal();
                 
         showNotification(`Welcome back, ${user.name}!`, 'success');
     }
    
    logoutUser() {
        currentUser = null;
        isUserLoggedIn = false;
        
        // Clear localStorage
        localStorage.removeItem('currentUser');
        localStorage.removeItem(`userData_${currentUser?.id}`);
        
        // Update UI
        this.updateUIForLoggedOutUser();
                 
         showNotification('Logged out successfully', 'info');
     }
    
    updateUIForLoggedInUser() {
        const loginBtn = document.getElementById('loginBtn');
        const userProfileBtn = document.getElementById('userProfileBtn');
        
        loginBtn.style.display = 'none';
        userProfileBtn.style.display = 'block';
        
        // Update user panel
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
        document.getElementById('userProvider').textContent = `via ${currentUser.provider}`;
        document.getElementById('userAvatar').src = currentUser.avatar;
        
                 // Update member since
         const joinDate = new Date(currentUser.joinDate);
         document.getElementById('userMemberSince').textContent = joinDate.toLocaleDateString();
     }
    
    updateUIForLoggedOutUser() {
        const loginBtn = document.getElementById('loginBtn');
        const userProfileBtn = document.getElementById('userProfileBtn');
        
        loginBtn.style.display = 'block';
        userProfileBtn.style.display = 'none';
        
                 // Close user panel if open
         const userPanel = document.getElementById('userPanel');
         userPanel.classList.remove('open');
     }
    
    saveUserData() {
        if (!isUserLoggedIn) return;
        
        const userData = {
            cardHistory: cardHistory,
            settings: {
                language: currentLanguage,
                theme: document.body.getAttribute('data-theme') || 'default',
                soundEnabled: document.getElementById('soundToggle')?.checked,
                musicEnabled: document.getElementById('musicToggle')?.checked,
                notificationsEnabled: document.getElementById('notificationsToggle')?.checked
            },
            stats: {
                totalCards: cardHistory.length,
                daysActive: this.calculateDaysActive(),
                lastVisit: new Date().toISOString()
            }
        };
        
        localStorage.setItem(`userData_${currentUser.id}`, JSON.stringify(userData));
    }
    
    loadUserData() {
        if (!isUserLoggedIn) return;
        
        const userData = localStorage.getItem(`userData_${currentUser.id}`);
        if (userData) {
            const data = JSON.parse(userData);
            
            // Load card history
            if (data.cardHistory) {
                cardHistory = data.cardHistory;
                renderHistory();
            }
            
            // Load settings
            if (data.settings) {
                if (data.settings.language) {
                    switchLanguage(data.settings.language);
                }
                if (data.settings.theme) {
                    changeTheme(data.settings.theme);
                }
            }
            
            // Update user stats in UI
            this.updateUserStats(data.stats);
        }
    }
    
    updateUserStats(stats) {
        if (stats) {
            document.getElementById('userCardCount').textContent = stats.totalCards || cardHistory.length;
            document.getElementById('userDaysActive').textContent = stats.daysActive || this.calculateDaysActive();
        }
    }
    
    calculateDaysActive() {
        if (cardHistory.length === 0) return 0;
        
        const dates = [...new Set(cardHistory.map(card => 
            new Date(card.date).toDateString()
        ))];
        return dates.length;
    }
    
    async syncUserData() {
        if (!isUserLoggedIn) return;
        
        showNotification('Syncing data...', 'info');
        
        // Simulate sync process
        setTimeout(() => {
            this.saveUserData();
            showNotification('Data synced successfully!', 'success');
        }, 1500);
    }
    
    exportUserData() {
        if (!isUserLoggedIn) return;
        
        const userData = {
            user: currentUser,
            cardHistory: cardHistory,
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(userData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `fortune-cards-data-${currentUser.name.replace(/\s+/g, '-')}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showNotification('Data exported successfully!', 'success');
    }
}

// Initialize UserManager instance
const userManager = new UserManager();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize DOM elements first
        cardGrid = document.getElementById('cardGrid');
        statusText = document.getElementById('statusText');
        revealedCard = document.getElementById('revealedCard');
        dailyCardImage = document.getElementById('dailyCardImage');
        cardName = document.getElementById('cardName');
        cardMeaning = document.getElementById('cardMeaning');
        toggleHistoryBtn = document.getElementById('toggleHistory');
        clearHistoryBtn = document.getElementById('clearHistory');
        historyGrid = document.getElementById('historyGrid');
        
        // Ensure daily-reading section is visible from start
        const dailyReadingSection = document.querySelector('.daily-reading');
        if (dailyReadingSection) {
            dailyReadingSection.style.display = 'block';
            dailyReadingSection.style.visibility = 'visible';
        }
        
        // Initialize user management first
        userManager.init();
        
        loadFromStorage();
        
        // Initialize language system
        const savedLanguage = localStorage.getItem('language') || 'th';
        currentLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
        document.getElementById('languageSelect').addEventListener('change', function() {
            switchLanguage(this.value);
        });
        
        // Update UI with current language
        updateUILanguage();
        updateDailyQuote();
        
        checkDailyCard();
        setupEventListeners();
        renderHistory();
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

// Load data from localStorage
function loadFromStorage() {
    const storedDailyCard = localStorage.getItem('dailyCard');
    const storedDate = localStorage.getItem('dailyCardDate');
    const storedHistory = localStorage.getItem('cardHistory');
    
    const today = new Date().toDateString();
    
    if (storedDate === today && storedDailyCard) {
        dailyCard = JSON.parse(storedDailyCard);
        hasPickedToday = true;
    }
    
    if (storedHistory) {
        cardHistory = JSON.parse(storedHistory);
    }
}

// Save data to localStorage (with user support)
function saveToStorage() {
    const today = new Date().toDateString();
    
    if (dailyCard) {
        localStorage.setItem('dailyCard', JSON.stringify(dailyCard));
        localStorage.setItem('dailyCardDate', today);
    }
    
    localStorage.setItem('cardHistory', JSON.stringify(cardHistory));
    
    // Also save to user account if logged in
    if (isUserLoggedIn) {
        userManager.saveUserData();
    }
}

// Check if daily card has been picked today
function checkDailyCard() {
    // Always ensure daily-reading section is visible
    const dailyReadingSection = document.querySelector('.daily-reading');
    if (dailyReadingSection) {
        dailyReadingSection.style.display = 'block';
        dailyReadingSection.style.visibility = 'visible';
    }
    
    if (dailyCard && hasPickedToday) {
        console.log('=== checkDailyCard: Showing already picked card ===');
        // Show the already picked card
        const t = translations[currentLanguage];
        statusText.textContent = currentLanguage === 'th' ? 'คุณได้เลือกไพ่ประจำวันแล้ว' : 'You have already picked your daily card';
        showRevealedCard(dailyCard);
        
        // Show lucky information for already picked card
        const luckyInfo = generateLuckyInfo(dailyCard.file);
        document.getElementById('luckyColor').textContent = luckyInfo.color;
        document.getElementById('luckyNumbers').textContent = luckyInfo.numbers;
        document.getElementById('luckyTime').textContent = luckyInfo.time;
        document.getElementById('luckyInfo').style.display = 'flex';
        
        // Show star information (ดาวเสวย และ ดาวแทรก)
        const yamInfo = calculateCurrentYam();
        const cardNumber = getCardNumber(dailyCard.file);
        
        // Get star info elements
        const starElements = {
            starSevy: document.getElementById('starSevy'),
            starTaek: document.getElementById('starTaek'),
            starDay: document.getElementById('starDay'),
            starPeriod: document.getElementById('starPeriod'),
            starTime: document.getElementById('starTime'),
            starInfo: document.getElementById('starInfo'),
            starExplanation: document.getElementById('starExplanation'),
            starSevyTaekInterpretation: document.getElementById('starSevyTaekInterpretation'),
            starInterpretationContent: document.getElementById('starInterpretationContent'),
            starDetailedInterpretation: document.getElementById('starDetailedInterpretation'),
            detailedInterpretationContent: document.getElementById('detailedInterpretationContent')
        };
        
        // Display star information
        if (starElements.starSevy) starElements.starSevy.textContent = `${cardNumber} (${getStarName(cardNumber)})`;
        if (starElements.starTaek) starElements.starTaek.textContent = `${yamInfo.yamNumber} (${getStarName(yamInfo.yamNumber)})`;
        if (starElements.starDay) starElements.starDay.textContent = yamInfo.dayName;
        if (starElements.starPeriod) starElements.starPeriod.textContent = yamInfo.periodName;
        if (starElements.starTime) starElements.starTime.textContent = yamInfo.time;
        
        // Display Star Sevy-Taek interpretation from the database
        const sevyStarKey = getStarKeyFromNumber(cardNumber);
        const taekStarKey = getStarKeyFromNumber(yamInfo.yamNumber);
        const interpretationKey = `${sevyStarKey}-${taekStarKey}`;
        
        // Debug info
        console.log(`Card number: ${cardNumber}, Yam number: ${yamInfo.yamNumber}`);
        console.log(`Star combination: ${sevyStarKey}-${taekStarKey}`);
        console.log(`Looking for interpretation key: ${interpretationKey}`);
        console.log(`STAR_SEVY_TAEK_DATABASE loaded: ${typeof STAR_SEVY_TAEK_DATABASE !== 'undefined'}`);
        if (typeof STAR_SEVY_TAEK_DATABASE !== 'undefined') {
            console.log(`Total interpretations available: ${Object.keys(STAR_SEVY_TAEK_DATABASE.interpretations).length}`);
            console.log(`Key exists: ${interpretationKey in STAR_SEVY_TAEK_DATABASE.interpretations}`);
        }
        
        if (typeof STAR_SEVY_TAEK_DATABASE !== 'undefined' && STAR_SEVY_TAEK_DATABASE.interpretations[interpretationKey]) {
            const interpretation = STAR_SEVY_TAEK_DATABASE.interpretations[interpretationKey];
            console.log(`✅ Found interpretation (${interpretation.length} chars)`);
            
            // First section: Basic star info
            if (starElements.starInterpretationContent) {
                starElements.starInterpretationContent.innerHTML = `
                    <div class="star-combination-daily">
                        <h6>${getStarName(cardNumber)}เสวย - ${getStarName(yamInfo.yamNumber)}แทรก</h6>
                        <div class="star-details-daily">
                            <span class="sevy-detail">
                                <i class="fas fa-star text-golden"></i> 
                                ดาวเสวย: ${getStarName(cardNumber)} (${cardNumber})
                            </span>
                            <span class="taek-detail">
                                <i class="fas fa-star-half-alt text-red"></i> 
                                ดาวแทรก: ${getStarName(yamInfo.yamNumber)} (${yamInfo.yamNumber})
                            </span>
                        </div>
                        <div class="star-timing-info">
                            <p><strong>ยาม:</strong> ${yamInfo.periodName} (${yamInfo.time})</p>
                            <p><strong>วันที่:</strong> ${yamInfo.dayName}</p>
                        </div>
                    </div>
                `;
            }
            if (starElements.starSevyTaekInterpretation) starElements.starSevyTaekInterpretation.classList.remove('hidden');
            
            // Second section: Detailed interpretation from scripture
            if (starElements.detailedInterpretationContent) {
                starElements.detailedInterpretationContent.innerHTML = `
                    <div class="detailed-star-interpretation">
                        <div class="scripture-reference">
                            <h6><i class="fas fa-scroll"></i> ${getStarName(cardNumber)}เสวย - ${getStarName(yamInfo.yamNumber)}แทรก</h6>
                        </div>
                        <div class="interpretation-text">
                            <p><strong>ความหมายตามตำรา:</strong></p>
                            <div class="scripture-content">
                                <p style="white-space: pre-wrap; line-height: 1.8;">${interpretation}</p>
                            </div>
                        </div>
                        <div class="interpretation-guidance">
                            <h6><i class="fas fa-lightbulb"></i> คำแนะนำ</h6>
                            <p>การตีความนี้เป็นไปตามตำราโบราณไทย ควรใช้เป็นแนวทางในการพิจารณาเหตุการณ์ที่อาจเกิดขึ้น และเตรียมตัวรับมือกับสถานการณ์ต่างๆ ได้อย่างเหมาะสม</p>
                        </div>
                    </div>
                `;
            }
            if (starElements.starDetailedInterpretation) starElements.starDetailedInterpretation.classList.remove('hidden');
            
        } else {
            console.warn('Star Sevy-Taek interpretation not found for key:', interpretationKey);
            // Show a fallback message in both sections
            if (starElements.starInterpretationContent) {
                starElements.starInterpretationContent.innerHTML = `
                    <div class="star-combination-daily">
                        <h6>${getStarName(cardNumber)}เสวย - ${getStarName(yamInfo.yamNumber)}แทรก</h6>
                        <div class="star-details-daily">
                            <span class="sevy-detail">
                                <i class="fas fa-star text-golden"></i> 
                                ดาวเสวย: ${getStarName(cardNumber)} (${cardNumber})
                            </span>
                            <span class="taek-detail">
                                <i class="fas fa-star-half-alt text-red"></i> 
                                ดาวแทรก: ${getStarName(yamInfo.yamNumber)} (${yamInfo.yamNumber})
                            </span>
                        </div>
                    </div>
                `;
            }
            if (starElements.starSevyTaekInterpretation) starElements.starSevyTaekInterpretation.classList.remove('hidden');
            
            if (starElements.detailedInterpretationContent) {
                starElements.detailedInterpretationContent.innerHTML = `
                    <div class="detailed-star-interpretation">
                        <p><strong>ไม่พบการตีความสำหรับการรวมกันของดาวนี้</strong></p>
                        <p><em>กรุณาตรวจสอบฐานข้อมูลตำรา</em></p>
                    </div>
                `;
            }
            if (starElements.starDetailedInterpretation) starElements.starDetailedInterpretation.classList.remove('hidden');
        }
        
        // Show star info sections
        if (starElements.starInfo) starElements.starInfo.style.display = 'flex';
        if (starElements.starExplanation) starElements.starExplanation.style.display = 'block';
        
        // Star influence result section removed per user request
        // Only showing the star interpretation sections (starSevyTaekInterpretation and starDetailedInterpretation)
        
        // Show daily affirmation
        const affirmation = generateAffirmation(dailyCard.name);
        document.getElementById('dailyAffirmation').textContent = affirmation;
        
        // Hide shuffle controls when card is already picked
        const shuffleControls = document.getElementById('shuffleControls');
        if (shuffleControls) {
            shuffleControls.style.display = 'none';
        }
        
        // Keep the card grid visible but show the already picked card
        // Don't hide the grid - just ensure no new cards can be generated
    } else {
        // Allow card selection
        hasPickedToday = false;
        const t = translations[currentLanguage];
        statusText.textContent = t.clickCard || 'คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
        
        // Show shuffle controls when can pick new card
        const shuffleControls = document.getElementById('shuffleControls');
        if (shuffleControls) {
            shuffleControls.style.display = 'block';
        }
        
        generateCardGrid(); // Only generate cards when allowed to pick
    }
}

// Generate the card grid - single large card
function generateCardGrid() {
    const cardFiles = Object.keys(CARD_DATA);
    cardGrid.innerHTML = '';
    
    // Ensure daily-reading section is visible
    const dailyReadingSection = document.querySelector('.daily-reading');
    if (dailyReadingSection) {
        dailyReadingSection.style.display = 'block';
        dailyReadingSection.style.visibility = 'visible';
    }
    
    // Only show pickable card if not picked today
    if (!hasPickedToday) {
        const randomCardFile = cardFiles[Math.floor(Math.random() * cardFiles.length)];
        
        const cardElement = document.createElement('div');
        cardElement.className = 'card single-card';
        cardElement.dataset.cardFile = randomCardFile;
        
        const img = document.createElement('img');
        img.src = 'Card Back.png';
        img.alt = 'กดที่ไพ่เพื่อดูดวงประจำวัน';
        
        cardElement.appendChild(img);
        cardGrid.appendChild(cardElement);
        
        // Add click event listener only if not picked today
        if (!hasPickedToday) {
            cardElement.addEventListener('click', () => handleCardClick(randomCardFile, cardElement));
        }
    } else {
        // Show the already picked card in the grid (disabled state)
        if (dailyCard) {
            const cardElement = document.createElement('div');
            cardElement.className = 'card single-card flipped disabled';
            cardElement.dataset.cardFile = dailyCard.file;
            
            const img = document.createElement('img');
            img.src = dailyCard.file;
            img.alt = dailyCard.name;
            
            cardElement.appendChild(img);
            cardElement.style.pointerEvents = 'none';
            cardElement.style.cursor = 'default';
            cardGrid.appendChild(cardElement);
        }
    }
}

// Handle card click
function handleCardClick(cardFile, cardElement) {
    // Prevent any clicks if daily card has already been picked
    if (hasPickedToday) {
        return;
    }
    
    // But add a small delay to prevent spam clicking
    if (cardElement.classList.contains('clicking')) {
        return;
    }
    
    cardElement.classList.add('clicking');
    
    // Disable all cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.pointerEvents = 'none';
        card.classList.add('loading');
    });
    
    // Animate card flip
    cardElement.classList.add('flipped');
    
    setTimeout(() => {
        // Reveal the selected card
        const cardData = getCardData(cardFile);
        const selectedCard = {
            file: cardFile,
            name: cardData.name,
            meaning: cardData.meaning,
            date: new Date().toISOString()
        };
        
        dailyCard = selectedCard;
        hasPickedToday = true; // Set to true to prevent picking again today
        
        // Update the card image to show the revealed card
        const cardImg = cardElement.querySelector('img');
        cardImg.src = cardFile;
        cardImg.alt = cardData.name;
        
        // Get current yam info and star influence for history
        const currentYamInfo = calculateCurrentYam();
        const currentStarInfluence = calculateStarInfluence(cardFile);
        
        // Enhanced card data with comprehensive star influence information
        const enhancedCard = {
            ...selectedCard,
            yamInfo: {
                yamNumber: currentYamInfo.yamNumber,
                dayName: currentYamInfo.dayName,
                periodName: currentYamInfo.periodName,
                time: currentYamInfo.time,
                periodType: currentYamInfo.periodType,
                yamSequence: currentYamInfo.yamSequence,
                currentTime: currentYamInfo.currentTime,
                thaiDay: currentYamInfo.thaiDay
            },
            starInfluence: {
                yamSevy: currentStarInfluence.sevyStar, // ดาวเสวย (from card)
                yamTaek: currentStarInfluence.taekStar, // ดาวแทรก (from current time)
                sevyStarName: currentStarInfluence.sevyStarName,
                taekStarName: currentStarInfluence.taekStarName,
                influence: currentStarInfluence.influence,
                lookupKey: `${currentStarInfluence.sevyStar}-${currentStarInfluence.taekStar}`,
                detailedInfluence: getDetailedStarInfluence(currentStarInfluence.sevyStar, currentStarInfluence.taekStar)
            },
            cardNumber: getCardNumber(cardFile),
            luckyInfo: generateLuckyInfo(cardFile),
            readingTimestamp: new Date().toISOString(),
            readingContext: 'daily-card'
        };
        
        // Add enhanced card to history
        cardHistory.unshift(enhancedCard);
        
        // Keep only last 50 records (increased for multiple daily picks)
        if (cardHistory.length > 50) {
            cardHistory = cardHistory.slice(0, 50);
        }
        
        saveToStorage();
        
        const t = translations[currentLanguage];
        statusText.textContent = currentLanguage === 'th' ? 'คุณได้เลือกไพ่ประจำวันแล้ว' : 'You have picked your daily card';
        
        // Hide shuffle controls after picking a card
        const shuffleControls = document.getElementById('shuffleControls');
        if (shuffleControls) {
            shuffleControls.style.display = 'none';
        }
        
        showRevealedCard(selectedCard);
        renderHistory();
        
        // Keep the card visible but disable clicking
        cardElement.classList.remove('clicking');
        
        // Disable clicking on this specific card only
        cardElement.style.pointerEvents = 'none';
        cardElement.style.cursor = 'default';
        cardElement.classList.add('disabled');
        
        // Show lucky information
        const luckyInfo = generateLuckyInfo(cardFile);
        document.getElementById('luckyColor').textContent = luckyInfo.color;
        document.getElementById('luckyNumbers').textContent = luckyInfo.numbers;
        document.getElementById('luckyTime').textContent = luckyInfo.time;
        document.getElementById('luckyInfo').style.display = 'flex';
        
        // Show star information (ดาวเสวย และ ดาวแทรก) and calculate influence
        const starInfluence = calculateStarInfluence(cardFile);
        const { sevyStar, taekStar, sevyStarName, taekStarName, influence, yamInfo } = starInfluence;
        
        // Get star info elements
        const starElements = {
            starSevy: document.getElementById('starSevy'),
            starTaek: document.getElementById('starTaek'),
            starDay: document.getElementById('starDay'),
            starPeriod: document.getElementById('starPeriod'),
            starTime: document.getElementById('starTime'),
            starInfo: document.getElementById('starInfo'),
            starExplanation: document.getElementById('starExplanation')
        };
        
        // Display star information
        if (starElements.starSevy) starElements.starSevy.textContent = `${sevyStar} (${sevyStarName})`;
        if (starElements.starTaek) starElements.starTaek.textContent = `${taekStar} (${taekStarName})`;
        if (starElements.starDay) starElements.starDay.textContent = yamInfo.dayName;
        if (starElements.starPeriod) starElements.starPeriod.textContent = yamInfo.periodName;
        if (starElements.starTime) starElements.starTime.textContent = yamInfo.time;
        
        // Show star info sections
        if (starElements.starInfo) starElements.starInfo.style.display = 'flex';
        if (starElements.starExplanation) starElements.starExplanation.style.display = 'block';
        
        // Star influence result section removed per user request
        // Only showing the star interpretation sections (starSevyTaekInterpretation and starDetailedInterpretation)
        
        // Show daily affirmation
        const affirmation = generateAffirmation(selectedCard.name);
        document.getElementById('dailyAffirmation').textContent = affirmation;
        
        // Play sound effects
        playSound('successSound');
        
        showNotification('เลือกไพ่สำเร็จ! 🎉', 'success');
    }, 800);
}

// Show the revealed card
function showRevealedCard(card) {
    // Ensure the daily-reading section remains visible
    const dailyReadingSection = document.querySelector('.daily-reading');
    if (dailyReadingSection) {
        dailyReadingSection.style.display = 'block';
        dailyReadingSection.style.visibility = 'visible';
    }
    
    dailyCardImage.src = card.file;
    
    // Display card name and inner text
    const cardData = getCardData(card.file);
    if (cardData) {
        cardName.innerHTML = `${cardData.name}<br><span style="font-size: 0.8em; color: #666;">${cardData.innerText}</span>`;
        cardMeaning.textContent = cardData.meaning;
        
        // Add card name meaning section
        let cardNameMeaningElement = document.getElementById('cardNameMeaning');
        if (!cardNameMeaningElement) {
            cardNameMeaningElement = document.createElement('div');
            cardNameMeaningElement.id = 'cardNameMeaning';
            cardNameMeaningElement.style.marginTop = '15px';
            cardNameMeaningElement.style.padding = '15px';
            cardNameMeaningElement.style.backgroundColor = 'rgba(255, 215, 0, 0.15)';
            cardNameMeaningElement.style.borderRadius = '10px';
            cardNameMeaningElement.style.borderLeft = '4px solid #FFD700';
            cardNameMeaningElement.style.fontWeight = 'bold';
            cardNameMeaningElement.style.color = '#2d3436';
            cardMeaning.parentNode.appendChild(cardNameMeaningElement);
        }
        cardNameMeaningElement.innerHTML = `<strong>📖 ความหมายตามชื่อไพ่:</strong><br>${cardData.cardNameMeaning}`;
        
        // Add description section
        let descriptionElement = document.getElementById('cardDescription');
        if (!descriptionElement) {
            descriptionElement = document.createElement('div');
            descriptionElement.id = 'cardDescription';
            descriptionElement.style.marginTop = '15px';
            descriptionElement.style.padding = '15px';
            descriptionElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            descriptionElement.style.borderRadius = '10px';
            descriptionElement.style.fontStyle = 'italic';
            cardMeaning.parentNode.appendChild(descriptionElement);
        }
        descriptionElement.innerHTML = `<strong>คำอธิบาย:</strong><br>${cardData.description}`;
        

    } else {
        cardName.textContent = card.name;
        cardMeaning.textContent = card.meaning;
    }
    
    // Set revealed card background to match the card background
    revealedCard.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
    
    // Keep the original card grid background since the card stays visible
    // No need to change the background as the card remains in the grid
    
    revealedCard.style.display = 'block';
    revealedCard.classList.add('success');
    
    setTimeout(() => {
        revealedCard.classList.remove('success');
        
        // Double-check the daily-reading section visibility
        const dailyReadingAfter = document.querySelector('.daily-reading');
        if (dailyReadingAfter) {
            dailyReadingAfter.style.display = 'block';
            dailyReadingAfter.style.visibility = 'visible';
        }
    }, 500);
}

// Setup event listeners
function setupEventListeners() {
    toggleHistoryBtn.addEventListener('click', toggleHistory);
    clearHistoryBtn.addEventListener('click', clearHistory);
}

// Toggle history display
function toggleHistory() {
    const isHidden = historyGrid.style.display === 'none';
    historyGrid.style.display = isHidden ? 'grid' : 'none';
    toggleHistoryBtn.textContent = isHidden ? 'ซ่อนประวัติ' : 'แสดงประวัติ';
}

// Clear history
function clearHistory() {
    if (confirm('คุณต้องการลบประวัติการดูไพ่ทั้งหมดหรือไม่?')) {
        cardHistory = [];
        localStorage.removeItem('cardHistory');
        renderHistory();
        showNotification('ลบประวัติเรียบร้อยแล้ว', 'success');
    }
}

// Render history
function renderHistory() {
    historyGrid.innerHTML = '';
    
    if (cardHistory.length === 0) {
        historyGrid.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1 / -1;">ยังไม่มีประวัติการดูไพ่</p>';
        return;
    }
    
    cardHistory.forEach(card => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(card.date);
        const dateStr = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        historyItem.innerHTML = `
            <img src="${card.file}" alt="${card.name}">
            <h4>${card.name}</h4>
            <p class="date">${dateStr}</p>
        `;
        
        historyGrid.appendChild(historyItem);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#00b894' : type === 'warning' ? '#fdcb6e' : '#0984e3'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 600;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Manual reset daily card function
function manualResetDailyCard() {
    const t = translations[currentLanguage];
    const confirmMessage = currentLanguage === 'th' ? 
        'คุณต้องการรีเซ็ตไพ่ประจำวันเพื่อเลือกใหม่หรือไม่?' : 
        'Do you want to reset your daily card to pick a new one?';
        
    if (confirm(confirmMessage)) {
        hasPickedToday = false;
        dailyCard = null;
        localStorage.removeItem('dailyCard');
        localStorage.removeItem('dailyCardDate');
        
        // Ensure daily-reading section is visible after reset
        const dailyReadingSection = document.querySelector('.daily-reading');
        if (dailyReadingSection) {
            dailyReadingSection.style.display = 'block';
            dailyReadingSection.style.visibility = 'visible';
        }
        
        // Update status text with current language
        statusText.textContent = t.clickCard || 'คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
        revealedCard.style.display = 'none';
        document.getElementById('luckyInfo').style.display = 'none';
        
        // Hide star info sections
        const starInfo = document.getElementById('starInfo');
        const starExplanation = document.getElementById('starExplanation');
        // starInfluenceResult removed per user request
        const starSevyTaekInterpretation = document.getElementById('starSevyTaekInterpretation');
        const starDetailedInterpretation = document.getElementById('starDetailedInterpretation');
        
        if (starInfo) starInfo.style.display = 'none';
        if (starExplanation) starExplanation.style.display = 'none';
        // starInfluenceResult hiding removed per user request
        if (starSevyTaekInterpretation) starSevyTaekInterpretation.classList.add('hidden');
        if (starDetailedInterpretation) starDetailedInterpretation.classList.add('hidden');
        
        // Hide card name meaning section if it exists
        const cardNameMeaningElement = document.getElementById('cardNameMeaning');
        if (cardNameMeaningElement) {
            cardNameMeaningElement.style.display = 'none';
        }
        
        // Hide description section if it exists
        const descriptionElement = document.getElementById('cardDescription');
        if (descriptionElement) {
            descriptionElement.style.display = 'none';
        }
        
        // Show shuffle controls when resetting (THIS WAS MISSING!)
        const shuffleControls = document.getElementById('shuffleControls');
        if (shuffleControls) {
            shuffleControls.style.display = 'block';
        }
        
        // Reset shuffle state
        isDailyShuffling = false;
        dailyShuffleCount = 0;
        const shuffleBtn = document.getElementById('shuffleBtn');
        const shuffleCounter = document.getElementById('shuffleCounter');
        if (shuffleBtn) {
            shuffleBtn.disabled = false;
            shuffleBtn.classList.remove('shuffling');
            shuffleBtn.innerHTML = '<i class="fas fa-sync-alt"></i> สับไพ่ 9 ครั้ง';
        }
        if (shuffleCounter) {
            shuffleCounter.style.display = 'none';
        }
        
        // Reset backgrounds to default
        const cardGrid = document.getElementById('cardGrid');
        cardGrid.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        revealedCard.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        
        // Clear the card grid and regenerate
        cardGrid.innerHTML = '';
        
        generateCardGrid();
        
        const successMessage = currentLanguage === 'th' ? 
            'รีเซ็ตไพ่ประจำวันเรียบร้อยแล้ว ✨' : 
            'Daily card reset successfully ✨';
        showNotification(successMessage, 'success');
    }
}

// Reset daily card at midnight
function resetDailyCard() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const timeUntilMidnight = midnight.getTime() - now.getTime();
    
    setTimeout(() => {
        hasPickedToday = false;
        dailyCard = null;
        localStorage.removeItem('dailyCard');
        localStorage.removeItem('dailyCardDate');
        
        statusText.textContent = 'คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
        revealedCard.style.display = 'none';
        
        // Reset backgrounds to default
        const cardGrid = document.getElementById('cardGrid');
        cardGrid.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        revealedCard.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        
        // Clear the card grid and regenerate
        cardGrid.innerHTML = '';
        
        generateCardGrid();
        
        // Set up for next day
        resetDailyCard();
    }, timeUntilMidnight);
}

// Initialize reset timer
resetDailyCard();

// Enhanced Features Implementation

// Tab Management
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to nav tab
    event.target.classList.add('active');
    
    currentTab = tabName;
    
    // Ensure daily-reading section is visible when switching to daily tab
    if (tabName === 'daily') {
        const dailyReadingSection = document.querySelector('.daily-reading');
        if (dailyReadingSection) {
            dailyReadingSection.style.display = 'block';
            dailyReadingSection.style.visibility = 'visible';
        }
    }
    
    // Load specific tab content
    if (tabName === 'analytics') {
        loadAnalytics();
    } else if (tabName === 'journal') {
        loadJournal();
        populateJournalCardSelect();
    }
}

// Settings Management
function openSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.add('open');
}

function closeSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.remove('open');
}

// Theme Management
function changeTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('selectedTheme', theme);
}

// Sound Management
function playSound(soundId) {
    if (!soundEnabled) return;
    
    const sound = document.getElementById(soundId);
    if (sound && sound.src) {
        sound.currentTime = 0;
        sound.play().catch(e => {
            // Silently handle missing sound files
            console.log('Sound not available:', soundId);
        });
    }
}

// Card Shuffling Functions for Daily Reading
let isDailyShuffling = false;
let dailyShuffleCount = 0;

function shuffleCards() {
    if (isDailyShuffling || hasPickedToday) return;
    
    const shuffleBtn = document.getElementById('shuffleBtn');
    const shuffleCounter = document.getElementById('shuffleCounter');
    const shuffleCountSpan = document.getElementById('shuffleCount');
    const shuffleProgressBar = document.getElementById('shuffleProgressBar');
    const statusText = document.getElementById('statusText');
    
    isDailyShuffling = true;
    dailyShuffleCount = 0;
    
    // Disable button and show counter
    shuffleBtn.disabled = true;
    shuffleBtn.classList.add('shuffling');
    shuffleBtn.innerHTML = '<i class="fas fa-sync-alt"></i> กำลังสับไพ่...';
    shuffleCounter.style.display = 'block';
    
    // Update status text
    statusText.textContent = 'กำลังสับไพ่เพื่อให้ได้พลังงานที่บริสุทธิ์...';
    
    function performShuffle() {
        dailyShuffleCount++;
        shuffleCountSpan.textContent = dailyShuffleCount;
        
        // Update progress bar
        const progress = (dailyShuffleCount / 9) * 100;
        shuffleProgressBar.style.width = progress + '%';
        
        // Shuffle animation for cards
        animateCardShuffle();
        
        if (dailyShuffleCount < 9) {
            setTimeout(performShuffle, 800);
        } else {
            // Shuffling complete
            setTimeout(() => {
                isDailyShuffling = false;
                shuffleBtn.disabled = false;
                shuffleBtn.classList.remove('shuffling');
                shuffleBtn.innerHTML = '<i class="fas fa-sync-alt"></i> สับไพ่ 9 ครั้ง';
                shuffleCounter.style.display = 'none';
                shuffleProgressBar.style.width = '0%';
                statusText.textContent = 'สับไพ่เรียบร้อยแล้ว! คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
                
                // Show completion effect
                const cardGrid = document.getElementById('cardGrid');
                cardGrid.classList.add('glow');
                setTimeout(() => {
                    cardGrid.classList.remove('glow');
                }, 2000);
                
                // Play completion sound
                playSound('shuffle-complete');
                
            }, 1000);
        }
    }
    
    performShuffle();
}

function animateCardShuffle() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            // Random shuffle animation
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            const randomRotate = (Math.random() - 0.5) * 10;
            
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            
            // Return to original position
            setTimeout(() => {
                card.style.transform = 'translate(0, 0) rotate(0deg)';
            }, 300);
            
        }, index * 50);
    });
}

// Three Cards Reading System
let threeCardsReading = {
    cards: {
        past: null,
        present: null,
        future: null
    },
    isActive: false
};

function initializePick3Cards() {
    // Reset any existing reading
    resetThreeCards();
    
    // Set active state for 3-card reading
    threeCardsReading.isActive = true;
    threeCardsReading.cards = {
        past: null,
        present: null,
        future: null
    };
    
    // Show the display area
    const displayArea = document.getElementById('threeCardsDisplay');
    displayArea.style.display = 'block';
    
    // Hide start button and show reset button
    const startButton = document.getElementById('pick3CardsBtn');
    const resetButton = document.getElementById('reset3CardsBtn');
    if (startButton) startButton.style.display = 'none';
    if (resetButton) resetButton.style.display = 'inline-block';
    
    // Show instruction
    const instruction = document.getElementById('pickInstruction');
    if (instruction) instruction.style.display = 'block';
    
    // Ensure all card slots are clickable
    const positions = ['pastCard', 'presentCard', 'futureCard'];
    positions.forEach(position => {
        const cardSlot = document.getElementById(position);
        if (cardSlot) {
            cardSlot.classList.add('clickable');
            cardSlot.style.pointerEvents = 'auto';
            cardSlot.style.cursor = 'pointer';
            cardSlot.onclick = function() {
                const positionName = position.replace('Card', '');
                pickCardForSpecificPosition(positionName);
            };
                 }
     });
}

// Refresh three cards history display
function refreshThreeCardsHistory() {
    console.log('Refreshing three cards history...');
    const container = document.getElementById('threeCardsHistoryContainer');
    if (container) {
        container.innerHTML = '<div style="text-align: center; padding: 20px;"><i class="fas fa-spinner fa-spin"></i> กำลังโหลด...</div>';
    }
    
    setTimeout(() => {
        if (typeof loadThreeCardsHistory === 'function') {
            console.log('Using advanced loadThreeCardsHistory function');
            loadThreeCardsHistory();
        } else {
            console.log('Using fallback loadThreeCardsHistoryFallback function');
            loadThreeCardsHistoryFallback();
        }
    }, 500);
}

// Create test data for three cards history (for demonstration)
function createTestThreeCardsHistory() {
    const testEntry = {
        type: 'three-cards',
        date: new Date().toISOString(),
        readingTimestamp: new Date().toISOString(),
        readingContext: 'three-cards-manual',
        cards: {
            past: {
                file: 'ธนัง2.png',
                name: 'ธนัง2',
                meaning: 'ความมั่งคั่งและทรัพย์สินที่มั่นคง'
            },
            present: {
                file: 'กัมมะ1.png', 
                name: 'กัมมะ1',
                meaning: 'การงานและความสำเร็จในอาชีพ'
            },
            future: {
                file: 'ปุตตะ1.png',
                name: 'ปุตตะ1', 
                meaning: 'ลูกหลานและความสุขในครอบครัว'
            }
        },
        summary: 'ดวงชะตาในระยะนี้แสดงถึงความมั่นคงทางการเงิน การงานที่ก้าวหน้า และความสุขในครอบครัว',
        yamInfo: {
            yamNumber: 3,
            dayName: 'จันทร์',
            periodName: 'ยามบ่าย',
            time: '14:30-16:00',
            periodType: 'afternoon'
        },
        tableData: {
            rows: [
                { position: 'อดีต', cardNumber: 6, values: [6, 7, 1, 2, 3, 4, 5] },
                { position: 'ปัจจุบัน', cardNumber: 3, values: [3, 4, 5, 6, 7, 1, 2] },
                { position: 'อนาคต', cardNumber: 5, values: [5, 6, 7, 1, 2, 3, 4] }
            ],
            columnSums: [14, 17, 13, 9, 12, 8, 11],
            highlightedNumbers: [3]
        },
        yamInfluences: [
            {
                position: 'past',
                positionThai: 'อดีต',
                cardNumber: 6,
                yamSevy: 6,
                yamTaek: 3,
                strengthLevel: 4,
                category: 'positive'
            },
            {
                position: 'present', 
                positionThai: 'ปัจจุบัน',
                cardNumber: 3,
                yamSevy: 3,
                yamTaek: 3,
                strengthLevel: 5,
                category: 'positive'
            },
            {
                position: 'future',
                positionThai: 'อนาคต', 
                cardNumber: 5,
                yamSevy: 5,
                yamTaek: 3,
                strengthLevel: 3,
                category: 'positive'
            }
        ],
        numericalAnalysis: {
            cardNumbers: [6, 3, 5],
            yamMatches: 5,
            overallCompatibility: 'excellent'
        }
    };
    
    let existingHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    existingHistory.unshift(testEntry);
    localStorage.setItem('threeCardsHistory', JSON.stringify(existingHistory));
    
    console.log('Test three-cards history data created');
}

function pickCardForSpecificPosition(position) {
    console.log('Attempting to pick card for position:', position, 'Active:', threeCardsReading.isActive);
    
    if (!threeCardsReading.isActive) {
        console.log('Three cards reading is not active');
        return;
    }
    
    // Check if this position already has a card
    if (threeCardsReading.cards && threeCardsReading.cards[position]) {
        // Ask user if they want to replace the card
        const t = translations[currentLanguage];
        const confirmMessage = currentLanguage === 'th' ? 
            'คุณได้เลือกไพ่ตำแหน่งนี้แล้ว ต้องการเลือกใหม่หรือไม่?' : 
            'You have already picked a card for this position. Do you want to pick a new one?';
        
        if (!confirm(confirmMessage)) {
            return;
        }
    }
    
    // Get random card that hasn't been picked yet for other positions
    const cardFiles = Object.keys(CARD_DATA);
    const usedCards = Object.values(threeCardsReading.cards)
        .filter(card => card !== null && card.position !== position)
        .map(card => card.file);
    
    let availableCards = cardFiles.filter(card => !usedCards.includes(card));
    
    if (availableCards.length === 0) {
        availableCards = cardFiles; // Fallback if somehow all cards used
    }
    
    const randomCardFile = availableCards[Math.floor(Math.random() * availableCards.length)];
    const cardData = getCardData(randomCardFile);
    
    // Store the picked card
    const cardInfo = {
        file: randomCardFile,
        name: cardData.name,
        meaning: cardData.meaning,
        position: position
    };
    threeCardsReading.cards[position] = cardInfo;
    
    // Animate card reveal
    const cardSlot = document.getElementById(position + 'Card');
    const meaningElement = document.getElementById(position + 'Meaning');
    
    cardSlot.classList.add('revealing');
    
    setTimeout(() => {
        // Update card image
        const img = cardSlot.querySelector('img');
        img.src = randomCardFile;
        img.alt = cardData.name;
        
        // Remove clickable class and add revealed class
        cardSlot.classList.remove('clickable', 'revealing');
        cardSlot.classList.add('revealed');
        cardSlot.removeAttribute('onclick');
        
        // Hide click indicator
        const clickIndicator = cardSlot.querySelector('.click-indicator');
        if (clickIndicator) {
            clickIndicator.style.display = 'none';
        }
        
        // Update meaning
        meaningElement.textContent = cardData.meaning;
        meaningElement.classList.remove('empty');
        
        // Check if all cards are picked
        checkAllCardsPicked();
        
    }, 400);
}

function checkAllCardsPicked() {
    const { past, present, future } = threeCardsReading.cards;
    
    if (past && present && future) {
        // All cards picked, show summary after a short delay
        setTimeout(() => {
            showThreeCardsSummary();
        }, 1000);
        
        // Hide instruction
        const instruction = document.getElementById('pickInstruction');
        instruction.style.display = 'none';
    }
}

function showThreeCardsSummary() {
    const summaryElement = document.getElementById('threeCardsSummary');
    const overallReadingElement = document.getElementById('overallReading');
    
    // Generate overall reading based on the three cards
    const cardsArray = [
        threeCardsReading.cards.past,
        threeCardsReading.cards.present, 
        threeCardsReading.cards.future
    ];
    const overallReading = generateThreeCardsReading(cardsArray);
    overallReadingElement.textContent = overallReading;
    
    // Generate numerical table
    generateNumericalTable(cardsArray);
    
    // Show summary with animation
    summaryElement.style.display = 'block';
    summaryElement.style.opacity = '0';
    summaryElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        summaryElement.style.transition = 'all 0.5s ease';
        summaryElement.style.opacity = '1';
        summaryElement.style.transform = 'translateY(0)';
    }, 100);
}

function generateThreeCardsReading(cards) {
    if (!cards || cards.length !== 3) return '';
    
    const [past, present, future] = cards;
    
    // Create a meaningful interpretation based on the three cards
    const interpretations = [
        `จากอดีตที่ ${past.name} ได้สร้างรากฐานให้กับปัจจุบันที่ ${present.name} และนำไปสู่อนาคตที่ ${future.name} กำลังรอคุณอยู่`,
        
        `ไพ่ ${past.name} ในอดีตได้เตรียมคุณมาสู่ปัจจุบันที่เต็มไปด้วย ${present.name} ซึ่งจะนำพาคุณไปสู่อนาคตแห่ง ${future.name}`,
        
        `การเดินทางจาก ${past.name} ในอดีต ผ่าน ${present.name} ในปัจจุบัน จะนำคุณไปสู่ ${future.name} ที่เต็มไปด้วยโอกาสใหม่`,
        
        `พลังแห่ง ${past.name} จากอดีตกำลังส่งผลต่อ ${present.name} ในปัจจุบัน และเปิดทางสู่ ${future.name} ในอนาคตอันใกล้นี้`
    ];
    
    const selectedInterpretation = interpretations[Math.floor(Math.random() * interpretations.length)];
    
    // Add some additional guidance based on card combinations
    let guidance = ' ';
    
    // Simple guidance based on card meanings
    if (present.meaning.includes('การเงิน') || present.meaning.includes('ความมั่งคั่ง')) {
        guidance += 'นี่เป็นช่วงเวลาที่ดีสำหรับการตัดสินใจด้านการเงิน ';
    }
    
    if (future.meaning.includes('โอกาส') || future.meaning.includes('ดี')) {
        guidance += 'อนาคตข้างหน้าเต็มไปด้วยโอกาสดีๆ ที่รอคุณอยู่ ';
    }
    
    if (past.meaning.includes('กรรม') || past.meaning.includes('ความพยายาม')) {
        guidance += 'ความพยายามและการกระทำดีในอดีตกำลังจะส่งผลดีกลับมา ';
    }
    
    guidance += 'จงเปิดใจรับพลังบวกและใช้ภูมิปัญญาในการตัดสินใจ';
    
    return selectedInterpretation + guidance;
}

function saveThreeCardsReading() {
    if (!threeCardsReading.cards || !threeCardsReading.cards.past || !threeCardsReading.cards.present || !threeCardsReading.cards.future) {
        alert('ไม่พบข้อมูลการดูไพ่ที่จะบันทึก');
        return;
    }
    
    // Get current yam info
    const yamInfo = calculateCurrentYam();
    
    // Generate numerical table data
    const cardsArray = [
        threeCardsReading.cards.past,
        threeCardsReading.cards.present, 
        threeCardsReading.cards.future
    ];
    
    // Get card numbers and generate table
    const cardNumbers = cardsArray.map(card => {
        const cardData = CARD_DATA[card.file];
        return cardData && cardData.number ? parseInt(cardData.number) : 1;
    });
    
    const tableData = [];
    cardNumbers.forEach((cardNumber, index) => {
        const row = generateCardRow(cardNumber);
        tableData.push({
            position: index === 0 ? 'อดีต' : index === 1 ? 'ปัจจุบัน' : 'อนาคต',
            cardNumber: cardNumber,
            values: row
        });
    });
    
    // Calculate column sums
    const columnSums = [];
    for (let col = 0; col < 7; col++) {
        let sum = 0;
        tableData.forEach(row => {
            sum += row.values[col];
        });
        columnSums.push(sum);
    }
    
    // Calculate comprehensive yam influences for each card
    const yamInfluences = cardsArray.map((card, index) => {
        const cardNumber = getCardNumber(card.file);
        const detailedInfluence = getDetailedStarInfluence(cardNumber, yamInfo.yamNumber);
        const position = index === 0 ? 'past' : index === 1 ? 'present' : 'future';
        
        return {
            position: position,
            positionThai: index === 0 ? 'อดีต' : index === 1 ? 'ปัจจุบัน' : 'อนาคต',
            cardFile: card.file,
            cardName: card.name,
            cardNumber: cardNumber,
            yamSevy: cardNumber, // ดาวเสวย (from card)
            yamTaek: yamInfo.yamNumber, // ดาวแทรก (from current time)
            sevyStarName: getStarName(cardNumber),
            taekStarName: getStarName(yamInfo.yamNumber),
            basicInfluence: detailedInfluence.basicInfluence,
            detailedInfluence: detailedInfluence,
            strengthLevel: detailedInfluence.strengthLevel,
            category: detailedInfluence.category,
            recommendations: detailedInfluence.recommendations,
            timeAnalysis: detailedInfluence.timeAnalysis
        };
    });
    
    const reading = {
        type: 'three-cards',
        date: new Date().toISOString(),
        readingTimestamp: new Date().toISOString(),
        readingContext: 'three-cards-manual',
        cards: threeCardsReading.cards,
        summary: document.getElementById('overallReading').textContent,
        yamInfo: {
            yamNumber: yamInfo.yamNumber,
            dayName: yamInfo.dayName,
            periodName: yamInfo.periodName,
            time: yamInfo.time,
            periodType: yamInfo.periodType,
            yamSequence: yamInfo.yamSequence,
            currentTime: yamInfo.currentTime,
            thaiDay: yamInfo.thaiDay
        },
        tableData: {
            rows: tableData,
            columnSums: columnSums,
            highlightedNumbers: [yamInfo.yamNumber], // Numbers that match current yam
            positionNames: [
                ['อัตตะ', 'หินะ', 'ธนัง', 'ปิตา', 'มาตา', 'โภคา', 'มัชฌิมา'],
                ['ตนุ', 'กุมภะ', 'สหัชชะ', 'พันธุ', 'ปุตตะ', 'อริ', 'ปัตนิ'], 
                ['มรณะ', 'คุกะ', 'กัมมะ', 'ลาภะ', 'พยายะ', 'ทาสา', 'ทาสี']
            ]
        },
        yamInfluences: yamInfluences,
        numericalAnalysis: {
            cardNumbers: cardNumbers,
            yamMatches: columnSums.filter(sum => sum === yamInfo.yamNumber).length + 
                        tableData.reduce((count, row) => count + row.values.filter(val => val === yamInfo.yamNumber).length, 0),
            strengthAnalysis: yamInfluences.map(inf => ({
                position: inf.positionThai,
                strength: inf.strengthLevel,
                category: inf.category
            })),
            overallCompatibility: calculateOverallCompatibility(yamInfluences)
        },
        detailedAnalysis: {
            recommendations: generateThreeCardRecommendations(yamInfluences, yamInfo),
            timeWindow: generateOptimalTimeWindow(yamInfo, yamInfluences),
            futureGuidance: generateFutureGuidance(cardsArray, yamInfluences)
        }
    };
    
    // Get existing journal entries
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    
    // Add new reading to journal
    journalEntries.unshift(reading);
    
    // Keep only last 100 entries
    if (journalEntries.length > 100) {
        journalEntries = journalEntries.slice(0, 100);
    }
    
    // Save to localStorage
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    
    // Also save to separate three-cards history
    let threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    threeCardsHistory.unshift(reading);
    
    // Keep only last 50 three-card readings
    if (threeCardsHistory.length > 50) {
        threeCardsHistory = threeCardsHistory.slice(0, 50);
    }
    
    localStorage.setItem('threeCardsHistory', JSON.stringify(threeCardsHistory));
    
    // Show success message
    const t = translations[currentLanguage];
    const successMessage = currentLanguage === 'th' ? 
        'บันทึกการดูไพ่ 3 ใบเรียบร้อยแล้ว! รวมถึงตารางและข้อมูลยาม 🌟' : 
        'Three-card reading saved successfully! Including table and yam data 🌟';
    alert(successMessage);
    
    // Update journal tab if it exists
    if (typeof loadJournalEntries === 'function') {
        loadJournalEntries();
    }
    
    // Update separate three-cards history display if visible
    setTimeout(() => {
        if (typeof loadThreeCardsHistory === 'function') {
            loadThreeCardsHistory();
        } else {
            // Also try fallback function
            loadThreeCardsHistoryFallback();
        }
    }, 200);
}

function resetThreeCards() {
    // Reset the reading state with correct structure
    threeCardsReading = {
        cards: {
            past: null,
            present: null,
            future: null
        },
        isActive: false
    };
    
    // Hide display area
    const displayArea = document.getElementById('threeCardsDisplay');
    displayArea.style.display = 'none';
    
    // Hide summary
    const summaryElement = document.getElementById('threeCardsSummary');
    summaryElement.style.display = 'none';
    
    // Hide instruction
    const instruction = document.getElementById('pickInstruction');
    if (instruction) {
        instruction.style.display = 'none';
    }
    
    // Reset card slots
    const positions = ['pastCard', 'presentCard', 'futureCard'];
    const meanings = ['pastMeaning', 'presentMeaning', 'futureMeaning'];
    const t = translations[currentLanguage];
    const defaultTexts = currentLanguage === 'th' ? 
        ['คลิกเพื่อเลือกไพ่อดีต', 'คลิกเพื่อเลือกไพ่ปัจจุบัน', 'คลิกเพื่อเลือกไพ่อนาคต'] :
        ['Click to pick Past card', 'Click to pick Present card', 'Click to pick Future card'];
    
    positions.forEach((position, index) => {
        const cardSlot = document.getElementById(position);
        const img = cardSlot.querySelector('img');
        
        // Reset image
        img.src = 'Card Back.png';
        img.alt = `Click to pick ${position.replace('Card', '')} Card`;
        
        // Reset classes and re-enable clicking
        cardSlot.classList.remove('revealed', 'revealing');
        cardSlot.classList.add('clickable');
        cardSlot.style.pointerEvents = 'auto';
        cardSlot.style.cursor = 'pointer';
        
        // Reset meaning
        const meaningElement = document.getElementById(meanings[index]);
        if (meaningElement) {
            meaningElement.textContent = defaultTexts[index];
            meaningElement.classList.add('empty');
            meaningElement.classList.remove('filled');
        }
    });
    
    // Reset buttons
    const startButton = document.getElementById('pick3CardsBtn');
    const resetButton = document.getElementById('reset3CardsBtn');
    
    if (startButton) {
        startButton.style.display = 'inline-block';
        const t = translations[currentLanguage];
        startButton.innerHTML = `<i class="fas fa-magic"></i> ${t.pickThreeCards || 'เลือกไพ่ 3 ใบ'}`;
    }
    
    if (resetButton) {
        resetButton.style.display = 'none';
    }
}

// Generate numerical table for 3-card reading
function generateNumericalTable(cardsArray) {
    if (!cardsArray || cardsArray.length !== 3) return;
    
    // Get card numbers
    const cardNumbers = cardsArray.map(card => {
        const cardData = CARD_DATA[card.file];
        return cardData && cardData.number ? parseInt(cardData.number) : 1;
    });
    
    console.log('Card numbers:', cardNumbers);
    
    // Generate table rows based on card numbers
    const tableRows = [];
    
    cardNumbers.forEach((cardNumber, index) => {
        const row = generateCardRow(cardNumber);
        tableRows.push({
            cardNumber: cardNumber,
            values: row,
            cardName: cardsArray[index].name,
            position: index === 0 ? 'อดีต' : index === 1 ? 'ปัจจุบัน' : 'อนาคต'
        });
    });
    
    // Calculate column sums
    const columnSums = [];
    for (let col = 0; col < 7; col++) {
        let sum = 0;
        tableRows.forEach(row => {
            sum += row.values[col];
        });
        columnSums.push(sum);
    }
    
    // Get current yam number for highlighting
    const yamInfo = calculateCurrentYam();
    const currentYam = yamInfo.yamNumber;
    
    // Generate HTML table
    const tableContainer = document.getElementById('numericalTableContainer');
    if (!tableContainer) return;
    
    const t = translations[currentLanguage];
    const cardLabel = currentLanguage === 'th' ? 'ไพ่' : 'Card';
    const sumLabel = currentLanguage === 'th' ? 'รวม' : 'Sum';
    
    // Thai fortune-telling position names for each column
    const positionNames = [
        ['อัตตะ', 'หินะ', 'ธนัง', 'ปิตา', 'มาตา', 'โภคา', 'มัชฌิมา'],
        ['ตนุ', 'กุมภะ', 'สหัชชะ', 'พันธุ', 'ปุตตะ', 'อริ', 'ปัตนิ'], 
        ['มรณะ', 'คุกะ', 'กัมมะ', 'ลาภะ', 'พยายะ', 'ทาสา', 'ทาสี']
    ];
    
    let tableHTML = `
        <table class="numerical-table">
            <tbody>
    `;
    
    // Add card rows
    tableRows.forEach((row, rowIndex) => {
        tableHTML += `<tr class="card-row">`;
        tableHTML += `<td>${row.position}<br/><small>(${row.cardNumber})</small></td>`;
        
        row.values.forEach((value, colIndex) => {
            const isYamHighlight = value === currentYam;
            const highlightClass = isYamHighlight ? 'yam-highlight' : '';
            const positionName = positionNames[rowIndex] ? positionNames[rowIndex][colIndex] : '';
            tableHTML += `<td class="${highlightClass}">
                <div class="cell-number">${value}</div>
                <div class="cell-position">${positionName}</div>
            </td>`;
        });
        
        tableHTML += `</tr>`;
    });
    
    // Add separator line
    tableHTML += `<tr><td colspan="8" style="border: none; padding: 5px; background: #f0f0f0;"></td></tr>`;
    
    // Add sum row
    tableHTML += `<tr class="sum-row">`;
    tableHTML += `<td>${sumLabel}</td>`;
    
    columnSums.forEach(sum => {
        const isYamHighlight = sum === currentYam;
        const highlightClass = isYamHighlight ? 'yam-highlight' : '';
        tableHTML += `<td class="${highlightClass}">
            <div class="cell-number">${sum}</div>
        </td>`;
    });
    
    tableHTML += `</tr>`;
    tableHTML += `
            </tbody>
        </table>
    `;
    
    // Add yam information
    tableHTML += `
        <div class="yam-info-display">
            <strong>${t.currentYam}: ${currentYam}</strong> (${yamInfo.dayName}, ${yamInfo.time})<br/>
            <small>${t.yamHighlightNote}</small>
        </div>
    `;
    
    tableContainer.innerHTML = tableHTML;
}

// Generate a row of 7 numbers based on card number
function generateCardRow(cardNumber) {
    // Ensure card number is between 1-7
    cardNumber = Math.max(1, Math.min(7, cardNumber));
    
    const row = [];
    
    // Pattern based on the user's example:
    // Card 7: 7, 6, 5, 4, 3, 2, 1 (descending)
    // Card 4: 4, 5, 6, 7, 1, 2, 3 (ascending with wrap)
    // Card 1: 1, 2, 3, 4, 5, 6, 7 (ascending)
    
    // Determine if we should use ascending or descending pattern
    // Based on the example, it seems like higher numbers go descending
    // Let's use: 7 goes descending, others go ascending
    
    if (cardNumber === 7) {
        // Descending pattern for card 7
        for (let i = 0; i < 7; i++) {
            let value = cardNumber - i;
            
            // Handle wrapping (if goes below 1, wrap to 7)
            while (value < 1) {
                value = value + 7;
            }
            
            row.push(value);
        }
    } else {
        // Ascending pattern for other cards
        for (let i = 0; i < 7; i++) {
            let value = cardNumber + i;
            
            // Handle wrapping (if goes over 7, wrap to 1)
            while (value > 7) {
                value = value - 7;
            }
            
            row.push(value);
        }
    }
    
    return row;
}

// Get detailed star influence information
function getDetailedStarInfluence(sevyStar, taekStar) {
    const lookupKey = `${sevyStar}-${taekStar}`;
    const basicInfluence = STAR_INFLUENCE_TABLE[lookupKey] || 'ไม่พบข้อมูลในตำรา';
    
    return {
        sevyStar: sevyStar,
        taekStar: taekStar,
        sevyStarName: getStarName(sevyStar),
        taekStarName: getStarName(taekStar),
        lookupKey: lookupKey,
        basicInfluence: basicInfluence,
        strengthLevel: calculateInfluenceStrength(sevyStar, taekStar),
        category: categorizeInfluence(basicInfluence),
        recommendations: generateInfluenceRecommendations(sevyStar, taekStar, basicInfluence),
        timeAnalysis: analyzeTimingInfluence(sevyStar, taekStar)
    };
}

// Calculate influence strength (1-5)
function calculateInfluenceStrength(sevyStar, taekStar) {
    // Same stars = very strong
    if (sevyStar === taekStar) return 5;
    
    // Adjacent numbers = moderate
    const diff = Math.abs(sevyStar - taekStar);
    if (diff === 1 || diff === 6) return 3; // 6 because 1-7 and 7-1 are adjacent in circular
    
    // Opposite numbers = strong contrast
    if (diff === 3 || diff === 4) return 4;
    
    // Others = moderate
    return 2;
}

// Categorize influence type
function categorizeInfluence(influence) {
    if (!influence || influence === 'ไม่พบข้อมูลในตำรา') return 'unknown';
    
    const positive = ['ดี', 'เจริญ', 'สำเร็จ', 'โชค', 'ลาভ', 'กำไร', 'รุ่งเรือง'];
    const negative = ['เสีย', 'ขาด', 'ลด', 'หาย', 'เสื่อม', 'ลำบาก', 'อุปสรรค'];
    const neutral = ['ปกติ', 'คงที่', 'เท่าเดิม', 'สมดุล'];
    
    const lowerInfluence = influence.toLowerCase();
    
    if (positive.some(word => lowerInfluence.includes(word))) return 'positive';
    if (negative.some(word => lowerInfluence.includes(word))) return 'negative';
    if (neutral.some(word => lowerInfluence.includes(word))) return 'neutral';
    
    return 'mixed';
}

// Generate recommendations based on star influence
function generateInfluenceRecommendations(sevyStar, taekStar, influence) {
    const recommendations = [];
    
    // Based on sevy star (card influence)
    const sevyAdvice = {
        1: "ควรใช้ความอดทนและมุ่งมั่นในการทำงาน",
        2: "เหมาะกับการร่วมมือและการสร้างความสัมพันธ์",
        3: "ดีสำหรับการลงทุนและการขยายธุรกิจ",
        4: "ควรใส่ใจเรื่องเพื่อนฝูงและการสื่อสาร",
        5: "เหมาะกับการวางแผนระยะยาวและการสร้างฐานรากมั่นคง",
        6: "ดีสำหรับการเงินและการสะสมทรัพย์สิน",
        7: "ควรระมัดระวังและใช้ความอดทนในการแก้ปัญหา"
    };
    
    recommendations.push(sevyAdvice[sevyStar] || "ควรใช้วิจารณญาณในการตัดสินใจ");
    
    // Based on taek star (time influence)
    const taekAdvice = {
        1: "เวลานี้เหมาะกับการเริ่มต้นสิ่งใหม่",
        2: "ควรใช้เวลานี้ในการสร้างความสัมพันธ์",
        3: "เหมาะกับการลงทุนและการตัดสินใจทางการเงิน",
        4: "ดีสำหรับการติดต่อสื่อสารและการเจรจา",
        5: "ควรใช้เวลานี้ในการวางแผนและเตรียมการ",
        6: "เหมาะกับการจัดการเงินทองและทรัพย์สิน",
        7: "ควรระมัดระวังและหลีกเลี่ยงการตัดสินใจสำคัญ"
    };
    
    recommendations.push(taekAdvice[taekStar] || "ควรใช้ความระมัดระวังในช่วงเวลานี้");
    
    return recommendations;
}

// Analyze timing influence
function analyzeTimingInfluence(sevyStar, taekStar) {
    const analysis = {
        compatibility: 'moderate',
        timing: 'neutral',
        advice: 'ใช้วิจารณญาณในการตัดสินใจ'
    };
    
    // Same numbers = very compatible
    if (sevyStar === taekStar) {
        analysis.compatibility = 'excellent';
        analysis.timing = 'perfect';
        analysis.advice = 'เวลานี้เหมาะสมมากสำหรับการดำเนินการตามความหมายของไพ่';
    }
    // Adjacent numbers = good compatibility
    else if (Math.abs(sevyStar - taekStar) <= 1 || Math.abs(sevyStar - taekStar) >= 6) {
        analysis.compatibility = 'good';
        analysis.timing = 'favorable';
        analysis.advice = 'เวลานี้ค่อนข้างเหมาะสมสำหรับการดำเนินการ';
    }
    // Opposite numbers = challenging but potentially powerful
    else if (Math.abs(sevyStar - taekStar) >= 3 && Math.abs(sevyStar - taekStar) <= 4) {
        analysis.compatibility = 'challenging';
        analysis.timing = 'transformative';
        analysis.advice = 'เวลานี้อาจมีความท้าทายแต่ก็เป็นโอกาสสำหรับการเปลี่ยนแปลงที่ดี';
    }
    
    return analysis;
}

// Calculate overall compatibility for three cards
function calculateOverallCompatibility(yamInfluences) {
    if (!yamInfluences || yamInfluences.length !== 3) return 'unknown';
    
    const totalStrength = yamInfluences.reduce((sum, inf) => sum + inf.strengthLevel, 0);
    const avgStrength = totalStrength / 3;
    
    const categories = yamInfluences.map(inf => inf.category);
    const positiveCount = categories.filter(cat => cat === 'positive').length;
    const negativeCount = categories.filter(cat => cat === 'negative').length;
    
    if (avgStrength >= 4 && positiveCount >= 2) return 'excellent';
    if (avgStrength >= 3.5 && positiveCount >= 1) return 'good';
    if (negativeCount >= 2) return 'challenging';
    return 'moderate';
}

// Generate recommendations for three-card reading
function generateThreeCardRecommendations(yamInfluences, yamInfo) {
    const recommendations = [];
    
    // Overall timing recommendation
    recommendations.push(`ช่วงเวลานี้ (${yamInfo.dayName} ${yamInfo.time}) เป็นยาม${yamInfo.yamNumber} เหมาะสมสำหรับการปฏิบัติตามคำแนะนำจากไพ่`);
    
    // Individual position recommendations
    yamInfluences.forEach(influence => {
        if (influence.recommendations && influence.recommendations.length > 0) {
            recommendations.push(`${influence.positionThai}: ${influence.recommendations[0]}`);
        }
    });
    
    // Overall compatibility advice
    const compatibility = calculateOverallCompatibility(yamInfluences);
    switch (compatibility) {
        case 'excellent':
            recommendations.push('ดวงชะตาในระยะนี้อยู่ในช่วงดี ควรใช้โอกาสนี้ในการก้าวหน้า');
            break;
        case 'good':
            recommendations.push('สถานการณ์โดยรวมเป็นไปในทางที่ดี ควรมั่นใจในการตัดสินใจ');
            break;
        case 'challenging':
            recommendations.push('ช่วงนี้อาจมีอุปสรรค ควรใช้ความระมัดระวังและอดทน');
            break;
        default:
            recommendations.push('ควรใช้วิจารณญาณและความสมดุลในการดำเนินชีวิต');
    }
    
    return recommendations;
}

// Generate optimal time window
function generateOptimalTimeWindow(yamInfo, yamInfluences) {
    const strongInfluences = yamInfluences.filter(inf => inf.strengthLevel >= 4);
    
    if (strongInfluences.length >= 2) {
        return {
            period: 'current',
            description: `ช่วงเวลาปัจจุบัน (${yamInfo.time}) เป็นช่วงที่เหมาะสมมาก`,
            duration: '3-7 วัน',
            advice: 'ควรดำเนินการตามแผนที่วางไว้ในช่วงนี้'
        };
    }
    
    return {
        period: 'flexible',
        description: 'สามารถเลือกเวลาที่เหมาะสมได้ตามสถานการณ์',
        duration: '1-2 สัปดาห์',
        advice: 'ควรเฝ้าดูสัญญาณและโอกาสที่เหมาะสม'
    };
}

// Generate future guidance
function generateFutureGuidance(cardsArray, yamInfluences) {
    const futureCard = cardsArray[2]; // Future position
    const futureInfluence = yamInfluences[2];
    
    const guidance = {
        shortTerm: '',
        mediumTerm: '',
        longTerm: '',
        cautions: []
    };
    
    // Short term (1-3 months)
    guidance.shortTerm = `ในระยะใกล้ พลังของ${futureCard.name}จะส่งผลให้${futureInfluence.basicInfluence}`;
    
    // Medium term (3-6 months)
    if (futureInfluence.category === 'positive') {
        guidance.mediumTerm = 'ระยะกลางจะเป็นช่วงเวลาแห่งการเติบโตและพัฒนา';
    } else if (futureInfluence.category === 'negative') {
        guidance.mediumTerm = 'ระยะกลางควรเตรียมตัวและสร้างความมั่นคง';
    } else {
        guidance.mediumTerm = 'ระยะกลางจะเป็นช่วงแห่งการเปลี่ยนแปลงและปรับตัว';
    }
    
    // Long term (6+ months)
    guidance.longTerm = 'ระยะยาวความสำเร็จจะขึ้นอยู่กับการปฏิบัติตามคำแนะนำในปัจจุบัน';
    
    // Cautions
    yamInfluences.forEach(influence => {
        if (influence.category === 'negative' || influence.category === 'challenging') {
            guidance.cautions.push(`ระวัง${influence.positionThai}: ${influence.timeAnalysis.advice}`);
        }
    });
    
    return guidance;
}

// Get card number from CARD_DATA
function getCardNumber(cardFile) {
    // First try to get number from CARD_DATA
    const cardData = CARD_DATA[cardFile];
    if (cardData && cardData.number) {
        return parseInt(cardData.number);
    }
    
    // Fallback: Extract number from filename (e.g., "กดุมภะ1.png" -> 1, "กดุมภะ2.png" -> 2)
    const match = cardFile.match(/(\d+)/);
    if (match) {
        return parseInt(match[1]);
    }
    
    // If no number found, use first character code % 7 + 1 as fallback
    const firstChar = cardFile.charCodeAt(0);
    return (firstChar % 7) + 1;
}

// Lucky Information Generator
function generateLuckyInfo(cardFile) {
    const colors = ['แดง', 'น้ำเงิน', 'เขียว', 'เหลือง', 'ม่วง', 'ชมพู', 'ส้ม'];
    const numbers = Array.from({length: 3}, () => Math.floor(Math.random() * 99) + 1);
    const times = ['06:00-09:00', '09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00'];
    
    return {
        color: colors[Math.floor(Math.random() * colors.length)],
        numbers: numbers.join(', '),
        time: times[Math.floor(Math.random() * times.length)]
    };
}

// Daily Affirmations

function generateAffirmation(cardName) {
    const affirmations = {
        'กดุมภะ': 'วันนี้ฉันเปิดรับความมั่งคั่งและความอุดมสมบูรณ์',
        'กัมมะ': 'ฉันทำแต่สิ่งดีและรับผลดีกลับมา',
        'เคหัง': 'บ้านและครอบครัวของฉันเต็มไปด้วยความรักและความอบอุ่น',
        'ญาติ': 'ฉันล้อมรอบด้วยคนที่รักและเอาใจใส่',
        'ตนุ': 'ร่างกายและจิตใจของฉันแข็งแรงและสมดุล',
        'ทานัง': 'การให้ของฉันนำความสุขและความอุดมสมบูรณ์กลับมา',
        'ธนัง': 'ฉันเป็นแม่เหล็กของความมั่งคั่งและโอกาสดีๆ',
        'ปัตนิ': 'ความรักในชีวิตฉันเติบโตและแข็งแกร่งขึ้นทุกวัน',
        'ปิตา': 'ฉันเคารพและรำลึกถึงคุณงามความดีของบรรพบุรุษ',
        'default': 'วันนี้เป็นวันที่ดีและเต็มไปด้วยโอกาสใหม่ๆ'
    };
    
    for (const key in affirmations) {
        if (cardName.includes(key)) {
            return affirmations[key];
        }
    }
    
    return affirmations.default;
}

// Star Influence Lookup Table (ตำราดาวเสวยดาวแทรก)
const STAR_INFLUENCE_TABLE = {
    // อาทิตย์เสวย (Sun) = 1
    '1-1': 'ร้อนรน หาที่อยู่ใหม่',
    '1-2': 'เดือดร้อน เพราะบริวารไว้วางใจไม่ได้',
    '1-3': 'ถูกบังคับให้ยอมรับ',
    '1-4': 'บรรลุข้อตกลงเจรจา',
    '1-5': 'วิ่งเต้นหาผู้ใหญ่ หรือ ผู้ช่วยเหลือ จนสำเร็จ',
    '1-6': 'ถูกเบียดเบียน รบกวน',
    '1-7': 'ถูกหักหลัง และ โยนโทษมาให้',
    
    // จันทร์เสวย (Moon) = 2
    '2-1': 'พบเจอคู่หู ที่ไม่ถูกชะตา หรือ ถูกหลอกให้กระทำ',
    '2-2': 'มักเจอปัญหาที่ไม่ตรงกับความถนัดของตนเอง',
    '2-3': 'ถูกเพ่งเล็งด้วยความริษยา',
    '2-4': 'มิตรให้การอุปการะ',
    '2-5': 'การอุปการะที่ติดค้างบุญคุณ',
    '2-6': 'สมปรารถนาเมื่อแรกพบ',
    '2-7': 'ทอดทิ้งภาระ',
    
    // อังคารเสวย (Mars) = 3
    '3-1': 'ถูกขับไล่ บังคับให้สิ้นสภาพ',
    '3-2': 'ถูกชักชวนให้คล้อยตาม',
    '3-3': 'ลุ่มหลงทะนงตนเกินประมาณตน',
    '3-4': 'กระทำผิดและทิ้งภาระให้ผู้อื่น',
    '3-5': 'เกิดคดี ฟ้องร้อง หรือถูกฟ้อง',
    '3-6': 'จะได้ความช่วยเหลือจากผู้มีอำนาจ',
    '3-7': 'ถูกเพ่งเล็ง ศัตรูให้โทษ จองเวร อาฆาต',
    
    // พุธเสวย (Mercury) = 4
    '4-1': 'สรรหาว่าจ้าง ได้รับการติดต่อ',
    '4-2': 'ถูกผลักภาระมาให้แก่ตน',
    '4-3': 'เกิดมีคนหมั่นไส้ ปริวตา โกหกใส่ความ',
    '4-4': 'ได้ทรัพย์มาครอบครอง',
    '4-5': 'วิ่งเต้น ร้องขอ ติดอามิสสิน',
    '4-6': 'ถูกปองร้ายจากคนอื่น เสียทรัพย์',
    '4-7': 'เกิดโรคภัย ไข้เจ็บ เสียทรัพย์จากบุคคลอื่น',
    
    // พฤหัสเสวย (Jupiter) = 5
    '5-1': 'มีลาภเกิดจากผู้ใหญ่คนใกล้ตัว',
    '5-2': 'มักพบเจอคู่',
    '5-3': 'มีคดีความเป็นฝ่ายฟ้อง',
    '5-4': 'คนใกล้เอาใจห่าง เพราะไม่อาจตอบสนองความต้องการ',
    '5-5': 'จะเป็นเหตุการณ์ที่เกี่ยวข้องกับการที่ผู้ใหญ่ยื่นมือให้ความช่วยเหลือแต่ในทุกครั้งที่มีการช่วยเหลือ ผู้ใหญ่จากสร้างเงื่อนไขต่อรองและต้องอยู่ภายใต้การควบคุมตามคำสั่งของผู้ใหญ่',
    '5-6': 'จะหมายถึงโอกาส สร้างความสำเร็จที่มีผู้ใหญ่ผลักดันอยู่เบื้องหลัง แต่ในการผลักดันและคอยช่วยเหลือนั้น ต้องมีสิทธิ์น้ำใจมอบให้เป็นการตอบแทน เช่นเดียวกัน',
    '5-7': 'จะเป็นเหตุการณ์ ที่เกี่ยวข้องกับการ เปลี่ยนแปลง สถานะหนึ่งสู่สถานะหนึ่ง เช่นกรณีที่บุคคลเป็นลูกจ้างประจำก็จะอาจเป็นการเปลี่ยนแปลงมาเป็นเจ้าของกิจการหรือพนักงานในระดับปฏิบัติการรับการแต่งตั้งถือเป็นหัวหน้า แต่ทั้งนี้ทั้งนั้นจะอยู่ภายใต้การสั่งการของผู้ใหญ่อีกครั้งหนึ่ง ถ้าบอกให้เห็นภาพจะเรียกว่าเป็นหุ่นเชิดของผู้ใหญ่ก็ได้',
    
    // ศุกร์เสวย (Venus) = 6
    '6-1': 'จะสำเร็จเมื่อผ่านการทดสอบ',
    '6-2': 'พบเจอคนถูกใจจากบุคคลที่สาม',
    '6-3': 'เดินทาง โยกย้าย เสี่ยงภัย',
    '6-4': 'ถูกกดดันจำกัดอิสระภาพ',
    '6-5': 'ขัดแย้งผิดใจกับคนใกล้ตัวเพราะผู้ใหญ่กักกัน',
    '6-6': 'มีทรัพย์สมบัติ ได้มรดก',
    '6-7': 'ถูกใส่ความ กีดกัน แบ่งแยก',
    
    // เสาร์เสวย (Saturn) = 7
    '7-1': 'คนใกล้ชิดหรือคนใกล้ตัวเอาใจห่าง',
    '7-2': 'พลัดพรากสูญเสีย',
    '7-3': 'ถูกกีดกันขัดขวางจำกัดอิสระ',
    '7-4': 'ถูกแทรกแซงจากมือที่สาม',
    '7-5': 'เปลี่ยนแปลงไปสู่สิ่งใหม่ที่ไม่รำคาญ',
    '7-6': 'ความพยายามที่ไม่สำเร็จ ถูกปฏิเสธ',
    '7-7': 'บริวารหักหลังทรยศ'
};

// Convert star number to star name
function getStarName(starNumber) {
    const starNames = {
        1: 'อาทิตย์',
        2: 'จันทร์', 
        3: 'อังคาร',
        4: 'พุธ',
        5: 'พฤหัส',
        6: 'ศุกร์',
        7: 'เสาร์'
    };
    return starNames[starNumber] || 'ไม่ทราบ';
}

// Test functions for debugging (can be called from browser console)
function testYamCalculation() {
    console.log('🧪 Testing Yam Calculation:');
    const result = calculateCurrentYam();
    console.table(result);
    return result;
}

function testStarInfluence(cardFile = 'อัตตะ1.png') {
    console.log('🧪 Testing Star Influence for:', cardFile);
    const result = calculateStarInfluence(cardFile);
    console.table(result);
    return result;
}

function testCardNumbers() {
    console.log('🧪 Testing Card Numbers:');
    const testCards = ['อัตตะ1.png', 'หินะ2.png', 'ธนัง3.png', 'ปิตา4.png', 'มาตา5.png', 'ลาภะ6.png', 'สักกะ7.png'];
    testCards.forEach(card => {
        const number = getCardNumber(card);
        console.log(`${card} -> ${number}`);
    });
}

function testDifferentTimes() {
    console.log('🧪 Testing different times:');
    const testTimes = [
        { hour: 7, minute: 30, desc: 'Morning' },
        { hour: 12, minute: 0, desc: 'Noon' },
        { hour: 15, minute: 45, desc: 'Afternoon' },
        { hour: 19, minute: 15, desc: 'Evening' },
        { hour: 23, minute: 30, desc: 'Late Night' },
        { hour: 2, minute: 30, desc: 'Early Morning' }
    ];
    
    testTimes.forEach(test => {
        // Mock the current time
        const mockDate = new Date();
        mockDate.setHours(test.hour, test.minute, 0);
        
        console.log(`\n⏰ ${test.desc} (${test.hour.toString().padStart(2,'0')}:${test.minute.toString().padStart(2,'0')}):`);
        
        // Calculate manually for this time
        const currentTime = test.hour + (test.minute / 60);
        const thaiDay = mockDate.getDay() + 1;
        
        console.log(`   Current time decimal: ${currentTime.toFixed(2)}`);
        console.log(`   Thai day: ${thaiDay}`);
    });
}

// Global debug function - call debugStarSystem() in browser console
window.debugStarSystem = function() {
    console.clear();
    console.log('🌟 ===========================================');
    console.log('🌟 DEBUGGING STAR INFLUENCE SYSTEM');
    console.log('🌟 ===========================================');
    
    testYamCalculation();
    console.log('');
    testCardNumbers();
    console.log('');
    testStarInfluence();
    console.log('');
    testDifferentTimes();
    
    console.log('🌟 ===========================================');
    console.log('🌟 To test with specific card, use:');
    console.log('🌟 testStarInfluence("your-card-file.png")');
    console.log('🌟 ===========================================');
};

// Calculate current Yam (ยาม) based on Thai traditional time system
function calculateCurrentYam() {
    const now = new Date();
    const currentDay = now.getDay(); // 0=Sunday, 1=Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + (currentMinute / 60); // Convert to decimal hour
    
    // Convert JavaScript day (0-6) to Thai day (1-7)
    const thaiDay = currentDay + 1;
    
    // Define base Yam sequences
    const dayYamSequence = [1, 6, 4, 2, 7, 5, 3]; // ยามกลางวัน
    const nightYamSequence = [1, 5, 2, 6, 3, 7, 4]; // ยามกลางคืน
    
    // Adjust sequence based on current day
    function adjustSequenceForDay(sequence, day) {
        const dayIndex = day - 1; // Convert to 0-based index
        const adjustedSequence = [];
        
        for (let i = 0; i < sequence.length; i++) {
            let adjustedNumber = sequence[i] + dayIndex;
            // Wrap around if exceeds 7
            while (adjustedNumber > 7) {
                adjustedNumber = adjustedNumber - 7;
            }
            while (adjustedNumber < 1) {
                adjustedNumber = adjustedNumber + 7;
            }
            adjustedSequence.push(adjustedNumber);
        }
        
        return adjustedSequence;
    }
    
    // Determine if it's day or night time
    let yamSequence;
    let periodType;
    let periodIndex;
    
    if (currentTime >= 6 && currentTime < 18) {
        // Day time (06:00 - 18:00)
        yamSequence = adjustSequenceForDay(dayYamSequence, thaiDay);
        periodType = 'ยามกลางวัน';
        periodIndex = Math.floor((currentTime - 6) / 1.5);
        periodIndex = Math.max(0, Math.min(7, periodIndex));
    } else {
        // Night time (18:00 - 06:00)
        yamSequence = adjustSequenceForDay(nightYamSequence, thaiDay);
        periodType = 'ยามกลางคืน';
        
        if (currentTime >= 18) {
            // Evening/night (18:00 - 24:00) - periods 0-3
            periodIndex = Math.floor((currentTime - 18) / 1.5);
        } else {
            // Early morning (00:00 - 06:00) - periods 4-7
            periodIndex = Math.floor(currentTime / 1.5) + 4;
        }
        periodIndex = Math.max(0, Math.min(7, periodIndex));
    }
    
    // Get current Yam number (ensure we have a valid number)
    const yamNumber = yamSequence[periodIndex] || 1;
    
    // Helper function to format time
    function formatTime(hour) {
        const h = Math.floor(hour);
        const m = Math.round((hour % 1) * 60);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }
    
    // Generate time ranges for display
    let timeRanges = [];
    if (currentTime >= 6 && currentTime < 18) {
        // Day time ranges (06:00 - 18:00)
        for (let i = 0; i < 8; i++) {
            const startHour = 6 + (i * 1.5);
            const endHour = Math.min(6 + ((i + 1) * 1.5), 18);
            const startTime = formatTime(startHour);
            const endTime = formatTime(endHour);
            timeRanges.push(`${startTime}-${endTime}`);
        }
    } else {
        // Night time ranges (18:00 - 06:00)
        for (let i = 0; i < 8; i++) {
            let startHour = 18 + (i * 1.5);
            let endHour = 18 + ((i + 1) * 1.5);
            
            if (endHour <= 24) {
                // Same day
                timeRanges.push(`${formatTime(startHour)}-${formatTime(endHour)}`);
            } else {
                // Crosses midnight
                if (startHour < 24) {
                    timeRanges.push(`${formatTime(startHour)}-00:00`);
                } else {
                    startHour -= 24;
                    endHour -= 24;
                    timeRanges.push(`${formatTime(startHour)}-${formatTime(endHour)}`);
                }
            }
        }
    }
    
    // Thai day names
    const thaiDayNames = {
        1: 'อาทิตย์',
        2: 'จันทร์',
        3: 'อังคาร',
        4: 'พุธ',
        5: 'พฤหัสบดี',
        6: 'ศุกร์',
        7: 'เสาร์'
    };
    
    // Debug logging
    console.log('🕐 ยาม Debug:', {
        currentTime: `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`,
        currentDecimal: currentTime,
        thaiDay: thaiDay,
        dayName: thaiDayNames[thaiDay],
        periodType: periodType,
        periodIndex: periodIndex,
        yamSequence: yamSequence,
        yamNumber: yamNumber,
        timeRange: timeRanges[periodIndex]
    });
    
    return {
        yamNumber: yamNumber,
        periodType: periodType,
        periodIndex: periodIndex,
        time: timeRanges[periodIndex] || `${formatTime(currentTime)}-${formatTime(currentTime + 1.5)}`,
        dayName: thaiDayNames[thaiDay],
        periodName: `${periodType} ยามที่ ${periodIndex + 1}`,
        currentTime: currentTime,
        thaiDay: thaiDay,
        yamSequence: yamSequence
    };
}

// Calculate star influence between selected card and current time
function calculateStarInfluence(cardFile) {
    console.log('🌟 Starting star influence calculation for:', cardFile);
    
    // Get current yam info
    const yamInfo = calculateCurrentYam();
    console.log('🕐 Yam info:', yamInfo);
    
    // Get card number
    const cardNumber = getCardNumber(cardFile);
    console.log('🎴 Card number:', cardNumber);
    
    // Validate inputs
    if (!cardNumber || cardNumber < 1 || cardNumber > 7) {
        console.error('❌ Invalid card number:', cardNumber);
        return {
            sevyStar: cardNumber || 1,
            taekStar: 1,
            sevyStarName: 'ไม่ทราบ',
            taekStarName: 'ไม่ทราบ',
            influence: 'ไม่สามารถคำนวณได้ - เลขไพ่ไม่ถูกต้อง',
            yamInfo
        };
    }
    
    if (!yamInfo || !yamInfo.yamNumber || yamInfo.yamNumber < 1 || yamInfo.yamNumber > 7) {
        console.error('❌ Invalid yam info:', yamInfo);
        return {
            sevyStar: cardNumber,
            taekStar: 1,
            sevyStarName: getStarName(cardNumber),
            taekStarName: 'ไม่ทราบ',
            influence: 'ไม่สามารถคำนวณได้ - ข้อมูลยามไม่ถูกต้อง',
            yamInfo
        };
    }
    
    // Get star numbers
    const sevyStar = cardNumber; // ดาวเสวย (from card)
    const taekStar = yamInfo.yamNumber; // ดาวแทรก (from current time)
    
    // Create lookup key
    const lookupKey = `${sevyStar}-${taekStar}`;
    const influence = STAR_INFLUENCE_TABLE[lookupKey];
    
    // Get star names  
    const sevyStarName = getStarName(sevyStar);
    const taekStarName = getStarName(taekStar);
    
    console.log('🌟 Star influence calculation result:', {
        cardFile,
        cardNumber,
        sevyStar,
        taekStar,
        sevyStarName,
        taekStarName,
        lookupKey,
        influence: influence || 'ไม่พบข้อมูลในตำรา',
        yamInfo: {
            yamNumber: yamInfo.yamNumber,
            periodType: yamInfo.periodType,
            time: yamInfo.time
        }
    });
    
    return {
        sevyStar,
        taekStar,
        sevyStarName,
        taekStarName,
        influence: influence || 'ไม่พบข้อมูลในตำรา',
        yamInfo
    };
}

// Card Sharing
function shareCard() {
    if (!dailyCard) return;
    
    const shareData = {
        title: 'ไพ่ดวงดาว 7 ดวง',
        text: `วันนี้ฉันได้ไพ่ ${dailyCard.name}: ${dailyCard.meaning}`,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback for browsers that don't support Web Share API
        const text = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        navigator.clipboard.writeText(text).then(() => {
            showNotification('คัดลอกข้อความสำหรับแชร์แล้ว', 'success');
        });
    }
}

// Text-to-Speech
function readAloud() {
    if (!dailyCard) return;
    
    const text = `ไพ่ประจำวันของคุณคือ ${dailyCard.name}. ${dailyCard.meaning}`;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'th-TH';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// Journal Management
function saveToJournal() {
    if (!dailyCard) return;
    
    const today = new Date().toISOString().split('T')[0];
    const entry = {
        id: Date.now(),
        date: today,
        card: dailyCard,
        mood: 'happy',
        notes: `วันนี้ได้ไพ่ ${dailyCard.name} - ${dailyCard.meaning}`
    };
    
    journalEntries.unshift(entry);
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    
    showNotification('บันทึกในบันทึกส่วนตัวแล้ว', 'success');
    
    if (currentTab === 'journal') {
        loadJournal();
    }
}

// Card Spreads
let currentSpread = null;
function startSpread(type) {
    const spreadTypes = {
        'davidstar': {
            title: 'เดวิดสตาร์ - ไพ่ดวงดาว 7 ดวงชะตา',
            cards: 7,
            description: 'ไพ่ 7 ใบในรูปแบบดาวหกแฉก แสดงภาพรวมชีวิตใน 7 แง่มุม: ตัวตน การเงิน ครอบครัว สังคม ที่อยู่ การเดินทาง และคู่ครอง',
            layout: 'star'
        }
    };
    
    const spread = spreadTypes[type];
    if (!spread) return;
    
    currentSpread = spread;
    
    // David Star special shuffling interface
    if (spread.layout === 'star') {
        startDavidStarShuffle();
    }
}



// David Star Shuffling System
let davidStarCards = [];
let davidStarPosition = 0;
let shuffledDeck = [];
let isShuffling = false;

const starPositionNames = [
    'ธนัง - สถานะทางการเงิน ของที่ติดตัว (จุดบน)',
    'ญาติ - ญาติพี่น้อง ครอบครัว (ขวาบน)', 
    'นาวัง - การสังคม การเดินทาง ยานพาหนะ (ขวาล่าง)',
    'ภริยัง - คู่ครอง คู่หุ้นส่วน สามีหรือภรรยา (จุดล่าง)',
    'เคหัง - ที่อยู่อาศัย ที่ทำงาน (ซ้ายล่าง)',
    'สักกะ - เพื่อนฝูง สังคม คนรอบข้าง (ซ้ายบน)',
    'อัตตะ - ตัวตน ความคิด สิ่งที่อยากทำ อยากเป็น (ใจกลาง)'
];

function startDavidStarShuffle() {
    davidStarCards = [];
    davidStarPosition = 0;
    shuffledDeck = [...Object.keys(CARD_DATA)];
    
    showDavidStarPickInterface();
}

function shuffleDeck(times = 7) {
    isShuffling = true;
    updateShuffleDisplay();
    
    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        // Fisher-Yates shuffle algorithm
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        
        shuffleCount++;
        updateShuffleDisplay(`กำลังสับไพ่... ${shuffleCount}/${times}`);
        
        if (shuffleCount >= times) {
            clearInterval(shuffleInterval);
            isShuffling = false;
            showCardPickOptions();
        }
    }, 300);
}

function showDavidStarPickInterface() {
    const resultDiv = document.getElementById('spreadResult');
    const titleDiv = document.getElementById('spreadTitle');
    const cardsDiv = document.getElementById('spreadCards');
    const interpretationDiv = document.getElementById('spreadInterpretation');
    
    titleDiv.textContent = `ดาวิดสตาร์ - ${starPositionNames[davidStarPosition]}`;
    
    cardsDiv.innerHTML = `
        <div class="david-star-shuffle-info">
            <h4>เลือกไพ่สำหรับ ${starPositionNames[davidStarPosition]}</h4>
            <p>ตำแหน่งที่ ${davidStarPosition + 1} จาก 7</p>
            <div class="shuffle-status" id="shuffleStatus">
                <button class="btn primary" onclick="autoPickDavidStarCard()" ${isShuffling ? 'disabled' : ''} style="font-size: 18px; padding: 15px 30px;">
                    <i class="fas fa-magic"></i> สับไพ่ 9 ครั้งและเลือกอัตโนมัติ
                </button>
                <p style="margin-top: 10px; color: #666; font-size: 14px;">ระบบจะสับไพ่และเลือกไพ่ให้คุณโดยอัตโนมัติ</p>
            </div>
            <div class="card-pick-area" id="cardPickArea" style="display: none;">
                <!-- Card options will appear here after shuffling -->
            </div>
        </div>
    `;
    
    interpretationDiv.innerHTML = `
        <div class="david-star-progress">
            <h4>ความก้าวหน้า</h4>
            <div class="progress-cards">
                ${davidStarCards.map((card, index) => `
                    <div class="progress-card completed">
                        <div class="card-mini">
                            <img src="${card}" alt="${CARD_DATA[card].name}">
                        </div>
                        <p>${starPositionNames[index]}</p>
                    </div>
                `).join('')}
                <div class="progress-card current">
                    <div class="card-mini">
                        <img src="Card Back.png" alt="Current Position">
                    </div>
                    <p>${starPositionNames[davidStarPosition]}</p>
                </div>
                ${Array.from({length: 6 - davidStarPosition}, (_, index) => `
                    <div class="progress-card pending">
                        <div class="card-mini">
                            <img src="Card Back.png" alt="Pending">
                        </div>
                        <p>${starPositionNames[davidStarPosition + index + 1]}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function updateShuffleDisplay(message = 'พร้อมสับไพ่') {
    const shuffleStatus = document.getElementById('shuffleStatus');
    if (shuffleStatus) {
        if (isShuffling) {
            shuffleStatus.innerHTML = `
                <div class="shuffling-animation">
                    <i class="fas fa-sync fa-spin"></i> ${message}
                </div>
            `;
        } else {
            shuffleStatus.innerHTML = `
                <button class="btn primary" onclick="autoPickDavidStarCard()" ${isShuffling ? 'disabled' : ''} style="font-size: 18px; padding: 15px 30px;">
                    <i class="fas fa-magic"></i> สับไพ่ 9 ครั้งและเลือกอัตโนมัติ
                </button>
                <p style="margin-top: 10px; color: #666; font-size: 14px;">ระบบจะสับไพ่และเลือกไพ่ให้คุณโดยอัตโนมัติ</p>
            `;
        }
    }
}

function showCardPickOptions() {
    const cardPickArea = document.getElementById('cardPickArea');
    
    cardPickArea.innerHTML = `
        <h4>สับไพ่ 9 ครั้งและเลือกไพ่อัตโนมัติ</h4>
        <div style="text-align: center; padding: 20px;">
            <button class="btn primary" onclick="autoPickDavidStarCard()" style="font-size: 18px; padding: 15px 30px;">
                <i class="fas fa-magic"></i> สับไพ่และเลือกอัตโนมัติ
            </button>
            <p style="margin-top: 15px; color: #666;">ระบบจะสับไพ่ 9 ครั้งและเลือกไพ่ให้คุณโดยอัตโนมัติ</p>
        </div>
    `;
    
    cardPickArea.style.display = 'block';
}

// Auto pick function with 9-time shuffle and enhanced animations
function autoPickDavidStarCard() {
    const cardPickArea = document.getElementById('cardPickArea');
    
    // Show enhanced shuffling animation with round indicators
    cardPickArea.innerHTML = `
        <div class="david-star-shuffle-progress">
            <div style="font-size: 24px; margin-bottom: 20px;">
                <i class="fas fa-sync fa-spin" style="color: #ffd700;"></i>
            </div>
            <h4>กำลังสับไพ่ 9 ครั้ง...</h4>
            <div class="shuffle-round-indicator" id="shuffleRounds">
                ${Array.from({length: 9}, (_, i) => `<div class="shuffle-round" data-round="${i}"></div>`).join('')}
            </div>
            <div id="shuffleProgress" style="margin: 20px 0;">
                <div style="background: rgba(255,255,255,0.2); border-radius: 10px; height: 12px;">
                    <div id="shuffleProgressBar" style="background: linear-gradient(90deg, #ffd700, #ff9f43); height: 100%; border-radius: 10px; width: 0%; transition: width 0.5s;"></div>
                </div>
                <p id="shuffleCount" style="margin-top: 10px; color: #ffd700; font-weight: 600;">0 / 9</p>
            </div>
            <p style="color: #a0a0a0; font-size: 14px;">ไพ่กำลังเคลื่อนไหวในตำแหน่ง ${getPositionName(davidStarPosition)}</p>
        </div>
    `;

    // Add shake animation to the current position if cards are already laid out
    const existingLayout = document.querySelector('.david-star-layout');
    if (existingLayout) {
        const positionClasses = [
            'star-top', 'star-top-right', 'star-bottom-right', 
            'star-bottom', 'star-bottom-left', 'star-top-left', 'star-center'
        ];
        const currentPositionCard = existingLayout.querySelector(`.${positionClasses[davidStarPosition]}`);
        if (currentPositionCard) {
            currentPositionCard.classList.add('shuffling');
        }
    }
    
    // Perform 9 shuffles with enhanced animation
    let shuffleCount = 0;
    const shuffleInterval = setInterval(() => {
        // Mark current round
        const currentRound = document.querySelector(`[data-round="${shuffleCount}"]`);
        if (currentRound) {
            currentRound.classList.add('current');
        }
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
        }
        
        shuffleCount++;
        const progress = (shuffleCount / 9) * 100;
        
        // Update progress
        document.getElementById('shuffleProgressBar').style.width = progress + '%';
        document.getElementById('shuffleCount').textContent = `${shuffleCount} / 9`;
        
        // Mark completed rounds
        const completedRound = document.querySelector(`[data-round="${shuffleCount - 1}"]`);
        if (completedRound) {
            completedRound.classList.remove('current');
            completedRound.classList.add('completed');
        }
        
        if (shuffleCount >= 9) {
            clearInterval(shuffleInterval);
            
            // Remove shake animation
            if (existingLayout) {
                const currentPositionCard = existingLayout.querySelector('.shuffling');
                if (currentPositionCard) {
                    currentPositionCard.classList.remove('shuffling');
                }
            }
            
            // Auto select a card after shuffling
            setTimeout(() => {
                autoSelectCard();
            }, 500);
        }
    }, 400); // Slightly slower for better visual effect
}

// Helper function to get position name in Thai
function getPositionName(position) {
    const positionNames = [
        'ธนัง (จุดบน)', 'ญาติ (ขวาบน)', 'นาวัง (ขวาล่าง)',
        'ภริยัง (จุดล่าง)', 'เคหัง (ซ้ายล่าง)', 'สักกะ (ซ้ายบน)', 'อัตตะ (ใจกลาง)'
    ];
    return positionNames[position] || 'ไม่ทราบตำแหน่ง';
}

function autoSelectCard() {
    // Randomly select a card from the shuffled deck
    const randomIndex = Math.floor(Math.random() * shuffledDeck.length);
    const selectedCard = shuffledDeck[randomIndex];
    
    davidStarCards.push(selectedCard);
    
    // Remove selected card from deck
    shuffledDeck.splice(randomIndex, 1);
    
    // Show selected card briefly
    showSelectedCard(selectedCard);
    
    setTimeout(() => {
        davidStarPosition++;
        
        if (davidStarPosition >= 7) {
            // All cards selected, show final star layout
            displaySpreadResult(currentSpread, davidStarCards);
        } else {
            // Continue to next position
            showDavidStarPickInterface();
        }
    }, 2000);
}

function pickDavidStarCard(cardIndex) {
    // Get the shuffled card
    const selectedCard = shuffledDeck[cardIndex];
    davidStarCards.push(selectedCard);
    
    // Remove selected card from deck
    shuffledDeck.splice(cardIndex, 1);
    
    // Show selected card briefly
    showSelectedCard(selectedCard);
    
    setTimeout(() => {
        davidStarPosition++;
        
        if (davidStarPosition >= 7) {
            // All cards selected, show final star layout
            displaySpreadResult(currentSpread, davidStarCards);
        } else {
            // Continue to next position
            showDavidStarPickInterface();
        }
    }, 2000);
}

function showSelectedCard(cardFile) {
    const cardPickArea = document.getElementById('cardPickArea');
    cardPickArea.innerHTML = `
        <div class="selected-card-reveal">
            <h4>ไพ่ที่คุณเลือก</h4>
            <div class="revealed-card">
                <img src="${cardFile}" alt="${CARD_DATA[cardFile].name}">
                <h5>${CARD_DATA[cardFile].name}</h5>
                <p>${CARD_DATA[cardFile].meaning}</p>
            </div>
            <p>กำลังเตรียมตำแหน่งถัดไป...</p>
        </div>
    `;
}

function displaySpreadResult(spread, cards) {
    const resultDiv = document.getElementById('spreadResult');
    const titleDiv = document.getElementById('spreadTitle');
    const cardsDiv = document.getElementById('spreadCards');
    const interpretationDiv = document.getElementById('spreadInterpretation');
    
    titleDiv.textContent = spread.title;
    
    cardsDiv.innerHTML = '';
    
    // Special handling for David Star layout
    if (spread.layout === 'star') {
        displayDavidStarLayout(cardsDiv, cards);
        interpretationDiv.innerHTML = generateDavidStarInterpretation(cards);
    } else {
        cards.forEach((cardFile, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `<img src="${cardFile}" alt="${CARD_DATA[cardFile].name}">`;
            cardsDiv.appendChild(cardElement);
        });
        
        interpretationDiv.innerHTML = `
            <h4>การตีความ</h4>
            <p>${spread.description}</p>
            ${cards.map((cardFile, index) => `
                <div style="margin: 15px 0;">
                    <strong>ไพ่ที่ ${index + 1}: ${CARD_DATA[cardFile].name}</strong><br>
                    ${CARD_DATA[cardFile].meaning}
                </div>
            `).join('')}
        `;
    }
    
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function displayDavidStarLayout(container, cards) {
    container.className = 'david-star-layout';
    
    const starPositions = [
        'star-top',
        'star-top-right', 
        'star-bottom-right',
        'star-bottom',
        'star-bottom-left',
        'star-top-left',
        'star-center'
    ];

    const positionNames = [
        'ธนัง (จุดบน)',
        'ญาติ (ขวาบน)', 
        'นาวัง (ขวาล่าง)',
        'ภริยัง (จุดล่าง)',
        'เคหัง (ซ้ายล่าง)',
        'สักกะ (ซ้ายบน)',
        'อัตตะ (ใจกลาง)'
    ];

    const positionMeanings = [
        'สถานะหรือฐานะทางการเงินที่จะเป็นไป ของที่ติดตัว ที่อยู่กับเจ้าชะตา หรือโรคภัยเก่าๆที่เก็บไว้',
        'ญาติพี่น้อง ครอบครัว ของตนเอง ความสัมพันธ์ทางสายเลือด',
        'การสังคม การเดินทาง ยานพาหนะ ความเคลื่อนไหวในชีวิต',
        'คู่ครอง คู่หุ้นส่วน สามีหรือภรรยา ความสัมพันธ์ใกล้ชิด',
        'ที่ๆอยู่อาศัย หรือ ที่ๆทำงาน สถานที่สำคัญในชีวิต',
        'เพื่อนฝูง มิตรสหาย บริวาร คนใกล้ชิด หรือ สังคมรอบตัว',
        'ตัวตน ความคิดของเจ้าชะตา สิ่งที่เจ้าชะตาอยากทำ อยากเป็น ในช่วงปัจจุบันนี้'
    ];
    
    cards.forEach((cardFile, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${starPositions[index]}`;
        cardElement.innerHTML = `<img src="${cardFile}" alt="${CARD_DATA[cardFile].name}">`;
        
        container.appendChild(cardElement);
    });
}

// David Star functions - tooltips removed

function generateDavidStarInterpretation(cards) {
    const positions = [
        {
            name: 'ธนัง - สถานะทางการเงิน ของที่ติดตัว (จุดบน)',
            meaning: 'สถานะหรือฐานะทางการเงินที่จะเป็นไป ของที่ติดตัว ที่อยู่กับเจ้าชะตา หรือโรคภัยเก่าๆที่เก็บไว้',
            card: cards[0]
        },
        {
            name: 'ญาติ - ญาติพี่น้อง ครอบครัว (ขวาบน)',
            meaning: 'ญาติพี่น้อง ครอบครัว ของตนเอง ความสัมพันธ์ทางสายเลือด',
            card: cards[1]
        },
        {
            name: 'นาวัง - การสังคม การเดินทาง ยานพาหนะ (ขวาล่าง)',
            meaning: 'การสังคม การเดินทาง ยานพาหนะ ความเคลื่อนไหวในชีวิต',
            card: cards[2]
        },
        {
            name: 'ภริยัง - คู่ครอง คู่หุ้นส่วน สามีหรือภรรยา (จุดล่าง)',
            meaning: 'คู่ครอง คู่หุ้นส่วน สามีหรือภรรยา ความสัมพันธ์ใกล้ชิด',
            card: cards[3]
        },
        {
            name: 'เคหัง - ที่อยู่อาศัย ที่ทำงาน (ซ้ายล่าง)',
            meaning: 'ที่ๆอยู่อาศัย หรือ ที่ๆทำงาน สถานที่สำคัญในชีวิต',
            card: cards[4]
        },
        {
            name: 'สักกะ - เพื่อนฝูง สังคม คนรอบข้าง (ซ้ายบน)',
            meaning: 'เพื่อนฝูง มิตรสหาย บริวาร คนใกล้ชิด หรือ สังคมรอบตัว',
            card: cards[5]
        },
        {
            name: 'อัตตะ - ตัวตน ความคิด สิ่งที่อยากทำ อยากเป็น (ใจกลาง)',
            meaning: 'ตัวตน ความคิดของเจ้าชะตา สิ่งที่เจ้าชะตาอยากทำ อยากเป็น ในช่วงปัจจุบันนี้',
            card: cards[6]
        }
    ];
    
    return `
        <div style="text-align: center; margin-bottom: 30px;">
            <h4 style="color: #ffd700; font-size: 22px; margin-bottom: 15px;">
                <i class="fas fa-star" style="margin-right: 10px;"></i>
                การตีความไพ่ดวงดาว 7 ดวงแบบเดวิดสตาร์
                <i class="fas fa-star" style="margin-left: 10px;"></i>
            </h4>
            <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 10px; border: 1px solid rgba(255, 215, 0, 0.3);">
                <p style="color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                    🔮 <strong>การดูไพ่:</strong> การดูไพ่แบบเดวิดสตาร์จะแสดงภาพรวมของชีวิตในทุกด้าน<br>
                    ⭐ ไพ่ตรงกลางคือหัวใจหลักของเจ้าชะตา ส่วนไพ่รอบๆ แสดงแง่มุมต่างๆ ของชีวิต
                </p>
            </div>
        </div>
        
        <div style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 159, 67, 0.1)); border-radius: 20px; border: 2px solid rgba(255, 215, 0, 0.2);">
            <h4 style="color: #ffd700; text-align: center; margin-bottom: 20px; font-size: 18px;">
                <i class="fas fa-crown" style="margin-right: 8px;"></i>
                สรุปดวงชะตาแบบเดวิดสตาร์
            </h4>
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 15px; align-items: center;">
                <div style="font-size: 40px;">🌟</div>
                <div>
                    <p style="color: #f8f9fa; font-size: 16px; line-height: 1.6; margin: 0;">
                        ไพ่ดวงดาว 7 ดวงของคุณแสดงภาพรวมของชีวิต โดยไพ่ตรงกลาง 
                        <strong style="color: #ffd700;">"${CARD_DATA[cards[6]].name}"</strong> 
                        เป็นตัวตนและความคิดหลักของคุณ ส่วนไพ่รอบๆ แสดงถึงแง่มุมต่างๆ ของชีวิต 
                        ได้แก่ การเงิน ครอบครัว สังคม ที่อยู่ การเดินทาง และคู่ครอง 
                        ซึ่งล้วนมีอิทธิพลต่อทิศทางชีวิตของคุณ
                    </p>
                </div>
            </div>
        </div>

        <div style="margin-top: 25px; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 15px; border-left: 4px solid #ff6b6b;">
            <h5 style="color: #ff6b6b; margin-bottom: 15px; display: flex; align-items: center;">
                <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                การแปลผลไพ่
            </h5>
            <ul style="color: #d0d0d0; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>ไพ่กลาง:</strong> แสดงตัวตนและแก่นแท้ของเจ้าชะตา</li>
                <li><strong>ไพ่รอบนอก:</strong> แสดงแง่มุมต่างๆ ของชีวิต (การเงิน ครอบครัว สังคม)</li>
                <li><strong>ภาพรวม:</strong> พิจารณาไพ่ทั้ง 7 ใบร่วมกันเป็นเรื่องราว</li>
                <li><strong>คำอธิบาย:</strong> อ่านความหมายแต่ละตำแหน่งด้านล่าง</li>
            </ul>
        </div>

        <div style="margin-top: 30px;">
            <h4 style="color: #ffd700; text-align: center; margin-bottom: 25px; font-size: 20px;">
                <i class="fas fa-star-of-david" style="margin-right: 10px;"></i>
                ความหมายแต่ละตำแหน่งในเดวิดสตาร์
            </h4>
            ${positions.map(position => `
                <div style="margin-bottom: 20px; padding: 20px; background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 255, 255, 0.8)); border-radius: 15px; border-left: 5px solid #ffd700;">
                    <h5 style="color: #1a1a1a; margin-bottom: 10px; font-size: 16px; font-weight: 700;">
                        ${position.name}
                    </h5>
                    <p style="color: #2c3e50; margin-bottom: 12px; font-size: 14px; line-height: 1.5;">
                        ${position.meaning}
                    </p>
                    <div style="background: rgba(255, 215, 0, 0.1); padding: 12px; border-radius: 8px;">
                        <h6 style="color: #d35400; margin: 0 0 8px 0; font-size: 14px;">
                            <i class="fas fa-magic" style="margin-right: 5px;"></i>
                            ไพ่ที่ได้: ${CARD_DATA[position.card].name}
                        </h6>
                        <p style="color: #34495e; margin: 0; font-size: 13px; line-height: 1.4;">
                            ${CARD_DATA[position.card].meaning}
                        </p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
    // Load saved settings
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        changeTheme(savedTheme);
        document.getElementById('themeSelect').value = savedTheme;
    }
    
    // Set initial language
    document.getElementById('languageSelect').value = currentLanguage;
    updateUILanguage(); // Apply initial language to all UI elements including 3-card section
    
    const savedJournal = localStorage.getItem('journalEntries');
    if (savedJournal) {
        journalEntries = JSON.parse(savedJournal);
    }
    
    // Setup settings event listeners
    document.getElementById('themeSelect').addEventListener('change', (e) => {
        changeTheme(e.target.value);
    });
    
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        switchLanguage(e.target.value);
    });
    
    document.getElementById('soundToggle').addEventListener('change', (e) => {
        soundEnabled = e.target.checked;
    });
    
    document.getElementById('musicToggle').addEventListener('change', (e) => {
        musicEnabled = e.target.checked;
        const music = document.getElementById('backgroundMusic');
        if (musicEnabled && music.src) {
            music.play().catch(e => console.log('Background music not available'));
        } else {
            music.pause();
        }
    });
    
    // Setup journal date to today
    document.getElementById('journalDate').value = new Date().toISOString().split('T')[0];
    
    // Setup daily quote (use the new system instead)
    updateDailyQuote();
    
    // Add keyboard shortcut for reset (Ctrl+R or Cmd+R)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'r' && e.shiftKey) {
            e.preventDefault();
            manualResetDailyCard();
        }
    });

    // Tooltips removed for simplicity
});

// Login Modal Functions
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('open');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('open');
    
    // Reset forms
    document.getElementById('emailLoginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
}

function showEmailLogin() {
    document.getElementById('emailLoginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('emailLoginForm').style.display = 'none';
}

// Social Login Functions
async function loginWithGoogle() {
    try {
        // Check if we have real Google OAuth setup
        const hasValidClientId = userManager.googleClientId && 
                                userManager.googleClientId !== "YOUR_GOOGLE_CLIENT_ID_HERE" && 
                                userManager.googleClientId.includes('.apps.googleusercontent.com');
        
        if (typeof google !== 'undefined' && hasValidClientId && !userManager.demoMode) {
            // Use real Google Sign-In
            google.accounts.id.prompt();
        } else {
            // Demo mode - simulate successful Google login
            console.log('Using demo Google login');
            const user = {
                id: 'google_demo_' + Date.now(),
                name: 'Demo Google User',
                email: 'demo@gmail.com',
                avatar: 'https://ui-avatars.com/api/?name=Google+User&background=4285f4&color=fff',
                provider: 'google',
                joinDate: new Date().toISOString(),
                verified: true
            };
            userManager.loginUser(user);
            showNotification('🎉 Demo Google login successful! To enable real Google OAuth, see GOOGLE_LOGIN_SETUP.md', 'success');
        }
    } catch (error) {
        console.error('Google login error:', error);
        // Fallback to demo mode on any error
        const user = {
            id: 'google_demo_' + Date.now(),
            name: 'Demo Google User',
            email: 'demo@gmail.com',
            avatar: 'https://ui-avatars.com/api/?name=Google+User&background=4285f4&color=fff',
            provider: 'google',
            joinDate: new Date().toISOString(),
            verified: true
        };
        userManager.loginUser(user);
        showNotification('🎉 Using demo Google login due to setup issue. Check console for details.', 'info');
    }
}

async function loginWithFacebook() {
    try {
        if (typeof FB !== 'undefined') {
            await userManager.handleFacebookSignIn();
        } else {
            // Fallback demo login
            const user = {
                id: 'facebook_demo_' + Date.now(),
                name: 'Demo Facebook User',
                email: 'demo@facebook.com',
                avatar: 'https://ui-avatars.com/api/?name=Facebook+User&background=1877f2&color=fff',
                provider: 'facebook',
                joinDate: new Date().toISOString()
            };
            userManager.loginUser(user);
        }
    } catch (error) {
        console.error('Facebook login error:', error);
        showNotification('Facebook login failed', 'error');
    }
}

async function loginWithLine() {
    try {
        // Demo LINE login
        const user = {
            id: 'line_demo_' + Date.now(),
            name: 'Demo LINE User',
            email: 'demo@line.me',
            avatar: 'https://ui-avatars.com/api/?name=LINE+User&background=00b900&color=fff',
            provider: 'line',
            joinDate: new Date().toISOString()
        };
        userManager.loginUser(user);
    } catch (error) {
        console.error('LINE login error:', error);
        showNotification('LINE login failed', 'error');
    }
}

async function loginWithEmail() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showNotification('Please enter email and password', 'warning');
        return;
    }
    
    try {
        await userManager.handleEmailSignIn(email, password);
    } catch (error) {
        console.error('Email login error:', error);
        showNotification('Email login failed', 'error');
    }
}

async function registerWithEmail() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!name || !email || !password) {
        showNotification('Please fill in all fields', 'warning');
        return;
    }
    
    try {
        await userManager.handleEmailRegister(name, email, password);
    } catch (error) {
        console.error('Registration error:', error);
        showNotification('Registration failed', 'error');
    }
}

// User Panel Functions
function toggleUserPanel() {
    const userPanel = document.getElementById('userPanel');
    userPanel.classList.toggle('open');
}

function syncUserData() {
    userManager.syncUserData();
}

function exportUserData() {
    userManager.exportUserData();
}

function logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
        userManager.logoutUser();
        toggleUserPanel();
    }
}

// Enhanced Card Interpretation Function
function getEnhancedCardInterpretation(cardData) {
    const cardName = cardData.name;
    const innerText = cardData.innerText;
    
    // Card theme interpretations based on card names
    const cardThemes = {
        'สักกะ': {
            themes: ['การเป็นผู้นำ', 'ความมีชื่อเสียง', 'การยกย่องสรรเสริญ', 'อำนาจหน้าที่', 'การเป็นแบบอย่าง'],
            context: 'สังคม เพื่อน ญาติ ครอบครัว การสื่อสار การเดินทางระยะใกล้'
        },
        'ธนัง': {
            themes: ['ความมั่งคั่ง', 'การลงทุน', 'ทรัพย์สิน', 'ฐานะการเงิน', 'ความอุดมสมบูรณ์'],
            context: 'การเงิน ทรัพย์สิน เงินทอง การลงทุน ธุรกิจ'
        },
        'กัมมะ': {
            themes: ['การกระทำ', 'เหตุผล', 'บุญกุศล', 'การได้รับผลตอบแทน', 'กฎแห่งกรรม'],
            context: 'การงาน หน้าที่ ความรับผิดชอบ การทำความดี'
        },
        'ลาภะ': {
            themes: ['ผลกำไร', 'ความได้เปรียบ', 'โชคลาภ', 'ของขวัญ', 'รางวัล'],
            context: 'การได้รับสิ่งดีๆ โอกาสทอง ความสำเร็จ'
        },
        'มาตา': {
            themes: ['ความรัก', 'การดูแล', 'ความเมตตา', 'มารดา', 'ความอบอุ่น'],
            context: 'ครอบครัว แม่ การเลี้ยงดู ความรักใคร่'
        },
        'ปิตา': {
            themes: ['อำนาจ', 'การปกป้อง', 'บิดา', 'ผู้นำ', 'การแนะนำ'],
            context: 'ครอบครัว พ่อ ผู้ใหญ่ การได้รับคำแนะนำ'
        },
        'ปุตตะ': {
            themes: ['ลูกหลาน', 'อนาคต', 'การสืบทอด', 'ความหวัง', 'การเติบโต'],
            context: 'ลูก ความหวัง อนาคต การศึกษา'
        },
        'ญาติ': {
            themes: ['ความสัมพันธ์', 'ญาติพี่น้อง', 'การช่วยเหลือ', 'สายเลือด', 'ความผูกพัน'],
            context: 'ครอบครัว ญาติมิตร เครือข่าย ความสัมพันธ์'
        },
        'สหัชชะ': {
            themes: ['มิตรภาพ', 'การร่วมมือ', 'เพื่อน', 'การสนับสนุน', 'ทีมงาน'],
            context: 'เพื่อน การทำงานร่วมกัน ความช่วยเหลือ'
        },
                 'อริ': {
             themes: ['ศัตรู', 'ความขัดแย้ง', 'การแข่งขัน', 'ความท้าทาย', 'อุปสรรค'],
             context: 'ปัญหา ความขัดแย้ง การต่อสู้ อุปสรรค'
         },
         'เคหัง': {
             themes: ['บ้าน', 'ทรัพย์สิน', 'ความมั่นคง', 'ครอบครัว', 'รากฐาน'],
             context: 'บ้าน ที่อยู่อาศัย อสังหาริมทรัพย์ ครอบครัว'
         },
         'ตนุ': {
             themes: ['ร่างกาย', 'สุขภาพ', 'ความแข็งแรง', 'การดูแลตนเอง', 'พลังกาย'],
             context: 'สุขภาพ ร่างกาย การออกกำลังกาย การดูแลตนเอง'
         },
         'ทานัง': {
             themes: ['การให้', 'ความเมตตา', 'บุญกุศล', 'การแบ่งปัน', 'ความเสียสละ'],
             context: 'การทำบุญ การให้ การช่วยเหลือผู้อื่น ความเมตตา'
         },
         'ทาสา': {
             themes: ['การบริการ', 'ความซื่อสัตย์', 'การช่วยเหลือ', 'การทำงาน', 'ผู้ช่วย'],
             context: 'การทำงาน การบริการ ความช่วยเหลือ คนใช้งาน'
         },
         'ทาสี': {
             themes: ['การดูแล', 'ความอ่อนโยน', 'พลังหญิง', 'การเลี้ยงดู', 'ความรัก'],
             context: 'การดูแลเอาใจใส่ ความเป็นหญิง การเลี้ยงดู'
         },
         'นาวัง': {
             themes: ['การเดินทาง', 'การผจญภัย', 'การค้นหา', 'การเปลี่ยนแปลง', 'โอกาสใหม่'],
             context: 'การเดินทาง การขนส่ง การผจญภัย การสำรวจ'
         },
         'ปัตนิ': {
             themes: ['ความรัก', 'คู่ชีวิต', 'ความสัมพันธ์', 'การดูแลกัน', 'ครอบครัว'],
             context: 'ความรัก ชีวิตคู่ ครอบครัว ความสัมพันธ์'
         },
         'ปิตา': {
             themes: ['บิดา', 'อำนาจ', 'การปกป้อง', 'การแนะนำ', 'ผู้นำ'],
             context: 'ครอบครัว พ่อ ผู้ใหญ่ การแนะนำ อำนาจ'
         },
         'ปุตตะ': {
             themes: ['ลูกหลาน', 'อนาคต', 'ความหวัง', 'การสืบทอด', 'การเติบโต'],
             context: 'ลูก ครอบครัว อนาคต การศึกษา ความหวัง'
         },
         'พยายะ': {
             themes: ['ความพยายาม', 'ความมุ่งมั่น', 'การต่อสู้', 'ความอดทน', 'ความขยัน'],
             context: 'การทำงาน ความพยายาม การต่อสู้ ความมุ่งมั่น'
         },
         'พันธุ': {
             themes: ['เผ่าพันธุ์', 'รากเหง้า', 'มรดก', 'ต้นกำเนิด', 'ภูมิปัญญา'],
             context: 'ชาติตระกูล รากเหง้า มรดกจากบรรพบุรุษ'
         },
         'ภริยัง': {
             themes: ['คู่ชีวิต', 'ความรัก', 'ความจงรักภักดี', 'การอยู่ร่วมกัน', 'ความสุข'],
             context: 'ชีวิตคู่ ความรัก ครอบครัว ความสัมพันธ์'
         },
         'โภคา': {
             themes: ['การบริโภค', 'ความสุข', 'การเพลิดเพลิน', 'สิ่งของ', 'ความสบาย'],
             context: 'การใช้ชีวิต ความสุข การบริโภค สิ่งของ'
         },
         'มรณะ': {
             themes: ['การจบสิ้น', 'การเปลี่ยนแปลง', 'การเริ่มต้นใหม่', 'การปล่อยวาง', 'การเกิดใหม่'],
             context: 'การเปลี่ยนแปลง การจบสิ้น การเริ่มต้นใหม่'
         },
         'มัชฌิมา': {
             themes: ['ทางสายกลาง', 'ความสมดุล', 'ความพอดี', 'ความเหมาะสม', 'ความสมเหตุสมผล'],
             context: 'ความสมดุล การใช้ชีวิต ความพอดี'
         },
         'มาตา': {
             themes: ['มารดา', 'ความรัก', 'การดูแล', 'ความเมตตา', 'ความอบอุ่น'],
             context: 'ครอบครัว แม่ การดูแลเลี้ยงดู ความรัก'
         },
         'หินะ': {
             themes: ['ความถ่อมตน', 'การเรียนรู้', 'ความอ่อนน้อม', 'การยอมรับ', 'การพัฒนา'],
             context: 'การเรียนรู้ การพัฒนาตนเอง ความถ่อมตน'
         },
         'อัตตะ': {
             themes: ['ตัวตน', 'จิตใจ', 'การพัฒนาตนเอง', 'ความเป็นตัวเอง', 'การค้นหา'],
             context: 'ตัวตน จิตใจ การพัฒนาตนเอง ความเป็นตัวเอง'
         },
         'อัตตา': {
             themes: ['จิตวิญญาณ', 'ความบริสุทธิ์', 'การตื่นรู้', 'ความรู้แจ้ง', 'ปัญญา'],
             context: 'จิตวิญญาณ การพัฒนาจิต ความรู้แจ้ง ปัญญา'
         },
         'กดุมภะ': {
             themes: ['ความสบาย', 'ความเรียบง่าย', 'ความพอเพียง', 'ความสุข', 'การใช้ชีวิต'],
             context: 'ความเรียบง่าย การใช้ชีวิต ความพอเพียง'
         }
     };
    
    // Word interpretation based on innerText
    const wordMeanings = {
        'superstar': 'ความเป็นซุปเปอร์สตาร์ ความโดดเด่น การเป็นที่รู้จักอย่างกว้างขวาง ความสำเร็จอย่างยิ่งใหญ่',
        'wealth': 'ความมั่งคั่งอย่างแท้จริง การสะสมทรัพย์ ฐานะที่มั่นคง ความอุดมสมบูรณ์ทางวัตถุ',
        'mother': 'ความรักของแม่ การเป็นผู้ดูแลเอาใจใส่ ความอบอุ่นในครอบครัว พลังแห่งความเมตตา',
        'father': 'อำนาจและการปกป้อง การเป็นผู้นำครอบครัว ความมั่นคงและการสนับสนุน',
        'friend': 'มิตรภาพที่แท้จริง การได้รับความช่วยเหลือ เครือข่ายทางสังคมที่แข็งแกร่ง',
        'enemy': 'การเผชิญกับความท้าทาย อุปสรรคที่ต้องเอาชนะ การเรียนรู้จากความขัดแย้ง',
        'child': 'ความหวังในอนาคต การสืบทอดและการเติบโต พลังแห่งความบริสุทธิ์',
        'profit': 'ผลตอบแทนที่คุ้มค่า การลงทุนที่สำเร็จ โอกาสทางธุรกิจที่ดี',
        'action': 'การปฏิบัติที่มีผลลัพธ์ชัดเจน พลังแห่งการเคลื่อนไหว ความกระตือรือร้น',
        'leadership': 'ความเป็นผู้นำที่แท้จริง การได้รับการยอมรับ อำนาจในการตัดสินใจ',
        'bond': 'ความผูกพันที่ลึกซึ้ง ความไว้วางใจที่สมบูรณ์ การเชื่อมโยงหัวใจ',
        'authority': 'อำนาจและความเป็นผู้นำ การได้รับการเคารพ ตำแหน่งที่สูงส่ง',
        'legacy': 'มรดกที่จะส่งต่อ ความดีงามที่สืบทอด คุณค่าที่ยั่งยืน',
        'effort': 'ความพยายามที่ไม่ย่อท้อ การมุ่งมั่นสู่เป้าหมาย พลังแห่งความขยัน',
        'heritage': 'รากเหง้าและต้นกำเนิด ความภาคภูมิใจในสายเลือด วัฒนธรรมที่สืบทอด',
        'companion': 'เพื่อนคู่ชีวิตที่แท้จริง การอยู่เคียงข้างกัน ความรักที่ไม่มีเงื่อนไข',
        'inventory': 'การบริหารทรัพยากร ความพอเพียง การมีสิ่งของที่จำเป็น',
        'ending': 'การจบสิ้นเพื่อเริ่มต้นใหม่ การปล่อยวางอดีต ช่วงเวลาแห่งการเปลี่ยนแปลง',
        'balance': 'ความสมดุลในชีวิต การดำเนินชีวิตอย่างสมเหตุสมผล ทางสายกลาง',
        'gain': 'การได้รับสิ่งดีๆ โชคลาภที่ไม่คาดคิด ผลตอบแทนที่เกินความคาดหมาย',
        'cooperation': 'การทำงานร่วมกันอย่างมีประสิทธิภาพ พลังจากการรวมตัว การสนับสนุนซึ่งกันและกัน',
        'recognition': 'การได้รับการยอมรับ ชื่อเสียงที่ดี การเป็นที่รู้จักในด้านดี',
        'humility': 'ความถ่อมตนและการเรียนรู้ การยอมรับข้อผิดพลาด ความอ่อนน้อมถ่อมตน',
        'challenge': 'ความท้าทายที่ทำให้เติบโต การเอาชนะอุปสรรค โอกาสในการพิสูจน์ตนเอง',
        'self': 'การค้นหาตัวตนที่แท้จริง การพัฒนาตนเอง ความเข้าใจในตัวเอง',
        'soul': 'จิตวิญญาณและความบริสุทธิ์ การเชื่อมต่อกับพลังสูงสุด ความสงบภายใน',
        'growth': 'การเติบโตและพัฒนาอย่างต่อเนื่อง การเรียนรู้ใหม่ๆ การก้าวไปข้างหน้า',
                 'enlightenment': 'การตื่นรู้และความรู้แจ้ง ปัญญาที่แท้จริง การเข้าใจความจริงของชีวิต',
         'treasure': 'ขุมทรัพย์และความมั่งคั่ง การสะสมสิ่งที่มีค่า ความมั่นคงทางการเงินอย่างยั่งยืน',
         'fortune': 'โชคลาภและความร่ำรวย การได้รับผลตอบแทนที่ดี ความโชคดีทางการเงิน',
         'journey': 'การเดินทางและการผจญภัย การค้นหาสิ่งใหม่ การเปลี่ยนแปลงตำแหน่งที่',
         'adventure': 'การผจญภัยและความตื่นเต้น การก้าวออกจากเขตความปลอดภัย ประสบการณ์ใหม่',
         'property': 'ทรัพย์สินและอสังหาริมทรัพย์ การลงทุนในสิ่งที่มีตัวตน ความมั่นคงทางที่อยู่',
         'relatives': 'ญาติพี่น้องและเครือข่ายครอบครัว การได้รับการสนับสนุนจากสายเลือด',
         'support': 'การได้รับการช่วยเหลือ การมีคนหนุนหลัง ความเข้มแกร่งจากการรวมตัว',
         'body': 'ร่างกายและสุขภาพ ความแข็งแรงทางกาย การดูแลตนเองอย่างครบถ้วน',
         'strength': 'พลังกายและจิตใจ ความแข็งแกร่งภายใน ความสามารถในการต่อสู้',
         'giving': 'การให้และการแบ่งปัน ความเมตตากรุณา การสร้างบุญกุศลด้วยการให้',
         'charity': 'การทำบุญและความเอื้อเฟื้อ การช่วยเหลือผู้อื่นอย่างไม่เห็นแก่ตัว',
         'service': 'การบริการและการรับใช้ ความซื่อสัตย์ในการทำงาน การอุทิศตน',
         'loyalty': 'ความจงรักภักดีและความซื่อสัตย์ การยึดมั่นในสิ่งที่ถูกต้อง',
         'care': 'การดูแลและความเอาใจใส่ ความอ่อนโยนและการปกป้อง',
         'devotion': 'ความอุทิศตนและการเสียสละ ความรักที่ไม่มีเงื่อนไข',
         'wife': 'คู่ชีวิตและความรักแท้ การเป็นหนึ่งเดียวกัน ความผูกพันที่ลึกซึ้ง',
         'partnership': 'การเป็นหุ้นส่วนในชีวิต ความร่วมมือที่ลงตัว การแบ่งปันทุกสิ่ง',
         'union': 'การรวมเป็นหนึ่งเดียว ความสมบูรณ์ของความรัก ครอบครัวที่มั่นคง',
         'companion': 'เพื่อนคู่ชีวิตที่แท้จริง การอยู่เคียงข้างกันเสมอ ความเข้าใจกันลึกซึ้ง',
         'faithfulness': 'ความจงรักภักดีในความรัก ความมั่นคงของหัวใจ การไม่เปลี่ยนแปลง',
         'persistence': 'ความอดทนและความมุ่งมั่น การไม่ยอมแพ้ต่ออุปสรรค',
         'heritage': 'มรดกทางวัฒนธรรมและสายเลือด ความภาคภูมิใจในรากเหง้า',
         'ancestry': 'บรรพบุรุษและความเป็นมา ภูมิปัญญาที่ถ่ายทอดมา',
         'inventory': 'การบริหารทรัพยากร ความพอเพียงและการใช้อย่างคุ้มค่า',
         'enjoyment': 'ความเพลิดเพลินและความสุข การได้รับสิ่งที่ดีในชีวิต',
         'transformation': 'การเปลี่ยนแปลงและการเกิดใหม่ การปรับปรุงตนเองอย่างสิ้นเชิง',
         'moderation': 'ความพอดีและทางสายกลาง การใช้ชีวิตอย่างสมดุล',
         'caregiver': 'ผู้ดูแลที่เต็มไปด้วยความรัก การให้ความอบอุ่นและปกป้อง',
         'learning': 'การเรียนรู้และการพัฒนา ความเปิดใจต่อสิ่งใหม่ การเติบโตจากผิดพลาด',
         'comfort': 'ความสบายใจและความเรียบง่าย การมีชีวิตที่ไม่ซับซ้อน',
         'minimalist': 'การใช้ชีวิตแบบเรียบง่าย ความพอเพียงและการไม่ยึดติด',
         'productivity': 'ความมีประสิทธิภาพในการทำงาน ผลลัพธ์ที่เป็นรูปธรรม',
         'excellence': 'ความเป็นเลิศและคุณภาพสูง การมุ่งมั่นสู่ความสมบูรณ์',
         'sanctuary': 'ที่พักพิงและความปลอดภัย สถานที่แห่งความสงบ',
         'stability': 'ความมั่นคงและความคงทน รากฐานที่แข็งแกร่ง',
         'community': 'ชุมชนและการอยู่ร่วมกัน พลังจากการรวมตัวของผู้คน',
         'connection': 'การเชื่อมโยงและความสัมพันธ์ เครือข่ายที่แข็งแกร่ง'
     };
    
    // Get base card theme
    const baseCard = Object.keys(cardThemes).find(key => cardName.includes(key));
    const cardTheme = cardThemes[baseCard] || { themes: ['โชคชาตะ', 'ความสำเร็จ'], context: 'ชีวิตทั่วไป' };
    
    // Get word meaning
    const wordKey = innerText ? innerText.toLowerCase() : '';
    const wordMeaning = wordMeanings[wordKey] || innerText;
    
    // Combine interpretations
    let enhancedDescription = cardData.description;
    
    if (wordMeaning && baseCard) {
        enhancedDescription += `\n\n🔮 การตีความ:\nจากคำว่า "${innerText}" ผสมผสานกับพลังของ${cardName} แสดงถึง${wordMeaning} ในมิติของ${cardTheme.context} `;
        
                 // Add specific guidance based on combination
         if (baseCard === 'สักกะ' && wordKey === 'superstar') {
             enhancedDescription += `คุณจะได้รับการยกย่องและเป็นที่รู้จักในวงสังคม เพื่อนฝูงและคนรอบข้างจะมองคุณเป็นผู้นำ การสื่อสารและการเดินทางระยะใกล้จะนำโชคมาให้ `;
         } else if (baseCard === 'ธนัง' && (wordKey === 'wealth' || wordKey === 'treasure' || wordKey === 'fortune')) {
             enhancedDescription += `ความมั่งคั่งจะเข้ามาในรูปแบบที่หลากหลาย การลงทุนและการออมจะได้ผลดี ทรัพย์สินจะเพิ่มพูน `;
         } else if (baseCard === 'ลาภะ' && (wordKey === 'profit' || wordKey === 'gain')) {
             enhancedDescription += `ผลกำไรและความได้เปรียบจะมาในรูปแบบที่คาดไม่ถึง โอกาสทางธุรกิจจะเกิดขึ้น การลงทุนจะให้ผลตอบแทนที่ดี `;
         } else if (baseCard === 'เคหัง' && wordKey === 'property') {
             enhancedDescription += `การลงทุนด้านอสังหาริมทรัพย์จะประสบความสำเร็จ บ้านและที่อยู่จะมีความมั่นคง ครอบครัวจะอยู่อย่างสุขสบาย `;
         } else if (baseCard === 'ญาติ' && (wordKey === 'relatives' || wordKey === 'community' || wordKey === 'connection')) {
             enhancedDescription += `ความสัมพันธ์กับครอบครัวและเครือข่ายจะแน่นแฟ้น จะได้รับความช่วยเหลือจากญาติมิตร การร่วมมือกันจะประสบผลสำเร็จ `;
         } else if (baseCard === 'มาตา' && (wordKey === 'mother' || wordKey === 'caregiver')) {
             enhancedDescription += `ความรักและการดูแลจากแม่หรือผู้ใหญ่จะเป็นพลังใจ ครอบครัวจะอบอุ่น การเป็นผู้ดูแลผู้อื่นจะนำความสุขมา `;
         } else if (baseCard === 'ปิตา' && (wordKey === 'father' || wordKey === 'authority')) {
             enhancedDescription += `จะได้รับการสนับสนุนจากผู้ใหญ่หรือผู้มีอำนาจ การตัดสินใจจะได้รับการเคารพ ความเป็นผู้นำจะโดดเด่น `;
         } else if (baseCard === 'สหัชชะ' && (wordKey === 'friend' || wordKey === 'cooperation')) {
             enhancedDescription += `มิตรภาพและการร่วมมือจะนำความสำเร็จมา ทีมงานจะทำงานลงตัว เครือข่ายทางสังคมจะช่วยสนับสนุน `;
         } else if (baseCard === 'อริ' && (wordKey === 'enemy' || wordKey === 'challenge')) {
             enhancedDescription += `ความท้าทายจะทำให้เติบโตและแข็งแกร่งขึ้น การแข่งขันจะกระตุ้นศักยภาพ ปัญหาจะกลายเป็นโอกาส `;
         }
        
        enhancedDescription += `ในช่วงนี้ควรใส่ใจเรื่อง${cardTheme.context} และใช้พลังของ${cardTheme.themes.join(', ')} เพื่อความสำเร็จ`;
    }
    
    return enhancedDescription;
}

// Card Modal Functionality
function openCardModal(cardFile, cardName = '', cardMeaning = '') {
    const modal = document.getElementById('cardModal');
    const modalImage = document.getElementById('cardModalImage');
    const modalTitle = document.getElementById('cardModalTitle');
    const modalInnerText = document.getElementById('cardModalInnerText');
    const modalMeaning = document.getElementById('cardModalMeaning');
    const modalDescription = document.getElementById('cardModalDescription');
    
    // Get card data from CARD_DATA
    const cardData = getCardData(cardFile);
    
    if (cardData) {
        modalTitle.textContent = cardData.name;
        modalInnerText.textContent = cardData.innerText || '';
        modalMeaning.textContent = cardData.meaning;
        
        // Build enhanced description with card name meaning
        let enhancedDescription = '';
        
        // Add card name meaning if available
        if (cardData.cardNameMeaning) {
            enhancedDescription += `<div style="margin-bottom: 20px; padding: 15px; background: rgba(255, 215, 0, 0.15); border-radius: 10px; border-left: 4px solid #FFD700;">
                <strong>📖 ความหมายตามชื่อไพ่:</strong><br>${cardData.cardNameMeaning}
            </div>`;
        }
        
        // Add enhanced interpretation
        const enhancedInterpretation = getEnhancedCardInterpretation(cardData);
        enhancedDescription += enhancedInterpretation;
        
        modalDescription.innerHTML = enhancedDescription.replace(/\n/g, '<br>');
    } else {
        // Fallback data if card not found
        modalTitle.textContent = cardName || 'ไพ่ดวงดาว';
        modalInnerText.textContent = '';
        modalMeaning.textContent = cardMeaning || 'ไพ่แห่งคำทำนายและความหมายในชีวิต';
        modalDescription.textContent = cardMeaning || 'ไพ่แห่งคำทำนายและความหมายในชีวิต';
    }
    
    modalImage.src = cardFile;
    modalImage.alt = modalTitle.textContent;
    
    // Open modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
    
    // Play sound effect
    playSound('cardFlipSound');
}

function closeCardModal() {
    const modal = document.getElementById('cardModal');
    modal.classList.remove('open');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Add click event to all cards for modal opening
function addCardModalListeners() {
    // Listen for card clicks in the main daily grid
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.card');
        if (!card) return;
        
        const img = card.querySelector('img');
        if (!img) return;
        
        // Decode URL-encoded filename to match CARD_DATA keys
        const cardFile = decodeURIComponent(img.src.split('/').pop());
        
        // Only open modal if the card is revealed (has actual card image, not back)
        if (cardFile !== 'Card Back.png' && !cardFile.includes('Card Back')) {
            e.preventDefault();
            e.stopPropagation();
            
            // Don't open modal during card selection for daily reading
            if (hasPickedToday || card.classList.contains('flipped') || card.classList.contains('disabled')) {
                openCardModal(cardFile);
            }
        }
    });
    
    // Listen for history item clicks
    document.addEventListener('click', function(e) {
        const historyItem = e.target.closest('.history-item');
        if (!historyItem) return;
        
        const img = historyItem.querySelector('img');
        const title = historyItem.querySelector('h4');
        
        if (img && title) {
            e.preventDefault();
            e.stopPropagation();
            
            // Decode URL-encoded filename to match CARD_DATA keys
            const cardFile = decodeURIComponent(img.src.split('/').pop());
            const cardData = getCardData(cardFile);
            
            openCardModal(cardFile, title.textContent, cardData ? cardData.description || cardData.meaning : '');
        }
    });
    
    // Listen for spread cards clicks
    document.addEventListener('click', function(e) {
        const spreadCard = e.target.closest('.spread-cards .card');
        if (!spreadCard) return;
        
        const img = spreadCard.querySelector('img');
        if (!img) return;
        
        // Decode URL-encoded filename to match CARD_DATA keys
        const cardFile = decodeURIComponent(img.src.split('/').pop());
        
        // Only open modal if the card is revealed
        if (cardFile !== 'Card Back.png' && !cardFile.includes('Card Back')) {
            e.preventDefault();
            e.stopPropagation();
            openCardModal(cardFile);
        }
    });
    
    // Listen for journal entry card clicks
    document.addEventListener('click', function(e) {
        const journalCard = e.target.closest('.journal-entry img');
        if (!journalCard) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        // Decode URL-encoded filename to match CARD_DATA keys
        const cardFile = decodeURIComponent(journalCard.src.split('/').pop());
        openCardModal(cardFile);
    });
    
    // Listen for meditation card clicks
    document.addEventListener('click', function(e) {
        const meditationCard = e.target.closest('#meditationCardImage');
        if (!meditationCard) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        // Decode URL-encoded filename to match CARD_DATA keys
        const cardFile = decodeURIComponent(meditationCard.src.split('/').pop());
        openCardModal(cardFile);
    });
}

// Close modal when clicking outside the content
document.addEventListener('click', function(e) {
    const modal = document.getElementById('cardModal');
    if (e.target === modal) {
        closeCardModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('cardModal');
        if (modal.classList.contains('open')) {
            closeCardModal();
        }
    }
});

// Initialize card modal listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addCardModalListeners();
    
    // Debug: Check if we have three cards history data
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    console.log('Three Cards History entries:', threeCardsHistory.length);
    if (threeCardsHistory.length > 0) {
        console.log('Latest entry:', threeCardsHistory[0]);
    }
    
    // If no test data exists, create some for demonstration
    if (threeCardsHistory.length === 0 && localStorage.getItem('createTestData') !== 'false') {
        console.log('Creating test three-cards history data...');
        createTestThreeCardsHistory();
    }
});

// Journal Section Management
function toggleJournalSection() {
    const journalSection = document.getElementById('journalSection');
    if (journalSection.style.display === 'none' || journalSection.style.display === '') {
        journalSection.style.display = 'block';
        setTimeout(() => {
            journalSection.classList.add('show');
        }, 10);
        
        // Load initial data
        switchJournalTab('all');
    } else {
        journalSection.classList.remove('show');
        setTimeout(() => {
            journalSection.style.display = 'none';
        }, 300);
    }
}

// Switch between journal tabs
function switchJournalTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.journal-tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.journal-tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    let activeContent;
    let activeButton;
    
    switch (tabName) {
        case 'all':
            activeContent = document.getElementById('allJournalContent');
            activeButton = document.querySelector('.journal-tab-btn[onclick*="all"]');
            if (typeof loadJournal === 'function') {
                loadJournal();
            }
            break;
        case 'daily':
            activeContent = document.getElementById('dailyJournalContent');
            activeButton = document.querySelector('.journal-tab-btn[onclick*="daily"]');
            loadDailyJournalHistory();
            break;
        case 'three-cards':
            activeContent = document.getElementById('threeCardsJournalContent');
            activeButton = document.querySelector('.journal-tab-btn[onclick*="three-cards"]');
            // Try to load three cards history
            setTimeout(() => {
                if (typeof loadThreeCardsHistory === 'function') {
                    loadThreeCardsHistory();
                } else {
                    // Fallback: load manually if function not available yet
                    loadThreeCardsHistoryFallback();
                }
            }, 100);
            break;
    }
    
    if (activeContent) {
        activeContent.classList.add('active');
    }
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Load daily journal history (filtered for single cards only)
function loadDailyJournalHistory() {
    const allEntries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    const dailyEntries = allEntries.filter(entry => entry.type !== 'three-cards');
    
    const container = document.getElementById('dailyJournalEntries');
    container.innerHTML = '';
    
    if (dailyEntries.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">ยังไม่มีประวัติการดูไพ่ประจำวัน</p>';
        return;
    }
    
    dailyEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry fade-in';
        
        const date = new Date(entry.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const moodEmoji = {
            'very-happy': '😄',
            'happy': '😊',
            'neutral': '😐',
            'sad': '😔',
            'very-sad': '😢'
        };
        
        // Use the createSingleCardJournalEntry function from advanced-features.js
        if (typeof createSingleCardJournalEntry === 'function') {
            entryElement.innerHTML = createSingleCardJournalEntry(entry, date, moodEmoji);
        } else {
            // Fallback if function not available
            entryElement.innerHTML = `
                <div class="journal-entry-header">
                    <span class="journal-entry-date">${date}</span>
                    <span class="journal-entry-mood">${moodEmoji[entry.mood] || '😊'}</span>
                </div>
                <div class="journal-entry-card">
                    <img src="${entry.card.file}" alt="${entry.card.name}" class="card-mini-img">
                    <span>${entry.card.name}</span>
                </div>
                <div class="journal-entry-notes">${entry.notes || entry.card.meaning}</div>
            `;
        }
        
        container.appendChild(entryElement);
    });
}

// Fallback function to load three cards history if advanced-features.js not ready
function loadThreeCardsHistoryFallback() {
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    const container = document.getElementById('threeCardsHistoryContainer');
    
    if (!container) {
        console.warn('Three Cards History container not found');
        return;
    }
    
    container.innerHTML = '';
    
    if (threeCardsHistory.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; color: #666; padding: 40px;">
                <div style="font-size: 48px; margin-bottom: 20px;">🔮</div>
                <h4>ยังไม่มีประวัติการดูไพ่ 3 ใบ</h4>
                <p>เมื่อคุณทำการเลือกไพ่ 3 ใบ (อดีต ปัจจุบัน อนาคต) และกดบันทึก<br>ประวัติจะแสดงที่นี่พร้อมข้อมูลยามครบถ้วน</p>
                <div style="margin-top: 20px;">
                    <button onclick="toggleJournalSection(); initializePick3Cards();" class="btn primary">
                        <i class="fas fa-cards"></i> ไปดูไพ่ 3 ใบ
                    </button>
                </div>
            </div>
        `;
        return;
    }
    
    threeCardsHistory.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry fade-in';
        
        const date = new Date(entry.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Create a simplified three-cards entry
        const cards = entry.cards || {};
        const yamInfo = entry.yamInfo || {};
        const tableData = entry.tableData || {};
        const numericalAnalysis = entry.numericalAnalysis || {};
        
        let cardsHTML = '';
        if (cards.past && cards.present && cards.future) {
            cardsHTML = `
                <div class="three-cards-display-simple">
                    <div class="card-simple">
                        <img src="${cards.past.file}" alt="${cards.past.name}">
                        <span>อดีต: ${cards.past.name}</span>
                    </div>
                    <div class="card-simple">
                        <img src="${cards.present.file}" alt="${cards.present.name}">
                        <span>ปัจจุบัน: ${cards.present.name}</span>
                    </div>
                    <div class="card-simple">
                        <img src="${cards.future.file}" alt="${cards.future.name}">
                        <span>อนาคต: ${cards.future.name}</span>
                    </div>
                </div>
            `;
        }
        
                 let yamInfoHTML = '';
         if (yamInfo.yamNumber) {
             const yamInfluences = entry.yamInfluences || [];
             const yamMatchCount = numericalAnalysis.yamMatches || 0;
             
             yamInfoHTML = `
                 <div class="yam-info-simple">
                     <span class="yam-number">ยาม: ${yamInfo.yamNumber}</span>
                     <span class="time-info">${yamInfo.dayName || ''} ${yamInfo.time || ''}</span>
                     ${yamMatchCount > 0 ? `<span class="yam-matches-badge">🌟 ตรงยาม: ${yamMatchCount}</span>` : ''}
                 </div>
                 ${yamInfluences.length > 0 ? `
                     <div class="yam-influences-simple">
                         ${yamInfluences.map(inf => `
                             <span class="influence-badge">
                                 ${inf.positionThai}: ⭐${inf.yamSevy} 🌟${inf.yamTaek}
                             </span>
                         `).join('')}
                     </div>
                 ` : ''}
             `;
         }
        
        let tableHTML = '';
        if (tableData.columnSums && tableData.columnSums.length > 0) {
            tableHTML = `
                <div class="table-info-simple">
                    <span>📊 ผลรวมตารางตัวเลข:</span>
                    <div class="sums-display">
                        ${tableData.columnSums.map((sum, index) => 
                            `<span class="sum-value ${tableData.highlightedNumbers && tableData.highlightedNumbers.includes(sum) ? 'highlighted' : ''}">${sum}</span>`
                        ).join(' | ')}
                    </div>
                    ${numericalAnalysis.yamMatches ? `<small>🌟 ตรงกับยาม: ${numericalAnalysis.yamMatches} ตำแหน่ง</small>` : ''}
                </div>
            `;
        }
        
        entryElement.innerHTML = `
            <div class="journal-entry-header">
                <span class="journal-entry-date">${date}</span>
                <span class="journal-entry-type">🔮 ไพ่ 3 ใบ</span>
            </div>
            ${cardsHTML}
            ${yamInfoHTML}
            ${tableHTML}
            <div class="journal-entry-summary">
                <p>${entry.summary || 'ไม่มีสรุป'}</p>
            </div>
            <div class="entry-actions-simple">
                <button class="btn mini" onclick="showThreeCardsDetails('${entry.date}')">
                    <i class="fas fa-eye"></i> ดูรายละเอียด
                </button>
            </div>
        `;
        
        container.appendChild(entryElement);
    });
}

// Show three cards details (simple version)
function showThreeCardsDetails(entryDate) {
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    const entry = threeCardsHistory.find(e => e.date === entryDate);
    if (!entry) return;
    
    let detailsHTML = `
        <div style="max-height: 400px; overflow-y: auto; padding: 20px;">
            <h4>🔮 รายละเอียดการดูไพ่ 3 ใบ</h4>
            <p><strong>วันที่:</strong> ${new Date(entry.date).toLocaleDateString('th-TH')}</p>
    `;
    
    if (entry.cards) {
        detailsHTML += `
            <div class="cards-detail">
                <h5>ไพ่ที่เลือก:</h5>
                <ul>
                    <li><strong>อดีต:</strong> ${entry.cards.past?.name || 'N/A'} - ${entry.cards.past?.meaning || ''}</li>
                    <li><strong>ปัจจุบัน:</strong> ${entry.cards.present?.name || 'N/A'} - ${entry.cards.present?.meaning || ''}</li>
                    <li><strong>อนาคต:</strong> ${entry.cards.future?.name || 'N/A'} - ${entry.cards.future?.meaning || ''}</li>
                </ul>
            </div>
        `;
    }
    
    if (entry.yamInfo) {
        detailsHTML += `
            <div class="yam-detail">
                <h5>ข้อมูลยาม:</h5>
                <p><strong>ยาม:</strong> ${entry.yamInfo.yamNumber}</p>
                <p><strong>วัน:</strong> ${entry.yamInfo.dayName}</p>
                <p><strong>เวลา:</strong> ${entry.yamInfo.time}</p>
            </div>
        `;
    }
    
    if (entry.tableData && entry.tableData.columnSums) {
        detailsHTML += `
            <div class="table-detail">
                <h5>ตารางตัวเลข:</h5>
                <p><strong>ผลรวมแต่ละคอลัมน์:</strong> ${entry.tableData.columnSums.join(', ')}</p>
                ${entry.numericalAnalysis?.yamMatches ? `<p><strong>จำนวนที่ตรงกับยาม:</strong> ${entry.numericalAnalysis.yamMatches} ตำแหน่ง</p>` : ''}
            </div>
        `;
    }
    
    detailsHTML += `
            <div class="summary-detail">
                <h5>สรุป:</h5>
                <p>${entry.summary || 'ไม่มีสรุป'}</p>
            </div>
        </div>
    `;
    
    // Show in alert for now (can be improved with modal later)
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.5); z-index: 10000; display: flex; 
        align-items: center; justify-content: center;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white; border-radius: 15px; max-width: 600px; 
        width: 90%; max-height: 80%; overflow-y: auto; position: relative;
    `;
    
    content.innerHTML = `
        ${detailsHTML}
        <div style="padding: 20px; text-align: center; border-top: 1px solid #eee;">
            <button onclick="this.closest('.modal-overlay').remove()" class="btn primary">ปิด</button>
        </div>
    `;
    
    modal.className = 'modal-overlay';
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Star helper functions for Star Sevy-Taek system
function getStarName(number) {
    const starNames = {
        1: 'อาทิตย์',
        2: 'จันทร์', 
        3: 'อังคาร',
        4: 'พุธ',
        5: 'พฤหัส',
        6: 'ศุกร์',
        7: 'เสาร์'
    };
    return starNames[number] || 'ไม่ระบุ';
}

function getStarKeyFromNumber(number) {
    const starKeys = {
        1: 'sun',
        2: 'moon',
        3: 'mars', 
        4: 'mercury',
        5: 'jupiter',
        6: 'venus',
        7: 'saturn'
    };
    return starKeys[number] || 'sun';
}

// Debug function to check database
function debugStarDatabase() {
    if (typeof STAR_SEVY_TAEK_DATABASE === 'undefined') {
        console.error('STAR_SEVY_TAEK_DATABASE is not loaded!');
        return false;
    }
    
    console.log('Database loaded successfully');
    console.log('Available interpretations:', Object.keys(STAR_SEVY_TAEK_DATABASE.interpretations).length);
    console.log('Sample interpretations:');
    
    // Show a few sample interpretations
    const sampleKeys = ['moon-mercury', 'sun-venus', 'mars-jupiter'];
    sampleKeys.forEach(key => {
        const interpretation = STAR_SEVY_TAEK_DATABASE.interpretations[key];
        if (interpretation) {
            console.log(`${key}: ${interpretation.substring(0, 50)}...`);
        } else {
            console.log(`${key}: NOT FOUND`);
        }
    });
    
    return true;
}

// Test function for Star Sevy-Taek
function testStarSevyTaek() {
    console.log('=== Testing Star Sevy-Taek System ===');
    
    if (typeof STAR_SEVY_TAEK_DATABASE === 'undefined') {
        console.error('❌ STAR_SEVY_TAEK_DATABASE is not loaded!');
        return;
    }
    
    // Test specific interpretation
    const testKey = 'moon-mercury';
    const interpretation = STAR_SEVY_TAEK_DATABASE.interpretations[testKey];
    
    console.log('✅ Database loaded successfully');
    console.log(`🔍 Testing key: ${testKey}`);
    console.log(`📖 Interpretation found: ${interpretation ? 'YES' : 'NO'}`);
    
    if (interpretation) {
        console.log(`📝 Full text (${interpretation.length} characters):`);
        console.log(interpretation);
        console.log('---');
    }
    
    // Test star key conversion
    console.log('🌟 Star key conversions:');
    console.log('2 (Moon) ->', getStarKeyFromNumber(2));
    console.log('4 (Mercury) ->', getStarKeyFromNumber(4));
    
    return interpretation;
}

// Call debug function on load
window.addEventListener('load', () => {
    setTimeout(() => {
        debugStarDatabase();
        testStarSevyTaek();
    }, 1000);
});

// Make test function globally available
window.testStarSevyTaek = testStarSevyTaek;