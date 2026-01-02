/**
 * Composant Navbar - Barre de navigation principale
 * Affiche le logo, le nom de l'utilisateur et les boutons d'authentification
 */

import { Link } from 'react-router';
import { LogIn, LogOut, UserPlus, Lock, User } from 'lucide-react';
import {ASSETS} from "~/assets";

/**
 * Props du composant Navbar
 */
interface NavbarProps {
    user: string | null;
    onLogout: () => void;
}

/**
 * Composant Navbar
 * @param user - Nom de l'utilisateur connecté (null si non connecté)
 * @param onLogout - Fonction appelée lors de la déconnexion
 */
export function Navbar({ user, onLogout }: NavbarProps) {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo et titre */}
                    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <img
                            src={ASSETS.IMAGES.LOGO}
                            alt="Illustration de la sécurité des mots de passe"
                            className="w-10 object-cover"
                        />
                        <span className="text-xl font-bold text-gray-800">SecureHash</span>
                    </Link>

                    {/* Actions utilisateur */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                {/* Badge utilisateur connecté */}
                                <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                                    <User className="w-5 h-5 text-gray-600" />
                                    <span className="text-sm font-medium text-gray-700">{user}</span>
                                </div>

                                {/* Bouton déconnexion */}
                                <button
                                    onClick={onLogout}
                                    className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span>Déconnexion</span>
                                </button>
                            </>
                        ) : (
                            <>
                                {/* Bouton connexion */}
                                <Link
                                    to="/login"
                                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-colors"
                                >
                                    <LogIn className="w-5 h-5" />
                                    <span>Connexion</span>
                                </Link>

                                {/* Bouton inscription */}
                                <Link
                                    to="/register"
                                    className="flex items-center space-x-2 bg-linear-to-r from-gray-800 to-gray-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    <UserPlus className="w-5 h-5" />
                                    <span>Inscription</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}