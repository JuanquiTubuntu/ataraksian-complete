import { Button } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";

export default function RegistroCompleto() {

    const t = useTranslations('RegistroCompleto');

    return (
        <div>
            <section className="py-registerSectionY background-pattern flex justify-center items-center w-full mobile:p-10 h-screen">
                <div className="border-2 border-neutral-950 w-registerForm bg-white rounded-registerForm flex flex-col items-center justify-between gap-4 pt-formT pb-formR px-formR mobile:w-full mobile:p-8 mobile:gap-1">
                    <span className='text-xl text-center font-medium bg-textHero rounded-textHero py-1.5 px-4 mobile:text-lg mobile:py-1.5 mobile:px-4'>5/5</span>
                    <Image src="/registrocompleto.png" alt="mail sent" width={180} height={180} />
                    <h1 className="w-paragraphWaitingList leading-mobileHigh text-5xl mb-20 font-bold text-center mobile:w-full mobile:mb-8 mobile:text-2xl">{t('title')}</h1>
                    <div className="flex items-start justify-start gap-2 w-full mobile:mb-4">
                        <p className="text-center text-sm">{t('paragraph')}</p>
                    </div>
                    <Link className="w-full" href='/'>
                        <Button
                            className={`w-paragraphWaitingList flex justify-between items-center bg-neutral-950  px-6 h-12 text-white font-bold rounded-lg mobile:w-full mobile:text-sm gap-4`}
                            imgSrc='/right_arrow_white.png'
                            imgAlt="White right arrow"
                            width={60}
                            height={60}
                        >
                            {t('button')}
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}