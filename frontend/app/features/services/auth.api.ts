/**
 * Service API pour l'authentification
 * Gère toutes les communications avec le backend FastAPI
 */

import { CONFIG } from '~/config/constants';

/**
 * Interface pour les données d'inscription/connexion
 */
interface AuthCredentials {
    username: string;
    password: string;
}

/**
 * Interface pour la réponse de l'API
 */
interface AuthResponse {
    message: string;
    status: string;
}

/**
 * Inscription d'un nouvel utilisateur
 * @param data - Identifiants de l'utilisateur (username, password)
 * @returns Promesse avec la réponse de l'API
 * @throws Error si l'inscription échoue
 */
export async function registerApi(data: AuthCredentials): Promise<AuthResponse> {
    const response = await fetch(`${CONFIG.API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Erreur lors de l\'inscription');
    }

    return response.json();
}

/**
 * Connexion d'un utilisateur existant
 * @param data - Identifiants de l'utilisateur (username, password)
 * @returns Promesse avec la réponse de l'API
 * @throws Error si la connexion échoue
 */
export async function loginApi(data: AuthCredentials): Promise<AuthResponse> {
    const response = await fetch(`${CONFIG.API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Identifiants invalides');
    }
    return response.json();
}