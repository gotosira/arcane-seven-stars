// Advanced Features for Thai Fortune Card App

// Journal Functions
function loadJournal() {
    const entriesContainer = document.getElementById('journalEntries');
    entriesContainer.innerHTML = '';
    
    if (journalEntries.length === 0) {
        entriesContainer.innerHTML = '<p style="text-align: center; color: #666;">ยังไม่มีบันทึก</p>';
        return;
    }
    
    journalEntries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'journal-entry fade-in';
        
        const date = new Date(entry.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const moodEmoji = {
            'very-happy': '😄',
            'happy': '😊',
            'neutral': '😐',
            'sad': '😔',
            'very-sad': '😢'
        };
        
        entryElement.innerHTML = `
            <div class="journal-entry-header">
                <span class="journal-entry-date">${date}</span>
                <span class="journal-entry-mood">${moodEmoji[entry.mood] || '😊'}</span>
            </div>
            <div class="journal-entry-card">${entry.card.name}</div>
            <div class="journal-entry-notes">${entry.notes}</div>
        `;
        
        entriesContainer.appendChild(entryElement);
    });
}

function populateJournalCardSelect() {
    const select = document.getElementById('journalCard');
    select.innerHTML = '<option value="">เลือกไพ่</option>';
    
    Object.keys(CARD_DATA).forEach(cardFile => {
        const option = document.createElement('option');
        option.value = cardFile;
        option.textContent = CARD_DATA[cardFile].name;
        select.appendChild(option);
    });
}

function saveJournalEntry() {
    const date = document.getElementById('journalDate').value;
    const cardFile = document.getElementById('journalCard').value;
    const notes = document.getElementById('journalNotes').value;
    const selectedMood = document.querySelector('.mood-btn.selected');
    
    if (!date || !cardFile) {
        showNotification('กรุณาเลือกวันที่และไพ่', 'warning');
        return;
    }
    
    const entry = {
        id: Date.now(),
        date: date,
        card: {
            file: cardFile,
            name: CARD_DATA[cardFile].name,
            meaning: CARD_DATA[cardFile].meaning
        },
        mood: selectedMood ? selectedMood.dataset.mood : 'neutral',
        notes: notes || ''
    };
    
    journalEntries.unshift(entry);
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    
    // Reset form
    document.getElementById('journalNotes').value = '';
    document.querySelector('.mood-btn.selected')?.classList.remove('selected');
    
    loadJournal();
    showNotification('บันทึกเรียบร้อยแล้ว', 'success');
}

// Mood selector handling
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

// Analytics Functions
function loadAnalytics() {
    calculateStats();
    generateInsights();
    createCharts();
}

function calculateStats() {
    const totalDays = cardHistory.length;
    document.getElementById('totalDays').textContent = totalDays;
    
    // Most frequent card
    const cardFrequency = {};
    cardHistory.forEach(card => {
        cardFrequency[card.name] = (cardFrequency[card.name] || 0) + 1;
    });
    
    let mostFrequent = Object.keys(cardFrequency).reduce((a, b) => 
        cardFrequency[a] > cardFrequency[b] ? a : b, '-'
    );
    
    document.getElementById('favoriteCard').textContent = mostFrequent;
    
    // Current streak
    let streak = 0;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (cardHistory.length > 0) {
        const latestCardDate = new Date(cardHistory[0].date).toDateString();
        if (latestCardDate === today) {
            streak = 1;
            for (let i = 1; i < cardHistory.length; i++) {
                const cardDate = new Date(cardHistory[i].date).toDateString();
                const expectedDate = new Date(Date.now() - (i * 86400000)).toDateString();
                if (cardDate === expectedDate) {
                    streak++;
                } else {
                    break;
                }
            }
        }
    }
    
    document.getElementById('currentStreak').textContent = streak;
    
    // Average mood from journal entries
    const moods = journalEntries.map(entry => entry.mood);
    const moodValues = {
        'very-sad': 1,
        'sad': 2,
        'neutral': 3,
        'happy': 4,
        'very-happy': 5
    };
    
    if (moods.length > 0) {
        const avgMoodValue = moods.reduce((sum, mood) => sum + (moodValues[mood] || 3), 0) / moods.length;
        const avgMoodEmoji = avgMoodValue >= 4.5 ? '😄' : avgMoodValue >= 3.5 ? '😊' : avgMoodValue >= 2.5 ? '😐' : avgMoodValue >= 1.5 ? '😔' : '😢';
        document.getElementById('averageMood').textContent = avgMoodEmoji;
    }
}

