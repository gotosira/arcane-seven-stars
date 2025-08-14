// Advanced Features for Thai Fortune Card App

// ตำราดาวเสวยดาวแทรก - Star Sevy-Taek System
const STAR_SEVY_TAEK_DATABASE = {
    // ดาว 7 ดวง
    stars: {
        sun: { name: 'อาทิตย์', nameEn: 'Sun', number: 1 },
        moon: { name: 'จันทร์', nameEn: 'Moon', number: 2 },
        mars: { name: 'อังคาร', nameEn: 'Mars', number: 3 },
        mercury: { name: 'พุธ', nameEn: 'Mercury', number: 4 },
        jupiter: { name: 'พฤหัส', nameEn: 'Jupiter', number: 5 },
        venus: { name: 'ศุกร์', nameEn: 'Venus', number: 6 },
        saturn: { name: 'เสาร์', nameEn: 'Saturn', number: 7 }
    },
    
    // ตำราดาวเสวยดาวแทรก
    interpretations: {
        'sun-sun': 'จะเกิดอาการกระวนกระวายร้อน อดทนอยู่ที่เดิมไม่ได้ จะมีปัญหากับคนรอบตัว ถูกกลั่นแกล้งจากศัตรูเก่า มีความแค้นใจเป็นการส่วนตัว ต้องย้ายที่อยู่ เปลี่ยนแปลงสถานที่อาศัยทั้งการอยู่และการทำงาน',
        'sun-moon': 'จะได้ประสบพบเจอกับผู้ที่เข้ามาร่วมใช้ชีวิตด้วยกัน ทั้งความสัมพันธ์ทางครอบครัว และ การร่วมมือ เข้าร่วมเป็นหุ้นส่วน มีโอกาสที่จะได้ลาภจากเพศตรงข้าม รวมไปถึงโอกาสของการแต่งงาน',
        'sun-mars': 'มีปัญหาการเป็นปฏิปักษ์ แข่งขัน และสร้างภาระ กีดกันและขัดขวางพยายามไม่ให้ประสบความสำเร็จ อาจจะเกิดปัญหาที่เกี่ยวข้องกับคดีความ การถูกดำเนินคดีความ เป็นภาระที่ไม่อาจจะหลีกเลี่ยงได้ ถูกขู่เข็ญบังคับให้จำยอม',
        'sun-mercury': 'ส่งผลในด้านของการคิดริเริ่ม และลงทุนสิ่งใหม่ ขยาย การติดต่อ สร้างไมตรี การผูกมิตร และ หาผู้ร่วมอุดมการณ์ จะได้รับการติดต่อประสานงาน ส่งผลดีในด้านของการเริ่มต้นโครงการใหม่',
        'sun-jupiter': 'ผูกพันเกี่ยวกับครอบครัว ความช่วยเหลือเกื้อกูลของผู้ใหญ่ ได้รับความอุปถัมภ์ค้ำจุน มีโอกาสเดินทางเข้าพบกับญาติ ผู้ใหญ่ ผู้ที่มีอำนาจเพื่อขอความช่วยเหลือ แต่จะเกิดปัญหาในเรื่องของคนใกล้ชิด วางไว้วางใจที่มากจนเกิดไปเป็นสาเหตุ',
        'sun-venus': 'มักจะได้รับโอกาส ได้เป็นที่รู้จักของคนทั่วไป มีโอกาสเดินทางไกลและได้รับการยกย่อง ทำให้ตัวเองมีชื่อเสียง ยังได้รับผลประโยชน์ส่วนแบ่ง การริเริ่มดำเนินงานในสิ่งใหม่ที่จะเกิดขึ้น มักมาในรูปแบบของทรัพย์สินที่มีค่า',
        'sun-saturn': 'ชีวิตจะมีความร้อน กระวนกระวาย ไขว่คว้าในเรื่องของโอกาสสร้างฐานะ พึงระวังคนใกล้ชิดจะเปลี่ยนจากมิตรกลายเป็นศัตรูต่อสู้และดิ้นรน แต่จะเจอปัญหาอุปสรรคระหว่างทาง โอกาสที่จะสำเร็จล่าช้าต้องรอเวลา มีโอกาสได้รับการเจ็บไข้ได้ป่วยขั้นรุนแรง',
        
        'moon-sun': 'พบเจอคู่หู ที่ไม่ถูกชะตา หรือ ถูกหลอกให้กระทำ จะมีเหตุการณ์เกิดขึ้นเกี่ยวกับเรื่องของการไขว่คว้าในเรื่องของโอกาสทางด้านการทำงาน การเสนอตัวบริการเพื่อให้ได้มาซึ่งการเงิน แต่สิ่งที่เกิดขึ้นมักจะถูกคนอิจฉาและริษยา ระวังปัญหาในเรื่องของการถูกหลอกใช้ ให้ทำงานในทางที่ไม่สุจริต',
        'moon-moon': 'มักเจอปัญหาที่ไม่ตรงกับความถนัดของตนเอง มักจะมีปัญหาในเรื่องของการตัดสินใจที่ผิดพลาด การใช้ชีวิตที่ผิดพลาดโดยมีผู้อื่นเป็นฝ่ายกระทำ ตนเองเป็นผู้รับผลของการกระทำที่ไม่ได้เจตนา ในดวงชะตาของผู้ที่มีครอบครัว มีโอกาสที่จะได้รับทายาทสืบสกุล',
        'moon-mars': 'ถูกเพ่งเล็งด้วยความริษยา มักมีปัญหาในเรื่องของความรักและเพศตรงข้ามในลักษณะของเชิงชู้สาว แต่สิ่งที่ต้องระวังนอกเหนือจากความเป็นเรื่องชู้สาว นั่นคือการถูกการอิจฉาริษยาจากคนใกล้ตัวและถูกใส่ร้ายใส่ความ เกิดความขัดแย้งในครอบครัว ปัญหามาจากความไม่เท่าเทียมในการดูแลเอาใจใส่',
        'moon-mercury': 'มิตรให้การอุปการะ จะได้รับความช่วยเหลือจากเพื่อน มีคนออกโรงปกป้องออกหน้าออกตา ช่วยเหลือและแบกรับปัญหาให้ เกิดการเปลี่ยนแปลงในส่วนที่เกี่ยวข้องกับการทำงาน การเปลี่ยนแปลงรูปแบบของสัญญาว่าจ้าง การทำสัญญานัดหมายในบางประการอาจมีเหตุให้ถูกเลื่อนออกไป',
        'moon-jupiter': 'การอุปการะที่ติดค้างบุญคุณ จะได้รับความช่วยเหลือจากผู้ใหญ่ที่ไม่เคยรู้จักกันมาก่อนและจะมีปัญหาเกี่ยวกับบริวารคนใกล้ตัว โดยเฉพาะในเรื่องที่เกี่ยวข้องกับเรื่องของการอ้างสิทธิ์ ของการเป็นผู้มีพระคุณ กล่าวอ้างถึงบุญคุณที่เคยช่วยเหลือซึ่งกันและกัน ถูกติดตามทวงถามกล่าวอ้างถึงการช่วยเหลือที่เป็นบุญคุณค้างต่อกัน',
        'moon-venus': 'สมปรารถนาเมื่อแรกพบ เกิดความขัดแย้งคนในครอบครัว ในอีกด้านหนึ่งจะหมายถึงการพบเจอคนรักเพศตรงข้ามที่ถูกใจ มีโอกาสในการสร้างครอบครัว มักมีเสน่ห์ต่อผู้พบเห็น ถูกสลับสับเปลี่ยนหน้าที่ในการทำงาน ถ้าสัมพันธ์ในมุมที่เสีย จะส่งผลที่เกี่ยวข้องกับเรื่องของความรักที่เป็นจากหน้ามือเป็นหลังมือ',
        'moon-saturn': 'ทอดทิ้งภาระ ส่งผลเกี่ยวข้องในเรื่องของการเปลี่ยนแปลงโยกย้ายการตัดภาระออกจากชีวิต โยนภาระของตนเองให้แก่ผู้อื่น เป็นเหตุให้ต้อง โยกย้ายและเดินทางไกล สูญเสียคนในครอบครัว พ่อแม่ลูกจะอยู่ห่างไกล',
        
        'mars-sun': 'ถูกขับไล่ บังคับให้สิ้นสภาพ จะมีปัญหาเกี่ยวข้องกับเรื่องของการแข่งขัน การแสดงตัวออกหน้าในฐานะของการเป็นศัตรู ถูกกีดกัน ผลักไล่ไสส่งก่อให้เกิดอุบัติเหตุ จะถูกผู้ใหญ่กลั่นแกล้ง ถูกสั่งให้หมดอำนาจหน้าที่เสียผลประโยชน์ที่ตัวเองเคยมี',
        'mars-moon': 'ถูกชักชวนให้คล้อยตาม จะมีปัญหาเกี่ยวข้องในฐานะการเข้าไปเป็นมือที่สามของบุคคลอื่น การถูกคนใกล้ชิดหักหลังทำร้าย ความไม่เท่าเทียมกันในการดูแลเอาใจใส่ ตัวของเจ้าชะตาเอง จะถูกใส่ร้ายและใส่ความ มีปัญหาในเรื่องของคนรักที่ตีจาก',
        'mars-mars': 'ลุ่มหลงทะนงตนเกินประมาณตน เป็นช่วงเวลาที่ส่งผลให้ชีวิตมีความโกลาหลวุ่นวาย มักต้องดิ้นรน ความคิดพลุ่งพล่าน ขาดสติและมักใช้อารมณ์ในการตัดสินใจ สร้างปัญหาความเดือดร้อน ที่ขาดสติ กระทำการผิดพลาดที่เป็นการล่วงละเมิดถึงชีวิตของผู้อื่น และนำพาไปสู่โอกาสที่ให้เกิดปัญหาในเรื่องของคดีความในอนาคต',
        'mars-mercury': 'กระทำผิดและทิ้งภาระให้ผู้อื่น การเข้าไปเป็นหุ้นส่วน แต่จะมีความขัดแย้งในเรื่องของความคิดเห็น ถูกกดดันให้จำยอมในเรื่องของภาระสัญญาที่เสียเปรียบแต่จะมีส่วนที่ดีในเรื่องของการได้รับการว่าจ้าง เพื่อทำงานพิเศษ ต้องพิจารณาเงื่อนไขของเอกสารสัญญาให้รัดกุมเสียก่อน มีภาระในการเลี้ยงดู ที่ถูกผลักภาระมาให้ตนเอง',
        'mars-jupiter': 'เกิดคดี ฟ้องร้อง หรือถูกฟ้อง การเกิดปัญหาเกี่ยวข้องกับเรื่องของคดี การฟ้องร้องในทางกฎหมาย ถูกเพ่งเล็งความผิดจากผู้ใหญ่ แจ้งข้อกล่าวหาแบบไม่ชอบธรรม แต่มีโอกาสที่จะเจริญเติบโตได้ในทางหน้าที่การงานของตนเอง แต่จะต้องมีการสอบแข่งขันเพื่อแย่งชิงตำแหน่งขึ้นมา ในทางกลับกันตำแหน่งของตนเองก็มีโอกาสที่จะถูกผู้อื่นแย่งชิงไปได้',
        'mars-venus': 'จะได้ความช่วยเหลือจากผู้มีอำนาจ จะได้อาศัยและพึ่งพิง ผู้ที่มีอำนาจบารมีในฐานะการขอความช่วยเหลือ แต่จะอยู่ในฐานะของการเป็นบ่าวรับใช้นาย ผู้ใหญ่ให้การอุปถัมภ์ ในดวงชะตาของผู้หญิงให้ระวังปัญหาเรื่องของความใกล้ชิดจากคนที่มีคู่ และ ได้เสียกันในทางลับไม่เปิดเผย และ ปัญหาจะถูกเปิดโปงในภายหลัง',
        'mars-saturn': 'ถูกเพ่งเล็ง ศัตรูให้โทษ จองเวร อาฆาต มีปัญหากระทบกระทั่ง ความขัดแย้งที่เกิดขึ้นภายในครอบครัว อุบัติเหตุและแตกหัก การสูญเสียคนในครอบครัว ความเสี่ยงต่อการถูกยึดทรัพย์ ถูกยกเลิกในสัญญาว่าจ้าง หรือ แม้กระทั่งถูกยกเลิกในเรื่องของที่อยู่อาศัย ตำแหน่งหน้าที่การงานของตนเอง จะถูกคู่แข่งมาแย่งชิง ทั้งในทางธุรกิจส่วนตัวหรือแม้กระทั่งงานประจำที่ตนเองทำ',
        
        'mercury-sun': 'สรรหาว่าจ้าง ได้รับการติดต่อ ถูกแต่งตั้ง การตกลงปลงใจ มีการว่าจ้างทำสัญญา การให้ความช่วยเหลือในกรณีพิเศษ ถูกเผยแพร่และแพร่งพรายความลับ เกิดปัญหาคดีความเกี่ยวกับการพาดพิง การแจ้งข้อมูลอันเป็นเท็จ ข่าวที่ได้รับฟังมาจะกลายเป็นเหตุโกหกเชื่อถือไม่ได้',
        'mercury-moon': 'ถูกผลักภาระมาให้แก่ตน ได้ช่วยเหลือเพื่อน จะมีผู้มาขอความอนุเคราะห์ บ่งบอกเกี่ยวข้องกับเรื่องของการเดินทาง การเปลี่ยนแปลงในเรื่องของตำแหน่งหน้าที่การงานและที่อยู่อาศัย มีโอกาสพบเจอคนรักเพศตรงข้าม แต่จะมาในรูปแบบของความรักที่ซ้อนกัน ในฐานที่ตนเองกลายเป็นรักซ้อน',
        'mercury-mars': 'เกิดมีคนหมั่นไส้ ปริวตา โกหกใส่ความ การมีปัญหาในเรื่องของความคิดเห็นขัดแย้งไม่ตรงกันถูกเอารัดเอาเปรียบจากหุ้นส่วน มีปัญหาสุขภาพเกี่ยวกับระบบสมองมีการทะเลาะวิวาทกับเพศตรงข้ามและคู่ครอง ขัดแย้งกับหุ้นส่วน มีปัญหาจนถึงขั้นที่จะต้องแยกตัวออกจากกัน',
        'mercury-mercury': 'ได้ทรัพย์มาครอบครอง ได้รับความมีอำนาจ ดูแลปกครองในท้องถิ่น มีบริวารใกล้ชิดรอบตัว เกิดการเปลี่ยนแปลงในด้านหน้าที่การงานของตน แต่จะมีปัญหาที่เกี่ยวข้องกับคนที่อยู่รอบตัวที่ต่างฝ่ายต่างพยายามชิงดีชิงเด่น ซึ่งตัวของเจ้าชะตานั้นอยู่ในฐานะของคนกลางที่ไม่อาจจะตัดสินหรือแก้ไขปัญหาให้ได้โดยลำพัง',
        'mercury-jupiter': 'วิ่งเต้น ร้องขอ ติดอามิสสิน จะได้รับในเรื่องของอามิสสินจ้าง การช่วยเหลือในทางไม่เปิดเผย การบนบานศาลกล่างต่อเทพยดาฟ้าดิน มีโอกาสพบเจอเพศตรงข้ามจากที่ไกล ให้ระวังปัญหาที่เกี่ยวข้องกับเรื่องของชีวิตครอบครัว โดยเฉพาะจากการถูกก้าวก่ายจากญาติผู้ใหญ่ของอีกฝ่าย ที่จะสร้างปัญหาให้เกิดความระหองระแหงในชีวิตคู่',
        'mercury-venus': 'ถูกปองร้ายจากคนอื่น เสียทรัพย์ มีปัญหาขัดแย้งกับผู้ใหญ่ในบ้าน ปรับตัวเข้าหากันไม่ได้มีอคติในเรื่องของความคิดเก็บทรัพย์ไว้ไม่คงทน ทรัพย์สินของตนที่เก็บไว้จะเกิดการสูญหายเนื่องจากถูกผู้อื่นยักยอกหรือลักขโมยไป เกิดความแตกแยกในหมู่คณะ โดยที่ตัวของเจ้าชะตาเองนั้นเป็นฝ่ายเริ่มต้นของปัญหาขึ้นมาก่อน ที่เกิดจากความไม่พอใจในสิ่งที่ตนเองได้รับและเลือกปฏิบัติ',
        'mercury-saturn': 'เกิดโรคภัย ไข้เจ็บ เสียทรัพย์จากบุคคลอื่น มีอำนาจทางตำแหน่งในราชการมัก มีปัญหาขัดแย้งกับคนในครอบครัว ในเรื่องของความไม่เท่าเทียมกันในการปกครองดูแลมักมีการแบ่งฝ่ายในเรื่องของการทำงาน ในเหตุการณ์ดวงชะตานี้ มีโอกาสที่จะเจ็บป่วยกระทันหัน จนถึงขั้นรุนแรงและยากต่อการรักษา',
        
        'jupiter-sun': 'มีลาภเกิดจากผู้ใหญ่คนใกล้ตัว จะเกิดเหตุการณ์ที่เกี่ยวข้องในเรื่องของการติดต่อ การหาผู้ร่วมแนว ดำเนินกิจการร่วมกัน มีโครงการใหม่ที่ริเริ่มดำเนินการเกิดขึ้น เป็นดวงชะตาที่มีโอกาสจะพบเจอคนรักเพศตรง มีการตกลงปลงใจใช้ชีวิตร่วมกัน',
        'jupiter-moon': 'มักพบเจอคู่ บริวารคนใกล้ชิดมักตีตัวออกห่าง การยื่นข้อเสนอขอร้องต่อศาล การขออุทธรณ์และฎีกาในทางกฎหมาย ในทางความหมายหนึ่งจะหมายถึงโอกาสการมีคู่ครอง แต่ยังมีปัญหาในเรื่องของการที่ถูกผู้ใหญ่ของอีกฝ่ายหนึ่งเข้ามาก้าวก่าย',
        'jupiter-mars': 'มีคดีความเป็นฝ่ายฟ้อง เป็นโจทก์ยื่นฟ้องจำเลย มีปัญหาในเรื่องของคดีความการถูกพาดพิง ส่งผลดีในเรื่องของการรับราชการ คดีความฟ้องร้องในเรื่องการเงิน สำหรับผู้ที่มีปัญหาเกี่ยวข้องกับเรื่องของการงานในช่วงชะตาจร จะมีโอกาสที่ได้รับการเรียกหัวเข้าทำงาน เป็นนางแบบงานประจำและงานพิเศษ',
        'jupiter-mercury': 'คนใกล้เอาใจห่าง เพราะไม่อาจตอบสนองความต้องการ มีปัญหากับคนรัก ความขัดแย้งที่มีผู้ใหญ่เป็นสาเหตุผู้ใหญ่จะมีความลำเอียง ขาดความปรองดองในการทำงานร่วมกับผู้อื่น บริวารที่อยู่ภายใต้การปกครอง จะขาดความซื่อสัตย์และนำความลับของตนเองไปเปิดเผย ให้ระวังในเรื่องของการถูกขายความลับของตนเองที่เกิดขึ้น',
        'jupiter-jupiter': 'จะเป็นเหตุการณ์ที่เกี่ยวข้องกับการที่ผู้ใหญ่ยื่นมือให้ความช่วยเหลือแต่ในทุกครั้งที่มีการช่วยเหลือ ผู้ใหญ่จากสร้างเงื่อนไขต่อรองและต้องอยู่ภายใต้การควบคุมตามคำสั่งของผู้ใหญ่ มักได้รับการอุปถัมภ์ช่วยเหลือจากผู้ใหญ่ แต่จะมีการยื่นเงื่อนไขต่อรอง ไม่ใช่การให้ความช่วยเหลือแบบให้เปล่า มีข้อแลกเปลี่ยนในกันเสนอความช่วยเหลือ ส่งผลในทิศทางที่ดี แม้จะยอมรับในเงื่อนไขบางประการที่ถูกผู้ใหญ่ครอบงำแต่จะส่งผลดีในอนาคตภายหลัง',
        'jupiter-venus': 'จะหมายถึงโอกาส สร้างความสำเร็จที่มีผู้ใหญ่ผลักดันอยู่เบื้องหลังครับ แต่ในการผลักดันและคอยช่วยเหลือนั้น ต้องมีสิ่งน้ำใจมอบให้เป็นการตอบแทน เช่นเดียวกัน ส่งผลในเรื่องของการก่อเนิด โอกาสการมี การลงทุนในกิจการ มีกำลังจากการลงทุน การนำเสนอผลงาน ได้รับการอนุมัติ แต่ไม่ส่งผลดีในเรื่องของความรักที่เกิดขึ้น เนื่องจากพฤติกรรมที่ติดบังและอำพรางไม่เปิดเผยความจริง เนื่องจากพฤติกรรมที่ติดบังและอำพรางไม่เปิดเผยความจริง เนื่องจากพฤติกรรมที่ติดบังและอำพรางไม่เปิดเผยความจริง แต่จะไม่เกี่ยวข้องกับเรื่องของปัญหารักซ้อน สาเหตุหลักมักจะมาจากปัญหาในเรื่องของชีวิตความเป็นอยู่ ภาพลักษณ์และฐานะทางการเงิน',
        'jupiter-saturn': 'จะเป็นเหตุการณ์ ที่เกี่ยวข้องกับการ เปลี่ยนแปลง สถานะหนึ่งสู่สถานะหนึ่งครับ เช่นกรณีที่บุคคลเป็นลูกจ้างประจำก็จะอาจเป็นการเปลี่ยนแปลงมาเป็นเจ้าของกิจการหรือพนักงานในระดับปฏิบัติการรับการแต่งตั้งถือเป็นหัวหน้าครับ แต่ทั้งนี้ทั้งนั้นจะอยู่ภายใต้การสั่งการของผู้ใหญ่อีกครั้งหนึ่งครับ ถ้าบอกให้เห็นภาพจะเรียกว่าเป็นหุ่นเชิดของผู้ใหญ่ก็ได้ครับ',
        
        'venus-sun': 'จะสำเร็จเมื่อผ่านการทดสอบ มักถูกเรียกร้อง มีปัญหาในเรื่องของการแข่งขันแย่งชิงความรักมีปัญหา ต่างคนต่างถือดีเข้าหากัน ไม่ลดราวาศอก มีความขัดแย้งกับตัวของผู้ใหญ่ ที่เกี่ยวข้องกับเรื่องของการทำงาน โดยเฉพาะในเรื่องของการที่เลือกที่รักมักที่ชัง',
        'venus-moon': 'พบเจอคนถูกใจจากบุคคลที่สาม เป็นช่วงเวลาที่จะเกิดรักแรกพบ เป็นช่วงเวลาที่จะเกิดรักแรกพบ ผ่านการติดต่อจากบุคคลที่สามเป็นสื่อ แต่จะถูกกีดกันในเรื่องของฐานะและเชื้อชาติ มีโอกาสพบเจอคนรักต่างถิ่นและต่างชาติ ในชีวิตครอบครัวของบางคนจะมีปัญหาความขัดแย้งในเรื่องของการนอกใจ แต่ไม่ใช่มือที่สามเป็นการนอกใจในแบบการใช้บริการเช่น บาร์โฮสท์ หรือ อาบอบนวด',
        'venus-mars': 'เดินทาง โยกย้าย เสี่ยงภัย มีโอกาสเดินทางไกลไปยังต่างแดน โยกย้ายถิ่นฐานที่ทางทำกิน ในมุมร้ายจะส่งผลในเรื่องของการหลบหนีหรือลักลอบเข้าเมือง การทำงานโดยปกติของตนเองจะอยู่ไม่เป็นสุขมักจะถูกก่อกวนจากคนรอบข้าง รวมไปถึงการเพิ่มภาระทางปัญหาของงานเข้ามาในแผนที่ไม่ทันตั้งตัวและได้งานที่ตนเองไม่สันทัด',
        'venus-mercury': 'ถูกกดดันจำกัดอิสระภาพ การติดต่อเจรจา มีข้อเสนอและเงื่อนไขเพิ่มเติม แก้ไขสัญญา มีปัญหาเกี่ยวข้องกับเรื่องของการถูกแย่งชิงทรัพย์สิน การรุกล้ำ ครอบครองปรปักษ์ ทรัพย์สินของตนที่มี จำเป็นที่จะต้องจำใจปรับศูนญ์ที่ไม่จำเป็นออก ปัญหาที่เกี่ยวข้องกับเรื่องของการยึดทรัพย์สัญญาค้ำประกันที่ขาดอายุ',
        'venus-jupiter': 'ขัดแย้งผิดใจกับคนใกล้ตัวเพราะผู้ใหญ่กักกัน มีการวิ่งเต้นเข้าหาผู้ใหญ่เพื่อขอความช่วยเหลือ ได้รับการอุปถัมภ์ มีปัญหากับคู่รัก มักถูกปฏิเสธในเชิงสัมพันธ์ โดยเฉพาะในเรื่องของการสัมผัสทางกาย ตามที่คู่รักไม่ตอบสนองในเรื่องของความสัมพันธ์ จะก่อให้เกิดปัญหาความแตกร้าวในครอบครัว คนรักคู่ครองสร้างปัญหาในเรื่องการเงินที่ไม่ได้บอก และจะกลายเป็นปัญหาในอนาคตต่อมา',
        'venus-venus': 'มีทรัพย์สมบัติ ได้มรดก มีโอกาสครอบครองทรัพย์ ได้รับมรดก การสอบแข่งขันในตำแหน่งของราชการ ดวงชะตาเป็นช่วงเวลาที่บ่งบอกถึงโอกาสครั้งว่าเสนอประสบความสำเร็จในชีวิต แต่จะมีปัญหาเกี่ยวข้องในเรื่องของความรักและการเงิน ความรักที่เกิดขึ้นในดวงชะตานี้มักจะเป็นผู้ที่อยู่ห่างไกล',
        'venus-saturn': 'ถูกใส่ความ กีดกัน แบ่งแยก ในด้านนี้ มักเป็นปัญหาที่เกิดขึ้น ในเรื่องของการตีวัวกระทบคราด โยนความผิดมาให้แก่ตน ความผิดเกิดขึ้นที่ตนเองไม่ได้ก่อ แต่ต้องอยู่ในฐานะของผู้ที่ต้องรับผิดชอบของปัญหา ถูกญาติผู้ใหญ่ใกล้ชิดใส่ความ บริวารแสดงอาการต่อต้าน บริวารที่ใกล้ชิดไม่เชื่อฟัง คนรักของตัวเองที่ตัวออกห่าง',
        
        'saturn-sun': 'คนใกล้ชิดหรือคนใกล้ตัวเอาใจห่าง เหน็ดเหนื่อย ร้อนใจ ความก้าวหน้าในชีวิตเป็นไปได้ อย่างช้า มักถูกมองข้ามความสำคัญ และจำกัดอิสระภาพ ไม่ให้สิทธิ์ในการออกความคิดเห็น ตัวเจ้าชะตา จะเกิดความหวาดระแวงคนใกล้ตัว อารมณ์ที่เกี่ยวข้องกับเรื่องของความหึงหวง',
        'saturn-moon': 'พลัดพรากสูญเสีย คนใกล้ชิดตีตัวออกห่าง ความพลัดพรากและสูญเสียเกิดขึ้น โรคภัยไข้เจ็บเบียดเบียน อาการที่เกี่ยวข้องกับปัญหาทางหัวใจในความหมายทางเชิงบวก จะได้รับการติดต่อนำเสนอให้ทำหน้าที่เป็นตัวแทน ได้รับการสืบทอดมรดก',
        'saturn-mars': 'ถูกกีดกันขัดขวางจำกัดอิสระ มีการใช้อำนาจเข้าข่มเหงและรังแก อยู่ในกลุ่มใกล้กับผู้ที่มีอิทธิพล ถูกให้อิทธิพลบีบบังคับ ศัตรูคู่แค้นในอดีตจะตามมาราวีและคอยสร้างปัญหาอยู่ไม่รู้จบ ในบางกรณีมักจะถูกผู้ที่มีอิทธิพลเหนือกว่า กลั่นแกล้งในหน้าที่การงานหรือแม้กระทั่งธุรกิจที่ตนเองทำ',
        'saturn-mercury': 'ถูกแทรกแซงจากมือที่สาม ระวังปัญหาจากมือที่สาม การมีรักซ้อนเกิดขึ้นแบบไม่ตั้งใจ ปัญหาในเรื่องของการทำงาน ถูกเปลี่ยนแปลงเอากลางคัน ถูกโยกย้ายแบบไม่เป็นธรรม ภาระหน้าที่ทางการงานของตนเองจะถูกปล่อยวางไว้กลางทาง ไม่สามารถทำงานได้สำเร็จเสร็จสิ้นเป็นชิ้นอัน ต้องแบ่งช่วงเวลา ทำงานหนึ่งและอีกงานหนึ่ง ในช่วงเวลาเดียวกันเสมอ',
        'saturn-jupiter': 'เปลี่ยนแปลงไปสู่สิ่งใหม่ที่ไม่คาดคิด การเปลี่ยนแปลงและศัลยกรรม พัฒนาปรับปรุงทำให้ดูดีขึ้นกว่าเดิม ระวังในเรื่องของการที่มีคน เสแสร้งเอาใจเพื่อผลประโยชน์ที่ต้องการ หลองลวงให้หลงเชื่อ ในด้านดีอาจจะมีเรื่องของการได้รับการตอบสนองบำเรอและปรนเปรอ ในเรื่องของทรัพย์สิน',
        'saturn-venus': 'ความพยายามที่ไม่สำเร็จ ถูกปฏิเสธ ภาระที่เกี่ยวข้องในเรื่องของหนี้สิน ค่าใช้จ่ายที่พันตัวความรักที่อยู่แบบจำใจ เป็นช่วงเวลาที่มีโอกาสจะพบเจอกับมือที่สามปัญหาความรักที่ไม่ลงรอย การฟ้องร้องเรียกสิทธิในการดูแล สามีภรรยาทะเลาะกัน แต่ปัญหาจะตกมาอยู่ที่ลูก',
        'saturn-saturn': 'บริวารหักหลังทรยศ มีโอกาสที่จะได้รับทรัพย์สินใหญ่ สอบแข่งขันเกี่ยวกับราชการท้องถิ่น ได้อยู่ร่วมกับผู้ที่มีอิทธิพลและอำนาจปกป้องแต่ถ้าเป็นเรื่องของการที่ตัวเจ้าชะตามมีโอกาสได้ทำงานในยังสถานที่แห่ง ให้ระวังปัญหาการถูกกลั่นแกล้งจากผู้ที่อยู่มาก่อน'
    },
    
    // คำจำกัดความ
    definitions: {
        sevy: 'ดาวเสวย คือ ดาวที่อยู่ในตำแหน่งที่มีอิทธิพลเสริมพลังให้กับบุคคล',
        taek: 'ดาวแทรก คือ ดาวที่อยู่ในตำแหน่งที่สร้างอุปสรรคหรือความท้าทายให้กับบุคคล'
    }
};

