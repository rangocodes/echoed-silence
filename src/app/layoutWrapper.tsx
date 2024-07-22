"use client";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {CustomNavbar} from "@/components/ui/Navbar";
import {Footer} from "@/components/ui/Footer";

export default function AppLayoutWrapper(
    {
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <NextUIProvider className="flex flex-col">
            <CustomNavbar/>
            <div className="mb-20">{children}</div>
            <Footer/>
        </NextUIProvider>
    );
}
