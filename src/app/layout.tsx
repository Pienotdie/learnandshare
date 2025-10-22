import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mini Team Directory",
    description: "Kleine Demo-App mit Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
            <strong>Learn and Share</strong>
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/users">Users</Link>
            </nav>
        </header>
        <main className="container">{children}</main>
        </body>
        </html>
    );
}
