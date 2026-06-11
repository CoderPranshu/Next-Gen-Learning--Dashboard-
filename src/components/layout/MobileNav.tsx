"use client";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-950 border-t border-white/10 p-4">

      <div className="flex justify-around">

        <LayoutDashboard />

        <BookOpen />

        <BarChart3 />

        <Settings />

      </div>

    </nav>
  );
}