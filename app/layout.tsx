import type { Metadata } from 'next';
import { Rowdies } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const rowdies = Rowdies({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://jondepannage.tsukoyachi.ovh'),
    title: 'JonDepannage - Dépannage, Remorquage, Transport 24h/24 7j/7',
    description: "JonDepannage propose dépannage, remorquage et transport d'urgence 24h/24, 7j/7 en région PACA, avec des interventions rapides, fiables et efficaces.",
    alternates: {
        canonical: '/',
        languages: {
            'fr': '/fr',
            'en': '/en',
        },
    }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="fr">
            <body className={rowdies.className}>{children}</body>
        </html>
    );
}
