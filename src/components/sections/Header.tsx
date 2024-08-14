import Image from "next/image"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import EscritorioLogo from "public/images/Logo.png"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { IoMdMenu } from "react-icons/io";
import { EnumSections } from "@/constants/sections"

export default function Header() {
    return (
        <header className="max-w-screen-xl z-10 w-full left-1/2 -translate-x-1/2 absolute mx-auto justify-center flex md:justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger className=" h-16 w-16 absolute left-6 md:hidden rounded-full bg-gray-600 flex justify-center items-center">
                    <IoMdMenu size={32} className="text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <a href={`#${EnumSections.HERO}`}>
                            Início
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href={`#${EnumSections.ABOUT}`}>
                            Sobre
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href={`#${EnumSections.GROUPS}`}>
                            Destaques
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href={`#${EnumSections.PROJECTS}`}>
                            Projetos
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a href={`#${EnumSections.MEMBERS}`}>
                            Membros
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative w-72 h-32">
                <Image src={EscritorioLogo} alt="Logo do Escritório de Engenharia" fill />
            </div>
            <nav className="hidden md:block">
                <ul className="flex gap-6 h-4 justify-center items-center px-4 lg:px-0">
                    <Button variant="link" asChild className="px-0">
                        <li>
                            <a href={`#${EnumSections.HERO}`}>
                                Início
                            </a>
                        </li>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button variant="link" asChild className="px-0">
                        <li>
                            <a href={`#${EnumSections.ABOUT}`}>
                                Sobre
                            </a>
                        </li>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button variant="link" asChild className="px-0">
                        <li>
                            <a href={`#${EnumSections.GROUPS}`}>
                                Destaques
                            </a>
                        </li>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button variant="link" asChild className="px-0">
                        <li>
                            <a href={`#${EnumSections.PROJECTS}`}>
                                Projetos
                            </a>
                        </li>
                    </Button>
                    <Separator orientation="vertical" />
                    <Button variant="link" asChild className="px-0">
                        <li>
                            <a href={`#${EnumSections.MEMBERS}`}>
                                Membros
                            </a>
                        </li>
                    </Button>
                </ul>
            </nav>
        </header>
    )
}