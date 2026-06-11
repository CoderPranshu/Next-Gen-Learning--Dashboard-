export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="animate-pulse">

        <div className="h-48 rounded-3xl bg-zinc-800 mb-6" />

        <div className="grid grid-cols-3 gap-6">
          <div className="h-48 rounded-3xl bg-zinc-800" />
          <div className="h-48 rounded-3xl bg-zinc-800" />
          <div className="h-48 rounded-3xl bg-zinc-800" />
        </div>

      </div>
    </main>
  );
}