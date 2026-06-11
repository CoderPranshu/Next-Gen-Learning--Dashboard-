"use client";
import type { Course } from "@/types/course";
import MotionCard from "../ui/MotionCard";
import {Atom,Rocket,Code,Database} from "lucide-react";
import {motion} from "framer-motion"

interface Props {
  course: Course;
}

const icons = {
  Atom,
  Rocket,
  Code,
  Database,
};

export default function CourseCard({
  course,
}: Props) {

   //icon selection here
  const Icon =
    icons[
      course.icon_name as keyof typeof icons
    ] || Atom;

  return (
    <MotionCard className="col-span-1 md:col-span-4">
     <article className="rounded-3xl border border-white/10 hover:border-cyan-500/30 bg-zinc-900/70 backdrop-blur-xl p-6 transition-all duration-300">
    <div className="mb-4">
          <Icon
            size={28}
            className="text-cyan-400"
          />
        </div>

      <h3 className="font-semibold text-lg">
        {course.title}
      </h3>

      <div className="mt-4">
        <div className="h-2 rounded-full bg-zinc-700 overflow-hidden">

          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{
             width: 0,
            }}
            animate={{
            width: `${course.progress}%`,
             }}
            transition={{
            duration: 1.2,
             }}
         />

        </div>

        <div className="mt-3 flex justify-between text-sm">
          <span className="text-zinc-400">
            Progress
          </span>

            <span className="text-cyan-400 font-medium">
                {course.progress}%
              </span>
        </div>

        <button className="mt-4 w-full rounded-xl border border-cyan-500/20 bg-cyan-500/10 py-2 text-cyan-400 transition hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              Continue Learning →
        </button>
      </div>
        </article>
        </MotionCard>
  );
}