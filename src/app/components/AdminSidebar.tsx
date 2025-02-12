import { useState } from "react";
import Link from "next/link";
import {
  BarChart,
  MessageSquare,
  Package,
  ShoppingCart,
  Users,
  Star,
  ClipboardList,
  Bell,
} from "lucide-react";
import { Menu } from "lucide-react"; 
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";

const sidebarLinks = [
  { title: "Dashboard", icon: BarChart, href: "/" },
  { title: "Products", icon: Package, href: "/product-data" },
  { title: "Orders", icon: ShoppingCart, href: "/orders" },
  { title: "Customers", icon: Users, href: "/customers" },
  { title: "Reviews", icon: Star, href: "/reviews" },
  { title: "Customer Feedback", icon: MessageSquare, href: "/customer-feedback" },
  { title: "Comments", icon: ClipboardList, href: "/Comments" },
  { title: "Subscriptions", icon: Bell, href: "/subscriptions" },
];

export function AdminSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon for Mobile */}
      <button
  className="lg:hidden top-18 left-4 text-black text-3xl z-10 fixed transition-colors duration-300"
  onClick={toggleSidebar}
>
  <Menu /> {/* Use the Menu icon */}
</button>

      {/* Sidebar */}
      <aside
        className={`lg:w-64 w-64 fixed top-0 left-0 h-full bg-black border-r border-blue-500 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0 z-20" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-4 p-4">
            {sidebarLinks.map((link) => (
              <Button
                key={link.title}
                asChild
                className="justify-start gap-2 text-blue-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:bg-gradient-to-r active:from-pink-500 active:to-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <Link href={link.href}>
                  {/* Vibrant, playful icons */}
                  <link.icon className="size-5 text-blue-500 hover:text-pink-400" />
                  {link.title}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
