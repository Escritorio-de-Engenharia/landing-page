"use client"

import Image from "next/image"
import HeroBG from "public/images/HeroBG.png"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel"
import { Button } from "../ui/button"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { EnumSections } from "@/constants/sections"

export default function Hero() {
    const [api, setApi] = useState<CarouselApi>()

    return (
        <main id={EnumSections.HERO} className="relative min-h-screen w-screen flex justify-center items-center">
            <Image src={HeroBG} alt="Imagem de fundo da seção Hero" fill className="object-cover bg-center object-center" />
            {/* Carousel */}
            <Carousel setApi={setApi} className="z-10 w-full max-w-screen-xl h-full relative" opts={{
                loop: true,
                align: "center"
            }}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            <span className="text-5xl text-white font-semibold">Bem vindo ao Escritório de Engenharia</span>
                            <p className="text-white text-lg font-light max-w-[64ch]">
                                Grupo de engenharia voltado para o desenvolvimento de projetos do Cesupa
                            </p>
                            <Button>Saber mais...</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            <span className="text-5xl text-white font-semibold">Sobre nós</span>
                            <p className="text-white text-lg font-light max-w-[64ch]">
                                Nós somos o Escritório de Engenharia, fazemos projetos e criamos discussões relacionadas a área da tecnologia aliada a engenharia
                            </p>
                            <Button>Veja Mais...</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            <span className="text-5xl text-white font-semibold">Nossos projetos</span>
                            <p className="text-white text-lg font-light max-w-[64ch]">
                                Fazemos projetos e pesquisas voltados a muitas áreas da tecnologia e engenharias, com o intuito de sempre estar colaborando com a sociedade usando de tudo que estiver ao nosso alcance
                            </p>
                            <Button>Projetos</Button>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            <span className="text-5xl text-white font-semibold">Membros do Escritório</span>
                            <p className="text-white text-lg font-light max-w-[64ch]">
                                Os membros do escritório de engenharia do Cesupa são altamente capacitados para resolver os problemas designados a eles.
                            </p>
                            <Button>Nossos membros</Button>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <button onClick={() => {
                    api?.scrollPrev()
                }} className="absolute hidden top-1/2 -translate-y-1/2 border border-primary justify-center items-center h-12 w-12 rounded-full text-white left-0 xl:flex"><FaArrowLeft size={32}/></button>
                <button onClick={() => {
                    api?.scrollNext()
                }} className="absolute hidden top-1/2 -translate-y-1/2 border border-primary justify-center items-center h-12 w-12 rounded-full text-white right-0 xl:flex"><FaArrowRight size={32}/></button>
            </Carousel>
        </main>
    )
}