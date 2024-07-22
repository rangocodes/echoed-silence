import type {Metadata} from "next";
import {Inter, Mulish} from "next/font/google";
import "./globals.css";
import AppLayoutWrapper from "@/app/layoutWrapper";

const mulish = Mulish({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Silent Voices",
    description: "Generated by create next app",
};

export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={mulish.className}><AppLayoutWrapper>{children}</AppLayoutWrapper></body>
        </html>
    );
}