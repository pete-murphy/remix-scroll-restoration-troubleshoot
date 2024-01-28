export default function Chat() {
  return (
    <main className="grid grid-rows-[1fr_auto] p-0 [contain:size] *:px-4 *:py-2">
      <ul className="flex flex-col-reverse gap-2 overflow-y-auto">
        {Array.from(Array(100).keys())
          .map((n) => n + 1)
          .map((n) => (
            <li
              className=" h-10 w-fit items-center justify-center rounded-3xl bg-gray-700 px-4 py-2"
              key={n}
            >
              Message {n}
            </li>
          ))}
      </ul>
      <div>
        <textarea
          className="w-full rounded border-none bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-400"
          placeholder="Type something..."
        />
      </div>
    </main>
  );
}
