'use client';
import { Button } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FacecamPage() {

    const t = useTranslations('Cam');

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const router = useRouter();

    const handleRedirect = () => {
        router.push('/index.html');
    };

    return (
        <section className="py-registerSectionY background-pattern flex justify-center items-center w-full mobile:p-10 h-screen">
            <div className="border-2 border-neutral-950 w-registerForm bg-white rounded-registerForm flex flex-col items-center justify-between gap-4 pt-formT pb-formR px-formR mobile:w-full mobile:p-8 mobile:gap-1">
                <Link className='self-start cursor-pointer' href="/register">
                    <Image src="/leftarrowblack.png" alt="404" width={24} height={28} />
                </Link>
                <span className='text-xl text-center font-medium bg-textHero rounded-textHero py-1.5 px-4 mobile:text-lg mobile:py-1.5 mobile:px-4'>4/5</span>
                <Image src="/cam.png" alt="mail sent" width={180} height={180} className="mobile:w-28" />
                <h1 className="w-paragraphWaitingList leading-mobileHigh text-5xl mb-20 font-bold text-center mobile:w-full mobile:mb-8 mobile:text-xl">{t('title')}</h1>
                <div className="flex items-start justify-start gap-2 w-full mobile:mb-4">
                    <input
                        type="checkbox"
                        checked={isChecked1}
                        onChange={(e) => setIsChecked1(e.target.checked)}
                    />
                    <p className="mobile:text-xs">{t('check1')}</p>
                </div>
                <div className="flex items-center justify-start gap-2 w-full mobile:mb-4">
                    <input
                        type="checkbox"
                        checked={isChecked2}
                        onChange={(e) => setIsChecked2(e.target.checked)}

                    />
                    <p className="mobile:text-xs">{t('check2')}</p>
                </div>
                <Link className="w-full" href='/sumsub'>
                    <Button
                        className="w-paragraphWaitingList flex justify-between items-center bg-neutral-950  px-6 h-12 text-white font-bold rounded-lg mobile:w-full mobile:text-sm gap-4"
                        imgSrc='/right_arrow_white.png'
                        imgAlt="White right arrow"
                        width={60}
                        height={60}
                        classNameImg="mobile:w-8"
                    >
                        {t('button')}
                    </Button>
                </Link>

            </div>
        </section>
    )
}