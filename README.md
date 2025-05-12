<a href="https://alfo0924.github.io/ParallaxScrolling/">ParallaxScrolling</a>
## 網站介紹

這個範例網頁主要用於**展示和教學純 CSS 實現的視差滾動效果**。它透過多個區段，結合不同的背景漸層和浮動元素，來呈現視差滾動帶來的視覺深度和動態感。

### 內容特點

1.  **多樣的視差背景**：網站包含多個使用 `background-attachment: fixed;` 屬性的區段，每個區段都展示了不同的 CSS 漸層背景（線性漸層、放射狀漸層），模擬了傳統圖片背景的視差效果。
2.  **層次感設計**：透過 CSS 偽元素 (`::before`) 在主要背景之上再疊加一層固定的半透明漸層或圖案，增加了背景的層次感和視覺豐富度。
3.  **浮動元素視差**：在特定區段中（如 `section3`），加入了使用 `position: sticky;` 的「浮動元素」。這些元素在頁面滾動到特定位置前會隨內容滾動，到達指定位置後則會「固定」在視窗的相對位置，產生與主背景不同的滾動速率，進一步增強視差效果。
4.  **對比區段**：網站穿插了「普通內容區塊」 (`normal-section`)，這些區塊沒有視差效果，用於和視差區段形成對比，更清晰地展示視差滾動的特色。
5.  **教育性內容**：每個區段內的文字內容直接點明了該區段所展示的視差效果特點或原理，具有教學和演示的目的。

### 優點

1.  **視覺吸引力**：視差滾動創造了引人入勝的深度感和動態效果，使網頁更生動有趣。
2.  **增強使用者參與**：動態的視覺回饋能吸引使用者持續滾動和探索頁面內容。
3.  **純 CSS 實現**：核心的背景視差效果完全由 CSS (`background-attachment: fixed;`) 實現，無需 JavaScript，有助於提升頁面載入速度和減少潛在的效能問題（相對於複雜的 JS 實現）。浮動元素的 `position: sticky` 也是 CSS 原生特性。
4.  **易於理解和修改**：程式碼結構清晰，方便開發者學習和修改背景樣式、顏色及浮動元素的行為。
5.  **現代感**：視差滾動是現代網頁設計中常用的技巧，能提升網站的專業感和設計感。

### 使用者族群範圍

由於這個範例網站主要是展示性質的：

1.  **網頁設計師與前端開發者**：可以學習如何使用純 CSS 實現視差效果，並將其應用到自己的專案中。
2.  **UI/UX 設計學生或愛好者**：可以了解視差滾動的原理和視覺效果，作為設計靈感的來源。
3.  **需要製作簡潔但具視覺效果的登陸頁面或作品集網站的個人或小型企業**：可以參考這種方式來增加頁面的吸引力，而無需複雜的圖片或 JavaScript 庫。

若將此技術應用於實際網站，則使用者族群會更廣泛，取決於網站本身的內容和服務。

## 程式碼邏輯及如何運用

### HTML 結構解釋

```html

    
    
        
            ...
            ...
        
    
    
    
    
        
            ...
            ...
        
    
    
    
    
        ...
    

    
    
        
            ...
            
            
            ...
        
    
    ...

```

*   **``**：每個 `` 代表一個全螢幕高度的區塊。
*   **`.parallax-section`**：套用此類別的區塊將具有視差背景效果。`section1`, `section2`, `section3` 是為了給予不同區段獨立的背景樣式。
*   **`.normal-section`**：套用此類別的區塊是標準的滾動內容，用於對比。
*   **`.content`**：放置在每個區段內，用於承載文字內容，並透過 CSS 將其居中顯示。
*   **`.floating-element`**：這些 `div` 元素在 `section3` 中，用於展示 `position: sticky` 效果，它們會相對於視窗在特定位置「固定」。

### CSS 邏輯解釋

1.  **基本重設與頁面佈局**：
    ```css
    * { margin: 0; padding: 0; box-sizing: border-box; }
    section { min-height: 100vh; display: flex; ... }
    ```
    全局重設邊距，並設定每個 `section` 至少佔滿一個視窗的高度，使用 flex 佈局使內容居中。

