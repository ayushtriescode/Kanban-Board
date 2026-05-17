# 📁 Workspace Dashboard

A premium, modern Kanban-style task management dashboard built with **React**, **Tailwind CSS (v4)**, and **@dnd-kit**. Designed with a focus on polished UI aesthetics and flawless cross-device performance, this workspace provides a smooth, tactile experience for organizing operational tasks in real time.

![Workspace Preview](https://img.shields.io/badge/UI--Theme-Warm%20Ivory%20%26%20Amber-orange)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-emerald)
![License](https://img.shields.io/badge/License-MIT-stone)

---

## ✨ Features

*   **Premium Warm Aesthetic:** Replaces harsh, high-contrast white glare with a soft, calming ivory, cream, and amber color palette. Completely free of blue tones.
*   **True Mobile Drag-and-Drop:** Powered by optimized touch and mouse sensors, enabling a native-feeling "long-press to lift" gesture on mobile devices that doesn't break standard page scrolling.
*   **Hardware-Accelerated Overlays:** Utilizes a global HTML `DragOverlay` portal so dragging cards seamlessly glide over column layouts without getting clipped by container margins or overflow properties.
*   **Instant LocalStorage Persistence:** Your workflow status saves directly to the client disk automatically, ensuring zero data loss upon page refreshes.
*   **Responsive Layout:** Gracefully fluid scaling from narrow smartphone screens to wide multi-column desktop monitors.

---

## 🛠️ Tech Stack & Architecture

*   **Frontend Library:** React (Functional components, hooks, custom state coordination)
*   **Styling Engine:** Tailwind CSS (Utilizing premium glassmorphic backdrops, custom alpha borders, and modern layout structures)
*   **Dnd Subsystem:** `@dnd-kit/core` (`MouseSensor`, `TouchSensor`, and `<DragOverlay>`)

---