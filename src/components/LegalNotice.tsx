import { getTranslations } from "next-intl/server";
import { ArtLegal } from "./ArtLegal";

export async function LegalNotice() {

    const t = await getTranslations('Legal');

    return (
        <main className='flex flex-col justify-center items-center p-20 gap-12 mobile:w-full bg-gray-100 mobile:px-0 tablet:w-screen'>
        <header>
            <h1 className='text-3xl underline font-bold mobile:text-2xl'>{t('title')}</h1>
        </header>
        <section className='flex flex-col items-center justify-center w-2/4 gap-8 mobile:w-3/4 tablet:w-3/4'>
            <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full'>
                <p className='w-full'>{t('legalP1')}</p>
                <p className='w-full'>{t('legalP2')}</p>
                <p className='w-full'>{t('legalP3')}</p>
            </article>
            <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
                <h2 className='font-bold'>{t('subtitleLegal')}</h2>
                <address className='flex flex-col gap-2 justify-center items-start'>
                    <p>{t('legalDenominacion')}</p>
                    <p>{t('legalAddress')}</p>
                    <p>{t('legalNif')}</p>
                    <p>{t('legalMercantil')}</p>
                </address>
            </article>
            <ArtLegal title={t('terminosTitle')} p1={t('terminosP1')} p2={t('terminosP2')} p3={t('terminosP3')} p4={t('terminosP4')}/>
            <ArtLegal title={t('navegacionTitle')} p1={t('navegacionP1')} p2={t('navegacionP2')}/>
            <ArtLegal title={t('accesoTitle')} p1={t('accesoP')}/>
            <ArtLegal title={t('contenidosTitle')} p1={t('contenidosP')}/>
            <ArtLegal title={t('actualidadTitle')} p1={t('actualidadP1')} p2={t('actualidadP2')} p3={t('actualidadP3')} />
            <ArtLegal title={t('propiedadTitle')} p1={t('propiedadP')} p2={t('propiedadP2')} p3={t('propieadP3')} />
            <ArtLegal title={t('vinculosTitle')} p1={t('vinculosP1')} p2={t('vinculosP2')} p3={t('vinculosP3')} />
        </section>
    </main>
    )
}