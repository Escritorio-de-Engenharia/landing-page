import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import ProjectsBG from "public/images/ProjectsBG.png"
import { EnumSections } from "@/constants/sections";

export default function Projects() {
    return (
        <section id={EnumSections.PROJECTS} className="relative">
            <Image src={ProjectsBG} alt="Imagem de fundo da seção de Projetos" className="object-cover object-center" fill/>
            <div className="relative max-w-screen-xl py-16 px-4 z-10 mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between lg:px-0">
                <h3 className="text-3xl text-white text-center font-semibold">O que nós fazemos?</h3>
                <Separator orientation="horizontal" className="max-w-24 md:hidden" />
                <Separator orientation="vertical" className="hidden md:block md:h-12" />
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <p className="font-extralight max-w-[48ch] text-white text-lg text-center">Pesquisas, protótipos e desenvolvimento de projetos voltados as áreas das engenharias</p>
                    <Button>VER PROJETOS</Button>
                </div>
            </div>
        </section>
    )
}