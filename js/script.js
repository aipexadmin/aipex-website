document.addEventListener('DOMContentLoaded', () => {
    const langSwitchButton = document.querySelector('.lang-switch');
    let currentLang = localStorage.getItem('lang') || 'en'; // 從 localStorage 獲取語言，或預設英文

    const translations = {
        en: {
            // Header/Navigation
            home: 'Home',
            about: 'About',
            services: 'Services',
            contact: 'Contact',
            lang_switch: '中文', // 顯示「中文」表示點擊後切換到中文
            
            // Index Page
            index_hero_title: 'Pioneering the Future of Design with AI',
            index_hero_subtitle: 'Innovate. Design. Sustain.',
            index_intro_title: 'Welcome to AIPEX',
            index_intro_p1: 'We are at the forefront of combining artificial intelligence with innovative design principles to create cutting-edge products and services.',
            index_intro_p2: 'Our unique approach ensures efficiency, creativity, and sustainability in every project we undertake. Discover how AI can transform your vision into reality.',
            index_cta_title: 'Ready to Innovate?',
            index_cta_p: 'Contact us today to explore how AIPEX can help your next project.',
            index_cta_button: 'Get Started',

            // About Page
            about_hero_title: 'About AIPEX',
            about_hero_tagline: 'Aurora Innovation Pioneer Exploration',
            our_story_title: 'Our Story',
            our_story_p1: 'AIPEX is a pioneering AI-driven innovation and design consultancy. We harness AI tools to accelerate development and craft diverse, user-aligned product and service solutions, ensuring optimal efficiency and user satisfaction.',
            our_story_p2: 'We are dedicated to pioneering new frontiers in technology and design, with innovation and continuous improvement at our core. Our team of designers, engineers, and visionaries seamlessly collaborates, leveraging the latest technologies and sustainable methodologies to create products that are both aesthetically pleasing and functionally superior, all while minimizing our ecological footprint.',
            our_story_p3: 'Join us on a journey of discovery and innovation. AIPEX is more than a company; it\'s a commitment to shaping a future where groundbreaking design and environmental stewardship go hand in hand. Explore the possibilities with us as we pioneer the next generation of innovative, sustainable, and inspiring products for a healthier planet.',
            
            // Services Page
            services_hero_title: 'Our Services',
            services_hero_tagline: 'Innovation Meets Expertise',
            service_offerings_title: 'What We Offer',

            service_title_1: '<img src="images/icons/ai-innovation.png" alt="AI Icon">AI-Driven Innovation & Strategic Insight',
            service_desc_1: 'Leveraging advanced AI to generate groundbreaking product and service designs, informed by comprehensive market research and trend analysis, pushing creative and strategic boundaries.',
            service_title_2: '<img src="images/icons/ux-ui.png" alt="UX/UI Icon">User Experience & Interface Design (UX/UI)',
            service_desc_2: 'Crafting intuitive and engaging digital and physical interfaces, ensuring seamless interactions and exceptional user satisfaction.',
            service_title_3: '<img src="images/icons/industrial-design.png" alt="Industrial Design Icon">Industrial Design & Product Realization',
            service_3_desc: 'Transforming concepts into tangible products through expert industrial design, 3D modeling, rapid prototyping, optimized material selection, and robust production process consultation.',
            service_title_6: '<img src="images/icons/ai-education.png" alt="AI Education Icon">AI Education & Application Training', // Changed order
            service_desc_6: 'Providing comprehensive training and workshops on utilizing AI tools to enhance daily life, accelerate work processes, and meet various personal and professional needs.', // Changed order
            service_title_4: '<img src="images/icons/brand-building.png" alt="Brand Building Icon">Brand & Identity Development', // Changed order
            service_desc_4: 'Building a comprehensive brand identity and strategy that enhances market presence, fosters recognition, and resonates with target audiences.', // Changed order
            service_title_5: '<img src="images/icons/sustainable.png" alt="Sustainable Icon">Sustainable Design Consulting',
            service_desc_5: 'Offering specialized consulting to integrate environmental and sustainability principles into product design and development, ensuring eco-conscious and responsible innovation.',
            
            // Contact Page
            contact_hero_title: 'Get in Touch',
            contact_hero_tagline: 'We\'d love to hear from you!',
            contact_form_title: 'Send us a message',
            contact_form_name_label: 'Name:',
            contact_form_name_placeholder: 'Your Name',
            contact_form_email_label: 'Email:',
            contact_form_email_placeholder: 'your@example.com',
            contact_form_message_label: 'Message:',
            contact_form_message_placeholder: 'Your message here...',
            contact_form_submit_button: 'Send Message',
            contact_info_title: 'Our Contact Information',
            contact_info_email: 'Email: susan.wang@aipextec.com',
            contact_info_phone: 'Phone: +886-987-654321',
            contact_info_address: 'Address: 123 Innovation Blvd, Taipei City, Taiwan',

            // Footer
            footer_copyright: '&copy; 2025 AIPEX. All Rights Reserved.',
            footer_contact_email: 'Contact: susan.wang@aipextec.com'
        },
        zh: {
            // Header/Navigation
            home: '首頁',
            about: '關於我們',
            services: '服務',
            contact: '聯絡我們',
            lang_switch: 'EN', // 顯示「EN」表示點擊後切換到英文
            
            // Index Page
            index_hero_title: 'AI驅動設計，開創未來',
            index_hero_subtitle: '創新。設計。永續。',
            index_intro_title: '歡迎來到 AIPEX',
            index_intro_p1: '我們走在結合人工智慧與創新設計原則的最前沿，致力於創造領先業界的產品與服務。',
            index_intro_p2: '我們獨特的方法確保了每個專案的效率、創造性和永續性。探索 AI 如何將您的願景轉化為現實。',
            index_cta_title: '準備好創新了嗎？',
            index_cta_p: '立即聯絡我們，探索 AIPEX 如何協助您的下一個專案。',
            index_cta_button: '開始使用',

            // About Page
            about_hero_title: '關於 AIPEX',
            about_hero_tagline: '極光創新先鋒探索 (Aurora Innovation Pioneer Exploration)',
            our_story_title: '我們的故事',
            our_story_p1: 'AIPEX 是一家開拓性的 AI 驅動創新與設計顧問公司。我們運用 AI 工具加速開發，並打造多樣化、貼合用戶行為的產品與服務解決方案，確保最佳效率和用戶滿意度。',
            our_story_p2: '我們致力於開拓技術和設計的新領域，以創新和持續改進為核心。我們的設計師、工程師和富有遠見的團隊無縫協作，利用最新技術和永續方法來創造既美觀又功能卓越的產品，同時將我們的生態足跡降至最低。',
            our_story_p3: '加入我們的探索與創新之旅。AIPEX 不僅僅是一家公司；它更是一項塑造未來的承諾，讓開創性的設計與環境管理齊頭並進。與我們一起探索可能性，開創下一代創新、永續和鼓舞人心的產品，共創一個更健康的地球。',

            // Services Page
            services_hero_title: '我們的服務',
            services_hero_tagline: '創新與專業的結合',
            service_offerings_title: '我們提供的服務',

            service_title_1: '<img src="images/icons/ai-innovation.png" alt="AI 圖示">AI驅動創新與策略洞察',
            service_desc_1: '運用先進 AI 技術生成具突破性的產品與服務設計，並結合全面的市場研究與趨勢分析，開創創意與策略的新境界。',
            service_title_2: '<img src="images/icons/ux-ui.png" alt="UX/UI 圖示">用戶體驗與介面設計 (UX/UI)',
            service_desc_2: '打造直觀且引人入勝的數位與實體介面，確保無縫互動並帶來卓越的用戶滿意度。',
            service_title_3: '<img src="images/icons/industrial-design.png" alt="工業設計 圖示">工業設計與產品實現',
            service_3_desc: '透過專業的工業設計、3D建模、快速原型製作、優化材料選擇和堅實的生產流程諮詢，將概念轉化為具體的產品。',
            service_title_6: '<img src="images/icons/ai-education.png" alt="AI 教育 圖示">AI教育與應用培訓', // Changed order
            service_desc_6: '提供全面的培訓與工作坊，教授如何運用AI工具改善日常生活、加速工作流程，並滿足各種個人及專業需求。', // Changed order
            service_title_4: '<img src="images/icons/brand-building.png" alt="品牌建立 圖示">品牌與識別開發', // Changed order
            service_desc_4: '建立全面且一致的品牌形象與策略，以提升市場能見度、培養品牌認同感，並與目標受眾產生共鳴。', // Changed order
            service_title_5: '<img src="images/icons/sustainable.png" alt="永續 圖示">永續性設計顧問',
            service_desc_5: '提供專業顧問服務，將環境與永續原則整合到產品設計與開發中，確保具備環保意識與負責任的創新。',

            // Contact Page
            contact_hero_title: '聯絡我們',
            contact_hero_tagline: '我們很樂意聽取您的意見！',
            contact_form_title: '給我們留言',
            contact_form_name_label: '姓名:',
            contact_form_name_placeholder: '您的姓名',
            contact_form_email_label: '電子郵件:',
            contact_form_email_placeholder: '您的@example.com',
            contact_form_message_label: '訊息:',
            contact_form_message_placeholder: '您想說的...',
            contact_form_submit_button: '發送訊息',
            contact_info_title: '我們的聯絡資訊',
            contact_info_email: '電子郵件: susan.wang@aipextec.com',
            contact_info_phone: '電話: +886-987-654321',
            contact_info_address: '地址: 台北市創新大道123號',

            // Footer
            footer_copyright: '&copy; 2025 AIPEX. 版權所有。',
            footer_contact_email: '聯絡方式: susan.wang@aipextec.com'
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

    // 首次載入時，根據 localStorage 或預設值設定語言
    updateContent(); 

    langSwitchButton.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('lang', currentLang);
        updateContent(); // 切換語言後，更新當前頁面內容
        // 由於所有頁面都使用單一 HTML 檔案，不需要重新載入頁面或改變 URL
    });
});