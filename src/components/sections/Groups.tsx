import { Button } from "../ui/button";
import Image from "next/image";
import EletronicaIcon from "public/images/EletronicaIcon.png"
import ProgramacaoIcon from "public/images/ProgramacaoIcon.png"
import RoboticaIcon from "public/images/RoboticaIcon.png"
import { EnumSections } from "@/constants/sections";

export default function Groups() {
    return (
        <section id={EnumSections.GROUPS} className="mx-auto w-full max-w-screen-xl px-8 xl:px-0 flex flex-col gap-16 py-14">
            <div className="flex flex-col gap-4 items-center justify-center md:items-start">
                <h3 className="border-b-2 border-primary text-5xl w-fit text-white py-4">Grupos</h3>
                <span className="text-white font-extralight text-xl text-center">Equipes de atuação para a divisão de projetos</span>
            </div>
            <div className="flex flex-wrap items-center justify-around gap-12 xl:justify-between">
                <div className="flex flex-col items-center justify-center max-w-96 md:flex-row md:max-w-[580px] md:gap-6">
                    <div className="relative w-40 h-40">
                        <Image src={ProgramacaoIcon} alt="Ícone do grupo de programação" fill />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 flex-1">
                        <h4 className="text-xl font-semibold text-white">Programação</h4>
                        <p className="text-base text-center font-thin text-white mb-3">Este grupo objetiva desenvolvimento de sistemas Web, Desktop, Mobile, etc para atender a sociedade em geral. Além de programar sistemas chão de fábrica para atender clientes da indústria.</p>
                        <Button variant="outline">Ler mais...</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center max-w-96 md:flex-row md:max-w-[580px] md:gap-6">
                    <div className="relative w-40 h-40">
                        <Image src={EletronicaIcon} alt="Ícone do grupo de eletrônica" fill />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 flex-1">
                        <h4 className="text-xl font-semibold text-white">Eletrônica</h4>
                        <p className="text-base text-center font-thin text-white mb-3">
                            O grupo de eletrônica tem como objetivo principal a criação de projetos utilizando componentes eletrônicos em placas prototipadas, com foco no desenvolvimento de soluções de automação e em áreas correlatas. Os membros do grupo se reúnem regularmente para discutir ideias, compartilhar conhecimentos e colaborar na construção de protótipos que possam ser aplicados em diversas situações práticas.
                        </p>
                        <Button variant="outline">Ler mais...</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center max-w-96 md:flex-row md:max-w-[580px] md:gap-6">
                    <div className="relative w-40 h-40">
                        <Image src={RoboticaIcon} alt="Ícone do grupo de robótica" fill />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 flex-1">
                        <h4 className="text-xl font-semibold text-white">Robótica</h4>
                        <p className="text-base text-center font-thin text-white mb-3">
                            O Grupo de Robótica dedica-se ao desenvolvimento de robôs autônomos e teleguiados, além da criação de aplicativos utilizados nesses projetos. Trabalhando em estreita colaboração com o Grupo de Eletrônica, o grupo busca integrar conhecimentos e habilidades para construir soluções inovadoras e eficientes.
                        </p>
                        <Button variant="outline">Ler mais...</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}