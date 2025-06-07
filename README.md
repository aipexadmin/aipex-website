# AIPEX 官方網站 - AI 科技新創風格

這是 AIPEX 公司網站的主頁面，旨在展現現代、科技感和創新的人工智慧新創公司形象。

## 專案結構

/aipex-website/
├── index.html          # 網站主頁面 HTML
├── styles/
│   └── styles.css      # 網站主要樣式表，包含科技感配色、字體和排版
├── public/
│   └── images/
│       └── Pepidea_CI-3-04.png  # AIPEX 公司 Logo 檔案 (請替換為你的實際 Logo)
└── README.md           # 本專案說明文件


## 功能與特色

* **現代科技感設計：** 採用深色背景、科技藍色調和簡潔的無襯線字體，營造出高端的 AI 科技氛圍。
* **清晰的內容區塊：** 劃分了 Hero 區塊、特色功能展示和行動呼籲區塊，方便訪客快速了解公司核心價值。
* **響應式設計：** 針對不同螢幕尺寸進行優化，確保在桌機、平板和手機上都能良好呈現。
* **友善的導航：** 簡潔的導航列提供 Home、About、Services 和 Contact 頁面的快速連結。
* **行動呼籲 (CTA)：** 明顯的按鈕引導訪客探索解決方案或聯絡我們。

## 如何使用

1.  **克隆或下載本儲存庫：**
    ```bash
    git clone [https://github.com/你的用戶名/aipex-website.git](https://github.com/你的用戶名/aipex-website.git)
    cd aipex-website
    ```
    (如果你還沒有 GitHub 儲存庫，可以直接下載這個結構並開始上傳。)

2.  **替換 Logo 圖片：**
    請將你的公司 Logo 檔案放置於 `public/images/` 目錄中，並確保 `index.html` 中 `<img src="public/images/Pepidea_CI-3-04.png" ...>` 的 `src` 屬性指向正確的檔名。

3.  **瀏覽網站：**
    直接在瀏覽器中打開 `index.html` 檔案即可預覽網站效果。

4.  **部署到 GitHub Pages：**
    * 將此專案上傳到你的 GitHub 儲存庫。
    * 進入儲存庫的 **Settings** -> **Pages**。
    * 選擇 `main` 分支並選擇 `/ (root)` 目錄作為部署來源。
    * 點擊 **Save**，GitHub Pages 將會自動部署你的網站，並提供一個公開連結。

## 待優化與擴充 (未來計畫)

* **背景動態效果：** 引入 JavaScript 粒子動畫或 WebGL 效果，使 Hero 區塊更具動態感。
* **滾動動畫：** 使用 AOS (Animate On Scroll) 等函式庫，讓內容在滾動進入視圖時有淡入、滑動等動畫效果。
* **其他頁面：** 完善 `about.html`, `services.html`, `contact.html` 的內容和樣式。
* **更多視覺元素：** 加入與 AI 相關的圖標、圖表或示意圖。
* **表單驗證：** 在 `contact.html` 頁面中加入聯絡表單和前端驗證。
