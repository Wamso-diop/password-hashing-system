/**
 * Page d'inscription - RegisterPage
 * Formulaire d'inscription avec validation des mots de passe
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Lock, User } from 'lucide-react';
import { ASSETS } from '~/assets';

import { useAuth } from '~/features/auth/useAuth';

/**
 * Composant RegisterPage
 */
export default function RegisterPage() {
    const { register, loading, error } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    /**
     * Gestion de la soumission du formulaire
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Vérification que les mots de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
        }

        setPasswordMatch(true);
        const result = await register(formData.username, formData.password);

        if (result.success) {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Partie gauche - Formulaire */}
                <div className="p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Créer un compte
                        </h1>
                        <p className="text-gray-600">
                            Rejoignez-nous pour sécuriser vos données
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Champ Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nom d'utilisateur
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className="w-full pl-10 pr-4 text-gray-900 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Choisissez un nom d'utilisateur"
                                    required
                                />
                            </div>
                        </div>

                        {/* Champ Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-10 pr-12 text-gray-900 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Mot de passe sécurisé"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>

                        {/* Champ Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Confirmer le mot de passe
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full pl-10 pr-4 py-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    placeholder="Confirmez votre mot de passe"
                                    required
                                />
                            </div>
                        </div>

                        {/* Messages d'erreur */}
                        {!passwordMatch && (
                            <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-sm">
                                ⚠️ Les mots de passe ne correspondent pas
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                ⚠️ {error}
                            </div>
                        )}

                        {/* Bouton d'inscription */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-linear-to-br from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Création en cours...' : "S'inscrire"}
                        </button>

                        {/* Lien vers connexion */}
                        <div className="text-center text-sm text-gray-600">
                            Déjà un compte ?{' '}
                            <Link
                                to="/login"
                                className="from-cyan-900 font-semibold hover:underline"
                            >
                                Se connecter
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Partie droite - Illustration */}
                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-12 flex flex-col justify-center text-white">
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-4">Bienvenue !</h2>
                        <p className="text-blue-100">
                            Créez votre compte pour accéder à toutes nos fonctionnalités de sécurité.
                        </p>
                    </div>

                    <img
                        src={ASSETS.IMAGES.REGISTER_ILLUSTRATION}
                        alt="Illustration de la sécurité des mots de passe"
                        className="w-full h-10/12 rounded-2xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
}