// Star Sevy-Taek Functions
function calculateStarSevy() {
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    
    if (!birthDate) {
        alert('กรุณาใส่วันเกิด');
        return;
    }
    
    // Simple calculation based on birth date (for demonstration)
    // In a real application, this would use proper astrological calculations
    const date = new Date(birthDate);
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    
    // Calculate Sevy Star (ดาวเสวย) based on day of month
    const sevyIndex = (dayOfMonth - 1) % 7;
    const sevyStarKeys = Object.keys(STAR_SEVY_TAEK_DATABASE.stars);
    const sevyStar = sevyStarKeys[sevyIndex];
    
    // Calculate Taek Star (ดาวแทรก) based on month
    const taekIndex = (month - 1) % 7;
    const taekStar = sevyStarKeys[taekIndex];
    
    // Display results
    displayStarResults(sevyStar, taekStar);
}

function displayStarResults(sevyStar, taekStar) {
    const starResults = document.getElementById('starResults');
    const sevyStarElement = document.getElementById('sevyStar');
    const sevyNumberElement = document.getElementById('sevyNumber');
    const taekStarElement = document.getElementById('taekStar');
    const taekNumberElement = document.getElementById('taekNumber');
    const interpretationContent = document.getElementById('interpretationContent');
    
    // Display star names and numbers
    sevyStarElement.textContent = STAR_SEVY_TAEK_DATABASE.stars[sevyStar].name;
    sevyNumberElement.textContent = STAR_SEVY_TAEK_DATABASE.stars[sevyStar].number;
    taekStarElement.textContent = STAR_SEVY_TAEK_DATABASE.stars[taekStar].name;
    taekNumberElement.textContent = STAR_SEVY_TAEK_DATABASE.stars[taekStar].number;
    
    // Get interpretation
    const interpretationKey = `${sevyStar}-${taekStar}`;
    const interpretation = STAR_SEVY_TAEK_DATABASE.interpretations[interpretationKey] || 
                          'ไม่พบการตีความสำหรับการรวมกันของดาวนี้';
    
    // Display interpretation
    interpretationContent.innerHTML = `
        <div class="star-combination">
            <h5>${STAR_SEVY_TAEK_DATABASE.stars[sevyStar].name}เสวย - ${STAR_SEVY_TAEK_DATABASE.stars[taekStar].name}แทรก</h5>
            <p>${interpretation}</p>
        </div>
    `;
    
    // Show results section
    starResults.style.display = 'block';
    starResults.scrollIntoView({ behavior: 'smooth' });
}

