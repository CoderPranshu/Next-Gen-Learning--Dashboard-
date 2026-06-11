import { supabase } from "@/lib/supabase/server";
import AnalyticsChartCard from "@/components/dashboard/AnalyticsChartCard";

async function getCourses() {
  const { data } = await supabase
    .from("courses")
    .select("*");

  return data || [];
}

export default async function AnalyticsPage() {
  const courses = await getCourses();

  const totalCourses = courses.length;

  const avgProgress =
    totalCourses > 0
      ? Math.round(
          courses.reduce(
            (acc, course) => acc + course.progress,
            0
          ) / totalCourses
        )
      : 0;

  const completedCourses =
    courses.filter(
      (course) => course.progress >= 80
    ).length;

  return (
  <section className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Analytics Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
              <p className="text-zinc-400">
                Total Courses
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {totalCourses}
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
              <p className="text-zinc-400">
                Average Progress
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {avgProgress}%
              </h2>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
              <p className="text-zinc-400">
                Completed Courses
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {completedCourses}
              </h2>
            </div>

          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Learning Activity

            <p className="text-zinc-400 text-sm mb-6">
            Last 7 Days
            <div className="mb-6 flex gap-3">
            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                27 Hours
            </div>

             <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
               +12% This Week
              </div>
            </div>
          </p>
            
            </h2>

            <AnalyticsChartCard />

          </div>

        </section>
    
  );
}