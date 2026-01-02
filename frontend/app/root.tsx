/**
 * Fichier racine de l'application React Router
 * Gère le layout principal et l'état d'authentification global
 */

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import { useAuth } from "./features/auth/useAuth";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./app.css";

/**
 * Configuration des liens externes (fonts, etc.)
 */
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

/**
 * Layout principal de l'application
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      </body>
      </html>
  );
}

/**
 * Composant racine de l'application
 * Gère l'état d'authentification global et le layout
 */
export default function App() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  /**
   * Gestion de la déconnexion
   */
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-1">
          <Outlet context={{ user }} />
        </main>
        <Footer />
      </div>
  );
}

/**
 * Page d'erreur globale
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "Une erreur inattendue s'est produite.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Erreur";
    details =
        error.status === 404
            ? "La page demandée est introuvable."
            : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
      <main className="pt-16 p-4 container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{message}</h1>
        <p className="text-lg text-gray-600 mb-8">{details}</p>
        {stack && (
            <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded-lg text-left text-sm">
          <code>{stack}</code>
        </pre>
        )}
      </main>
  );
}