function updateManualInterpretation() {
    const manualSevyStar = document.getElementById('manualSevyStar').value;
    const manualTaekStar = document.getElementById('manualTaekStar').value;
    const interpretationText = document.getElementById('manualInterpretationText');
    
    if (!manualSevyStar || !manualTaekStar) {
        interpretationText.innerHTML = '<p>กรุณาเลือกดาวเสวยและดาวแทรกเพื่อดูการตีความ</p>';
        return;
    }
    
    // Get interpretation
    const interpretationKey = `${manualSevyStar}-${manualTaekStar}`;
    const interpretation = STAR_SEVY_TAEK_DATABASE.interpretations[interpretationKey] || 
                          'ไม่พบการตีความสำหรับการรวมกันของดาวนี้';
    
    // Display interpretation
    interpretationText.innerHTML = `
        <div class="star-combination-manual">
            <h5>${STAR_SEVY_TAEK_DATABASE.stars[manualSevyStar].name}เสวย - ${STAR_SEVY_TAEK_DATABASE.stars[manualTaekStar].name}แทรก</h5>
            <div class="interpretation-details">
                <p><strong>ความหมาย:</strong> ${interpretation}</p>
                <div class="star-details">
                    <span class="sevy-detail">
                        <i class="fas fa-star text-golden"></i> 
                        ดาวเสวย: ${STAR_SEVY_TAEK_DATABASE.stars[manualSevyStar].name} (${STAR_SEVY_TAEK_DATABASE.stars[manualSevyStar].number})
                    </span>
                    <span class="taek-detail">
                        <i class="fas fa-star-half-alt text-red"></i> 
                        ดาวแทรก: ${STAR_SEVY_TAEK_DATABASE.stars[manualTaekStar].name} (${STAR_SEVY_TAEK_DATABASE.stars[manualTaekStar].number})
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Enhanced Journal Functions with Yam Data
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
        
        // Determine entry type and create appropriate display
        if (entry.type === 'three-cards') {
            entryElement.innerHTML = createThreeCardsJournalEntry(entry, date);
        } else {
            entryElement.innerHTML = createSingleCardJournalEntry(entry, date, moodEmoji);
        }
        
        entriesContainer.appendChild(entryElement);
    });
}

// Create display for three-card reading entries
function createThreeCardsJournalEntry(entry, date) {
    const cards = entry.cards || {};
    const yamInfo = entry.yamInfo || {};
    const tableData = entry.tableData || {};
    
    let cardsHTML = '';
    if (cards.past && cards.present && cards.future) {
        cardsHTML = `
            <div class="three-cards-display-mini">
                <div class="card-mini">
                    <img src="${cards.past.file}" alt="${cards.past.name}">
                    <span>อดีต</span>
                </div>
                <div class="card-mini">
                    <img src="${cards.present.file}" alt="${cards.present.name}">
                    <span>ปัจจุบัน</span>
                </div>
                <div class="card-mini">
                    <img src="${cards.future.file}" alt="${cards.future.name}">
                    <span>อนาคต</span>
                </div>
            </div>
        `;
    }
    
    let yamInfoHTML = '';
    if (yamInfo.yamNumber) {
        yamInfoHTML = `
            <div class="yam-info-mini">
                <span class="yam-highlight-mini">ยาม: ${yamInfo.yamNumber}</span>
                <span class="time-info">${yamInfo.dayName} ${yamInfo.time}</span>
            </div>
        `;
    }
    
    let tableHTML = '';
    if (tableData.rows && tableData.columnSums) {
        tableHTML = `
            <div class="table-summary-mini">
                <span>📊 ตารางตัวเลข:</span>
                <div class="column-sums">
                    ${tableData.columnSums.map(sum => 
                        `<span class="${tableData.highlightedNumbers && tableData.highlightedNumbers.includes(sum) ? 'yam-match' : ''}">${sum}</span>`
                    ).join(' | ')}
                </div>
                ${tableData.highlightedNumbers && tableData.highlightedNumbers.length > 0 ? 
                    `<small>🌟 ตรงกับยาม: ${tableData.highlightedNumbers.join(', ')}</small>` : ''
                }
            </div>
        `;
    }
    
    return `
        <div class="journal-entry-header">
            <span class="journal-entry-date">${date}</span>
            <span class="journal-entry-type">🔮 ไพ่ 3 ใบ</span>
        </div>
        ${cardsHTML}
        ${yamInfoHTML}
        ${tableHTML}
        <div class="journal-entry-summary">${entry.summary || ''}</div>
        <button class="btn mini view-details-btn" onclick="viewJournalEntryDetails('${entry.date}')">
            <i class="fas fa-eye"></i> ดูรายละเอียด
        </button>
    `;
}

// Create display for single card entries
function createSingleCardJournalEntry(entry, date, moodEmoji) {
    const yamInfo = entry.yamInfo || {};
    const starInfluence = entry.starInfluence || {};
    const luckyInfo = entry.luckyInfo || {};
    
    let yamInfoHTML = '';
    if (yamInfo.yamNumber || starInfluence.yamSevy) {
        yamInfoHTML = `
            <div class="yam-info-mini">
                ${starInfluence.yamSevy ? 
                    `<span class="star-info">⭐ ดาวเสวย: ${starInfluence.yamSevy} (${starInfluence.sevyStarName})</span>` : ''
                }
                ${starInfluence.yamTaek ? 
                    `<span class="star-info">🌟 ดาวแทรก: ${starInfluence.yamTaek} (${starInfluence.taekStarName})</span>` : ''
                }
                ${yamInfo.time ? `<span class="time-info">${yamInfo.dayName} ${yamInfo.time}</span>` : ''}
            </div>
        `;
    }
    
    let luckyInfoHTML = '';
    if (luckyInfo.color || luckyInfo.numbers) {
        luckyInfoHTML = `
            <div class="lucky-info-mini">
                ${luckyInfo.color ? `<span class="lucky-item">🎨 ${luckyInfo.color}</span>` : ''}
                ${luckyInfo.numbers ? `<span class="lucky-item">🔢 ${luckyInfo.numbers}</span>` : ''}
                ${luckyInfo.time ? `<span class="lucky-item">⏰ ${luckyInfo.time}</span>` : ''}
            </div>
        `;
    }
    
    return `
        <div class="journal-entry-header">
            <span class="journal-entry-date">${date}</span>
            <span class="journal-entry-mood">${moodEmoji[entry.mood] || '😊'}</span>
        </div>
        <div class="journal-entry-card">
            <img src="${entry.card.file}" alt="${entry.card.name}" class="card-mini-img">
            <span>${entry.card.name}</span>
        </div>
        ${yamInfoHTML}
        ${luckyInfoHTML}
        ${starInfluence.influence ? 
            `<div class="influence-mini"><strong>ผลจากยาม:</strong> ${starInfluence.influence}</div>` : ''
        }
        <div class="journal-entry-notes">${entry.notes || entry.card.meaning}</div>
    `;
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

// View detailed information for journal entries
function viewJournalEntryDetails(entryDate) {
    const entry = journalEntries.find(e => e.date === entryDate);
    if (!entry) return;
    
    let detailsHTML = '';
    
    if (entry.type === 'three-cards') {
        detailsHTML = createDetailedThreeCardsView(entry);
    } else {
        detailsHTML = createDetailedSingleCardView(entry);
    }
    
    // Show in a modal or expand inline
    showJournalDetailsModal(detailsHTML, entry);
}

function createDetailedThreeCardsView(entry) {
    const cards = entry.cards || {};
    const yamInfo = entry.yamInfo || {};
    const tableData = entry.tableData || {};
    const yamInfluences = entry.yamInfluences || [];
    
    let cardsHTML = '';
    if (cards.past && cards.present && cards.future) {
        cardsHTML = `
            <div class="detailed-cards-view">
                <h4>🔮 ไพ่ทั้ง 3 ใบ</h4>
                <div class="cards-row">
                    <div class="card-detail">
                        <img src="${cards.past.file}" alt="${cards.past.name}">
                        <h5>อดีต</h5>
                        <p>${cards.past.name}</p>
                        <small>${cards.past.meaning}</small>
                    </div>
                    <div class="card-detail">
                        <img src="${cards.present.file}" alt="${cards.present.name}">
                        <h5>ปัจจุบัน</h5>
                        <p>${cards.present.name}</p>
                        <small>${cards.present.meaning}</small>
                    </div>
                    <div class="card-detail">
                        <img src="${cards.future.file}" alt="${cards.future.name}">
                        <h5>อนาคต</h5>
                        <p>${cards.future.name}</p>
                        <small>${cards.future.meaning}</small>
                    </div>
                </div>
            </div>
        `;
    }
    
    let yamInfluenceHTML = '';
    if (yamInfluences.length > 0) {
        yamInfluenceHTML = `
            <div class="detailed-yam-view">
                <h4>🌟 ข้อมูลยามเสวยและยามแทรก</h4>
                ${yamInfluences.map(influence => `
                    <div class="yam-influence-item">
                        <strong>${influence.cardName}</strong>
                        <div class="yam-details">
                            <span>⭐ ดาวเสวย: ${influence.yamSevy} (${influence.sevyStarName})</span>
                            <span>🌟 ดาวแทรก: ${influence.yamTaek} (${influence.taekStarName})</span>
                        </div>
                    </div>
                `).join('')}
                <div class="yam-time">
                    <strong>⏰ เวลาดูไพ่:</strong> ${yamInfo.dayName} ${yamInfo.time} (${yamInfo.periodName})
                </div>
            </div>
        `;
    }
    
    let tableHTML = '';
    if (tableData.rows && tableData.columnSums) {
        tableHTML = `
            <div class="detailed-table-view">
                <h4>📊 ตารางตัวเลขแบบละเอียด</h4>
                <table class="detailed-numerical-table">
                    <thead>
                        <tr>
                            <th>ตำแหน่ง</th>
                            <th>คอลัมน์ 1</th>
                            <th>คอลัมน์ 2</th>
                            <th>คอลัมน์ 3</th>
                            <th>คอลัมน์ 4</th>
                            <th>คอลัมน์ 5</th>
                            <th>คอลัมน์ 6</th>
                            <th>คอลัมน์ 7</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableData.rows.map(row => `
                            <tr>
                                <td>${row.position} (${row.cardNumber})</td>
                                ${row.values.map(value => 
                                    `<td class="${tableData.highlightedNumbers && tableData.highlightedNumbers.includes(value) ? 'yam-match' : ''}">${value}</td>`
                                ).join('')}
                            </tr>
                        `).join('')}
                        <tr class="sum-row">
                            <td><strong>รวม</strong></td>
                            ${tableData.columnSums.map(sum => 
                                `<td class="${tableData.highlightedNumbers && tableData.highlightedNumbers.includes(sum) ? 'yam-match' : ''}"><strong>${sum}</strong></td>`
                            ).join('')}
                        </tr>
                    </tbody>
                </table>
                ${tableData.highlightedNumbers && tableData.highlightedNumbers.length > 0 ? 
                    `<p class="yam-explanation">🌟 เลขที่เน้นสี = ตรงกับยามปัจจุบัน (${tableData.highlightedNumbers.join(', ')})</p>` : ''
                }
            </div>
        `;
    }
    
    return `
        ${cardsHTML}
        ${yamInfluenceHTML}
        ${tableHTML}
        <div class="detailed-summary">
            <h4>📝 สรุปการดูไพ่</h4>
            <p>${entry.summary || 'ไม่มีสรุป'}</p>
        </div>
    `;
}

function createDetailedSingleCardView(entry) {
    const yamInfo = entry.yamInfo || {};
    const starInfluence = entry.starInfluence || {};
    const luckyInfo = entry.luckyInfo || {};
    
    return `
        <div class="detailed-single-card-view">
            <div class="card-detail-main">
                <img src="${entry.card.file}" alt="${entry.card.name}">
                <h4>${entry.card.name}</h4>
                <p>${entry.card.meaning}</p>
            </div>
            
            ${starInfluence.yamSevy ? `
                <div class="detailed-yam-view">
                    <h4>🌟 ข้อมูลยามเสวยและยามแทรก</h4>
                    <div class="yam-influence-item">
                        <div class="yam-details">
                            <span>⭐ ดาวเสวย: ${starInfluence.yamSevy} (${starInfluence.sevyStarName})</span>
                            <span>🌟 ดาวแทรก: ${starInfluence.yamTaek} (${starInfluence.taekStarName})</span>
                        </div>
                        ${starInfluence.influence ? `<p><strong>ผลจากยาม:</strong> ${starInfluence.influence}</p>` : ''}
                    </div>
                    <div class="yam-time">
                        <strong>⏰ เวลาดูไพ่:</strong> ${yamInfo.dayName} ${yamInfo.time} (${yamInfo.periodName})
                    </div>
                </div>
            ` : ''}
            
            ${luckyInfo.color || luckyInfo.numbers ? `
                <div class="detailed-lucky-view">
                    <h4>🍀 ข้อมูลโชคดี</h4>
                    <div class="lucky-details">
                        ${luckyInfo.color ? `<span>🎨 สี: ${luckyInfo.color}</span>` : ''}
                        ${luckyInfo.numbers ? `<span>🔢 เลข: ${luckyInfo.numbers}</span>` : ''}
                        ${luckyInfo.time ? `<span>⏰ เวลา: ${luckyInfo.time}</span>` : ''}
                    </div>
                </div>
            ` : ''}
            
            ${entry.notes ? `
                <div class="detailed-notes">
                    <h4>📝 บันทึกส่วนตัว</h4>
                    <p>${entry.notes}</p>
                </div>
            ` : ''}
        </div>
    `;
}

function showJournalDetailsModal(content, entry) {
    const modal = document.createElement('div');
    modal.className = 'journal-details-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeJournalDetailsModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${entry.type === 'three-cards' ? '🔮 รายละเอียดไพ่ 3 ใบ' : '🌟 รายละเอียดไพ่ประจำวัน'}</h3>
                <button class="close-btn" onclick="closeJournalDetailsModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeJournalDetailsModal() {
    const modal = document.querySelector('.journal-details-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Load Three-Cards History separately
function loadThreeCardsHistory() {
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    const container = document.getElementById('threeCardsHistoryContainer');
    
    if (!container) {
        console.warn('Three Cards History container not found');
        return;
    }
    
    container.innerHTML = '';
    
    if (threeCardsHistory.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">ยังไม่มีประวัติการดูไพ่ 3 ใบ</p>';
        return;
    }
    
    threeCardsHistory.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.className = 'three-cards-history-entry fade-in';
        
        const date = new Date(entry.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        entryElement.innerHTML = createThreeCardsHistoryEntry(entry, date);
        container.appendChild(entryElement);
    });
}

// Create enhanced three-cards history entry
function createThreeCardsHistoryEntry(entry, date) {
    const cards = entry.cards || {};
    const yamInfo = entry.yamInfo || {};
    const tableData = entry.tableData || {};
    const yamInfluences = entry.yamInfluences || [];
    const detailedAnalysis = entry.detailedAnalysis || {};
    const numericalAnalysis = entry.numericalAnalysis || {};
    
    let cardsHTML = '';
    if (cards.past && cards.present && cards.future) {
        cardsHTML = `
            <div class="three-cards-display-enhanced">
                <div class="card-mini-enhanced">
                    <img src="${cards.past.file}" alt="${cards.past.name}">
                    <div class="card-info">
                        <span class="position">อดีต</span>
                        <span class="card-name">${cards.past.name}</span>
                        ${yamInfluences[0] ? `<span class="yam-info">⭐${yamInfluences[0].yamSevy} 🌟${yamInfluences[0].yamTaek}</span>` : ''}
                    </div>
                </div>
                <div class="card-mini-enhanced">
                    <img src="${cards.present.file}" alt="${cards.present.name}">
                    <div class="card-info">
                        <span class="position">ปัจจุบัน</span>
                        <span class="card-name">${cards.present.name}</span>
                        ${yamInfluences[1] ? `<span class="yam-info">⭐${yamInfluences[1].yamSevy} 🌟${yamInfluences[1].yamTaek}</span>` : ''}
                    </div>
                </div>
                <div class="card-mini-enhanced">
                    <img src="${cards.future.file}" alt="${cards.future.name}">
                    <div class="card-info">
                        <span class="position">อนาคต</span>
                        <span class="card-name">${cards.future.name}</span>
                        ${yamInfluences[2] ? `<span class="yam-info">⭐${yamInfluences[2].yamSevy} 🌟${yamInfluences[2].yamTaek}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    let compatibilityHTML = '';
    if (numericalAnalysis.overallCompatibility) {
        const compatibilityColor = {
            'excellent': '#27ae60',
            'good': '#3498db', 
            'moderate': '#f39c12',
            'challenging': '#e74c3c'
        };
        
        const compatibilityText = {
            'excellent': 'ดีเยี่ยม',
            'good': 'ดี',
            'moderate': 'ปานกลาง', 
            'challenging': 'ท้าทาย'
        };
        
        compatibilityHTML = `
            <div class="compatibility-indicator">
                <span class="compatibility-label">ความเข้ากัน:</span>
                <span class="compatibility-value" style="color: ${compatibilityColor[numericalAnalysis.overallCompatibility]}">
                    ${compatibilityText[numericalAnalysis.overallCompatibility]}
                </span>
            </div>
        `;
    }
    
    let strengthAnalysisHTML = '';
    if (numericalAnalysis.strengthAnalysis && numericalAnalysis.strengthAnalysis.length > 0) {
        strengthAnalysisHTML = `
            <div class="strength-analysis">
                <span class="analysis-label">พลังดาว:</span>
                <div class="strength-bars">
                    ${numericalAnalysis.strengthAnalysis.map(analysis => `
                        <div class="strength-item">
                            <span class="position-mini">${analysis.position}</span>
                            <div class="strength-bar">
                                <div class="strength-fill" style="width: ${(analysis.strength / 5) * 100}%"></div>
                            </div>
                            <span class="strength-value">${analysis.strength}/5</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    let tableHTML = '';
    if (tableData.rows && tableData.columnSums) {
        tableHTML = `
            <div class="table-summary-enhanced">
                <span class="table-label">📊 ตารางตัวเลข:</span>
                <div class="column-sums-enhanced">
                    ${tableData.columnSums.map((sum, index) => 
                        `<span class="sum-item ${tableData.highlightedNumbers && tableData.highlightedNumbers.includes(sum) ? 'yam-match' : ''}" 
                              title="${tableData.positionNames ? tableData.positionNames[0][index] || '' : ''}">${sum}</span>`
                    ).join('')}
                </div>
                ${tableData.highlightedNumbers && tableData.highlightedNumbers.length > 0 ? 
                    `<small class="yam-matches">🌟 ตรงกับยาม: ${tableData.highlightedNumbers.join(', ')} (${numericalAnalysis.yamMatches || 0} ตำแหน่ง)</small>` : ''
                }
            </div>
        `;
    }
    
    let timeWindowHTML = '';
    if (detailedAnalysis.timeWindow) {
        timeWindowHTML = `
            <div class="time-window-info">
                <span class="time-label">⏰ ช่วงเวลาเหมาะสม:</span>
                <span class="time-value">${detailedAnalysis.timeWindow.description}</span>
            </div>
        `;
    }
    
    return `
        <div class="history-entry-header">
            <span class="entry-date">${date}</span>
            <span class="entry-type">🔮 ไพ่ 3 ใบ</span>
            ${compatibilityHTML}
        </div>
        
        ${cardsHTML}
        
        <div class="yam-timing-info">
            <span class="yam-current">ยาม: ${yamInfo.yamNumber || 'N/A'}</span>
            <span class="timing-info">${yamInfo.dayName || ''} ${yamInfo.time || ''}</span>
        </div>
        
        ${strengthAnalysisHTML}
        ${tableHTML}
        ${timeWindowHTML}
        
        <div class="entry-summary">
            <p class="summary-text">${entry.summary || 'ไม่มีสรุป'}</p>
        </div>
        
        <div class="entry-actions">
            <button class="btn mini view-details-btn" onclick="viewThreeCardsHistoryDetails('${entry.date}')">
                <i class="fas fa-eye"></i> ดูรายละเอียดครบถ้วน
            </button>
            <button class="btn mini export-btn" onclick="exportThreeCardsReading('${entry.date}')">
                <i class="fas fa-download"></i> ส่งออก
            </button>
        </div>
    `;
}

// View detailed three-cards history
function viewThreeCardsHistoryDetails(entryDate) {
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    const entry = threeCardsHistory.find(e => e.date === entryDate);
    if (!entry) return;
    
    const detailsHTML = createDetailedThreeCardsHistoryView(entry);
    showThreeCardsHistoryModal(detailsHTML, entry);
}

// Create comprehensive detailed view for three-cards history
function createDetailedThreeCardsHistoryView(entry) {
    const cards = entry.cards || {};
    const yamInfo = entry.yamInfo || {};
    const tableData = entry.tableData || {};
    const yamInfluences = entry.yamInfluences || [];
    const detailedAnalysis = entry.detailedAnalysis || {};
    const numericalAnalysis = entry.numericalAnalysis || {};
    
    // Enhanced cards display
    let cardsHTML = '';
    if (cards.past && cards.present && cards.future) {
        cardsHTML = `
            <div class="detailed-cards-comprehensive">
                <h4>🔮 ไพ่ทั้ง 3 ใบ พร้อมข้อมูลยามครบถ้วน</h4>
                <div class="cards-row-comprehensive">
                    ${[cards.past, cards.present, cards.future].map((card, index) => {
                        const influence = yamInfluences[index];
                        const position = ['อดีต', 'ปัจจุบัน', 'อนาคต'][index];
                        return `
                            <div class="card-detail-comprehensive">
                                <img src="${card.file}" alt="${card.name}">
                                <h5>${position}</h5>
                                <p class="card-name">${card.name}</p>
                                <small class="card-meaning">${card.meaning}</small>
                                
                                ${influence ? `
                                    <div class="star-influence-detail">
                                        <div class="stars-info">
                                            <span class="sevy-star">⭐ ดาวเสวย: ${influence.yamSevy} (${influence.sevyStarName})</span>
                                            <span class="taek-star">🌟 ดาวแทรก: ${influence.yamTaek} (${influence.taekStarName})</span>
                                        </div>
                                        <div class="influence-result">
                                            <strong>ผลกระทบ:</strong> ${influence.basicInfluence}
                                        </div>
                                        <div class="strength-indicator">
                                            <span>ความแรง: </span>
                                            <div class="strength-dots">
                                                ${Array.from({length: 5}, (_, i) => 
                                                    `<span class="dot ${i < influence.strengthLevel ? 'active' : ''}"></span>`
                                                ).join('')}
                                            </div>
                                        </div>
                                        ${influence.recommendations && influence.recommendations.length > 0 ? `
                                            <div class="recommendations">
                                                <strong>คำแนะนำ:</strong>
                                                <ul>
                                                    ${influence.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                                                </ul>
                                            </div>
                                        ` : ''}
                                        ${influence.timeAnalysis ? `
                                            <div class="timing-analysis">
                                                <strong>การวิเคราะห์เวลา:</strong>
                                                <p class="timing-advice">${influence.timeAnalysis.advice}</p>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
    
    // Enhanced table with position names
    let enhancedTableHTML = '';
    if (tableData.rows && tableData.columnSums && tableData.positionNames) {
        enhancedTableHTML = `
            <div class="detailed-table-enhanced">
                <h4>📊 ตารางตัวเลขพร้อมชื่อตำแหน่ง</h4>
                <table class="enhanced-numerical-table">
                    <thead>
                        <tr>
                            <th>ตำแหน่ง</th>
                            ${Array.from({length: 7}, (_, i) => `<th>คอลัมน์ ${i + 1}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${tableData.rows.map((row, rowIndex) => `
                            <tr>
                                <td class="position-cell">${row.position} (${row.cardNumber})</td>
                                ${row.values.map((value, colIndex) => {
                                    const positionName = tableData.positionNames[rowIndex] ? tableData.positionNames[rowIndex][colIndex] : '';
                                    const isYamMatch = tableData.highlightedNumbers && tableData.highlightedNumbers.includes(value);
                                    return `
                                        <td class="${isYamMatch ? 'yam-match' : ''}" title="${positionName}">
                                            <div class="cell-content">
                                                <span class="cell-number">${value}</span>
                                                <span class="cell-position-name">${positionName}</span>
                                            </div>
                                        </td>
                                    `;
                                }).join('')}
                            </tr>
                        `).join('')}
                        <tr class="sum-row">
                            <td><strong>รวม</strong></td>
                            ${tableData.columnSums.map(sum => {
                                const isYamMatch = tableData.highlightedNumbers && tableData.highlightedNumbers.includes(sum);
                                return `<td class="${isYamMatch ? 'yam-match' : ''}"><strong>${sum}</strong></td>`;
                            }).join('')}
                        </tr>
                    </tbody>
                </table>
                ${tableData.highlightedNumbers && tableData.highlightedNumbers.length > 0 ? 
                    `<p class="yam-explanation">🌟 เลขที่เน้นสี = ตรงกับยาม${yamInfo.yamNumber} (${numericalAnalysis.yamMatches || 0} ตำแหน่ง)</p>` : ''
                }
            </div>
        `;
    }
    
    // Comprehensive analysis section
    let analysisHTML = '';
    if (detailedAnalysis.recommendations || detailedAnalysis.futureGuidance) {
        analysisHTML = `
            <div class="comprehensive-analysis">
                <h4>🔬 การวิเคราะห์เชิงลึก</h4>
                
                ${detailedAnalysis.recommendations ? `
                    <div class="recommendations-section">
                        <h5>💡 คำแนะนำจากการดูไพ่</h5>
                        <ul class="recommendations-list">
                            ${detailedAnalysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${detailedAnalysis.timeWindow ? `
                    <div class="time-window-section">
                        <h5>⏰ ช่วงเวลาที่เหมาะสม</h5>
                        <div class="time-window-details">
                            <p><strong>ระยะเวลา:</strong> ${detailedAnalysis.timeWindow.duration}</p>
                            <p><strong>คำอธิบาย:</strong> ${detailedAnalysis.timeWindow.description}</p>
                            <p><strong>คำแนะนำ:</strong> ${detailedAnalysis.timeWindow.advice}</p>
                        </div>
                    </div>
                ` : ''}
                
                ${detailedAnalysis.futureGuidance ? `
                    <div class="future-guidance-section">
                        <h5>🔮 แนวทางในอนาคต</h5>
                        <div class="future-timeline">
                            <div class="timeline-item">
                                <span class="timeline-period">ระยะใกล้ (1-3 เดือน)</span>
                                <p>${detailedAnalysis.futureGuidance.shortTerm}</p>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-period">ระยะกลาง (3-6 เดือน)</span>
                                <p>${detailedAnalysis.futureGuidance.mediumTerm}</p>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-period">ระยะยาว (6+ เดือน)</span>
                                <p>${detailedAnalysis.futureGuidance.longTerm}</p>
                            </div>
                            ${detailedAnalysis.futureGuidance.cautions && detailedAnalysis.futureGuidance.cautions.length > 0 ? `
                                <div class="timeline-item cautions">
                                    <span class="timeline-period">⚠️ ข้อควรระวัง</span>
                                    <ul>
                                        ${detailedAnalysis.futureGuidance.cautions.map(caution => `<li>${caution}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    return `
        ${cardsHTML}
        
        <div class="yam-timing-comprehensive">
            <h4>🌟 ข้อมูลยามและเวลา</h4>
            <div class="timing-grid">
                <div class="timing-item">
                    <span class="timing-label">ยามปัจจุบัน:</span>
                    <span class="timing-value">${yamInfo.yamNumber} (${getStarName(yamInfo.yamNumber)})</span>
                </div>
                <div class="timing-item">
                    <span class="timing-label">วันที่ดูไพ่:</span>
                    <span class="timing-value">${yamInfo.dayName}</span>
                </div>
                <div class="timing-item">
                    <span class="timing-label">ช่วงเวลา:</span>
                    <span class="timing-value">${yamInfo.time} (${yamInfo.periodName})</span>
                </div>
                <div class="timing-item">
                    <span class="timing-label">ความเข้ากัน:</span>
                    <span class="timing-value compatibility-${numericalAnalysis.overallCompatibility || 'unknown'}">
                        ${{'excellent': 'ดีเยี่ยม', 'good': 'ดี', 'moderate': 'ปานกลาง', 'challenging': 'ท้าทาย'}[numericalAnalysis.overallCompatibility] || 'ไม่ทราบ'}
                    </span>
                </div>
            </div>
        </div>
        
        ${enhancedTableHTML}
        ${analysisHTML}
        
        <div class="reading-summary-comprehensive">
            <h4>📝 สรุปการดูไพ่</h4>
            <div class="summary-content">
                <p>${entry.summary || 'ไม่มีสรุป'}</p>
            </div>
        </div>
    `;
}

// Show three-cards history modal
function showThreeCardsHistoryModal(content, entry) {
    const modal = document.createElement('div');
    modal.className = 'three-cards-history-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeThreeCardsHistoryModal()"></div>
        <div class="modal-content-large">
            <div class="modal-header">
                <h3>🔮 ประวัติการดูไพ่ 3 ใบ - รายละเอียดครบถ้วน</h3>
                <button class="close-btn" onclick="closeThreeCardsHistoryModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body-large">
                ${content}
            </div>
            <div class="modal-footer">
                <button class="btn secondary" onclick="exportThreeCardsReading('${entry.date}')">
                    <i class="fas fa-download"></i> ส่งออกข้อมูล
                </button>
                <button class="btn primary" onclick="closeThreeCardsHistoryModal()">
                    <i class="fas fa-check"></i> ปิด
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
}

// Close three-cards history modal
function closeThreeCardsHistoryModal() {
    const modal = document.querySelector('.three-cards-history-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Export three-cards reading
function exportThreeCardsReading(entryDate) {
    const threeCardsHistory = JSON.parse(localStorage.getItem('threeCardsHistory') || '[]');
    const entry = threeCardsHistory.find(e => e.date === entryDate);
    if (!entry) return;
    
    const exportData = {
        type: 'three-cards-reading',
        date: entry.date,
        data: entry
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `three-cards-reading-${new Date(entry.date).toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('ส่งออกข้อมูลเรียบร้อยแล้ว', 'success');
}

// Alias for compatibility
function loadJournalEntries() {
    loadJournal();
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
    if (!window.Chart) {
        console.warn('Chart.js not available - skipping charts');
        return;
    }
    // Card frequency chart
    createCardFrequencyChart();
    createMoodChart();
}

function createCardFrequencyChart() {
    if (!window.Chart) return;
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
    if (!window.Chart) return;
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
    if (!window.jspdf || !window.jspdf.jsPDF) {
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
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed (this is normal when running locally)'));
    }
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}); 