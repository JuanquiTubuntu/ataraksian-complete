import { Button } from "@/components";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const metadata = {
    title: 'Ataraksian - Login',
    description: 'Formulario de Login de Ataraksian web',
};

export default function LoginPage() {

    const t = useTranslations("LoginForm");
    return (
        <section className="py-20 background-pattern flex justify-center items-center w-full mobile:p-8 h-screen">
            <form className="border-2 border-neutral-950 w-registerForm bg-white rounded-registerForm flex flex-col items-center justify-between gap-8 px-formR pt-formT pb-formT mobile:w-full mobile:p-8">
                <h1 className="w-paragraphWaitingList leading-mobileHigh text-5xl font-bold text-center mobile:text-3xl mobile:w-3/4">{t('title')}</h1>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label htmlFor="email">Email</label>
                    <input className="h-11 pl-2 border-2 rounded-lg" type="email" required placeholder="olivia@untiledu.com" />
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label htmlFor="password">{t('passwordInput')}</label>
                    <input className="h-11 pl-2 border-2 rounded-lg" type="password" required />
                </div>
                <Button className="w-paragraphWaitingList flex justify-between items-center bg-formButton px-6 h-12 text-white font-bold rounded-lg mobile:w-full" imgSrc='/right_arrow_white.png' imgAlt="White right arrow" width={60} height={60}>
                {t('buttonRegister')}
                </Button>
                <div className="flex flex-col items-center justify-center gap-2 font-bold">
                    <p className="mobile:text-center">{t('firstParagraphRegister')} <Link className="text-formLink underline" href={'/register'}>{t('firstParagraphRegisterLink')}</Link>.</p>
                    <p className="underline cursor-pointer">{t('secondParagraphRegister')}</p>
                </div>
            </form>
        </section>
    )
}