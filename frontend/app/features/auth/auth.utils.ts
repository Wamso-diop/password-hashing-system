/**
 * Utilitaires pour la gestion de l'authentification
 * Utilise localStorage pour persister les données
 */

import { CONFIG } from '~/config/constants';

class AuthStorage {
  /**
   * Sauvegarde l'utilisateur connecté dans localStorage
   */
  saveUser(username: string): void {
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, username);
  }

  /**
   * Récupère l'utilisateur depuis localStorage
   */
  getUser(): string | null {
    return localStorage.getItem(CONFIG.STORAGE_KEYS.USER);
  }

  /**
   * Supprime l'utilisateur de localStorage
   */
  removeUser(): void {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER);
  }

  /**
   * Vérifie si un utilisateur est connecté
   */
  isAuthenticated(): boolean {
    return !!this.getUser();
  }
}

export const authStorage = new AuthStorage();