import Image from "next/image"
import LogoEscritorio from "public/images/LogoEscritorioBlack.png"
import LogoCesupa from "public/images/LogoCesupaBlack.png"
import LogoArgo from "public/images/LogoArgoBlack.png"
import { EnumSections } from "@/constants/sections"

export default function Partners() {
    return (
        <section id={EnumSections.PARTNERS} className="bg-[#3D3D3D]">
            <div className="mx-auto w-full max-w-screen-xl justify-around px-8 xl:px-0 flex flex-wrap gap-8 py-10">
                <div className="w-full max-w-56 md:w-1/3 flex justify-center items-center">
                    <Image src={LogoEscritorio} alt="Logo Escritorio" />
                </div>
                <div className="w-full max-w-56 md:w-1/3 flex justify-center items-center">
                    <Image src={LogoCesupa} alt="Logo Cesupa" />
                </div>
                <div className="w-full max-w-56 md:w-1/3 flex justify-center items-center">
                    <Image src={LogoArgo} alt="Logo Argo" />
                </div>
            </div>
        </section>
    )
}