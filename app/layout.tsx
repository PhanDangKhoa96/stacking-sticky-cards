import type {Metadata} from "next";
import "./globals.css";
import {LenisProvider} from "@/providers/LenisProvider";
import {GsapProvider} from "@/providers/GsapProvider";
import {cn} from "@/lib/utilities/cn";
import {Header} from "@/components/global/Header";
import {geist} from "@/lib/fonts";

export const metadata: Metadata = {
    title: "KP Playground - Stacking Sticky Cards",
    description: "A personal experiment by Khoa Phan exploring stacking sticky card scroll effects using GSAP and Lenis, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("antialiased", geist.variable, "font-geist")}>
                <Header />
                <LenisProvider>{children}</LenisProvider>
                <GsapProvider scrollTrigger />
            </body>
        </html>
    );
}
