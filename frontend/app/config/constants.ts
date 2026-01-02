/**
 * Configuration globale de l'application
 * Contient toutes les constantes partagées
 */

export const CONFIG = {
    /**
     * URL de base de l'API FastAPI
     */
    API_BASE_URL: 'http://127.0.0.1:8000',

    /**
     * Clés de stockage pour les données en mémoire
     */
    STORAGE_KEYS: {
        USER: 'password_hash_user',
        TOKEN: 'password_hash_token'
    }
};