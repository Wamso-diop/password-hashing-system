/**
 * Centralisation des URLs des fichiers statiques
 * Tous les assets sont référencés depuis le dossier /public
 */

export const ASSETS = {
    IMAGES: {
        /**
         * Image principale de la page d'accueil
         * Utiliser une image de femme travaillant sur ordinateur (style SmartKYC)
         */
        HERO_BANNER: '/images/hero-banner.png',

        /**
         * Illustration pour la page de connexion
         * Utiliser une image de téléphone avec graphique (style Payoneer)
         */
        LOGIN_ILLUSTRATION: '/images/login-illustration.jpg',

        /**
         * Illustration pour la page d'inscription
         * Utiliser une image de sécurité/protection
         */
        REGISTER_ILLUSTRATION: '/images/registration-illustration.png',

        /**
         * Logo de l'application
         */
        LOGO: '/images/logo.png'
    },

    ICONS: {
        SECURITY: '/icons/security.svg',
        LOCK: '/icons/lock.svg'
    }
};