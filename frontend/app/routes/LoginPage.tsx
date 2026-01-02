/**
 * Page de connexion - LoginPage
 * Design inspiré de Payoneer avec split screen
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Lock } from 'lucide-react';
import { ASSETS } from '~/assets';
import { useAuth } from '~/features/auth/useAuth';
/**
 * Composant LoginPage
 */
export default function LoginPage() {
    const { login, loading, error } = useAuth(); // ✅ Appel du hook ICI
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    /**
     * Gestion de la soumission du formulaire
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await login(formData.username, formData.password);

        if (result.success) {
            navigate('/');
        }
    };

    return (
        <div className=" bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Partie gauche - Illustration (style Payoneer) */}
                <div className="bg-linear-to-br from-gray-800 to-gray-900 p-12 flex flex-col justify-center text-white">


                    <img
                        src={ASSETS.IMAGES.LOGIN_ILLUSTRATION}
                        alt="Illustration de la sécurité des mots de passe"
                        className="w-full h-10/12 rounded-2xl object-cover"
                    />
                </div>

                {/* Partie droite - Formulaire */}
                <div className="p-12 flex flex-col justify-center">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Connexion</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Champ Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nom d'utilisateur
                            </label>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                placeholder="Votre nom d'utilisateur"
                                required
                            />
                        </div>

                        {/* Champ Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                    placeholder="Votre mot de passe"
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

                        {/* Message d'erreur */}
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                ⚠️ {error}
                            </div>
                        )}

                        {/* Bouton de connexion */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-linear-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Connexion en cours...' : 'Soumettre'}
                        </button>

                        {/* Lien vers inscription */}
                        <div className="text-center text-sm text-gray-600">
                            Pas encore de compte ?{' '}
                            <Link
                                to="/register"
                                className="from-cyan-800  font-semibold hover:underline"
                            >
                                Créer un compte
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}