import { Faq } from "./Faq";
import { getTranslations } from "next-intl/server";

export async function Faqs() {

    const t = await getTranslations('Faqs');

    return (
        <section className='w-full flex flex-col justify-center items-center pt-20 pb-20 pl-faqsp pr-faqsp border-b-2 border-t-2 border-neutral-950 mobile:w-full mobile:py-20 mobile:px-6 mobile:gap-10 tablet:w-full tablet:py-24 tablet:px-12 tablet:gap-12 maxPc:w-full '>
            <Faq title={t('faq1_title')} p1={t('faq1_p1')} li1={t('faq1_item1')} li2={t('faq1_item2')} li3={t('faq1_item3')} />
            <Faq title={t('faq2_title')} p1={t('faq2_p1')} p2={t('faq2_p2')} li1={t('faq2_item1')} li2={t('faq2_item2')} li3={t('faq2_item3')} li4={t('faq2_item4')} />
            <Faq title={t('faq3_title')} li1={t('faq3_item1')} li2={t('faq3_item2')} li3={t('faq3_item3')} li4={t('faq3_item4')} li5={t('faq3_item5')} />
        </section>
    )
}