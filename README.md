<div style='align-items: center; width: 100%; background-color: #e4ecf0; margin-bottom: 30px;'>
    <img src="assets/anvesha_header.png"></img>
    <!-- <img src="assets/anvesha_footer_wo.png"></img> -->
</div>

<div align='center'>
<h1>SRIJANA</h1>
<p>From CMIT, For Anvesha.</p>
<br><br>
</div>

**[Srijana](https://pragunnepal.github.io/Srijana)** is a lightweight, web-based email compiler designed to streamline the creation of clean, email-compliant HTML newsletters and mailers, based on [Quill from CMIT](https://cmit.iisertvm.ac.in/quill). Instead of wrestling with complex nested HTML tables and inline CSS bugs across different email clients, Srijana lets you write using a human-readable, block-based **Domain-Specific Language (DSL)** that compiles into email-safe HTML on the fly.

---

## Features

- **Custom Email DSL**: Write pre-designed HTML using human-readable text blocks instead of raw HTML.
- **Syntax Highlighting**: Powered by CodeMirror for real-time syntax highlighting of blocks, directives, and properties.
- **Instant Dual Preview**: Real-time visual rendering on one side.
- **Dark Mode Simulator**: Test how your email layout holds up against mobile iOS/Gmail Dark Mode color inversions with a toggle.
- **One-Click Actions**: Copy the rendered HTML layout, and/or copy the raw code string, or download the `.html` file directly.
- **Zero Dependencies**: Client-side compilation running directly in the browser.

---

## Working

Srijana parses input text blocks and compiles them into inline-styled, table-based HTML wrappers guaranteed to render reliably across desktop and mobile email clients (including Gmail and Outlook).

### General Syntax Rules

1. **Global Directives**: Declared at the top of the file (e.g., `.title: Event Name`).
2. **Block Structure**: Written as `blocktype { ... }` or `blocktype {}` for empty elements.
3. **Property Modifiers**: Attached directly beneath a block’s closing brace using `.property: value` syntax.
4. **Comments**: Any line starting with `//` outside a block is ignored.

---

## Sending the HTML Mails

Standard email compose windows will not allow you to type raw HTML directly, so use one of the methods below to send mails.

> **WARNING**: PLEASE CONFIRM THE CONTENT WITH THE COORDINATORS OR PEOPLE IN CHARGE, BEFORE SENDING ANY MAILS.

---

### Method 1: Direct Clipboard Copy-Paste (Simplest)

1. In Srijana, make sure your input script compiled properly in the **Visual Preview** tab.
2. Click the **Copy Icon** in the top action header (NOT the copy icon at the bottom of **Raw Html Code** tab) to copy the rendered HTML onto your clipboard.
3. Open a new email draft in **Gmail**, **Outlook 365**, or **Apple Mail**.
4. Click inside the message body and paste.

Voila!

---

### Method 2: Gmail Developer Tools (For Raw Code Injection)

> **Instructions might differ based on the browser and the Operating System.**

1. In Srijana, switch to the **Raw HTML Code** tab and click **Copy Icon** at the bottom right of the section.
2. Open a new email draft in **Gmail** and type a unique placeholder word like `XYZ123` in the message body.
3. Highlight `XYZ123`, right-click it, and select **Inspect**.
4. In the Chrome DevTools panel that pops up, right-click the highlighted code node containing `XYZ123` and select **Edit as HTML**.
5. Replace `XYZ123` by pasting your entire raw HTML code snippet from Srijana into that field.
6. Click anywhere outside the code window in DevTools to view your rendered email template directly inside the Gmail editor.

---

### Method 3: Browser Extensions & Native Clients

If you frequently send HTML mails, use a dedicated browser extension or email desktop to speed up the workflow.

* Install ANY GMail HTML-Editor Chrome extension. It adds a **HTML Editor** icon inside your Gmail compose bar, allowing you to paste your raw HTML code directly into a popup tab.
* **Mozilla Thunderbird:** Download the free Thunderbird Mail Client. When composing an email, select **Insert > HTML** from the top menu and paste your raw HTML output directly.


---

## Syntax Guide

### 1. Global Directives

Set the subject line or template header variable:

```text
.title: Anvesha - Science & Tech Fest 2026

```

### 2. Paragraph Block (`p`)

Generates an email-safe text block with optional custom typography properties:

```text
p {
  Greetings from Anvesha! We are thrilled to announce our flagship event.
}
.color: #333333
.font-size: 16px
.line-height: 1.5

```

> _Tip: Add `.pre: true` below a paragraph block to preserve exact line breaks and indentation._

### 3. Lists (`list`, `ul`, `ol`)

Supports unordered and ordered lists with full inline formatting:

```text
list {
  * **Date:** 31 October 2026
  * **Venue:** Indoor Stadium
  * **Entry:** Free for all students
}
.list-style: none
.margin: 20px 0

```

### 4. Buttons (`btn`, `button`)

Creates an inline, bulletproof clickable button:

```text
btn {
  Register Now
}
.url: https://sites.iisertvm.ac.in/stc
.bg-color: #0066cc
.color: #ffffff

```

### 5. Images (`img`) & Dividers (`div`)

Renders auto-centered, responsive graphic blocks and structural dividers:

```text
img {
  [https://raw.githubusercontent.com/PragunNepal/Srijana/main/assets/banner.png](https://raw.githubusercontent.com/PragunNepal/Srijana/main/assets/banner.png)
}
.width: 100%
.alt: Event Banner

div {}
.border-top: 1px dashed #cccccc
.margin: 25px 0

```

---

## Inline Formatting Reference

Inside text-bearing blocks (`p`, `list`, `ul`, `ol`), standard Markdown-style inline formatting is supported:

| Format                                           | Syntax             | Output                                                                 |
| ------------------------------------------------ | ------------------ | ---------------------------------------------------------------------- |
| **Bold**                                         | `**text**`         | **text**                                                               |
| _Italic_                                         | `*text*`           | _text_                                                                 |
| [Hyperlink](https://www.google.com/search?q=url) | `[Link Text](url)` | Automatically appends `https://` if missing and sets `target="_blank"` |

---

## Project Structure

```text
Srijana
.
├── LICENSE
├── README.md
├── assets
│   ├── anvesha_26_logo.svg
│   ├── anvesha_footer.png
│   ├── anvesha_footer_wo.png
│   ├── anvesha_header.png
│   ├── footer.psd
│   └── header.psd
├── css
│   ├── general.css
│   └── main.css
├── favicon.ico
├── favicon.png
├── icons
│   ├── copy.svg
│   ├── discord.png
│   ├── download.svg
│   ├── facebook.png
│   ├── gmail.png
│   ├── info.svg
│   ├── instagram.png
│   ├── light_mode.svg
│   ├── twitter.png
│   └── youtube.png
├── index.html
├── js
│   ├── mail-compiler.js
│   └── srijana-dsl-mode.js
└── template.html

```

---

## Quick Start

Open the site hosted here on [Github Pages](https://pragunnepal.github.io/Srijana), to use it live.

### For local hosting, follow the instructions below:

1. Clone the repository:

```bash
git clone https://github.com/PragunNepal/Srijana.git
```

2. CD into the projects folder

```bash
cd Srijana/
```

3. Open `index.html` in any modern web browser to use the tool.

---

Based on **[Quill](https://cmit.iisertvm.ac.in/quill)** developed by [AK](https://akwastaken.github.io).
