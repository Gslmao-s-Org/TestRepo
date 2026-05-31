export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="max-w-xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Random stuff
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight">
          Waffle clouds, neon noodles, and a suspiciously confident toaster.
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          This page is now a tiny dump of nonsense: jellyfish jazz, static on
          a Tuesday, and a bowl of cosmic cereal.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-zinc-500 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
            banana.exe ran successfully
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/60">
            orbiting a very polite potato
          </div>
        </div>
      </main>
    </div>
  );
}
