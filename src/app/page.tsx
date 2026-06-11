import HeroCard from "@/components/dashboard/HeroCard";
import CourseCard from "@/components/dashboard/CourseCard";
import { supabase } from "@/lib/supabase/server";
import ActivityCard from "@/components/dashboard/ActivityCard";
import StaggerContainer from "@/components/ui/StaggerContainer";
import type { Course } from "@/types/course";

async function getCourses(): Promise<Course[]> {
  const { data } = await supabase
    .from("courses")
    .select("*");

  return (data as Course[]) || [];
}

export default async function Home() {
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

    
    return (
  <section className="p-8">
    <StaggerContainer>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <HeroCard
          totalCourses={totalCourses}
          avgProgress={avgProgress}
        />

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

        <ActivityCard />
      </div>
    </StaggerContainer>
  </section>
);
}
//learning-dashboard01