export default function Index() {
  return (
    <main className="p-4">
      <h1>Home</h1>
      <ul className="flex flex-col gap-4">
        {Array.from(Array(20).keys())
          .map((n) => n + 1)
          .map((n) => (
            <li key={n}>
              <article className="flex flex-col gap-2">
                <h2 className="text-xl">{n}</h2>
                <div className="flex min-h-10 flex-wrap gap-2">
                  {Array.from(Array(n).keys())
                    .map((i) => i + 1)
                    .map((i) => (
                      <span
                        className="flex size-10 items-center justify-center rounded-full text-xs ring-2 ring-gray-400"
                        key={`${n}-${i}`}
                      >
                        {n}-{i}
                      </span>
                    ))}
                </div>
              </article>
            </li>
          ))}
      </ul>
    </main>
  );
}
