"use client";
import Link from "next/link";
import Button from "./generics/Button";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-slate-50 top-0 w-full flex justify-between items-center">
            <img src="/logos/cap-minas-logo.png" alt="Logotipo da CAP Minas" className="h-15 md:h-18 w-auto" />
            <nav className="hidden md:flex" aria-label="Menu principal">
                <Link href="/#" className="mr-4 hover:scale-105 transition-all duration-300" title="Página inicial da CAP Minas">
                    Home
                </Link>
                <Link href="/#about" className="mr-4 hover:scale-105 transition-all duration-300" title="Seção Sobre nós da CAP Minas">
                    Sobre nós
                </Link>
                <Link href="/#services" className="hover:scale-105 transition-all duration-300" title="Seção Serviços da CAP Minas">
                    Serviços
                </Link>
                <Link href="/#differentials" className="ml-4 hover:scale-105 transition-all duration-300" title="Seção Diferenciais da CAP Minas">
                    Diferenciais
                </Link>
            </nav>
            <Button className="hidden md:inline-block mr-4" cls="primary" aria-label="Entrar em contato com a CAP Minas">
                Entrar em contato
            </Button>

            <button onClick={toggleMenu} className="md:hidden">
                <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
            </button>
            {isMenuOpen && (
                <div className="absolute top-18 right-2 w-fit p-4 rounded-sm bg-white shadow-md z-10 flex flex-col justify-center py-4 md:hidden" role="dialog" aria-modal="true" aria-label="Menu móvel">
                    <nav className="flex flex-col items-center w-full" aria-label="Menu principal móvel">
                        <Link href="/#" className="mb-2" title="Página inicial da CAP Minas" onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link href="/#about" className="mb-2" title="Seção Sobre nós da CAP Minas" onClick={toggleMenu}>
                            Sobre nós
                        </Link>
                        <Link href="/#services" className="mb-2" title="Seção Serviços da CAP Minas" onClick={toggleMenu}>
                            Serviços
                        </Link>
                        <Link href="/#differentials" className="mb-2" title="Seção Diferenciais da CAP Minas" onClick={toggleMenu}>
                            Diferenciais
                        </Link>
                        <Button className="mt-4 mx-auto text-sm md:text-2xl"  cls="primary" aria-label="Entrar em contato com a CAP Minas">
                            Entrar em contato
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
