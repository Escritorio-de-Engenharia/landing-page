"use client"

import { members } from "@/model/members"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useState } from "react"
import { MemberType } from "@/model/members"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { EnumSections } from "@/constants/sections"

export default function Members() {
    const [api, setApi] = useState<CarouselApi>()

    return (
        <section id={EnumSections.MEMBERS} className="mx-auto w-full max-w-screen-xl px-8 xl:px-0 flex flex-col gap-16 py-14">
            <h3 className="border-b-2 border-primary text-5xl w-fit text-white py-4">Membros</h3>
            <Carousel setApi={setApi} className="z-10 w-full max-w-screen-xl h-full relative" opts={{
                loop: true,
                align: "center",
            }}>
                <CarouselContent>
                    {
                        members.map((member, index) => (
                            <CarouselItem className="sm:basis-1/2 md:basis-1/3" key={index}>
                                <MemberCard  {...member} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <button onClick={() => {
                    api?.scrollPrev()
                }} className="absolute hidden top-1/2 -translate-y-1/2 border border-primary justify-center items-center h-12 w-12 rounded-full text-white left-0 lg:flex"><FaArrowLeft size={32} /></button>
                <button onClick={() => {
                    api?.scrollNext()
                }} className="absolute hidden top-1/2 -translate-y-1/2 border border-primary justify-center items-center h-12 w-12 rounded-full text-white right-0 lg:flex"><FaArrowRight size={32} /></button>
            </Carousel>
        </section>
    )
}

function MemberCard({ description, name, avatarURL, groups }: MemberType) {
    return (
        <div className="w-full max-w-72 mx-auto flex flex-col gap-3 items-center justify-start py-7 px-5 bg-[#3D3D3D]">
            <Avatar>
                <AvatarFallback>
                    <span>{name[0]}</span>
                </AvatarFallback>
                <AvatarImage src={avatarURL} alt={`Avatar do ${name}`} />
            </Avatar>
            <p className="text-sm text-white text-center font-light">
                {description}
            </p>
            <div>
                <span className="text-xl font-bold text-white text-center">{name}</span>
                <div className="flex flex-col gap-1">
                    {groups?.map((group, index) => (
                        <span className="text-white text-sm font-medium text-center" key={index}>{group}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}