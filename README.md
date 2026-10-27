# NextDNS Live Viewer

> A lightning-fast, stateless, and privacy-first real-time telemetry viewer and analytics dashboard for NextDNS.

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://nextdns-dashboard-e3q.pages.dev/)
[![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)]()

## Overview

**NextDNS Live Viewer** is a lightweight, single-file Progressive Web App (PWA) designed to give you instant, real-time insights into your NextDNS traffic. Built with a pure RAM-first telemetry approach, it acts as a reactive viewer without relying on persistent local denylist storage (*LocalStorage*). NextDNS remains the absolute **Single Source of Truth**.

🌐 **Live Demo:** [nextdns-dashboard-e3q.pages.dev](https://nextdns-dashboard-e3q.pages.dev/)

---

## Key Features

- **Real-Time Telemetry:** Live streaming and monitoring of DNS queries with interactive charting and frequency analytics.
- **Safety Guardrails:** A global `PROTECTED_DOMAINS` array ensures critical infrastructure (Apple, Google, Microsoft, NTP, OCSP certificate validation) cannot be accidentally blocked in the UI.
- **Stateless & RAM-Driven:** Volatile runtime states keep performance high and prevent state synchronization bugs.
- **Minimalist UX:** Clean multi-device filtering, responsive 2-column form layouts, and an interactive status badge in the header.

---

## Screenshot

<p align="center">
  <img src="screenshot.png" alt="NextDNS Live Viewer Dashboard" width="100%" style="max-width: 900px; border-radius: 8px; border: 1px solid #334155;">
</p>

---

## License

MIT License — feel free to use, modify, and self-host!
