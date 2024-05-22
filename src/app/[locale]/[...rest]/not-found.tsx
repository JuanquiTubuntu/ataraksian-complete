import { Navbar } from '@/components';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');
    return (
        <div className='flex flex-col items-center justify-center'>
            <Navbar showButton={false} />

            <section className='flex flex-col justify-center items-center w-notFoundWidth py-20 gap-8 tablet:w-3/4 mobile:w-3/4 mobile:gap-4'>
                <h4 className='text-xl text-center font-medium bg-textHero rounded-textHero py-1.5 px-4 '>UPS!</h4>
                <Image className='tablet:w-3/4 mobile:w-full' src="/errorimg.png" alt="404" width={640} height={200} />
                <h1 className='text-titleNotFound leading-titleNotFound font-bold text-center ml-6 tablet:text-titleNotFoundTablet mobile:text-titleNotFoundMobile mobile:leading-mobileHigh tablet:w-full mobile:w-full'>{t('notFoundTitle')}</h1>
                <p className='text-lg w-notFoundP tablet:w-3/4 mobile:w-full'>{t('p1notFound')}</p>
            </section>

        </div>
    );
}