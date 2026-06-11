import CourseCard from "@/components/dashboard/CourseCard";
import { supabase } from "@/lib/supabase/server";
import type { Course } from "@/types/course";

async function getCourses(): Promise<Course[]> {
  const { data } = await supabase
    .from("courses")
    .select("*");

  return (data as Course[]) || [];
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (

      <main className="min-h-screen bg-black text-white flex">
        

        <section className="p-4 md:p-8 pb-24">

          <h1 className="text-4xl font-bold mb-8">
            My Courses
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>

        </section>
      </main>
    
  );
}