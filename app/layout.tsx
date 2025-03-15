import type { Metadata } from 'next';
import { Rowdies } from 'next/font/google';
import './globals.css';

const rowdies = Rowdies({ weight: ['300', '400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'JonDepannage',
    description: 'Dépannage, Remorquage, Transport 24h/24 7j/7',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={rowdies.className}>{children}</body>
        </html>
    );
}
