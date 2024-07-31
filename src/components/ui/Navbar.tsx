'use client';
import {Button, Navbar} from "@nextui-org/react";
import {NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {FaUserPlus} from "react-icons/fa6";

export function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
    ];

    const navItems = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Victim's Profiles",
            link: "/profiles",
        },
        {
            title: "Stories",
            link: "/stories",
        },
        {
            title: "News",
            link: "/news",
        }
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="flex gap-4 items-center">
                    <Image
                        className="h-[40px] w-[40px] border border-primary p-1 rounded-lg flex-shrink-0 md:h-[50px] md:w-[50px] scale-x-[-1]"
                        src={"/images/logo.svg"} alt={"logo"} width={200} height={200}/>
                    <h2 className="font-bold text-inherit text-xl md:text-2xl uppercase">Echoed Silence</h2>
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
                    <Link href={"/profiles/add"}>
                        <Button color="primary" href="#" variant="solid" startContent={<FaUserPlus/>}>Add</Button>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button color="primary" href="#" variant="flat">Login</Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {navItems?.map((item, index) => (
                    <NavbarMenuItem key={`${item?.title}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item?.link || ''}
                        >
                            {item?.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
