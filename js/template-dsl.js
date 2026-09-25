const defaultDSL = `// Global Directives
.title: Complete Feature & Testing Overview

// Banner / Image Block / Poster Block
img {
  https://picsum.photos/600/250
}
.width: 100%
.align: center
.alt: Feature Showcase Header Banner

// Button Block (Call-to-Action)
btn {
  Click Here!
}
.url: google.com
.bg-color: #5E7B9A
.color: #ffffff
.padding: 15px
.align: center
.border-radius: 50px
.margin: 50px 0

// Introductory Paragraph with Inline Formatting
p {
  Welcome to the **Anvesha Email Builder DSL** “*Srijana*” test template! You can use this example to explore all supported block types, properties, and formatting options in one place.
}
.font-size: 16px
.line-height: 1.6
.align: justify
.margin: 15px 0

// Horizontal Divider (Dashed)
div {}
.border-top: 1px dashed #0066cc
.margin: 25px 0

// Unordered List Block (Custom List Style & Spacing)
list {
  * **Global Directives:** Title assignment via .title: directive
  * **Inline Formatting:** Supports **bold**, *italics*, and smart hyperlinking
  * **Auto-prefixed Link:** Visit [Srijana Github Repository](https://github.com/PragunNepal/Srijana) for details
  * **Explicit Web Link:** Check [Google](https://www.google.com) safely
  * **Email Link Scheme:** Contact [STC](mailto:stc@iisertvm.ac.in) for any queries
}
.padding: 10px 0 10px 20px
.margin: 10px 0
.font-size: 15px
.line-height: 1.5

// Secondary Divider (Solid Border)
div {}
.border-top: 2px solid #cccccc
.margin: 20px 0

// Ordered List Block (Step-by-Step Guide)
ol {
  1. **Configure Directives:** Set your global template variables at the top.
  2. **Build Content:** Combine \`p\`, \`list\`, \`ul\`, \`ol\`, and \`img\` blocks.
  3. **Apply Modifiers:** Add \`.property: value\` modifiers directly after closing braces \`}\`.
  4. **Easy Compile:** Render clean, email-compliant HTML automatically!
}
.padding: 5px 0 5px 20px
.margin: 15px 0
.font-size: 14px

// Paragraph Block with Preserved Formatting (.pre: true)
p {
  System Status Log:
    - Block Compiler : OK
    - Link Target    : target="_blank"
    - Output Mode    : Email HTML Wrapped
}
.pre: true
.color: #555555
.font-size: 13px
.line-height: 1.4
.margin: 20px 0
.padding: 12px
.align: left

// Unstyled Bullet List (list-style: none)
ul {
  * *Note:* This list demonstrates the \`.list-style: none\` modifier.
  * Bullet symbols and default left padding are removed.
}
.list-style: none
.padding: 0
.margin: 15px 0
.color: #7f8c8d
.font-size: 13px



//
// Closing Paragraph. KEEP THIS IN THE FINAL MAIL.
//

p {
  For more information or inquiries, feel free to reach out to the [Science & Technology Council of IISER Thiruvananthapuram](mailto:stc@iisertvm.ac.in).
}
.align: center
.color: #888888
.font-size: 12px
.margin: 30px 0 8px 0

p {
  Mail Credits : Khirabdhi Tanaya (B24), Prerana Sarma (B25) &  Pragun Nepal (B23)
}
.align: center
.color: #888888
.font-size: 12px
.margin: 8px 0 2px 0


p {
  HTML mail made using [Srijana](https://github.com/PragunNepal/Srijana).
}
.align: center
.color: #888888
.font-size: 12px
.margin: 9px 0 10px 0
`;