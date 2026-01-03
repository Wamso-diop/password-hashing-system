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
        // Gérer les erreurs de validation (422) et les autres erreurs
        let errorMessage = 'Erreur lors de l\'inscription';
        if (error.detail) {
            if (typeof error.detail === 'string') {
                errorMessage = error.detail;
            } else if (Array.isArray(error.detail)) {
                // FastAPI retourne un array pour les erreurs de validation
                errorMessage = error.detail.map((err: any) => err.msg).join(', ');
            }
        }
        throw new Error(errorMessage);
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
        // Gérer les erreurs de validation (422) et les autres erreurs
        let errorMessage = 'Erreur de connexion';
        if (error.detail) {
            if (typeof error.detail === 'string') {
                errorMessage = error.detail;
            } else if (Array.isArray(error.detail)) {
                // FastAPI retourne un array pour les erreurs de validation
                errorMessage = error.detail.map((err: any) => err.msg).join(', ');
            }
        }
        throw new Error(errorMessage);
    }
    return response.json();
}