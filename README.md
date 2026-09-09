# Automotive Interface Suite

**Student:** Phillip Cantu  
**Assignment:** Automotive Interface Suite Project  
**Full Sail University**  
**WDV3421-O Connected Devices and Applications**

## Workspaces (4 Services + 1 Shared Types)

- mobile-controls (React Native)
- tablet-cluster (React Native)
- web-map (React)
- server (Node/Express.js)
- shared-types (TS Type Exports)

---

## 1️⃣ P.1 - Foundational Architecture

> **Completed:** Wednesday, September 9, 2026

🎥 YouTube Video: <https://www.youtube.com/watch?v=vvwHvsxxcVM>

### Requirements

- [Bun](https://bun.sh)

### Installation

```bash
git clone https://github.com/hereisphil/automotive-interface-suite.git
cd automotive-interface-suite
bun install
bun run --filter @automotive/shared-types build
cd server
bun run dev
```

_`bun run --filter @automotive/shared-types build` uses `tsc`against `shared-types/index.ts` to export compiled declarations and types shared across the monorepo._

Expect to see:

```bash
🚗 Vehicle Server running on port 3001
Waiting for clients to connect...
```

Then open `server/src/test-client.html` in your web browser.

Expect to see:

**Terminal:**

```bash
Client connected: qmGo0rIF5Cq0idzLAAAA
test client connected. Total: 1
```

**Web Browser:**

![test-client](./screenshots/P.1%20-%20Foundational%20Architecture/test-client.png)
