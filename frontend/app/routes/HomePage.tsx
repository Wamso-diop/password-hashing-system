/**
 * Page d'accueil - HomePage
 * Présentation du projet avec hero section et fonctionnalités
 * Design inspiré de SmartKYC
 */

import { Link } from 'react-router';
import { Home, Lock, User } from 'lucide-react';
import { ASSETS } from '~/assets';

import { useAuth } from '~/features/auth/useAuth';
import {useEffect} from "react";

export default function HomePage() {
    const {user} = useAuth();

    return (
        <div className="bg-linear-to-br from-blue-50 to-purple-50">
            {/* Section Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Texte principal */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                            Application Web Sécurisée pour la
                            {' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-700 to-cyan-900">
                Protection des Mots de Passe
              </span>
                        </h1>

                        <p className="text-lg text-gray-600">
                            Une application pédagogique conçue pour démontrer les principes fondamentaux de la sécurité des données sensibles, à travers le hachage et la protection des mots de passe.
                        </p>

                        {/*/!* Boutons d'action *!/*/}
                        {/*<div className="flex space-x-4">*/}
                        {/*    {user ? (*/}
                        {/*        <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">*/}
                        {/*            Commencer →*/}
                        {/*        </button>*/}
                        {/*    ) : (*/}
                        {/*        <>*/}
                        {/*            <Link*/}
                        {/*                to="/register"*/}
                        {/*                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"*/}
                        {/*            >*/}
                        {/*                Tester l’application →*/}
                        {/*            </Link>*/}
                        {/*            <Link*/}
                        {/*                to="/login"*/}
                        {/*                className="border-2 border-yellow-500 text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-all"*/}
                        {/*            >*/}
                        {/*                En savoir plus*/}
                        {/*            </Link>*/}
                        {/*        </>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                    </div>

                    {/* Image Hero - Espace réservé */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl h-96">
                            {/* Placeholder pour l'image */}
                            <img
                                src={ASSETS.IMAGES.HERO_BANNER}
                                alt="Illustration de la sécurité des mots de passe"
                                className="w-full h-full object-cover"
                            />
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
}