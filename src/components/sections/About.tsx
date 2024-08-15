import { Button } from "../ui/button";
import { EnumSections } from "@/constants/sections";

export default function About() {
    return (
        <section id={EnumSections.ABOUT} className="mx-auto w-full max-w-screen-xl px-8 xl:px-0 flex flex-col gap-16 py-14">
            <h3 className="border-b-2 border-primary text-5xl w-fit text-white py-4">Sobre nós</h3>
            <div>
                <p className="text-base text-white text-left font-light">
                    Reunindo alunos dos cursos de Ciência da Computação, Engenharia de Computação e Engenharia de Produção, o Escritório de Engenharia oferece diversos serviços na área, permitindo que estudantes aprimorem sua formação através da aplicação dos conhecimentos adquiridos nas aulas. Os alunos participantes da Unidade são selecionados a cada semestre.
                    <br />
                    <br />
                    Somos um grupo unido orientado pelos professores MSc. Pedro Henrique Sales Girotto e MSc. Luciana de Azevedo Vieira, junto a coordenadora de Engenharia de Computação e Ciência da Computação MSc. Alessandra Natasha, que trabalham em conjunto com os alunos para oferecer o melhor ensino e a melhor formação. Nossa missão é ajudar os alunos a se formarem em áreas de conhecimento e experiência que os aperfeiçoem.
                </p>
            </div>
            <Button>SAIBA MAIS...</Button>
        </section>
    )
}