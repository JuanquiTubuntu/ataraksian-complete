import { ArtPolicy } from "./ArtPolicy";
import { getTranslations } from "next-intl/server";

export async function Politica() {

    const t = await getTranslations('Policy');

    return (
        <main className="flex flex-col items-center justify-center p-20 gap-12 min-h-screen bg-gray-100 mobile:w-full">
            <header className="text-center">
                <h1 className="text-3xl font-bold underline mobile:text-xl">{t('title')}</h1>
            </header>
            <section className="flex flex-col items-center justify-center w-3/4 gap-8 mobile:w-screen tablet:w-screen">
                <article className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full">
                    <header>
                        <span className='font-light italic text-gray-500'>{t('version')}</span>
                        <h2 className='text-xl font-bold mobile:text-sm'>{t('titularidadTitle')}</h2>
                    </header>
                    <p className="mobile:text-xs text-lg">{t('titularidadParagraph')}</p>
                </article>
                <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
                    <header>
                        <h2 className='text-xl font-bold mobile:text-sm'>{t('dataTitle')}</h2>
                    </header>
                    <address>
                        <p className="mobile:text-xs text-lg">{t('denominacion')}</p>
                        <p className="mobile:text-xs text-lg">{t('address')}</p>
                        <p className="mobile:text-xs text-lg">{t('cif')}</p>
                        <p className="mobile:text-xs text-lg">{t('mercantil')}</p>
                    </address>
                    <p className="mobile:text-xs text-lg">{t('paragraph')}</p>
                </article>
            </section>
            <section className='flex flex-col items-center justify-center w-3/4 gap-8 mobile:w-screen'>

                <section className="flex flex-col items-center justify-center min-w-full gap-2 mobile:p-4 mobile:w-3/4 tablet:gap-8 tablet:w-screen">
                    <ArtPolicy title={t('contactoTitle')} p1={t('contactoParagraph')} />
                    <ArtPolicy title={t('personalDataTitle')} p1={t('personalDataParagraph')} title2={t('subtitleComercial')} p2={t('comercialP')} listItem1={t('comercialList1')} listItem2={t('comercialList2')} listItem3={t('comercialList3')} listItem4={t('comercialList4')} />
                    <ArtPolicy title={t('curriculum')} p1={t('curriculumP')} listItem1={t('cvList1')} listItem2={t('cvList2')} listItem3={t('cvList3')} listItem4={t('cvList4')} listItem5={t('cvList5')} />
                    <ArtPolicy title={t('promocionalTitle')} p1={t('promocionalP')} listItem1={t('promocionalList1')} listItem2={t('promocionalList2')} listItem3={t('promocionalList3')} listItem4={t('promocionalList4')} />
                    <ArtPolicy title={t('serviciosTitle')} p1={t('serviciosP')} listItem1={t('serviciosList1')} listItem2={t('serviciosList2')} listItem3={t('serviciosList3')} listItem4={t('serviciosList4')} listItem5={t('serviciosList5')} />
                    <ArtPolicy title={t('prevencionTitle')} p1={t('prevencionP')} listItem1={t('prevencionList1')} listItem2={t('prevencionList2')} listItem3={t('prevencionList3')} listItem4={t('prevencionList4')} listItem5={t('prevencionList5')} />
                    <ArtPolicy title={t('clientesTitle')} p1={t('clientesP')} listItem1={t('clientesList1')} listItem2={t('clientesList2')} listItem3={t('clientesList3')} listItem4={t('clientesList4')} />
                    <ArtPolicy title={t('controlTitle')} p1={t('controlP')} listItem1={t('controlList1')} listItem2={t('controlList2')} listItem3={t('controlList3')} listItem4={t('controlList4')} />
                    <ArtPolicy title={t('eventosTitle')} p1={t('eventosP')} listItem1={t('eventosList1')} listItem2={t('eventosList2')} listItem3={t('eventosList3')} listItem4={t('eventosList4')} listItem5={t('eventosList5')} />
                    <ArtPolicy title={t('concursosTitle')} p1={t('concursosP')} listItem1={t('concursosList1')} listItem2={t('concursosList2')} listItem3={t('concursosList3')} listItem4={t('concursosList4')} />
                    <ArtPolicy title={t('comportamientoTitle')} p1={t('comportamientoP')} listItem1={t('comportamientoList1')} listItem2={t('comportamientoList2')} listItem3={t('comportamientoList3')} listItem4={t('comportamientoList4')} />
                    <ArtPolicy title={t('denunciasTitle')} p1={t('denunciasP')} listItem1={t('denunciasList1')} listItem2={t('denunciasList2')} listItem3={t('denunciasList3')} listItem4={t('denunciasList4')} />
                    <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
                        <p>{t('denunciasP2')}</p>
                        <li className='text-base'>{t('denunciasList5')}</li>
                    </article>
                    <ArtPolicy title={t('cesionesTitle')} p1={t('cesionesP1')} p2={t('cesionesP2')} />
                    <ArtPolicy title={t('derechosTitle')} p1={t('derechosP1')} p2={t('derechosP2')} />
                    <ArtPolicy title={t('medidasTitle')} p1={t('medidasP1')} />
                    <ArtPolicy title={t('facilitadosTitle')} p1={t('facilitadosP1')} p2={t('facilitadosP2')} p3={t('facilitados3')} />
                    <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
                        <p className='font-bold'>{t('ataraksian')}</p>
                        <p className='text-base font-bold'>{t('derechosResevrados')}</p>
                    </article>
                </section>
            </section>
        </main>
    );
}