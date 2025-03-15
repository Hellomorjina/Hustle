import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import logo from "../../assests/logo.png";
const Navber = () => {
  return (
    <>
      <header className="py-4 shadow-md ">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* logo */}
          <div className="text-xl font-bold">
            <Image src={logo} width={170} height={150} alt="logo" />
          </div>

          {/* desktopMenu */}
          <NavigationMenu className="hidden lg:flex text-sm">
            <NavigationMenuList>
              <NavigationMenuItem className="flex items-center space-x-8">
                <NavigationMenuLink
                  href="/Features"
                  className="hover:text-red-500"
                >
                  Features
                </NavigationMenuLink>
                <NavigationMenuLink href="/Compare">
                  <NavigationMenuTrigger className="text-gray-700">
                    Compare
                  </NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/support"
                  className="hover:text-red-500"
                >
                  Support
                </NavigationMenuLink>
                <NavigationMenuLink href="/Blog">
                  <NavigationMenuTrigger className="text-gray-700">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* color switcher and login button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2  text-[#5BB5A2]">Login</span>
            </div>
            <Button variant="outline" className="bg-[#5BB5A2] text-[#fffff]">Open Account</Button>
          </div>
          {/* Mobile menu */}
          <MobileMenu />
        </nav>
      </header>
    </>
  );
};

export default Navber;
