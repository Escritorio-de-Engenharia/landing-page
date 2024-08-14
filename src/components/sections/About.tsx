import { Button } from "../ui/button";
import { EnumSections } from "@/constants/sections";

export default function About() {
    return (
        <section id={EnumSections.ABOUT} className="mx-auto w-full max-w-screen-xl px-8 xl:px-0 flex flex-col gap-16 py-14">
            <h3 className="border-b-2 border-primary text-5xl w-fit text-white py-4">Sobre nós</h3>
            <div>
                <p className="text-base text-white text-left font-light">
                    Pariatur deserunt ea incididunt ad proident. Sunt quis deserunt ullamco et pariatur esse ea esse et ullamco ad elit magna. Sint tempor voluptate magna laboris. In duis reprehenderit ipsum irure nostrud aliqua proident adipisicing anim adipisicing do consectetur qui incididunt. Minim reprehenderit veniam qui commodo minim dolor officia esse cupidatat fugiat fugiat.
                    <br />
                    <br />
                    Eu dolore incididunt in elit laborum do tempor veniam fugiat id. Cillum Lorem sit pariatur proident voluptate non commodo non id exercitation exercitation ullamco dolore. Aute elit Lorem tempor deserunt pariatur elit do sit consectetur. Minim sunt magna tempor tempor. Nulla consectetur pariatur irure mollit occaecat ipsum cillum velit occaecat ullamco laborum duis proident laborum. Irure Lorem ad duis reprehenderit proident.
                    <br />
                    <br />
                    Lorem sit nostrud consectetur laborum sint. Sint Lorem nostrud amet non reprehenderit dolor. Id non id pariatur quis. Et in labore eiusmod enim velit minim ipsum anim et exercitation cillum magna. Enim tempor consequat sint velit mollit ex.
                </p>
            </div>
            <Button>SAIBA MAIS...</Button>
        </section>
    )
}