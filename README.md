# Cre8Den 🎨

Cre8Den is a modern, responsive web application for a creative technology studio specializing in precision laser engraving, laser cutting, and custom fabrication in Sri Lanka. 

The platform allows users to explore personalized gift options, request custom laser cutting services, and seamlessly place orders or make inquiries directly via automated, pre-formatted WhatsApp messages.

> **Original Figma Design**: [Cre8Den on Figma](https://www.figma.com/design/J25Bxgs1tWFnIYQsoSyNKs/Cre8Den)

---

## 🚀 Features

- **Dynamic Product Showcases**: High-quality UI for signature products like Acrylic Engraved Photos, Custom Key Tags, and Robot Chassis.
- **WhatsApp Integration**: Automated, professional, bullet-point formatted WhatsApp messages generated directly from user selections.
- **Live Google Sheets Testimonials**: Real-time customer feedback fetched directly from a published Google Sheet CSV, featuring auto-sliding and pagination.
- **Newsletter & Feedback Forms**: Direct integration with Google Apps Script to save customer inquiries and reviews securely to a Google Sheet.
- **Mobile-First Design**: Fully responsive interface with custom viewport locking and zooming prevention for a native app-like mobile experience.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: React Router DOM
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend/Database**: Google Apps Script & Google Sheets (Serverless)

---

## 💻 Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and configure the following variables for the Google Sheets integration:

```env
# The Apps Script Web App URL for submitting feedback & newsletters
VITE_SHEET_API_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"

# The published CSV URL of your Google Sheet for fetching approved testimonials
VITE_SHEET_CSV_URL="https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv"
```
*(Note: Refer to `google-apps-script.js` in the project root for the backend script setup).*

### 4. Running the Development Server
Start the Vite development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### 5. Building for Production
To create an optimized production build:
```bash
npm run build
```

---

## 📝 License & Copyright

© 2026 Cre8Den. All rights reserved.
Part of the Nodamic brand family.