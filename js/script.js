document.addEventListener('DOMContentLoaded', () => {
    const langSwitchButton = document.querySelector('.lang-switch');
    let currentLang = localStorage.getItem('lang') || 'en'; // 預設英文

    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
            lang_switch: '中', // 顯示「中」表示點擊後切換到中文

            // About Page specific translations
            about_hero_title: 'About AIPEX',
            about_hero_tagline: 'Aurora Innovation Pioneer Exploration',
            our_story_title: 'Our Story',
            our_story_p1: 'AIPEX is a pioneering AI-driven innovation and design consultancy. We harness AI tools to accelerate development and craft diverse, user-aligned product and service solutions, ensuring optimal efficiency and user satisfaction.',
            our_story_p2: 'We are dedicated to pioneering new frontiers in technology and design, with innovation and continuous improvement at our core. Our team of designers, engineers, and visionaries seamlessly collaborates, leveraging the latest technologies and sustainable methodologies to create products that are both aesthetically pleasing and functionally superior, all while minimizing our ecological footprint.',
            our_story_p3: 'Join us on a journey of discovery and innovation. AIPEX is more than a company; it\'s a commitment to shaping a future where groundbreaking design and environmental stewardship go hand in hand. Explore the possibilities with us as we pioneer the next generation of innovative, sustainable, and inspiring products for a healthier planet.',
            our_values_title: 'Our Values',
            value_innovation_title: 'Innovation',
            value_innovation_desc: 'We embrace curiosity and continuous learning, fostering a culture where new ideas flourish and drive us beyond conventional boundaries.',
            value_sustainability_title: 'Sustainability',
            value_sustainability_desc: 'We are committed to eco-conscious practices, creating solutions that benefit both our clients and the planet for a greener future.',
            value_excellence_title: 'Excellence',
            value_excellence_desc: 'We pursue exceptional quality in every project, committed to delivering superior results that exceed expectations.',
            value_collaboration_title: 'Collaboration',
            value_collaboration_desc: 'We believe in the power of teamwork, fostering strong partnerships with clients and within our team to achieve shared success.',
            value_integrity_title: 'Integrity',
            value_integrity_desc: 'We uphold the highest ethical standards, ensuring transparency, honesty, and trust in all our interactions.',

            // Services Page specific translations
            services_hero_title: 'Our Services',
            services_hero_subtitle: 'Empowering Your Vision with Cutting-Edge AI and Design Solutions.',
            our_expertise_title: 'Our Expertise',
            service_title_1: 'AI Product Design & Development',
            service_desc_1: 'Utilizing AI to innovate and optimize product conceptualization, design, and prototyping, ensuring market relevance and user engagement.',
            service_title_2: 'Market Research & Trend Analysis',
            service_desc_2: 'Leveraging AI-driven insights to identify market trends and consumer behaviors, guiding strategic product development and positioning.',
            service_title_3: 'UX/UI Design & Optimization',
            service_desc_3: 'Crafting intuitive and engaging user experiences with AI-enhanced design principles, ensuring seamless interaction and accessibility.',
            service_title_6: 'AI Education & Application Training', // Changed service_title_6
            service_desc_6: 'Providing comprehensive training and workshops on utilizing AI tools to enhance daily life, accelerate work processes, and meet various personal and professional needs.', // Changed service_desc_6
            service_title_4: 'Brand & Identity Development',
            service_desc_4: 'Building a comprehensive brand identity and strategy that enhances market presence, fosters recognition, and resonates with target audiences.',
            service_title_5: 'Sustainable Design Consulting',
            service_desc_5: 'Offering specialized consulting to integrate environmental and sustainability principles into product design and development, ensuring eco-conscious and responsible innovation.',

            // Contact Page specific translations
            contact_hero_title: 'Get in Touch',
            contact_hero_subtitle: 'We\'d love to hear from you. Fill out the form below or reach out directly.',
            contact_form_title: 'Send Us a Message',
            contact_form_name_label: 'Name:',
            contact_form_name_placeholder: 'Your Name',
            contact_form_email_label: 'Email:',
            contact_form_email_placeholder: 'your@example.com',
            contact_form_message_label: 'Message:',
            contact_form_message_placeholder: 'Your message here...',
            contact_form_submit_button: 'Send Message',
            contact_info_title: 'Our Contact Information',
            contact_info_email: 'Email: susan.wang@aipextec.com',
            contact_info_phone: 'Phone: +886-2-27535556',
            contact_info_address: 'Address: 5F.-2, No.123, Sec. 4, Bade Rd., Songshan Dist., Taipei City 105, Taiwan (R.O.C.)',

            // Index Page specific translations
            home_hero_title: 'Aurora Innovation Pioneer Exploration',
            home_hero_subtitle: 'AI-driven product design at the cutting-edge: Pioneering innovation and sustainability to reshape industries and drive the future',
            home_hero_cta_button: 'Explore Our Solutions',
            home_features_title: 'AI-Driven Design: Sculpting the Future of Innovation.',
            home_feature_1_title: 'AI-Driven Design',
            home_feature_1_desc: 'Leveraging advanced algorithms and machine learning to **deeply optimize product design processes**, significantly shortening development cycles and elevating innovation.',
            home_feature_2_title: 'Intelligent Data Analysis',
            home_feature_2_desc: '**Integrating big data with deep learning models** to provide precise, real-time insights for your decisions, transforming data into business intelligence.',
            home_feature_3_title: 'Sustainable Solutions',
            home_feature_3_desc: 'Perfectly **blending AI technology with green tech** to create high-performance, low-energy consumption innovative products, leading industries towards a sustainable future.',
            home_cta_title: 'Ready to Pioneer the Future with AIPEX?',
            home_cta_desc: 'Let our artificial intelligence technology inject new vitality into your business and jointly build the next innovation milestone.',
            home_cta_button: 'Contact Us Now',

            footer_copyright: '&copy; 2025 AIPEX. All Rights Reserved.',
            footer_contact_email: 'Contact: susan.wang@aipextec.com'
        },
        zh: {
            home: '首頁',
            about: '關於我們',
            services: '服務項目',
            contact: '聯絡我們',
            lang_switch: 'EN', // 顯示「EN」表示點擊後切換到英文

            // About Page specific translations
            about_hero_title: '關於 虎珀探索科技',
            about_hero_tagline: '虎珀探索科技',
            our_story_title: '我們的故事',
            our_story_p1: '虎珀探索科技是一家專注於人工智慧驅動的創新、產品設計及顧問服務的公司。我們運用人工智慧工具加速開發並打造多元化、符合使用者需求的產品與服務解決方案，確保最佳效率和使用者滿意度。',
            our_story_p2: '我們致力於開拓技術與設計的新領域，創新和持續改進是我們的核心。我們的設計師、工程師和遠見者團隊無縫協作，利用最新技術和永續方法創造出既美觀又功能卓越的產品，同時最大限度地減少我們的生態足跡。',
            our_story_p3: '與我們一起踏上探索與創新之旅。虎珀探索科技不僅僅是一家公司；它更是一項承諾，致力於塑造一個開創性設計與環境管理並行的未來。與我們一起探索可能性，開創下一代創新、永續且鼓舞人心的產品，共創一個更健康的地球。',
            our_values_title: '我們的價值',
            value_innovation_title: '創新',
            value_innovation_desc: '我們擁抱好奇心和持續學習，培養一種新思想蓬勃發展並驅使我們超越傳統界限的文化。',
            value_sustainability_title: '永續性',
            value_sustainability_desc: '我們致力於環保實踐，創造對客戶和地球都有益的解決方案，共創綠色未來。',
            value_excellence_title: '卓越',
            value_excellence_desc: '我們在每個專案中追求卓越的品質，致力於提供超越期望的優質成果。',
            value_collaboration_title: '協作',
            value_collaboration_desc: '我們相信團隊合作的力量，與客戶和團隊內部建立牢固的夥伴關係，以實現共同的成功。',
            value_integrity_title: '誠信',
            value_integrity_desc: '我們秉持最高的道德標準，確保所有互動的透明度、誠實和信任。',

            // Services Page specific translations
            services_hero_title: '我們的服務',
            services_hero_subtitle: '利用尖端AI與設計解決方案，賦能您的願景。',
            our_expertise_title: '我們的專業知識',
            service_title_1: 'AI產品設計與開發',
            service_desc_1: '利用AI創新與優化產品概念化、設計與原型製作，確保市場相關性與使用者參與度。',
            service_title_2: '市場研究與趨勢分析',
            service_desc_2: '運用AI驅動的洞察力識別市場趨勢與消費者行為，指導策略性產品開發與定位。',
            service_title_3: 'UX/UI設計與優化',
            service_desc_3: '運用AI強化設計原則，打造直觀且引人入勝的使用者體驗，確保無縫互動與可訪問性。',
            service_title_6: 'AI教育與應用培訓',
            service_desc_6: '提供全面的培訓和工作坊，教授如何利用AI工具提升日常生活、加速工作流程，並滿足各種個人與專業需求。',
            service_title_4: '品牌與形象發展',
            service_desc_4: '建立全面的品牌識別與策略，提升市場能見度，培養品牌認知，並與目標受眾產生共鳴。',
            service_title_5: '永續性設計顧問',
            service_desc_5: '提供專業顧問服務，將環境與永續原則整合到產品設計與開發中，確保具備環保意識與負責任的創新。',

            // Contact Page specific translations
            contact_hero_title: '聯絡我們',
            contact_hero_subtitle: '我們期待您的來信。請填寫下方表格或直接聯繫我們。',
            contact_form_title: '傳送訊息給我們',
            contact_form_name_label: '姓名：',
            contact_form_name_placeholder: '您的姓名',
            contact_form_email_label: '電子郵件：',
            contact_form_email_placeholder: 'your@example.com',
            contact_form_message_label: '訊息：',
            contact_form_message_placeholder: '您的訊息...',
            contact_form_submit_button: '發送訊息',
            contact_info_title: '我們的聯絡資訊',
            contact_info_email: '電子郵件: susan.wang@aipextec.com',
            contact_info_phone: '電話: +886-2-27535556',
            contact_info_address: '地址: 105台北市松山區八德路4段123號5F-2',

            // Index Page specific translations
            home_hero_title: '虎珀探索科技',
            home_hero_subtitle: 'AI驅動的尖端產品設計：開創創新與永續，重塑產業並引領未來',
            home_hero_cta_button: '探索我們的解決方案',
            home_features_title: 'AI驅動設計：塑造創新的未來',
            home_feature_1_title: 'AI驅動設計',
            home_feature_1_desc: '運用先進演算法與機器學習，深度優化產品設計流程，顯著縮短開發週期並提升創新層次。',
            home_feature_2_title: '智能數據分析',
            home_feature_2_desc: '整合大數據與深度學習模型，為您的決策提供精準的即時洞察，將數據轉化為商業智慧。',
            home_feature_3_title: '永續解決方案',
            home_feature_3_desc: '將AI技術與綠色科技完美融合，打造高效能、低能耗的創新產品，引領產業邁向永續未來。',
            home_cta_title: '準備好與 AIPEX 共同開創未來了嗎？',
            home_cta_desc: '讓我們的AI技術為您的事業注入新活力，共同築建下一個創新里程碑。',
            home_cta_button: '立即聯繫我們',

            footer_copyright: '&copy; 2025 虎珀探索科技股份有限公司. 版權所有。',
        }
    };

    function updateContent() {
        // 更新所有 data-lang 的文字內容
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[currentLang] && translations[currentLang][key]) { // 檢查是否存在鍵值
                element.innerHTML = translations[currentLang][key];
            } else {
                // 如果當前語言沒有對應的翻譯，可以使用預設語言（如英文）
                // 或直接不更新，保持原始內容
                if (translations['en'] && translations['en'][key]) {
                    element.innerHTML = translations['en'][key];
                }
            }
        });
        
        // 更新 lang-switch button text
        langSwitchButton.textContent = translations[currentLang]['lang_switch'];
        // 更新 HTML lang 屬性
        document.documentElement.lang = currentLang;
    }

    // 當頁面載入時執行一次，以確保初始語言設定正確
    updateContent();

    langSwitchButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('lang', currentLang);
        updateContent(); // 切換語言後，更新所有內容
    });
});
