import type { Metadata } from 'next';
import { Rowdies } from 'next/font/google';
import './globals.css';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const rowdies = Rowdies({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'JonDepannage - Dépannage, Remorquage, Transport 24h/24 7j/7',
    description: "JonDepannage propose des services de dépannage, remorquage et transport d'urgence 24h/24 et 7j/7 dans toute la région Provence-Alpes-Côte d'Azur. Interventions rapides et professionnelles pour tous vos besoins de mobilité, avec un service fiable et efficace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const canonicalUrl = 'https://jondepannage.tsukoyachi.ovh/';

    return (
        <html lang="fr">
            <head>
                <Head>
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
            </head>
            <body className={rowdies.className}>{children}</body>
        </html>
    );
}
