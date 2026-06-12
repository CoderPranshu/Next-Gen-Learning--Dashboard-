import { supabase } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .single();

  if (!course) {
    notFound();
  }

  return (
    <section className="p-4 md:p-8 pb-24">
      <div className="max-w-4xl mx-auto">

        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8">

          <h1 className="text-4xl font-bold text-white">
            {course.title}
          </h1>

          <p className="mt-4 text-zinc-400">
            Welcome to the course. This page
            represents the learning experience
            for this module.
          </p>

          <div className="mt-8">
            <p className="text-sm text-zinc-400">
              Progress
            </p>

            <div className="mt-2 h-3 rounded-full bg-zinc-700 overflow-hidden">
              <div
                className="h-full bg-cyan-400"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <p className="mt-2 text-cyan-400">
              {course.progress}% Completed
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Course Modules
            </h2>

            <div className="space-y-3">
              <div className="rounded-xl bg-zinc-800 p-4">
                Module 1: Introduction
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                Module 2: Fundamentals
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                Module 3: Advanced Concepts
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                Module 4: Final Project
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}