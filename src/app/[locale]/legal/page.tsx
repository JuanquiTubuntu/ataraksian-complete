import { Footer, Navbar } from "@/components";
import { LegalNotice } from "@/components/LegalNotice";

export const metadata = {
    title: "Ataraksian - Aviso Legal",
    description: "Aviso legal de la web de la empresa",

}

export default function Legal() {

    return (
        <>
            <Navbar showButton={false} />
            <LegalNotice />
            <Footer />
        </>
    )
}