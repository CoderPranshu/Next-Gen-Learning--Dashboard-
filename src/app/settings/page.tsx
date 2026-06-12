export default function SettingsPage() {
  return (
    <section className="p-4 md:p-8 pb-24">
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Profile Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Profile
          </h2>

          <div className="space-y-4">

            <div>
              <p className="text-zinc-400 text-sm">
                Name
              </p>

              <p className="font-medium">
                User
              </p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm">
                Email
              </p>

              <p className="font-medium">
                user@example.com
              </p>
            </div>

          </div>
        </div>

        {/* Preferences Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Preferences
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center">
              <span>
                Dark Mode
              </span>

              <div className="w-12 h-6 rounded-full bg-cyan-500 flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>
                Email Notifications
              </span>

              <div className="w-12 h-6 rounded-full bg-zinc-700 flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* Learning Goals */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Learning Goals
          </h2>

          <div className="space-y-3">

            <div>
              <div className="flex justify-between mb-2">
                <span>Weekly Goal</span>
                <span>70%</span>
              </div>

              <div className="h-2 rounded-full bg-zinc-700 overflow-hidden">
                <div className="h-full w-[70%] bg-cyan-400 rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* About */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            About
          </h2>

          <p className="text-zinc-400">
            LearnHub Dashboard built using
            Next.js, TypeScript, Tailwind CSS,
            Supabase, Framer Motion and Recharts.
          </p>
        </div>

      </div>
    </section>
  );
}