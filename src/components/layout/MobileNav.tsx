"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    href: "/",
  },
  {
    icon: BookOpen,
    href: "/courses",
  },
  {
    icon: BarChart3,
    href: "/analytics",
  },
  {
    icon: Settings,
    href: "/settings",
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[9999]
        md:hidden
        border-t
        border-white/10
        bg-zinc-950/95
        backdrop-blur-xl
      "
    >
      <div className="flex justify-around py-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                flex
                flex-col
                items-center
                justify-center
                p-2
              "
            >
              <Icon
                size={22}
                className={
                  active
                    ? "text-cyan-400"
                    : "text-zinc-400"
                }
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}