2.  **核心視差效果 (`background-attachment: fixed`)**：
    ```css
    .parallax-section {
        position: relative; /* 為了偽元素定位 */
        overflow: hidden;   /* 確保偽元素不超出範圍 */
        background-attachment: fixed; /* 關鍵！背景相對於視窗固定 */
        color: white; /* 預設文字顏色，配合深色背景 */
    }
    
    .section1 {
        background: linear-gradient(135deg, #3498db, #9b59b6);
        background-attachment: fixed; /* 重複確保，或繼承自 .parallax-section */
    }
    ```
    *   `background-attachment: fixed;` 是實現背景視差的關鍵。它使元素的背景圖片（或此處的漸層背景）固定在檢視區（viewport）中，不隨頁面其餘部分的滾動而移動。當使用者滾動時，前景內容會滑過固定的背景，產生深度感。
    *   每個 `.sectionX` 類別定義了不同的 `background`（通常是漸層）。

3.  **多層次背景 (偽元素 `::before`)**：
    ```css
    .section1::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: repeating-linear-gradient(...);
        background-attachment: fixed; /* 這一層也固定 */
        z-index: 1; /* 在主背景之上，內容之下 */
    }
    
    .content {
        position: relative;
        z-index: 2; /* 確保內容在偽元素之上 */
    }
    ```
    *   使用 `::before` 偽元素為視差區段添加額外的背景層。
    *   `position: absolute;` 相對於其父元素 `.parallax-section` 定位。
    *   `background-attachment: fixed;` 同樣使這個偽元素的背景固定。
    *   `z-index` 用於控制堆疊順序：主背景 -> 偽元素背景 -> `.content` 內容。

4.  **浮動元素視差 (`position: sticky`)**：
    ```css
    .floating-element {
        position: absolute; /* 初始定位，可以被 sticky 覆蓋 */
        /* ... 其他樣式 ... */
        z-index: 1; /* 確保在內容文字之下，但在背景之上 */
    }
    
    .element1 {
        /* ... 大小、顏色 ... */
        position: sticky; /* 關鍵！*/
        top: 100px;       /* 當元素頂部距離視窗頂部 100px 時固定 */
    }
    ```
    *   `.floating-element` 使用 `position: sticky;`。這使得元素在滾動到其容器（最近的滾動祖先，通常是 `body` 或可滾動的 `div`）的特定偏移量（由 `top`, `bottom`, `left`, `right` 指定）之前，表現得像 `position: relative;`。一旦達到該偏移量，它就會「固定」在那個位置，直到其容器滾動出視窗。
    *   這裡的 `top: 100px;` 意味著當 `.element1` 的頂部滾動到距離視窗頂部 100px 時，它會停在那裡，而頁面的其他部分繼續滾動。這創造了另一種視差效果，因為這些元素以不同於頁面其餘部分和固定背景的速度移動。

### 如何運用

1.  **引入 CSS**：將提供的 CSS 程式碼保存為 `style.css` 文件，並在 HTML 的 `` 中透過 `` 引入。
2.  **建構 HTML 結構**：
    *   想要有視差背景的區塊，使用 `...`，其中 `sectionX` 可以是 `section1`, `section2`, `section3` 或您自訂的類別。
    *   在視差區塊內，放置 `...` 來承載您的主要內容（文字、圖片等）。
    *   如果需要沒有視差的普通區塊，使用 `...`。
3.  **自訂背景**：
    *   修改 `.section1`, `.section2`, `.section3` 等類別中的 `background` 屬性，可以更改為您喜歡的顏色、漸層。
    *   同樣，可以修改對應的 `::before` 偽元素的 `background` 來改變疊加層的樣式。
4.  **調整浮動元素**：
    *   如果您想使用類似 `.section3` 中的浮動元素效果：
        *   在 HTML 中加入 ``。
        *   在 CSS 中為 `your-custom-class` 定義 `position: sticky;` 以及 `top`（或其他偏移）值，還有大小、背景顏色等。
        *   調整 `top` 值可以改變元素「固定」的位置。
5.  **內容填充**：將您的實際文本、圖片等放入各個 `.content` div 中。
6.  **注意事項**：
    *   **對比度**：確保前景內容（如文字）與視差背景之間有足夠的對比度，以便閱讀。
    *   **效能**：雖然純 CSS 的 `background-attachment: fixed` 通常比 JavaScript 實現的視差效能好，但在非常複雜的背景或移動設備上，仍可能對滾動效能產生一些影響。測試是必要的。`position: sticky` 的效能普遍較好。
    *   **不要過度使用**：視差效果應謹慎使用，以增強體驗而非分散使用者注意力或導致混淆。
    *   **響應式設計**：提供的 CSS 包含了一個簡單的 `@media` 查詢，用於在小螢幕上調整字體大小和浮動元素縮放。您可能需要根據您的內容進一步完善響應式設計。

透過組合這些 HTML 結構和 CSS 樣式，您可以創建出具有吸引力的視差滾動網頁。

---
