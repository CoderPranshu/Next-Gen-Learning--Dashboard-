"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: BookOpen,
    label: "Courses",
    href: "/courses",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-72 border-r border-white/10 bg-zinc-950 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          LearnHub
        </h2>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.label}
              className="relative flex items-center gap-3 rounded-xl p-3"
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-xl border border-cyan-500/20 bg-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <item.icon
                size={20}
                className="relative z-10"
              />

              <span className="relative z-10">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}