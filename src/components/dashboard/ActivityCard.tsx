"use client";

import MotionCard from "../ui/MotionCard";
import ActivityChart from "./ActivityChart";

export default function ActivityCard() {
  return (
    <MotionCard className="col-span-1 md:col-span-8">
      <section
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/70
        backdrop-blur-xl
        p-6
        transition-all
        duration-500
        hover:border-cyan-500/30
        hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
      >
        {/* Glow Effect */}
        <div
          className="
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-cyan-500/10
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
        />

        <div className="relative z-10">
          <h2 className="text-xl font-semibold">
            Learning Activity
          </h2>

          <div className="mb-6">
            <p className="text-zinc-400 text-sm">
                Last 7 Days
            </p>

          <div className="mt-3 flex gap-3">
              <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                 27 Hours
              </div>

          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
               +12% This Week
          </div>
        </div>
        </div>

          <ActivityChart />
        </div>
      </section>
    </MotionCard>
  );
}