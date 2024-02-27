"use client";

// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

import { Header } from "./header";

// Font files can be colocated inside of `pages`
const futura = localFont({ src: "../public/futura_medium.woff" });

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <html lang="en" className={inter.className}>
            <body className={``}>
                <img
                    src="./ReLiveWatermark.png"
                    className="absolute align-top p-0 m-0 items-center"
                />
                <Header connectWallet={true} />
                {children}
            </body>
        </html>
    );
}
