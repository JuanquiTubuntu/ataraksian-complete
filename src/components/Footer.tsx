import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

export async function Footer() {

    const t = await getTranslations('Footer');

    return (

        <footer className='bg-footerBg flex flex-col items-center justify-center py-16 px-20 gap-8 mobile:w-full mobile:p-4 mobile:text-center'>
        <p className='text-2xl font-medium mobile:w-buttonMobileMain'>Made with 🖤 by Ataraksian</p>
        <p className='text-base flex gap-2'>
          <Link href='/' locale='es'>
            {t('button1')}
          </Link>
           |  
           <Link href='/' locale='en'>
           {t('button2')}
          </Link>
        </p>
        <p className='mobile:text-sm mobile:w-buttonMobileMain'>{t('consult')} <Link className='underline' target='_blank' href='/politica-privacidad'>{t('policy')}</Link> {t('nuestro')} <Link className='underline' target='_blank' href='/legal'>{t("legal")}</Link>.</p>
        
    </footer>
    )
}