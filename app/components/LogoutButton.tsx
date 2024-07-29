"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
    return ( 
        <div 
        onClick={() => signOut()}
        className="flex flex-row gap-2 font-mono hover:text-zinc-400 cursor-pointer">
        Logout <LogOut size={24} />  
        </div>
     );
}
 
export default LogoutButton;