
/**
 * Composant Footer - Pied de page
 * Affiche les informations de copyright et les crédits du projet
 */

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-gray-400">
                    © 2025 Password Hashing System - Projet académique
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    LONTSIE (Backend) • NONGNING (Frontend) • MBAH (Hashing)
                </p>
            </div>
        </footer>
    );
}