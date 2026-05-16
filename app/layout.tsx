import type {Metadata} from "next";
import "./globals.css";
import {LenisProvider} from "@/providers/LenisProvider";
import {cn} from "@/lib/utilities/cn";
import {Header} from "@/components/global/Header";
import {DemoNav} from "@/components/global/DemoNav";
import {syne, dmSans} from "@/lib/fonts";

export const metadata: Metadata = {
    title: "KP Playground - Stacking Sticky Cards",
    description:
        "A personal experiment by Khoa Phan exploring stacking sticky card scroll effects using GSAP and Lenis, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("antialiased bg-[#121212]", syne.variable, dmSans.variable, "font-dm-sans")}>
                <Header />
                <DemoNav />
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
