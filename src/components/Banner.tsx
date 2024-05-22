import { Link } from "@/navigation";
import { Button } from "./Button";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Banner() {

    const t = await getTranslations('Banner');

    return (
        <main className='w-screen flex flex-col items-center justify-center gap-12 pt-20 pr-bannerSpecial pb-20 pl-bannerSpecial border-b-2 border-neutral-950 mobile:border-b-2 mobile:w-full mobile:px-6 mobile:py-20 mobile:justify-center mobile:items-center tablet:w-full tablet:px-10 tablet:py-40 tablet:justify-center tablet:items-center'>
            <section className='flex flex-col justify-center items-center w-bannerWidth gap-4 mobile:w-full tablet:w-full '>
                <h1 className='text-6xl font-bold text-center mobile:text-4xl tablet:text-5xl'>
                    {t('title')}
                </h1>
                <p className='text-2xl font-medium text-center mobile:text-lg'>{t('subtitle')}</p>
            </section>
            <Link href='/waitinglist'>
                <Button width={80} height={80} imgSrc={'/right_arrow_white.png'} imgAlt='right arrow white' className='flex items-center bg-neutral-950 text-white justify-between w-buttonNav pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950 mobile:w-buttonMobileMain mobile:text-xs mobile:py-0 mobile:h-12 mobile:font-medium'>

                    <span className="block mobile:hidden">{t('buttonProbar')}</span>
                    <span className="hidden mobile:block">{t("buttonProbar")}</span>
                </Button>

            </Link>
            <Image src='/coin_banner.png' alt='coin banner' height={300} width={300} />
        </main>
    )
}