function generateInsights() {
    const insights = [];
    
    // Card frequency insights
    const cardFrequency = {};
    cardHistory.forEach(card => {
        cardFrequency[card.name] = (cardFrequency[card.name] || 0) + 1;
    });
    
    const sortedCards = Object.entries(cardFrequency).sort((a, b) => b[1] - a[1]);
    
    if (sortedCards.length > 0) {
        insights.push(`คุณได้ไพ่ "${sortedCards[0][0]}" บ่อยที่สุด (${sortedCards[0][1]} ครั้ง) ซึ่งอาจสะท้อนถึงพลังงานหลักในชีวิตคุณ`);
    }
    
    // Recent patterns
    if (cardHistory.length >= 7) {
        const recentCards = cardHistory.slice(0, 7);
        const themes = {};
        
        recentCards.forEach(card => {
            if (card.name.includes('ธนัง') || card.name.includes('ลาภะ')) themes.money = (themes.money || 0) + 1;
            if (card.name.includes('ปัตนิ') || card.name.includes('ภริยัง')) themes.love = (themes.love || 0) + 1;
            if (card.name.includes('เคหัง') || card.name.includes('ญาติ')) themes.family = (themes.family || 0) + 1;
            if (card.name.includes('ตนุ') || card.name.includes('พยายะ')) themes.health = (themes.health || 0) + 1;
        });
        
        const dominantTheme = Object.keys(themes).reduce((a, b) => themes[a] > themes[b] ? a : b, null);
        
        if (dominantTheme) {
            const themeMessages = {
                money: 'สัปดาห์นี้พลังงานด้านการเงินและความมั่งคั่งแรงมาก',
                love: 'ความรักและความสัมพันธ์เป็นจุดสำคัญในช่วงนี้',
                family: 'ครอบครัวและคนใกล้ชิดมีบทบาทสำคัญในชีวิตคุณ',
                health: 'ควรให้ความสำคัญกับสุขภาพและการดูแลตนเอง'
            };
            
            insights.push(themeMessages[dominantTheme]);
        }
    }
    
    // Mood insights
    if (journalEntries.length >= 5) {
        const recentMoods = journalEntries.slice(0, 5).map(entry => entry.mood);
        const positiveCount = recentMoods.filter(mood => mood === 'happy' || mood === 'very-happy').length;
        
        if (positiveCount >= 4) {
            insights.push('คุณมีอารมณ์ในทางบวกเป็นส่วนใหญ่ ซึ่งเป็นสัญญาณที่ดี');
        } else if (positiveCount <= 1) {
            insights.push('ช่วงนี้คุณอาจรู้สึกหนักใจ ลองทำสมาธิหรือพักผ่อนให้เพียงพอ');
        }
    }
    
    const insightsContainer = document.getElementById('personalInsights');
    insightsContainer.innerHTML = '';
    
    if (insights.length === 0) {
        insightsContainer.innerHTML = '<p>ใช้แอปต่อไปเพื่อดูข้อมูลเชิงลึกเกี่ยวกับแนวโน้มในชีวิตคุณ</p>';
    } else {
        insights.forEach(insight => {
            const item = document.createElement('div');
            item.className = 'insight-item fade-in';
            item.textContent = insight;
            insightsContainer.appendChild(item);
        });
    }
}

function createCharts() {
    // Card frequency chart
    createCardFrequencyChart();
    createMoodChart();
}

