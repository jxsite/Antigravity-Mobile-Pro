<div align="center">

# 🚀 Antigravity Mobile Pro

**The Ultimate Mobile PWA Dashboard & Remote Control for Antigravity IDE**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-success.svg)]()

*Control your AI coding assistant from anywhere. Seamlessly review code, approve terminal commands, and chat with your agent straight from your phone—all packaged in a stunning iOS-style native interface.*

<img src="screenshots/screenshot.png" width="800" alt="Antigravity Mobile Pro Interface" style="border-radius:12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2);" />

</div>

---

## ✨ Why Antigravity Mobile Pro?

When running long, complex autonomous coding sessions, you shouldn't have to stay glued to your computer. **Antigravity Mobile Pro** bridges your local IDE directly to your phone via a secure Cloudflare tunnel. 

It is completely redesigned with a **premium Glassmorphism UI**, bottom navigation bars, and fluid micro-animations, making it look and feel like a native mobile app.

### 🌟 Key Features

- 📱 **100% Native Mobile Experience (PWA)** - Add it to your home screen. No browser address bars, just a sleek, fullscreen dashboard.
- ⚡ **Real-Time CDP Chat Sync** - Streams the live Antigravity chat without polling delays.
- 🤖 **Auto-Approve & Command Injection** - Click "Allow" or "Continue" from your phone when the agent requests permission for terminal commands.
- 💬 **Smart Telegram Bot Alerts** - Get pinged on Telegram the moment your agent finishes a task, hits an error, or needs your input.
- 🔒 **Zero-Config Remote Tunnel** - Instantly generates a secure `trycloudflare.com` URL with a scan-to-connect QR code.
- 📁 **Mobile File Viewer** - Browse your project files and review the agent's code changes with full syntax highlighting.

---

## 🚀 One-Command Quick Start

Getting started is fully automated. You don't need to configure environment variables or manually start services.

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Antigravity-Mobile-Pro.git
cd Antigravity-Mobile-Pro
```

### 2. Start the Service
**Windows:**
```bat
Double-click: Start-Antigravity-Mobile.bat
```

**macOS / Linux:**
```bash
./Start-Antigravity-Mobile.sh
```

**That's it!** The script will:
1. Automatically launch your local Antigravity IDE with debugging ports enabled.
2. Spin up the Mobile Bridge server.
3. Automatically set up a secure Cloudflare tunnel to your phone.
4. Pop up a **QR Code** on your screen.

### 3. Connect Your Phone
Scan the QR code with your phone's camera, open the link, and click **"Add to Home Screen"** to install it as a native PWA app.

---

## 🛠️ Advanced Admin Panel

While your phone acts as the viewer, your PC hosts an advanced Admin Panel at `http://localhost:3001/admin`.

Here you can:
- **Configure Telegram Bot:** Enter your Bot Token and Chat ID to enable push notifications.
- **Enable PIN Lock:** Secure your remote tunnel with a 4-digit PIN to prevent unauthorized access.
- **Manage AI Supervisor:** Monitor your automated Ollama-powered supervisor agents.
- **Theme Selection:** Switch between Dark, Light, Pastel, and Slate modes.

---

## 🏗️ Architecture & Security

- **No External Servers:** This is entirely peer-to-peer. The bridge runs locally on your PC.
- **CDP Protocol:** We hook into the Chrome DevTools Protocol to safely read the DOM of your IDE without injecting harmful extensions.
- **Cloudflare Tunnels:** Remote access is proxied securely via Cloudflare's enterprise-grade infrastructure.

---

## 🤝 Contributing

We welcome community contributions! If you have ideas for new mobile UI widgets, better supervisor prompts, or bug fixes, please submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
<i>Built for the next generation of autonomous AI developers.</i>
</div>