# 🍽️ Food Management Web App — A2SV Eskalate Assessment

This project is a submission for the **A2SV Eskalate Technical Web Assessment**. The goal was to implement a fully functional and responsive web application based on a provided **Figma design** and connect it to a **mock API**. The application allows users to manage food items—search, add, edit, and delete—while ensuring a clean and user-friendly experience.

---

## ✅ What I Implemented

- 🔍 **Search Functionality:** Real-time food filtering using query params (`?name=searchText`) from the mock API.
- 🧱 **Reusable Components:** Built modular and reusable components such as `MealCard`, `MealFormModal`, `SkeletonLoader`, etc.
- ⚙️ **API Integration:** Used `Fetch API` to integrate:
  - `GET`: fetch food list
  - `POST`: add food
  - `PUT`: update food
  - `DELETE`: remove food
- 💾 **Form Handling & Validation:**
  - Used standard input naming conventions (e.g., `input[name="food_name"]`)
  - Validations with proper error messages and IDs (e.g., `food-name-error`)
- 💡 **UI/UX Matching the Design:**
  - Followed the Figma layout for structure and styling
  - Responsive design across mobile, tablet, and desktop
- ✨ **Loading States:**
  - Added `animate-pulse` shimmer skeleton for loading states
- 🚫 **Empty States:**
  - Implemented informative message when no food items exist

---

## 🗂️ Limitation
 - Vecel not load the my asset used since I unable to push the latest changes. you can review my code I have implemented.
