import { Link } from "@/navigation";
import { Button } from "./Button";
import { getTranslations } from "next-intl/server";

export async function Hero3() {

    const t = await getTranslations('Hero3');

    return (
        <section className='flex flex-col gap-12 justify-center items-center p-20 border-b-2 border-neutral-95 w-full mobile:py-20 mobile:px-6 mobile:w-full tablet:py-24 tablet:px-12 tablet:w-full'>
            <h4 className='text-lg leading-benefitsh2 text-center font-medium bg-textHero rounded-textHero pt-1.5 pb-1.5 pr-4 pl-4'>{t("title")}</h4>
            <section className='flex w-full justify-center items-center gap-8 mobile:gap-24 mobile:flex-col mobile:w-full tablet:flex-col tablet:w-full'>
                <article className='flex gap-5 flex-col items-center w-articleHero3 text-center h-articleHero3 mobile:w-full'>
                    <h2 className='font-bold text-4xl'>{t("artTitle1")}</h2>
                    <p className='mobile:text-lg tablet:text-lg'>{t("articleP1")}</p>
                </article>
                <article className='flex gap-5 flex-col  items-center w-articleHero3 text-center h-articleHero3 mobile:w-full'>
                    <h2 className='font-bold text-4xl'>{t("artTitle2")}</h2>
                    <p className='mobile:text-lg tablet:text-lg'>{t("articleP2")}</p>
                </article>
                <article className='flex gap-5 flex-col  items-center w-articleHero3 text-center h-articleHero3 mobile:w-full'>
                    <h2 className='font-bold text-4xl'>{t("artTitle3")}</h2>
                    <p className='mobile:text-lg tablet:text-lg'>{t("articleP3")}</p>
                </article>
            </section>

            <Link href='/waitinglist'>
                <Button imgSrc={'/right_arrow_white.png'} width={80} height={80} imgAlt='right arrow white' className='mt-20 flex items-center bg-neutral-950 text-white justify-between w-buttonNav pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950 mobile:w-buttonMobileMain' >
                    <span className="block mobile:hidden">{t('button')}</span>
                    <span className="hidden mobile:block">{t('buttonMobile')}</span>
                </Button>

            </Link>
        </section>
    )
}