function createCardFrequencyChart() {
    const ctx = document.getElementById('cardFrequencyChart').getContext('2d');
    
    const cardFrequency = {};
    cardHistory.forEach(card => {
        const shortName = card.name.split('(')[0].trim();
        cardFrequency[shortName] = (cardFrequency[shortName] || 0) + 1;
    });
    
    const sortedCards = Object.entries(cardFrequency).sort((a, b) => b[1] - a[1]).slice(0, 10);
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: sortedCards.map(card => card[0]),
            datasets: [{
                data: sortedCards.map(card => card[1]),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                    '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF',
                    '#4BC0C0', '#FF6384'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createMoodChart() {
    if (journalEntries.length === 0) return;
    
    const ctx = document.getElementById('moodChart').getContext('2d');
    
    const last30Days = [];
    const moodData = [];
    
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        last30Days.push(date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' }));
        
        const entry = journalEntries.find(entry => entry.date === dateStr);
        const moodValue = entry ? {
            'very-sad': 1, 'sad': 2, 'neutral': 3, 'happy': 4, 'very-happy': 5
        }[entry.mood] || 3 : null;
        
        moodData.push(moodValue);
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: last30Days,
            datasets: [{
                label: 'อารมณ์',
                data: moodData,
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                fill: true,
                tension: 0.4,
                spanGaps: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 1,
                    max: 5,
                    ticks: {
                        callback: function(value) {
                            const labels = ['', '😢', '😔', '😐', '😊', '😄'];
                            return labels[value];
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Meditation Functions
let meditationTimer = null;
let meditationDuration = 0;
let meditationStartTime = 0;

function startMeditation(duration) {
    meditationDuration = duration;
    meditationStartTime = Date.now();
    
    // Select a random card for meditation focus
    const cardFiles = Object.keys(CARD_DATA);
    const randomCard = cardFiles[Math.floor(Math.random() * cardFiles.length)];
    
    document.getElementById('meditationCardImage').src = randomCard;
    
    const guidance = generateMeditationGuidance(CARD_DATA[randomCard].name);
    document.getElementById('meditationGuidance').textContent = guidance;
    
    // Hide options and show timer
    document.querySelector('.meditation-options').style.display = 'none';
    document.getElementById('meditationTimer').style.display = 'block';
    
    // Start countdown
    updateMeditationTimer();
    meditationTimer = setInterval(updateMeditationTimer, 1000);
    
    // Play ambient sound if enabled and available
    if (musicEnabled) {
        const music = document.getElementById('backgroundMusic');
        if (music && music.src) {
            music.play().catch(e => console.log('Background music not available during meditation'));
        }
    }
}

function updateMeditationTimer() {
    const elapsed = Math.floor((Date.now() - meditationStartTime) / 1000);
    const remaining = Math.max(0, meditationDuration - elapsed);
    
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    
    document.getElementById('timerMinutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('timerSeconds').textContent = seconds.toString().padStart(2, '0');
    
    // Update progress circle
    const progress = 1 - (remaining / meditationDuration);
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference * (1 - progress);
    
    document.getElementById('progressCircle').style.strokeDashoffset = strokeDashoffset;
    
    if (remaining <= 0) {
        finishMeditation();
    }
}

function pauseMeditation() {
    if (meditationTimer) {
        clearInterval(meditationTimer);
        meditationTimer = null;
        document.getElementById('pauseBtn').innerHTML = '<i class="fas fa-play"></i> เริ่มต่อ';
    } else {
        meditationStartTime = Date.now() - (meditationDuration - getCurrentMeditationTime()) * 1000;
        meditationTimer = setInterval(updateMeditationTimer, 1000);
        document.getElementById('pauseBtn').innerHTML = '<i class="fas fa-pause"></i> หยุดชั่วคราว';
    }
}

function stopMeditation() {
    if (meditationTimer) {
        clearInterval(meditationTimer);
        meditationTimer = null;
    }
    
    document.querySelector('.meditation-options').style.display = 'grid';
    document.getElementById('meditationTimer').style.display = 'none';
    
    showNotification('จบการทำสมาธิ ขอให้มีความสุข', 'success');
}

function finishMeditation() {
    stopMeditation();
    showNotification('ยินดีด้วย! คุณทำสมาธิครบตามเวลาแล้ว 🧘‍♀️', 'success');
    
    // Save meditation session to analytics
    const session = {
        date: new Date().toISOString(),
        duration: meditationDuration,
        completed: true
    };
    
    let meditationHistory = JSON.parse(localStorage.getItem('meditationHistory') || '[]');
    meditationHistory.unshift(session);
    localStorage.setItem('meditationHistory', JSON.stringify(meditationHistory));
}

function getCurrentMeditationTime() {
    const elapsed = Math.floor((Date.now() - meditationStartTime) / 1000);
    return Math.max(0, meditationDuration - elapsed);
}

function generateMeditationGuidance(cardName) {
    const guidances = {
        'กดุมภะ': 'จินตนาการถึงความอุดมสมบูรณ์ที่ไหลเวียนเข้ามาในชีวิตคุณ',
        'กัมมะ': 'มองเห็นพลังแห่งการกระทำดีที่คุณสร้างขึ้น',
        'เคหัง': 'รู้สึกถึงความอบอุ่นและความปลอดภัยในบ้านและครอบครัว',
        'ญาติ': 'ส่งความรักและความเมตตาไปยังคนที่คุณรัก',
        'ตนุ': 'รับรู้และขอบคุณร่างกายที่ทำงานหนักเพื่อคุณ',
        'ทานัง': 'รู้สึกถึงความสุขที่เกิดจากการให้และการแบ่งปัน',
        'ธนัง': 'มองเห็นความมั่งคั่งในทุกรูปแบบที่อยู่รอบตัวคุณ',
        'default': 'หายใจเข้าลึกๆ และปล่อยให้จิตใจสงบนิ่ง'
    };
    
    for (const key in guidances) {
        if (cardName.includes(key)) {
            return guidances[key];
        }
    }
    
    return guidances.default;
}

// Utility Functions
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function exportHistory() {
    if (typeof jsPDF === 'undefined') {
        showNotification('ไม่สามารถส่งออก PDF ได้ในขณะนี้', 'warning');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Add Thai font support (if available)
    doc.setFont('helvetica');
    doc.setFontSize(16);
    
    // Title
    doc.text('Card Reading History', 20, 20);
    doc.setFontSize(12);
    
    let yPosition = 40;
    
    cardHistory.forEach((card, index) => {
        if (yPosition > 280) {
            doc.addPage();
            yPosition = 20;
        }
        
        const date = new Date(card.date).toLocaleDateString();
        doc.text(`${index + 1}. ${date}`, 20, yPosition);
        doc.text(`Card: ${card.name}`, 20, yPosition + 10);
        doc.text(`Meaning: ${card.meaning}`, 20, yPosition + 20);
        
        yPosition += 35;
    });
    
    doc.save('card-history.pdf');
    showNotification('ส่งออก PDF เรียบร้อยแล้ว', 'success');
}

// Card Search Modal
function openCardSearch() {
    document.getElementById('cardSearchModal').classList.add('open');
}

function closeCardSearch() {
    document.getElementById('cardSearchModal').classList.remove('open');
}

function searchCards() {
    const query = document.getElementById('cardSearchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    
    if (query.length < 2) {
        results.innerHTML = '';
        return;
    }
    
    const matches = Object.entries(CARD_DATA).filter(([file, data]) => 
        data.name.toLowerCase().includes(query) || 
        data.meaning.toLowerCase().includes(query)
    );
    
    results.innerHTML = matches.map(([file, data]) => `
        <div class="search-result-item">
            <strong>${data.name}</strong><br>
            ${data.meaning}
        </div>
    `).join('');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Export history button
    if (document.getElementById('exportHistory')) {
        document.getElementById('exportHistory').addEventListener('click', exportHistory);
    }
    
    // Card search
    if (document.getElementById('cardSearchInput')) {
        document.getElementById('cardSearchInput').addEventListener('input', searchCards);
    }
    
    // Service Worker Registration for PWA (only works over HTTP/HTTPS)
    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed (this is normal when running locally)'));
    }
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}); 