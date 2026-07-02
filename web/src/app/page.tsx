export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <div className="w-full max-w-3xl px-8">

        <h1 className="text-5xl font-bold mb-4">
          Vista AI Discovery Engine
        </h1>

        <p className="text-neutral-400 mb-10 text-lg">
          Analyze any company using autonomous AI workers.
        </p>

        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">

          <label className="block mb-3 text-sm">
            Website URL
          </label>

          <input
            className="w-full rounded-lg bg-neutral-950 border border-neutral-700 px-4 py-3"
            placeholder="https://company.com"
          />

          <button
            className="mt-6 w-full rounded-lg bg-white text-black py-3 font-semibold hover:bg-neutral-300 transition"
          >
            Analyze Website
          </button>

        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">

          <div className="rounded-lg bg-neutral-900 p-5 border border-neutral-800">
            <div className="text-neutral-500 text-sm">
              Status
            </div>

            <div className="mt-2 text-xl font-semibold text-green-400">
              Engine Ready
            </div>
          </div>

          <div className="rounded-lg bg-neutral-900 p-5 border border-neutral-800">
            <div className="text-neutral-500 text-sm">
              Workers Loaded
            </div>

            <div className="mt-2 text-xl font-semibold">
              1
            </div>
          </div>

          <div className="rounded-lg bg-neutral-900 p-5 border border-neutral-800">
            <div className="text-neutral-500 text-sm">
              Version
            </div>

            <div className="mt-2 text-xl font-semibold">
              0.1.0
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
