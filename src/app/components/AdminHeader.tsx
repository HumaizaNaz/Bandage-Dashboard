"use client";

import { ShoppingBag } from "lucide-react"; // Use shopping bag icon
import { logout } from "../../services/auth"; // Import the logout function
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";

export function AdminHeader() {
  const router = useRouter();

  // ✅ Logout handler
  const handleLogout = async () => {
    await logout(); // Call the server function
    router.push("/sign-in"); // Redirect to sign-in page after logout
  };

  return (
    <header className="flex h-16 items-center gap-4 border-b border-blue-500 bg-black px-6">
      <div className="flex text-blue-600 items-center gap-2 font-semibold">
        <div className="size-8 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-blue-800 text-primary-foreground grid place-items-center">
          <ShoppingBag size={24} />
        </div>
        <span className="text-white">Bandage</span>
      </div>
      <div className="flex-1"></div>

      {/* ✅ User Profile and Logout Button */}
      <div className="flex items-center gap-4">
        <Button variant="destructive" onClick={handleLogout} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 transition">
          Logout
        </Button>
      </div>
    </header>
  );
}
