"use client";

import MotionCard from "@/components/ui/MotionCard";

interface HeroCardProps {
  totalCourses: number;
  avgProgress: number;
}

export default function HeroCard({
  totalCourses,
  avgProgress,
}: HeroCardProps) {
  return (
    <MotionCard className="col-span-1 md:col-span-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 hover:border-cyan-500/30 bg-zinc-900/70 backdrop-blur-xl p-8 transition-all duration-300">

        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

        <h1 className="text-5xl font-bold">
          Welcome Back,
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {" "}Rajni
          </span>
        </h1>

        <p className="text-zinc-400 mt-4 text-lg">
          Continue your learning journey today.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2">
          🔥
          <span className="text-orange-400">
            15 Day Streak
          </span>
        </div>

        <div className="mt-8 flex gap-8">

          <div>
            <p className="text-zinc-500 text-sm">
              Courses
            </p>
            <p className="text-2xl font-bold">
              {totalCourses}
            </p>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">
              Avg Progress
            </p>
            <p className="text-2xl font-bold">
              {avgProgress}%
            </p>
          </div>

        </div>

      </section>
    </MotionCard>
  );
}