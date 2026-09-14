# P.5 - Debug | Broken Reverse Functionality

**Problem:** The vehicle cannot move in reverse gear.

- Symptom: When gear is set to 'R' and throttle is applied, nothing happens.

- Expected: Vehicle should move backward.

---

## Before Fix

**Steps to reproduce the bug:**

> ⚠️ This is how the bug was able to be reproduced. No longer reproduceable unless you revert the repo back to **Commit:** `b07152188eb029fd066d35e7fd68671004173849`

1. Start the server - `cd server && bun run dev`.
2. Open a new terminal while keeping the server running.
3. Start the mobile-controls: `cd mobile-controls && bunx expo start`.
4. Open the app in your simulator or Expo Go app.
5. Put the Gear in "R".
6. Slide the throttle up. Notice that the controls automatically switch to "D" before accelerating. That's the problem.

**Expected Behavior:** While in "R" and accelerating the gear should remain in "R".

**Actual Behavior:** While in "R" and accelerating the gear always switchines to "D".

---

## After Fix

**Steps to verify the fix:**

1. Start the server - `cd server && bun run dev`.
2. Open a new terminal while keeping the server running.
3. Start the mobile-controls: `cd mobile-controls && bunx expo start`.
4. Open the app in your simulator or Expo Go app.
5. Put the Gear in "R".
6. Slide the throttle up. The gear means in "R" and the car accelerates. 🥳
7. Put the Gear in anything but "D" or "R" and the old functionality of automatically switching to "D" remains. Which is the normal preferred action of a vehicle.

**Expected Behavior:** While in "R" and accelerating the gear should remain in "R".

**Actual Behavior:** While in "R" and accelerating the gear remains in "R".
