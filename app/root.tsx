import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Header } from "./components/layout/sidePanel/header/header";
import { SidePanel } from "./components/layout/sidePanel/sidePanel";
import { SidePanelContextProvider } from "./components/layout/sidePanel/sidePanelContext";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SidePanelContextProvider>
          <div className="grid grid-cols-[auto_1fr] min-h-screen">
            <SidePanel />
            <div className="flex flex-col bg-white dark:bg-gray-900 shadow-xl sm:m-2 sm:ml-0 px-4 py-2 sm:rounded-2xl">
              <Header />
              <main className="mt-2 pt-4 border-gray-300 dark:border-gray-500 border-t">{children}</main>
            </div>
          </div>
        </SidePanelContextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto p-4 pt-16 container">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="p-4 w-full overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
