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

> **WARNING**: PLEASE CONFIRM THE CONTENT WITH THE COORDINATORS OR PEOPLE IN CHARGE, BEFORE SENDING ANY MAILS.

Check out the [WIKI](https://github.com/PragunNepal/Srijana/wiki/Sending-HTML-Mails) for more information.

---

## Syntax Guide

Refer to the [WIKI](https://github.com/PragunNepal/Srijana/wiki) for more information.

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
