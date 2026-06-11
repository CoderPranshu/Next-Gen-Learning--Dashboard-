"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">
          Something went wrong
        </h1>

        <button
          onClick={reset}
          className="rounded-xl bg-blue-500 px-4 py-2"
        >
          Retry
        </button>

      </div>
    </main>
  );
}