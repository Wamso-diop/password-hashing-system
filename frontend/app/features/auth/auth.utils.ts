/**
 * Utilitaires pour la gestion de l'authentification
 * Gère le stockage en mémoire de l'utilisateur connecté
 *
 * Note: Utilise le stockage en mémoire au lieu de localStorage
 * car localStorage n'est pas supporté dans les artifacts Claude
 */

/**
 * Stockage en mémoire de l'utilisateur
 */
class AuthStorage {
    private currentUser: string | null = null;

    /**
     * Sauvegarde l'utilisateur connecté
     * @param username - Nom d'utilisateur à sauvegarder
     */
    saveUser(username: string): void {
        this.currentUser = username;
    }

    /**
     * Récupère l'utilisateur connecté
     * @returns Le nom d'utilisateur ou null si non connecté
     */
    getUser(): string | null {
        return this.currentUser;
    }

    /**
     * Supprime l'utilisateur (déconnexion)
     */
    removeUser(): void {
        this.currentUser = null;
    }

    /**
     * Vérifie si un utilisateur est connecté
     * @returns true si un utilisateur est connecté, false sinon
     */
    isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}

/**
 * Instance unique du gestionnaire de stockage
 * Exportée pour être utilisée dans toute l'application
 */
export const authStorage = new AuthStorage();