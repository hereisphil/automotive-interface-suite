# Automotive Interface Suite

**Student:** Phillip Cantu  
**Assignment:** Automotive Interface Suite Project  
**Full Sail University**  
**WDV3421-O Connected Devices and Applications**

## Workspaces (4 Services + 1 Shared Types)

- server (Node/Express.js)
- shared-types (TS Type Exports)
- mobile-controls (React Native)
- tablet-cluster (React Native)
- web-map (React)

> The "tablet-cluster" is demo-able on the web

---

## 1️⃣ P.1 - Foundational Architecture

> **Completed:** Wednesday, September 9, 2026

🎥 YouTube Video: <https://www.youtube.com/watch?v=vvwHvsxxcVM>

---

## 2️⃣ P.2 - Phone Interface

> **Completed:** Wednesday, September 9, 2026

💻 [DESKTOP] YouTube Video: <https://www.youtube.com/watch?v=AOrAB0TiHb0>

📱 [iOS Expo Go] YouTube Video: <https://www.youtube.com/shorts/nyouerkCwsE>

---

## 3️⃣ P.3 - Tablet Interface

> **Completed:** Thursday, September 10, 2026

🎥 YouTube Video: <https://www.youtube.com/watch?v=r41pQDAbMQI>

---

## 4️⃣ P.4 - Web Interface

> **Completed:** Saturday, September 12, 2026

🎥 YouTube Video: <https://www.youtube.com/watch?v=3P-WUoueK4g>

⚠️ Not absolutely everything is working here, very little was changed from the code that Full Sail gave me, yet we get the gist of it.

---

## THE HOW-TO BEGINS HERE 🤩

### Requirements

- [Bun](https://bun.sh)

### Installation

```bash
git clone https://github.com/hereisphil/automotive-interface-suite.git
cd automotive-interface-suite
bun install
bun run --filter @automotive/shared-types build
```

_`bun run --filter @automotive/shared-types build` uses `tsc` against `shared-types/index.ts` to export compiled declarations and types shared across the monorepo._

### Running the server

```bash
cd server
bun run dev
```

Expect to see this in the terminal:

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

_p.s. you'll see similiar messages in your terminal as you begin to connect the other devices, e.g., mobile-controls, tablet-cluster, etc._

**Web Browser:**

![test-client](./screenshots/P.1%20-%20Foundational%20Architecture/test-client.png)

You can go to <http://localhost:3001> in the web browser or run a `curl` command to verify the server is running

### Run the mobile app

⚠️ You **MUST** update the **SERVER_URL** within `mobile-controls/src/hooks/useVehicleConnection.ts` with your local IP address. For context, on macOS you can check your IP by running `ipconfig getifaddr en0` (or `en4` if connected via a dock/Ethernet like myself). Keep the `:3001` because, if you recall, the server runs on Port 3001.

Open a new terminal while **keeping the server running in another terminal.**

```bash
cd mobile-controls
bunx expo start
```

Test the mobile app via your iOS/Android simulators or, what I use, the Expo Go mobile application, which is what I recommend and you can get that here:

iOS (USA): <https://apps.apple.com/us/app/expo-go/id982107779>

Android (USA): <https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&pli=1>

**Expect to see:**

![iOS-Expo-Go](./screenshots/P.2%20-%20Phone%20Interface/iOS%20Expo%20Go.jpeg)

### Run the tablet app

⚠️ You **MUST** update the **SERVER_URL** within `tablet-cluster/src/hooks/useDashboardConnection.ts`.

Open a new terminal while **keeping the server & mobile-controls running in another terminal.**

```bash
cd mobile-controls
bunx expo start --web  --port 8082
```

Open <http://localhost:8082/> in your web browser.

**Expect to see:**

![tablet-interface-web](./screenshots/P.3%20-%20Tablet%20Interface/tablet-interface_on-the-web.png)

_You can adjust your browser size or use the dev tools to "emulate" a tablet_

### Run the web app

⚠️ You **MUST** update the **SERVER_URL** within `web-map/src/hooks/useTrafficControl.ts`.

‼️ You **MUST** create .env file at `web-map/.env` based off of the .env.example with your `VITE_MAPBOX_ACCESS_TOKEN`.

Open a new terminal while **keeping the server & mobile-controls & tablet-cluster running in another terminal.**

```bash
cd web-map
bun run dev
```

Open <http://localhost:5173/> in your web browser.

**Expect to see:**

![web-map](./screenshots/P.4%20-%20Web%20Interface/web-admin-dashboard.png)

### Play with the controls in your Expo Go app and see the realtime updates! 🥳

Thanks!
