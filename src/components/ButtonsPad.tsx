import { Link } from "@/navigation";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

export  function ButtonsPad() {

  const t = useTranslations('Navbar');

    return (
        <div className="flex flex-col items-center p-2 bg-white w-padButtons border border-neutral-950 fixed rounded-buttonForm top-20 right-2 gap-4 tablet:w-paragraphWaitingList tablet-pad:hidden pc:hidden maxPc:hidden">
            <Link href='/login'>
              <Button className='flex items-center justify-between maxPc:w-buttonNav pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950  w-buttonTablet tablet:w-buttonTablet tablet:px-3 pc:w-buttonMobileMain ' classNameImg="tablet:w-10 mobile:hidden">
                <span className="font-medium">{t('buttonAcceder')}</span>
              </Button>
            </Link>
            <Link href='/register'>
              <Button className='flex items-center bg-neutral-950 text-white pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950  w-buttonTablet tablet:w-buttonTablet tablet:px-3 pc:w-buttonMobileMai ' classNameImg="tablet:w-10">
                <span className="font-medium">{t('buttonHacerseCliente')}</span>
              </Button>
            </Link>
        </div>
    )
} 