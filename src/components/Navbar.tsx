'use client';

import { Link } from "@/navigation";
import { Button } from "./Button";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ButtonsPad } from "./ButtonsPad";

interface NavbarProps {
  showButton?: boolean;
}


export function Navbar({ showButton = true }: NavbarProps) {

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  const t = useTranslations('Navbar');

  return (
    <nav className='flex items-center justify-between p-8 border-b-2 border-neutral-950 w-full mobile:px-2'>
      <Link href='/' className='flex gap-6 items-center mobile:gap-1'>
        <div className='w-12 h-12 bg-neutral-950 rounded-full mobile:w-8 mobile:h-8 tablet:w-7 tablet:h-7'></div>
        <p className='text-4xl mobile:text-2xl tablet:text-2xl'>Ataraksian</p>
      </Link>
      <div className='flex justify-end gap-8'>

        {showButton && (
          <div className="flex gap-6 items-center tablet:w-full">
            <Image width={0} height={0} alt="menu bars" src='/menubars.png' className="pc:hidden maxPc:hidden tablet:hidden tablet-min:flex mobile:flex cursor-pointer w-4 justify-self-end tablet-min:w-6" onClick={() => toggleOpen()}/>
            {
              open && (<ButtonsPad />)
            }
            <Link href='/login'>
              <Button height={1} width={80} imgSrc={'/right_arrow.png'} className='flex items-center justify-between maxPc:w-buttonNav pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950  w-buttonFormWidth tablet:w-buttonTablet tablet:px-3 pc:w-buttonMobileMain tablet-min:hidden mobile:hidden' classNameImg="tablet:w-10 mobile:hidden">
                <span className="font-medium">{t('buttonAcceder')}</span>
              </Button>
            </Link>
            <Link href='/register'>
              <Button height={1} width={80} imgSrc={'/right_arrow_white.png'} className='flex items-center bg-neutral-950 text-white justify-between maxPc:w-buttonNav pr-6 pl-6 pt-2 pb-2 rounded-xl border-sm border-2 border-neutral-950  w-buttonFormWidth tablet:w-buttonTablet tablet:px-3 pc:w-buttonMobileMain tablet-min:hidden mobile:hidden' classNameImg="tablet:w-10">
                <span className="font-medium">{t('buttonHacerseCliente')}</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}