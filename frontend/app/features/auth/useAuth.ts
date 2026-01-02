/**
 * Hook personnalisé pour la gestion de l'authentification
 * Contient toute la logique métier liée à l'auth
 */

import { useState, useEffect } from 'react';
import { authStorage } from './auth.utils';
import {loginApi, registerApi} from "~/features/services/auth.api";

/**
 * Interface pour le résultat d'une opération d'authentification
 */
interface AuthResult {
    success: boolean;
    error?: string;
}

/**
 * Hook useAuth - Gestion complète de l'authentification
 * @returns Objet contenant l'état et les méthodes d'authentification
 */
export function useAuth() {
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Charge l'utilisateur au montage du composant
     */
    useEffect(() => {
        const currentUser = authStorage.getUser();
        if (currentUser) {
            setUser(currentUser);
        }

    // ✅ Écouter les changements
    const handleAuthChange = () => {
      setUser(authStorage.getUser());
    };

    window.addEventListener('auth-changed', handleAuthChange);
    return () => window.removeEventListener('auth-changed', handleAuthChange);
    }, []);

    /**
     * Inscription d'un nouvel utilisateur
     * @param username - Nom d'utilisateur
     * @param password - Mot de passe
     * @returns Résultat de l'opération
     */
    const register = async (username: string, password: string): Promise<AuthResult> => {
        setLoading(true);
        setError(null);

        try {
            await registerApi({ username, password });
            authStorage.saveUser(username);
            setUser(username);
            return { success: true };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    /**
     * Connexion d'un utilisateur
     * @param username - Nom d'utilisateur
     * @param password - Mot de passe
     * @returns Résultat de l'opération
     */
    const login = async (username: string, password: string): Promise<AuthResult> => {
        setLoading(true);
        setError(null);

        try {
            await loginApi({ username, password });
            authStorage.saveUser(username);
            setUser(username);
            return { success: true };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erreur inconnue';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    /**
     * Déconnexion de l'utilisateur
     */
    const logout = (): void => {
        authStorage.removeUser();
        setUser(null);
        setError(null);
    };

    return {
        user,
        loading,
        error,
        register,
        login,
        logout,
        isAuthenticated: !!user
    };
}