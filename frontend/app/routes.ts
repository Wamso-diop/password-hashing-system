/**
 * Configuration des routes de l'application
 * Définit toutes les routes accessibles
 */

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Page d'accueil
    index("routes/HomePage.tsx"),

    // Page de connexion
    route("login", "routes/LoginPage.tsx"),

    // Page d'inscription
    route("register", "routes/RegisterPage.tsx"),
] satisfies RouteConfig;