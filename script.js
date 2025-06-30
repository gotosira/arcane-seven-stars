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
        clickForNew: "คลิกเพื่อเลือกไพ่ใหม่"
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
        clickForNew: "Click to draw a new card"
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
        name: 'กดุมภะ (Kumbha)',
        innerText: 'Wealth',
        meaning: 'ดวงการเงิน ความมั่งคั่ง การสะสมทรัพย์สิน วันนี้เป็นวันที่ดีสำหรับการลงทุนและการออม',
        description: 'ไพ่นี้สื่อถึงความมั่งคั่งและความอุดมสมบูรณ์ในชีวิต แสดงให้เห็นถึงโอกาสทางการเงินที่ดี การสะสมทรัพย์สิน และการเจริญเติบโตทางเศรษฐกิจ'
    },
    'กดุมภะ2.png': {
        name: 'กดุมภะ (Kumbha)',
        innerText: 'Prosperity',
        meaning: 'ด้านการเงิน ความร่ำรวย การได้รับผลตอบแทนจากการลงทุน ควรระมัดระวังการใช้จ่าย',
        description: 'ความมั่งคั่งและความเจริญรุ่งเรือง แสดงถึงการได้รับผลตอบแทนจากความพยายามในอดีต และการเติบโตของความมั่นคงทางการเงิน'
    },
    'กัมมะ1.png': {
        name: 'กัมมะ (Kamma)',
        innerText: 'Karma',
        meaning: 'กรรม การกระทำ ผลแห่งกรรม วันนี้จงทำแต่สิ่งดีๆ เพราะจะได้รับผลดีตอบแทนกลับมา',
        description: 'ไพ่แห่งกรรมกฎ แสดงถึงผลของการกระทำที่จะกลับมาสู่ตัวเรา สิ่งดีที่ทำจะนำความสุขมา สิ่งไม่ดีจะนำความทุกข์มา'
    },
    'กัมมะ2.png': {
        name: 'กัมมะ (Kamma)',
        innerText: 'Action',
        meaning: 'การรับผลจากการกระทำในอดีต ควรใจเย็นและอดทน เพราะสิ่งดีๆ กำลังจะมา',
        description: 'การกระทำในปัจจุบันจะเป็นตัวกำหนดอนาคต ควรใช้ความรอบคอบในการตัดสินใจและดำเนินการทุกเรื่อง'
    },
    'เคหัง.png': {
        name: 'เคหัง (Kehang)',
        innerText: 'Property',
        meaning: 'ทรัพย์สิน อสังหาริมทรัพย์ บ้านเรือน วันนี้เป็นวันที่ดีสำหรับเรื่องอสังหาริมทรัพย์',
        description: 'ไพ่แห่งทรัพย์สินและอสังหาริมทรัพย์ สื่อถึงการลงทุนที่อยู่อาศัย การซื้อขายที่ดิน และการสร้างมูลค่าจากทรัพย์สิน'
    },
    'เคหัง (2).png': {
        name: 'เคหัง (Kehang)',
        innerText: 'Property',
        meaning: 'การลงทุนด้านอสังหาริมทรัพย์ การปรับปรุงที่อยู่อาศัย ความมั่นคงทางทรัพย์สิน',
        description: 'การเพิ่มมูลค่าของทรัพย์สิน การดูแลรักษาสิ่งที่เป็นของตนเอง และการสร้างความมั่นคงจากการลงทุน'
    },
    'ญาติ.png': {
        name: 'ญาติ (Yati)',
        innerText: 'Relatives',
        meaning: 'ญาติพี่น้อง เพื่อนฝูง วันนี้จะได้รับความช่วยเหลือจากคนใกล้ชิด',
        description: 'ไพ่แห่งการสนับสนุนจากญาติมิตร แสดงถึงพลังจากเครือข่ายทางสังคม และการได้รับความช่วยเหลือจากคนรอบข้าง'
    },
    'ญาติ2.png': {
        name: 'ญาติ (Yati)',
        innerText: 'Support',
        meaning: 'ความสัมพันธ์ที่ดีกับญาติมิตร การได้รับการสนับสนุนจากคนรอบข้าง',
        description: 'มิตรภาพและความสัมพันธ์ที่มั่นคง การร่วมมือกันเพื่อเป้าหมายเดียวกัน และการแบ่งปันความสุขความเศร้าร่วมกัน'
    },
    'ตนุ1.png': {
        name: 'ตนุ (Tanu)',
        innerText: 'Body',
        meaning: 'ร่างกาย สุขภาพ ความแข็งแรง วันนี้ควรดูแลสุขภาพให้ดี และออกกำลังกาย',
        description: 'ไพ่แห่งร่างกายและสุขภาพ เน้นการดูแลตนเองทั้งทางกายและจิตใจ การออกกำลังกาย และการรักษาสมดุลในชีวิต'
    },
    'ตนุ2.png': {
        name: 'ตนุ (Tanu)',
        innerText: 'Strength',
        meaning: 'พลังวิญญาณ ความมั่นใจในตนเอง การพัฒนาตนเองให้ดีขึ้น',
        description: 'พลังภายในและความแข็งแกร่งของจิตใจ การมีความมั่นใจในตนเอง และการพัฒนาศักยภาพของตัวเองอย่างต่อเนื่อง'
    },
    'ทานัง.png': {
        name: 'ทานัง (Tanung)',
        innerText: 'Giving',
        meaning: 'การให้ ความเมตตา การช่วยเหลือผู้อื่น วันนี้การให้จะนำความสุขมาสู่คุณ',
        description: 'ไพ่แห่งการให้และความเมตตา แสดงถึงการแบ่งปันและช่วยเหลือผู้อื่น ซึ่งจะนำพรและความสุขกลับมาสู่ตัวเราเอง'
    },
    'ทานัง2.png': {
        name: 'ทานัง (Tanung)',
        innerText: 'Charity',
        meaning: 'บุญกุศล การทำความดี ความเอื้อเฟื้อเผื่อแผ่ จงใจกว้างและช่วยเหลือผู้อื่น',
        description: 'การทำบุญและการกระทำความดี ความเสียสละเพื่อส่วนรวม และการสร้างบุญกุศลที่จะนำความสุขมาในอนาคต'
    },
    'ทาสา1.png': {
        name: 'ทาสา (Tasa)',
        innerText: 'Service',
        meaning: 'คนใช้ ผู้ช่วยเหลือ การรับใช้ วันนี้อาจจะได้รับความช่วยเหลือจากผู้อื่น',
        description: 'ไพ่แห่งการบริการและการช่วยเหลือ แสดงถึงการได้รับการสนับสนุน หรือการที่เราต้องช่วยเหลือผู้อื่น'
    },
    'ทาสา2.png': {
        name: 'ทาสา (Tasa)',
        innerText: 'Loyalty',
        meaning: 'การบริการ ความจงรักภักดี ความซื่อสัตย์ในการทำงาน',
        description: 'ความซื่อสัตย์และความจงรักภักดีในการทำงาน การรับผิดชอบต่อหน้าที่ และความมั่นคงในความสัมพันธ์'
    },
    'ทาสี.png': {
        name: 'ทาสี (Tasi)',
        innerText: 'Care',
        meaning: 'คนรับใช้หญิง ผู้หญิงที่ช่วยเหลือ ความอ่อนโยนและเอาใจใส่',
        description: 'ไพ่แห่งการดูแลและความอ่อนโยน แสดงถึงพลังของความเป็นหญิง การเลี้ยงดู และการเอาใจใส่ผู้อื่น'
    },
    'ทาสี2.png': {
        name: 'ทาสี (Tasi)',
        innerText: 'Devotion',
        meaning: 'ความเสียสละ การดูแลเอาใจใส่ ความรักและความห่วงใย',
        description: 'ความรักและความเสียสละ การอุทิศตนเพื่อคนที่เรารัก และการให้ความเอาใจใส่อย่างไม่มีเงื่อนไข'
    },
    'ธนัง.png': {
        name: 'ธนัง (Dhanung)',
        innerText: 'Treasure',
        meaning: 'ทรัพย์สิน เงินทอง ความมั่งคั่ง วันนี้เป็นวันมงคลสำหรับการเงิน',
        description: 'ไพ่แห่งทรัพย์สมบัติและความมั่งคั่ง แสดงถึงการสะสมทรัพย์ การลงทุน และความมั่นคงทางการเงิน'
    },
    'ธนัง2.png': {
        name: 'ธนัง (Dhanung)',
        innerText: 'Fortune',
        meaning: 'การสะสมทรัพย์ ความร่ำรวย โชคลาภทางการเงิน ควรใช้จ่ายอย่างรอบคอบ',
        description: 'โชคลาภและความร่ำรวยที่จะเข้ามา การจัดการการเงินอย่างชาญฉลาด และการเพิ่มพูนทรัพย์สิน'
    },
    'นาวัง.png': {
        name: 'นาวัง (Navang)',
        innerText: 'Journey',
        meaning: 'เรือ การเดินทาง การขนส่ง วันนี้เหมาะกับการเดินทางหรือการขยายธุรกิจ',
        description: 'ไพ่แห่งการเดินทางและการผจญภัย แสดงถึงการเปลี่ยนแปลงสถานที่ การขยายขอบเขต หรือการค้นหาโอกาสใหม่'
    },
    'นาวัง2.png': {
        name: 'นาวัง (Navang)',
        innerText: 'Adventure',
        meaning: 'การผจญภัย การสำรวจสิ่งใหม่ การเปลี่ยนแปลงในทางที่ดี',
        description: 'การเปิดรับประสบการณ์ใหม่ การก้าวออกจากเขตปลอดภัย และการค้นพบโอกาสที่ไม่เคยคาดคิด'
    },
    'ปัตนิ1.png': {
        name: 'ปัตนิ (Patni)',
        innerText: 'Wife',
        meaning: 'ภรรยา คู่ครอง ความรัก วันนี้เป็นวันที่ดีสำหรับเรื่องความรัก',
        description: 'ไพ่แห่งความรักและความสัมพันธ์ แสดงถึงความผูกพันที่แน่นแฟ้น การดูแลเอาใจใส่กัน และความสุขในชีวิตคู่'
    },
    'ปัตนิ2.png': {
        name: 'ปัตนิ (Patni)',
        innerText: 'Partnership',
        meaning: 'ความสัมพันธ์ที่อบอุ่น ความเข้าใจกัน การดูแลเอาใจใส่กัน',
        description: 'ความเป็นหุ้นส่วนในชีวิต การร่วมมือกันสร้างความสุข และการเข้าใจในความต้องการของกันและกัน'
    },
    'ปัตนิ2 (2).png': {
        name: 'ปัตนิ (Patni)',
        innerText: 'Union',
        meaning: 'ความรักที่ยั่งยืน การสร้างครอบครัวที่มีความสุข',
        description: 'การรวมเป็นหนึ่งเดียวกันด้วยความรัก การสร้างรากฐานที่แข็งแกร่งสำหรับอนาคต และความผูกพันที่ไม่มีวันสิ้นสุด'
    },
    'ปัตนิ2 (3).png': {
        name: 'ปัตนิ (Patni)',
        innerText: 'Bond',
        meaning: 'ความผูกพันที่ลึกซึ้ง การเสียสละเพื่อกันและกัน',
        description: 'สายใยแห่งรักที่เชื่อมโยงหัวใจ ความไว้วางใจที่สมบูรณ์ และการยืนอยู่เคียงข้างกันในทุกสถานการณ์'
    },
    'ปิตา1.png': {
        name: 'ปิตา (Pita)',
        innerText: 'Father',
        meaning: 'บิดา พ่อ ผู้ให้กำเนิด วันนี้ควรนึกถึงคุณของพ่อและครอบครัว',
        description: 'ไพ่แห่งบิดาและพลังผู้ชาย แสดงถึงการปกป้อง การให้คำแนะนำ และพรจากบรรพบุรุษที่ส่งต่อมา'
    },
    'ปิตา2.png': {
        name: 'ปิตา (Pita)',
        innerText: 'Authority',
        meaning: 'ความเคารพต่อผู้ใหญ่ การได้รับพรจากบรรพบุรุษ',
        description: 'อำนาจและความเป็นผู้นำ การได้รับการแนะนำจากผู้มีประสบการณ์ และพลังจากสายเลือดที่ไหลในเส้นเลือด'
    },
    'ปุตตะ1.png': {
        name: 'ปุตตะ (Putta)',
        innerText: 'Child',
        meaning: 'บุตร ลูก ทายาท วันนี้เป็นวันที่ดีสำหรับเรื่องลูกหลาน',
        description: 'ไพ่แห่งลูกหลานและอนาคต แสดงถึงความหวัง การสืบทอด และความสุขที่มาจากการเลี้ยงดูและให้การศึกษา'
    },
    'ปุตตะ2.png': {
        name: 'ปุตตะ (Putta)',
        innerText: 'Legacy',
        meaning: 'ความสุขจากลูกหลาน การเลี้ยงดูอย่างมีคุณภาพ',
        description: 'มรดกที่จะส่งต่อสู่รุ่นลูกรุ่นหลาน การปลูกฝังค่านิยมที่ดี และความภาคภูมิใจในความสำเร็จของลูกหลาน'
    },
    'พยายะ1.png': {
        name: 'พยายะ (Phayayah)',
        innerText: 'Effort',
        meaning: 'การพยายาม ความขยันหมั่นเพียร วันนี้ความพยายามจะได้รับผลดี',
        description: 'ไพ่แห่งความพยายามและความมุ่งมั่น แสดงถึงการทำงานหนัก การไม่ยอมแพ้ และผลลัพธ์ที่ดีจากความตั้งใจ'
    },
    'พยายะ2.png': {
        name: 'พยายะ (Phayayah)',
        innerText: 'Persistence',
        meaning: 'ความอดทน ความมุ่งมั่น การต่อสู้เพื่อความสำเร็จ',
        description: 'ความเพียรพยายามที่ไม่ลดละ การฝ่าฟันอุปสรรคด้วยความแข็งแกร่ง และความสำเร็จที่จะมาถึงจากความมุ่งมั่น'
    },
    'พันธุ1.png': {
        name: 'พันธุ (Pandu)',
        innerText: 'Heritage',
        meaning: 'เผ่าพันธุ์ ชาติตระกูล ความภาคภูมิใจในต้นกำเนิด',
        description: 'ไพ่แห่งมรดกและรากเหง้า แสดงถึงความภาคภูมิใจในชาติตระกูล และพลังที่ได้รับจากบรรพบุรุษ'
    },
    'พันธุ2.png': {
        name: 'พันธุ (Pandu)',
        innerText: 'Ancestry',
        meaning: 'มรดกจากบรรพบุรุษ ความดีที่สืบทอดมา',
        description: 'ความดีงามที่ถ่ายทอดจากรุ่นสู่รุ่น ภูมิปัญญาของบรรพบุรุษ และพลังแห่งสายเลือดที่ยิ่งใหญ่'
    },
    'ภริยัง.png': {
        name: 'ภริยัง (Phariyang)',
        innerText: 'Companion',
        meaning: 'ภรรยา คู่ชีวิต ความรักที่แท้จริง การอยู่ร่วมกันอย่างมีความสุข',
        description: 'ไพ่แห่งเพื่อนคู่ชีวิต แสดงถึงความรักที่แท้จริง การเป็นเพื่อนที่ดีที่สุดของกัน และการใช้ชีวิตร่วมกันด้วยความสุข'
    },
    'ภริยัง2.png': {
        name: 'ภริยัง (Phariyang)',
        innerText: 'Faithfulness',
        meaning: 'ความจงรักภักดี การดูแลเอาใจใส่ ความรักที่ไม่มีเงื่อนไข',
        description: 'ความซื่อสัตย์และความจงรักภักดี ความรักที่ไม่เปลี่ยนแปลง และการอุทิศชีวิตเพื่อความสุขของคนที่รัก'
    },
    'โภคา1.png': {
        name: 'โภคา (Phoka)',
        innerText: 'Inventory',
        meaning: 'การบริโภค ความสุขทางกาย การเพลิดเพลินกับชีวิต',
        description: 'ไพ่แห่งการบริโภคและความเพลิดเพลิน แสดงถึงการได้รับความสุขจากสิ่งต่างๆ รอบตัว การมีชีวิตที่สมบูรณ์ และการเอาใจในสิ่งดีๆ'
    },
    'โภคา2.png': {
        name: 'โภคา (Phoka)',
        innerText: 'Enjoyment',
        meaning: 'ความสุขสบาย การได้รับสิ่งดีๆ ความอยู่เย็นเป็นสุข',
        description: 'ความสุขสบายและความเพลิดเพลินในชีวิต การได้รับสิ่งที่ปรารถนา และการมีชีวิตที่อยู่เย็นเป็นสุข'
    },
    'มรณะ1.png': {
        name: 'มรณะ (Marana)',
        innerText: 'Ending',
        meaning: 'การจบสิ้น การเปลี่ยนแปลง วันนี้อาจมีการเปลี่ยนแปลงครั้งใหญ่',
        description: 'ไพ่แห่งการจบสิ้นและการเริ่มต้นใหม่ แสดงถึงการเปลี่ยนแปลงครั้งใหญ่ที่จำเป็นสำหรับการเติบโต'
    },
    'มรณะ2.png': {
        name: 'มรณะ (Marana)',
        innerText: 'Transformation',
        meaning: 'การเริ่มต้นใหม่ การปล่อยวางสิ่งเก่า เพื่อรับสิ่งใหม่',
        description: 'การเปลี่ยนแปลงอย่างสิ้นเชิง การปล่อยวางอดีตเพื่อเปิดทางสู่อนาคต และการเกิดใหม่ในรูปแบบที่ดีกว่า'
    },
    'มัชฌิมา1.png': {
        name: 'มัชฌิมา (Macchima)',
        innerText: 'Balance',
        meaning: 'ทางสายกลาง ความสมดุล การไม่เอนเอียงไปทางใดทางหนึ่ง',
        description: 'ไพ่แห่งความสมดุลและทางสายกลาง แสดงถึงการดำเนินชีวิตอย่างพอเหมาะ ไม่เกินไปไม่ขาดไป'
    },
    'มัชฌิมา2.png': {
        name: 'มัชฌิมา (Macchima)',
        innerText: 'Moderation',
        meaning: 'ความพอดี ความเหมาะสม การดำเนินชีวิตอย่างสมเหตุสมผล',
        description: 'ความพอดีในทุกเรื่อง การใช้ชีวิตอย่างสมเหตุสมผล และการหาจุดสมดุลที่เหมาะสมในทุกสถานการณ์'
    },
    'มาตา1.png': {
        name: 'มาตา (Mata)',
        innerText: 'Mother',
        meaning: 'มารดา แม่ ความรักของแม่ วันนี้ควรระลึกถึงคุณแม่',
        description: 'ไพ่แห่งมารดาและความรักที่บริสุทธิ์ แสดงถึงความเมตตากรุณา การดูแลเลี้ยงดู และความรักที่ไม่มีเงื่อนไข'
    },
    'มาตา2.png': {
        name: 'มาตา (Mata)',
        innerText: 'Caregiver',
        meaning: 'ผู้ดูแล ผู้เลี้ยงดู การให้ความเอาใจใส่อย่างอบอุ่น',
        description: 'ความเมตตาและความกรุณา การดูแลเลี้ยงดูด้วยความรัก และพลังแห่งการเป็นผู้ดูแลที่อยู่ในทุกคน'
    },
    'ลาภะ1.png': {
        name: 'ลาภะ (Labha)',
        innerText: 'Profit',
        meaning: 'ผลกำไร ความได้เปรียบ วันนี้จะได้รับสิ่งดีๆ เข้ามา',
        description: 'ไพ่แห่งผลกำไรและความได้เปรียบ แสดงถึงการได้รับสิ่งดีๆ จากการลงทุน ทั้งในด้านเงินทองและความสัมพันธ์'
    },
    'ลาภะ2.png': {
        name: 'ลาภะ (Labha)',
        innerText: 'Gain',
        meaning: 'โชคลาภ ของขวัญจากจักรวาล การได้รับผลตอบแทนที่คุ้มค่า',
        description: 'โชคลาภและของขวัญจากจักรวาล การได้รับผลตอบแทนที่เกินความคาดหมาย และความสำเร็จที่มาจากความมุ่งมั่น'
    },
    'สหัชชะ1.png': {
        name: 'สหัชชะ (Sahaccha)',
        innerText: 'Friend',
        meaning: 'เพื่อน มิตรสหาย การร่วมมือ วันนี้เพื่อนจะมาช่วยเหลือ',
        description: 'ไพ่แห่งมิตรภาพและการร่วมมือ แสดงถึงพลังจากการทำงานเป็นทีม และความช่วยเหลือจากเพื่อนฝูง'
    },
    'สหัชชะ2.png': {
        name: 'สหัชชะ (Sahaccha)',
        innerText: 'Cooperation',
        meaning: 'มิตรภาพที่ดี การสนับสนุนกัน ความช่วยเหลือจากเพื่อน',
        description: 'การร่วมมือกันอย่างจริงใจ การสนับสนุนกันในยามลำบาก และพลังที่เกิดจากการรวมตัวกันของมิตรสหาย'
    },
    'สักกะ.png': {
        name: 'สักกะ (Sakka)',
        innerText: 'Leadership',
        meaning: 'พระอินทร์ ผู้นำ อำนาจ วันนี้จะได้รับการยกย่องจากผู้อื่น',
        description: 'ไพ่แห่งการเป็นผู้นำและอำนาจ แสดงถึงความสามารถในการชี้นำ การได้รับการยอมรับ และความเป็นผู้นำที่ดี'
    },
    'สักกะ2.png': {
        name: 'สักกะ (Sakka)',
        innerText: 'Recognition',
        meaning: 'ความเป็นผู้นำ การได้รับการยอมรับ ตำแหน่งที่สูงขึ้น',
        description: 'การได้รับการยอมรับและเคารพ ความก้าวหน้าในตำแหน่งหน้าที่ และการเป็นที่ปรึกษาของผู้อื่น'
    },
    'หินะ1.png': {
        name: 'หินะ (Hina)',
        innerText: 'Humility',
        meaning: 'ความต่ำต้อย ความถ่อมตน การเรียนรู้จากความผิดพลาด',
        description: 'ไพ่แห่งความถ่อมตนและการเรียนรู้ แสดงถึงการยอมรับข้อผิดพลาด การเรียนรู้จากประสบการณ์ และการเติบโตจากความล้มเหลว'
    },
    'หินะ2.png': {
        name: 'หินะ (Hina)',
        innerText: 'Learning',
        meaning: 'ความอ่อนน้อม การยอมรับข้อผิดพลาด เพื่อการเรียนรู้',
        description: 'การเรียนรู้และการพัฒนาตนเอง การมีจิตใจที่เปิดกว้าง และการยอมรับว่าทุกคนมีข้อบกพร่อง'
    },
    'อริ1.png': {
        name: 'อริ (Ari)',
        innerText: 'Enemy',
        meaning: 'ศัตรู คู่แข่ง ความขัดแย้ง วันนี้ควรระวังคนที่ไม่หวังดี',
        description: 'ไพ่แห่งศัตรูและความขัดแย้ง แสดงถึงความท้าทายจากภายนอก การแข่งขัน และการต้องป้องกันตัวเอง'
    },
    'อริ2.png': {
        name: 'อริ (Ari)',
        innerText: 'Challenge',
        meaning: 'การเอาชนะอุปสรรค การต่อสู้กับความยากลำบาก',
        description: 'ความท้าทายที่จะทำให้เราแข็งแกร่งขึ้น การเอาชนะอุปสรรค และการเรียนรู้ที่จะรับมือกับความยากลำบาก'
    },
    'อัตตะ1.png': {
        name: 'อัตตะ (Atta)',
        innerText: 'Self',
        meaning: 'ตัวตน จิตใจ ความเป็นตัวเอง วันนี้ควรมองหาตัวตนที่แท้จริง',
        description: 'ไพ่แห่งตัวตนและการค้นหาตนเอง แสดงถึงการเข้าใจตัวเอง การพัฒนาจิตใจ และการค้นหาเป้าหมายในชีวิต'
    },
    'อัตตะ2.png': {
        name: 'อัตตะ (Atta)',
        innerText: 'Growth',
        meaning: 'การพัฒนาตนเอง ความเข้าใจในตัวเอง การค้นหาเป้าหมายในชีวิต',
        description: 'การเติบโตและพัฒนาตนเองอย่างต่อเนื่อง การสร้างตัวตนที่แข็งแกร่ง และการมุ่งสู่เป้าหมายที่แท้จริง'
    },
    'อัตตา.png': {
        name: 'อัตตา (Atta)',
        innerText: 'Soul',
        meaning: 'จิตวิญญาณ ความบริสุทธิ์ใจ การทำจิตใจให้ผ่องใส',
        description: 'ไพ่แห่งจิตวิญญาณและความบริสุทธิ์ แสดงถึงการทำจิตใจให้ผ่องใส การเชื่อมต่อกับพลังสูงสุด และความสงบภายใน'
    },
    'อัตตา2.png': {
        name: 'อัตตา (Atta)',
        innerText: 'Enlightenment',
        meaning: 'การเจริญปัญญา ความรู้แจ้งเห็นจริง การตื่นรู้ในความจริง',
        description: 'การตื่นรู้และความรู้แจ้งเห็นจริง การเข้าใจความจริงของชีวิต และการบรรลุถึงจุดสูงสุดของการพัฒนาจิตใจ'
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

// DOM Elements
const cardGrid = document.getElementById('cardGrid');
const statusText = document.getElementById('statusText');
const revealedCard = document.getElementById('revealedCard');
const dailyCardImage = document.getElementById('dailyCardImage');
const cardName = document.getElementById('cardName');
const cardMeaning = document.getElementById('cardMeaning');
const toggleHistoryBtn = document.getElementById('toggleHistory');
const clearHistoryBtn = document.getElementById('clearHistory');
const historyGrid = document.getElementById('historyGrid');

// User Management System
let currentUser = null;
let isUserLoggedIn = false;

const userManager = {
    init() {
        this.loadUserFromStorage();
        this.initSocialProviders();
    },
    
    loadUserFromStorage() {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            isUserLoggedIn = true;
            this.updateUIForLoggedInUser();
            this.loadUserData();
        }
    },
    
    async initSocialProviders() {
        // Initialize Google Sign-In
        if (typeof google !== 'undefined') {
            google.accounts.id.initialize({
                client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with actual client ID
                callback: this.handleGoogleSignIn.bind(this)
            });
        }
        
        // Initialize Facebook SDK
        if (typeof FB !== 'undefined') {
            FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID', // Replace with actual app ID
                cookie: true,
                xfbml: true,
                version: 'v18.0'
            });
        }
    },
    
    async handleGoogleSignIn(response) {
        try {
            const userInfo = JSON.parse(atob(response.credential.split('.')[1]));
            const user = {
                id: userInfo.sub,
                name: userInfo.name,
                email: userInfo.email,
                avatar: userInfo.picture,
                provider: 'google',
                joinDate: new Date().toISOString()
            };
            
            this.loginUser(user);
        } catch (error) {
            console.error('Google sign-in error:', error);
            showNotification('Google sign-in failed', 'error');
        }
    },
    
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
    },
    
    // Simulated LINE login (requires actual LINE Login setup)
    async handleLineSignIn() {
        // This would integrate with LINE Login API
        showNotification('LINE login will be available soon!', 'info');
    },
    
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
    },
    
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
    },
    
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
    },
    
    logoutUser() {
        currentUser = null;
        isUserLoggedIn = false;
        
        // Clear localStorage
        localStorage.removeItem('currentUser');
        localStorage.removeItem(`userData_${currentUser?.id}`);
        
        // Update UI
        this.updateUIForLoggedOutUser();
        
        showNotification('Logged out successfully', 'info');
    },
    
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
    },
    
    updateUIForLoggedOutUser() {
        const loginBtn = document.getElementById('loginBtn');
        const userProfileBtn = document.getElementById('userProfileBtn');
        
        loginBtn.style.display = 'block';
        userProfileBtn.style.display = 'none';
        
        // Close user panel if open
        const userPanel = document.getElementById('userPanel');
        userPanel.classList.remove('open');
    },
    
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
    },
    
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
    },
    
    updateUserStats(stats) {
        if (stats) {
            document.getElementById('userCardCount').textContent = stats.totalCards || cardHistory.length;
            document.getElementById('userDaysActive').textContent = stats.daysActive || this.calculateDaysActive();
        }
    },
    
    calculateDaysActive() {
        if (cardHistory.length === 0) return 0;
        
        const dates = [...new Set(cardHistory.map(card => 
            new Date(card.date).toDateString()
        ))];
        return dates.length;
    },
    
    async syncUserData() {
        if (!isUserLoggedIn) return;
        
        showNotification('Syncing data...', 'info');
        
        // Simulate sync process
        setTimeout(() => {
            this.saveUserData();
            showNotification('Data synced successfully!', 'success');
        }, 1500);
    },
    
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
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    try {
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
        generateCardGrid();
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

// Allow new card selection on every page refresh (no daily restriction)
function checkDailyCard() {
    // Always allow new card selection, but load last session if exists
    if (dailyCard) {
        // Show the last picked card but allow picking new ones
        const t = translations[currentLanguage];
        statusText.textContent = t.clickCard || 'คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
        
        // Don't restrict card selection anymore
        hasPickedToday = false;
    }
    
    // Always enable fresh card selection
    hasPickedToday = false;
}

// Generate the card grid - single large card
function generateCardGrid() {
    const cardFiles = Object.keys(CARD_DATA);
    cardGrid.innerHTML = '';
    
    // Select a random card for today if none exists
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
        
        // Add click event listener
        cardElement.addEventListener('click', () => handleCardClick(randomCardFile, cardElement));
    }
}

