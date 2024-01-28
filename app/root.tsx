import type { LinksFunction } from "@remix-run/node";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid h-[100dvh] grid-cols-[min-content_1fr] overflow-y-auto">
          <aside className="sticky bottom-0 left-0 top-0 h-[100dvh] bg-gray-950 px-8 py-4 text-gray-400">
            <nav>
              <ul className="flex flex-col gap-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/chat", label: "Chat" },
                  { to: "/about", label: "About" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      className="text-gray-400 hover:text-gray-300"
                      to={to}
                      preventScrollReset
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="grid grid-rows-[auto_1fr]">
            <header className="sticky top-0 bg-gray-600 p-4 text-gray-50">
              Header
            </header>
            <Outlet />
          </div>

          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
