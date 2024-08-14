import Logo from "public/images/Logo.png"
import Image from "next/image"
import { FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { EnumSections } from "@/constants/sections";

export default function Footer() {
    return (
        <footer id={EnumSections.CONTACTS} className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl px-8 xl:px-0 flex flex-col-reverse items-center justify-center gap-16 py-14 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-1 items-center justify-center w-fit">
                    <div className="relative w-72 h-32">
                        <Image src={Logo} alt="Logo do Escritório de Engenharia" fill />
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <a href="https://instagram.com" className="text-white">
                            <FaInstagram size={32} />
                        </a>
                        <a href="https://facebook.com" className="text-white">
                            <FaFacebook size={32} />
                        </a>
                        <a href="http://twitter.com" className="text-white">
                            <FaXTwitter size={32} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 w-full md:flex-row md:items-start lg:w-fit lg:gap-20">
                    <div className="space-y-3">
                        <h5 className="text-base text-white font-semibold border-b-2 border-white py-1">Navegação</h5>
                        <nav>
                            <ul className="space-y-1">
                                <a href={`#${EnumSections.HERO}`}>
                                    <li className="text-white text-sm font-light text-center flex items-center justify-start gap-2">
                                        <IoIosArrowForward size={24} />
                                        Início
                                    </li>
                                </a>
                                <a href={`#${EnumSections.ABOUT}`}>
                                    <li className="text-white text-sm font-light text-center flex items-center justify-start gap-2">
                                        <IoIosArrowForward size={24} />
                                        Sobre
                                    </li>
                                </a>
                                <a href={`#${EnumSections.GROUPS}`}>
                                    <li className="text-white text-sm font-light text-center flex items-center justify-start gap-2">
                                        <IoIosArrowForward size={24} />
                                        Destaques
                                    </li>
                                </a>
                                <a href={`#${EnumSections.PROJECTS}`}>
                                    <li className="text-white text-sm font-light text-center flex items-center justify-start gap-2">
                                        <IoIosArrowForward size={24} />
                                        Projetos
                                    </li>
                                </a>
                                <a href={`#${EnumSections.CONTACTS}`}>
                                    <li className="text-white text-sm font-light text-center flex items-center justify-start gap-2">
                                        <IoIosArrowForward size={24} />
                                        Contato
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h5 className="text-base text-white font-semibold border-b-2 border-white py-1">Informações de contato</h5>
                        <div>
                            <div className="space-y-1">
                                <a className="text-white text-sm font-light text-center flex items-center justify-start gap-4">
                                    <FaPhone size={16} />
                                    Telefone
                                </a>
                                <a className="text-white text-sm font-light text-center flex items-center justify-start gap-4">
                                    <IoMdMail size={16} />
                                    Endereço
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}