// Handle card click
function handleCardClick(cardFile, cardElement) {
    // Remove daily restriction - allow multiple picks per session
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
        // Don't set hasPickedToday = true anymore to allow multiple picks
        
        // Update the card image to show the revealed card
        const cardImg = cardElement.querySelector('img');
        cardImg.src = cardFile;
        cardImg.alt = cardData.name;
        
        // Add to history
        cardHistory.unshift(selectedCard);
        
        // Keep only last 50 records (increased for multiple daily picks)
        if (cardHistory.length > 50) {
            cardHistory = cardHistory.slice(0, 50);
        }
        
        saveToStorage();
        
        const t = translations[currentLanguage];
        statusText.innerHTML = `${t.yourSelectedCard} <br><small>🔄 ${t.clickForNew}</small>`;
        showRevealedCard(selectedCard);
        renderHistory();
        
        // Reset for next pick after showing result
        setTimeout(() => {
            cardElement.classList.remove('clicking');
            // Regenerate card grid for next pick
            setTimeout(() => {
                generateCardGrid();
            }, 2000);
        }, 1000);
        
        // Show lucky information
        const luckyInfo = generateLuckyInfo(cardFile);
        document.getElementById('luckyColor').textContent = luckyInfo.color;
        document.getElementById('luckyNumbers').textContent = luckyInfo.numbers;
        document.getElementById('luckyTime').textContent = luckyInfo.time;
        document.getElementById('luckyInfo').style.display = 'flex';
        
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
    dailyCardImage.src = card.file;
    
    // Display card name and inner text
    const cardData = getCardData(card.file);
    if (cardData) {
        cardName.innerHTML = `${cardData.name}<br><span style="font-size: 0.8em; color: #666;">${cardData.innerText}</span>`;
        cardMeaning.textContent = cardData.meaning;
        
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
    
    // Set card-grid background to the picked card image with blur effect
    const cardGrid = document.getElementById('cardGrid');
    cardGrid.style.backgroundImage = `url('${card.file}')`;
    
    revealedCard.style.display = 'block';
    revealedCard.classList.add('success');
    
    setTimeout(() => {
        revealedCard.classList.remove('success');
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
    if (confirm('คุณต้องการรีเซ็ตไพ่ประจำวันเพื่อเลือกใหม่หรือไม่?')) {
        hasPickedToday = false;
        dailyCard = null;
        localStorage.removeItem('dailyCard');
        localStorage.removeItem('dailyCardDate');
        
        statusText.textContent = 'คลิกที่ไพ่ด้านล่างเพื่อดูดวงประจำวัน';
        revealedCard.style.display = 'none';
        document.getElementById('luckyInfo').style.display = 'none';
        
        // Reset backgrounds to default
        const cardGrid = document.getElementById('cardGrid');
        cardGrid.style.backgroundImage = '';
        cardGrid.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        revealedCard.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        
        // Re-enable cards and regenerate grid
        cardGrid.innerHTML = '';
        
        generateCardGrid();
        
        showNotification('รีเซ็ตไพ่ประจำวันเรียบร้อยแล้ว ✨', 'success');
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
        cardGrid.style.backgroundImage = '';
        cardGrid.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        revealedCard.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff)';
        
        // Re-enable cards
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            card.style.pointerEvents = 'auto';
            card.classList.remove('loading');
        });
        
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
            title: 'ดาวิดสตาร์ - ดาวแห่งพลังจักรวาล',
            cards: 7,
            description: 'ไพ่ 7 ใบในรูปแบบดาวหกแฉก เชื่อมต่อกับพลังแห่งดวงดาวทั้งหมด',
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
    'ดวงดาวแห่งอุดมการณ์ (จุดบน)',
    'ดวงดาวแห่งการกระทำ (ขวาบน)', 
    'ดวงดาวแห่งความสำเร็จ (ขวาล่าง)',
    'ดวงดาวแห่งการเปลี่ยนแปลง (จุดล่าง)',
    'ดวงดาวแห่งปัญญา (ซ้ายล่าง)',
    'ดวงดาวแห่งสัญชาตญาณ (ซ้ายบน)',
    'ดวงดาวแห่งตัวตน (ใจกลาง)'
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
                <button class="btn primary" onclick="shuffleDeck(7 + Math.floor(Math.random() * 5))" ${isShuffling ? 'disabled' : ''}>
                    <i class="fas fa-shuffle"></i> สับไพ่
                </button>
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
                <button class="btn primary" onclick="shuffleDeck(7 + Math.floor(Math.random() * 5))" ${isShuffling ? 'disabled' : ''}>
                    <i class="fas fa-shuffle"></i> สับไพ่
                </button>
            `;
        }
    }
}

function showCardPickOptions() {
    const cardPickArea = document.getElementById('cardPickArea');
    const numOptions = 5; // Show 5 face-down cards to pick from
    
    cardPickArea.innerHTML = `
        <h4>เลือก 1 ไพ่จาก ${numOptions} ใบ</h4>
        <div class="pick-cards-grid">
            ${Array.from({length: numOptions}, (_, index) => `
                <div class="pick-card" onclick="pickDavidStarCard(${index})">
                    <img src="Card Back.png" alt="Pick this card">
                    <p>ไพ่ที่ ${index + 1}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    cardPickArea.style.display = 'block';
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
    
    cards.forEach((cardFile, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${starPositions[index]}`;
        cardElement.innerHTML = `<img src="${cardFile}" alt="${CARD_DATA[cardFile].name}">`;
        container.appendChild(cardElement);
    });
}

function generateDavidStarInterpretation(cards) {
    const positions = [
        {
            name: 'ดวงดาวแห่งอุดมการณ์ (จุดบน)',
            meaning: 'แสดงถึงเป้าหมายและความฝันสูงสุดของคุณ',
            card: cards[0]
        },
        {
            name: 'ดวงดาวแห่งการกระทำ (ขวาบน)',
            meaning: 'พลังแห่งการเริ่มต้นและความกล้าหาญ',
            card: cards[1]
        },
        {
            name: 'ดวงดาวแห่งความสำเร็จ (ขวาล่าง)',
            meaning: 'ผลลัพธ์และความสำเร็จที่จะได้รับ',
            card: cards[2]
        },
        {
            name: 'ดวงดาวแห่งการเปลี่ยนแปลง (จุดล่าง)',
            meaning: 'สิ่งที่ต้องปล่อยวางหรือเปลี่ยนแปลง',
            card: cards[3]
        },
        {
            name: 'ดวงดาวแห่งปัญญา (ซ้ายล่าง)',
            meaning: 'ความรู้และประสบการณ์ที่จะใช้ประโยชน์',
            card: cards[4]
        },
        {
            name: 'ดวงดาวแห่งสัญชาตญาณ (ซ้ายบน)',
            meaning: 'การนำทางด้วยหัวใจและสัญชาตญาณ',
            card: cards[5]
        },
        {
            name: 'ดวงดาวแห่งตัวตน (ใจกลาง)',
            meaning: 'หัวใจและแก่นแท้ของคุณ พลังงานหลักในชีวิต',
            card: cards[6]
        }
    ];
    
    return `
        <h4>การตีความดาวิดสตาร์</h4>
        <p>ดาวหกแฉกเป็นสัญลักษณ์ของความสมดุลระหว่างโลกจิตและโลกกาย ระหว่างสวรรค์และดิน การดูไพ่ในรูปแบบนี้จะช่วยให้คุณเข้าใจพลังงานรอบตัวและทิศทางของชีวิต</p>
        
        <div class="david-star-interpretation">
            ${positions.map(pos => `
                <div class="star-position-meaning">
                    <h4>${pos.name}</h4>
                    <p><strong>${CARD_DATA[pos.card].name}:</strong> ${CARD_DATA[pos.card].meaning}</p>
                    <p style="font-style: italic; margin-top: 8px;">${pos.meaning}</p>
                </div>
            `).join('')}
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 15px;">
            <h4>สรุปพลังงานรวม</h4>
            <p>ดาวิดสตาร์ของคุณแสดงให้เห็นถึงความสมดุลและการเชื่อมต่อกับพลังจักรวาล ไพ่ในใจกลาง "${CARD_DATA[cards[6]].name}" คือแก่นแท้ของคุณ ในขณะที่ดวงดาวรอบๆ นำเสนอแง่มุมต่างๆ ของชีวิตที่ต้องให้ความสำคัญ</p>
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
    
    const savedJournal = localStorage.getItem('journalEntries');
    if (savedJournal) {
        journalEntries = JSON.parse(savedJournal);
    }
    
    // Setup settings event listeners
    document.getElementById('themeSelect').addEventListener('change', (e) => {
        changeTheme(e.target.value);
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
        if (typeof google !== 'undefined') {
            google.accounts.id.prompt();
        } else {
            // Fallback demo login
            const user = {
                id: 'google_demo_' + Date.now(),
                name: 'Demo Google User',
                email: 'demo@gmail.com',
                avatar: 'https://ui-avatars.com/api/?name=Google+User&background=4285f4&color=fff',
                provider: 'google',
                joinDate: new Date().toISOString()
            };
            userManager.loginUser(user);
        }
    } catch (error) {
        console.error('Google login error:', error);
        showNotification('Google login failed', 'error');
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