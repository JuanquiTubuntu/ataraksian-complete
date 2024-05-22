import { getTranslations } from "next-intl/server";

export async function Hero2() {

    const t = await getTranslations('Hero2');

    return (
        <section className='flex flex-col p-40 justify-center items-center border-b-2 border-neutral-950 mobile:w-full mobile:px-6 mobile:py-20 mobile:gap-0 tablet:w-full tablet:px-12 tablet:py-40 tablet:gap-2'>
        <article className='flex flex-col gap-6 w-heroWidth justify-center items-center mobile:w-full tablet:w-full'>
            <h4 className='text-xl text-center font-medium bg-textHero rounded-textHero pt-1.5 pb-1.5 pr-4 pl-4 mobile:text-lg mobile:py-1.5 mobile:px-4'>{t("title")}</h4>
            <p className='text-xl text-center font-medium'>{t("paragraph1")}</p>
            <p className='text-xl text-center font-medium'>{t("paragraph2")}</p>
        </article>
    </section>
    )
}