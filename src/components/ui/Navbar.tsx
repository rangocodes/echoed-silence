'use client';
import {Button, Navbar} from "@nextui-org/react";
import {NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const navItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Victim's Profiles",
            link: "profiles",
        },
        {
            title: "Stories",
            link: "stories",
        },
        {
            title: "News",
            link: "news",
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex gap-4 items-center">
                    <Image className="h-[40px] w-[40px] border border-primary p-1 rounded-lg flex-shrink-0 md:h-[50px] md:w-[50px] scale-x-[-1]" src={"/images/logo.svg"} alt={"logo"} width={200} height={200}/>
                    <h2 className="font-bold text-inherit text-xl md:text-2xl uppercase">Silent Voices</h2>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                {
                    navItems?.map((item, i) => (
                        <NavbarItem key={i}>
                            <Link color="foreground" aria-current="page" href={item?.link || '#'}>
                                {item?.title}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end">
                {/*<NavbarItem className="hidden lg:flex">*/}
                {/*    <Link href="#">Login</Link>*/}
                {/*</NavbarItem>*/}
                <NavbarItem>
                    <Button color="primary" href="#" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems?.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
