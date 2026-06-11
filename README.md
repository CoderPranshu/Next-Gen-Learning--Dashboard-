# LearnHub Dashboard

A modern and responsive learning management dashboard built with Next.js, TypeScript, Tailwind CSS, Supabase, Framer Motion, and Recharts.

The application provides learners with a centralized platform to track course progress, monitor learning activity, and view performance analytics through an intuitive and visually engaging interface.

---

## Overview

LearnHub Dashboard is designed to simulate a real-world educational platform where users can manage their learning journey through a clean and interactive dashboard experience.

The project focuses on modern frontend development practices, reusable component architecture, responsive design, smooth animations, and dynamic data integration.

---

## Features

### Dashboard

* Personalized welcome section
* Learning streak indicator
* Dynamic course statistics
* Average learning progress calculation
* Responsive Bento-style layout

### Course Management

* Dynamic course cards fetched from Supabase
* Individual progress tracking
* Animated progress bars
* Course-specific icons
* Responsive grid layout

### Analytics

* Learning activity visualization using Recharts
* Course completion insights
* Average progress metrics
* Interactive chart tooltips

### Settings

* Profile information section
* Learning preferences panel
* Goal tracking widget
* Dashboard information section

### User Experience

* Responsive design for desktop and mobile devices
* Smooth Framer Motion animations
* Interactive sidebar navigation
* Modern dark-themed interface
* Hover effects and visual feedback

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

### Backend & Database

* Supabase

### UI & Animations

* Framer Motion
* Lucide React

### Data Visualization

* Recharts

---

## Project Structure

```bash
src
│
├── app
│   ├── analytics
│   ├── courses
│   ├── settings
│   └── page.tsx
│
├── components
│   ├── dashboard
│   ├── layout
│   └── ui
│
├── lib
│   └── supabase
│
├── types
│
└── app/layout.tsx
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd learning-dashboard
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## Key Learnings

During the development of this project, I gained practical experience in:

* Building applications using the Next.js App Router
* Integrating Supabase with a frontend application
* Creating reusable and scalable React components
* Implementing responsive UI using Tailwind CSS
* Working with TypeScript for type-safe development
* Creating interactive animations with Framer Motion
* Visualizing data using Recharts
* Structuring projects using modern frontend best practices

---

## Future Improvements

* User authentication and authorization
* Course detail pages
* Real-time analytics
* User profile management
* Dark/Light theme switching
* Advanced reporting dashboard

---

## Author

**ME**

Aspiring Software Engineer focused on building scalable web applications and continuously improving problem-solving, frontend development, and full-stack engineering skills.