'use client';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components";
import { useCallback, useEffect, useState } from "react";
import TIKOK from '../../../../../public/tickok.png';
import TIKNOT from '../../../../../public/ticknot.png';
import { Link } from "@/navigation";
import { useRouter } from "next/navigation";

export default function CreatePassword() {
    const t = useTranslations("CreatePassword");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordLengthValid, setPasswordLengthValid] = useState(false);
    const [passwordCapitalValid, setPasswordCapitalValid] = useState(false);
    const [passwordNumberValid, setPasswordNumberValid] = useState(false);
    const [passwordLengthValidRepeat, setPasswordLengthValidRepeat] = useState(false);
    const [passwordCapitalValidRepeat, setPasswordCapitalValidRepeat] = useState(false);
    const [passwordNumberValidRepeat, setPasswordNumberValidRepeat] = useState(false);
    const [error, setError] = useState('');
    const [validLength, setValidLength] = useState(false);

    const router = useRouter();

    

    const validatePassword = useCallback(() => {
        const lengthValid = password.length >= 8;
        const capitalValid = /[A-Z]/.test(password);
        const numberValid = /\d/.test(password);
        const lengthValidRepeat = confirmPassword.length >= 8;
        const capitalValidRepeat = /[A-Z]/.test(confirmPassword);
        const numberValidRepeat = /\d/.test(confirmPassword);

        setPasswordLengthValid(lengthValid);
        setPasswordCapitalValid(capitalValid);
        setPasswordNumberValid(numberValid);
        setPasswordLengthValidRepeat(lengthValidRepeat);
        setPasswordCapitalValidRepeat(capitalValidRepeat);
        setPasswordNumberValidRepeat(numberValidRepeat);

        const allValid = lengthValid && capitalValid && numberValid && lengthValidRepeat && capitalValidRepeat && numberValidRepeat;
        setValidLength(allValid);

    }, [password, confirmPassword]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const correctPassword = password === confirmPassword;
        if (!correctPassword) {
            setError('Las contraseñas no coinciden.');
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }

        router.push('/register/password/mailsent');


    };

    useEffect(() => {
        validatePassword();
    }, [password, confirmPassword, validatePassword]);

    const getValidationIcon = (isValid: boolean) => {
        return isValid ? TIKOK : TIKNOT;
    };

    return (
        <section className="py-registerSectionY background-pattern flex justify-center items-center w-full mobile:p-8 h-screen">
            <form onSubmit={handleSubmit} className="border-2 border-neutral-950 w-registerForm bg-white rounded-registerForm flex flex-col items-center justify-between gap-4 pt-formT pb-formR px-formR mobile:w-full mobile:p-8">
                <Link className='self-start cursor-pointer' href="/register">
                    <Image  src="/leftarrowblack.png" alt="404" width={24} height={28} />
                </Link>
                <span className='text-xl text-center font-medium bg-textHero rounded-textHero py-1.5 px-4 mobile:text-lg mobile:py-1.5 mobile:px-4'>2/5</span>
                <h1 className="w-paragraphWaitingList leading-mobileHigh text-5xl mb-20 font-bold text-center mobile:text-3xl">{t('title')}</h1>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="password">{t('firstInput')}</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="password"
                    />
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="confirmPassword">{t('secondInput')}</label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="password"
                    />
                </div>
                <div className="flex flex-col items-start w-full gap-2">
                    <p className={`flex gap-2 items-center ${passwordLengthValid ? 'text-correctPass' : 'text-invalidPass'}`}>
                        <Image src={getValidationIcon(passwordLengthValid)} alt="validation icon" /> {t('firstP')}
                    </p>
                    <p className={`flex gap-2 items-center ${passwordCapitalValid ? 'text-correctPass' : 'text-invalidPass'}`}>
                        <Image src={getValidationIcon(passwordCapitalValid)} alt="validation icon" /> {t('secondP')}
                    </p>
                    <p className={`flex gap-2 items-center ${passwordNumberValid ? 'text-correctPass' : 'text-invalidPass'}`}>
                        <Image src={getValidationIcon(passwordNumberValid)} alt="validation icon" /> {t('thirdP')}
                    </p>
                    {
                        error && <p className="text-red-600">{error}</p>
                    }
                </div>
                <Button
                    className={`w-paragraphWaitingList flex justify-between items-center  px-6 h-12 text-white font-bold rounded-lg mobile:w-full ${!validLength ? 'cursor-not-allowed bg-formButton' : 'cursor-pointer bg-neutral-950'}`}
                    imgSrc='/right_arrow_white.png'
                    imgAlt="White right arrow"
                    width={60}
                    height={60}
                    disabled={!validLength}
                >
                    {t('button')}
                </Button>
            </form>
        </section>
    );
}
