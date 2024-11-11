import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
    return (
        <>
            <header className="flex justify-between items-center ">
                <div className="flex items-center gap-5">
                    <Link href={'/'} className="text-2xl font-extrabold text-white">
                        Devstore
                    </Link>

                    <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
                        <Search className="w-5 h-6 text-zinc-600"/>
                        <input type="text" placeholder="buscar produtos" className="flex-1 bg-transparent outline-none placeholder:text-zinc-600 " />
                    </form>
                  
                </div>
                

                <nav className="flex items-center gap-5">
                    <div className=" flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4"/>
                        <span className="text-sm">Cart (0)</span>
                    </div>
                    <Link href={'/account'} className="flex items-center gap-2 text-2xl font-extrabold text-white hover:underline">
                        <span className="text-sm font-bold">Accont</span>
                        <img
                        src="https://github.com/rocketseat.png" alt="" width={32} height={32} className="rounded-full"
                        />        
                    </Link>
                </nav>
            </header>
        </>
    );
}