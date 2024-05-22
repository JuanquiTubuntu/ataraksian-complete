'use client';
import Image from "next/image";
import { useState } from "react";

export interface FaqData {
    title: string;
    p1?: string;
    li1?: string;
    li2?: string;
    li3?: string;
    li4?: string;
    li5?: string;
    p2?: string;
}

export const Faq = ({ title, p1, p2, li1, li2, li3, li4, li5 }: FaqData) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    }

    return (
        <article className={'w-3/4 border-t-2 border-neutral-950 mobile:w-full tablet:w-full maxPc:w-3/4'}>
           <div className='flex justify-between items-center gap-8 p-4 mobile:gap-6 mobile:items-end mobile:justify-between mobile:w-full mobile:leading-mobileLine mobile:text-mobileSize mobile:px-0 tablet:gap-12 tablet:items-end maxPc:w-full'>
                <h3 className='text-5xl mobile:text-xl tablet:text-3xl'>{title}</h3>
                <Image width={80} height={80} className='bg-imgFaqs rounded-full cursor-pointer mobile:w-12 mobile:h-12 w-14 h-14 tablet:w-12 tablet:h-12' src={!isOpen ? '/Add_Plus.png' : '/Remove_Minus.png'} alt={'image toggle'} onClick={toggleFaq} />
            </div>
            <div className={!isOpen ? 'hidden' : 'w-full p-4 mobile:w-full tablet:w-full'}>
                {p1 && <p className='font-medium text-xl mobile:text-xl'>{p1}</p>}
                <ul className='m-8'>
                    {li1 && <li className='font-medium text-xl'>{li1}</li>}
                    {li2 && <li className='font-medium text-xl'>{li2}</li>}
                    {li3 && <li className='font-medium text-xl'>{li3}</li>}
                    {li4 && <li className='font-medium text-xl'>{li4}</li>}
                    {li5 && <li className='font-medium text-xl'>{li5}</li>}
                </ul>
                {p2 && <p className='font-medium text-xl'>{p2}</p>}
            </div>
        </article>
    )
}