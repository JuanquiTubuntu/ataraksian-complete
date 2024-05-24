'use client';
import { Button } from "@/components";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default function RegisterPage() {
    const t = useTranslations("RegisterForm");

    const router = useRouter();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dni, setDni] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [validForm, setValidForm] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [dniError, setDniError] = useState('');



    const validateEmail = useCallback((email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, []);

    const validatePhone = useCallback((phone: string) => {
        const phoneRegex = /^[0-9]{9}$/;  // Ajusta esta regex según los requisitos específicos del teléfono
        return phoneRegex.test(phone);
    }, []);

    const validateDni = useCallback((dni: string) => {
        const dniRegex = /^[XYZ]?\d{5,8}[A-Z]$/;  // Ajusta esta regex según los requisitos específicos del DNI/NIE/Pasaporte
        return dniRegex.test(dni);
    }, []);

    const validateForm = useCallback(() => {
        const isValidEmail = validateEmail(email);
        const isValidPhone = validatePhone(phone);
        const isValidDni = validateDni(dni);

        const isValid =
            name.trim() !== '' &&
            lastName.trim() !== '' &&
            isValidEmail &&
            isValidPhone &&
            isValidDni &&
            acceptedTerms;

        setValidForm(isValid);
    }, [name, lastName, email, phone, dni, acceptedTerms, validateEmail, validatePhone, validateDni]);

    useEffect(() => {
        validateForm();
    }, [name, lastName, email, phone, dni, acceptedTerms, validateForm]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email }),
            new CognitoUserAttribute({ Name: 'phone_number', Value: phone }),
            new CognitoUserAttribute({ Name: 'name', Value: name }),
            new CognitoUserAttribute({ Name: 'family_name', Value: lastName }),
            new CognitoUserAttribute({ Name: 'custom:dni', Value: dni }),
        ];

        sessionStorage.setItem('email', email);

        if (!validForm) {
            if (!validateEmail(email)) {
                setEmailError(t('invalidEmail'));
                setTimeout(() => {
                    setEmailError('');
                }, 2000);
            }
            if (!validatePhone(phone)) {
                setPhoneError(t('invalidPhone'));
                setTimeout(() => {
                    setPhoneError('');
                }, 2000);
            }
            if (!validateDni(dni)) {
                setDniError(t('invalidDni'));
                setTimeout(() => {
                    setDniError('');
                }, 2000);
            }
            return;
        }

        router.push('/register/password');
        // Aquí puedes añadir el código para enviar el formulario si todos los campos son válidos
    };

    return (
        <section className="py-registerSectionY background-pattern flex justify-center items-center w-full mobile:p-8 h-screen">
            <form onSubmit={handleSubmit} className="border-2 border-neutral-950 w-registerForm bg-white rounded-registerForm flex flex-col items-center justify-between gap-4 pt-formT pb-formR px-formR mobile:w-full mobile:p-6">
                <Link className='self-start cursor-pointer' href="/">
                    <Image src="/leftarrowblack.png" alt="404" width={24} height={28} />
                </Link>
                <span className='text-xl text-center font-medium bg-textHero rounded-textHero py-1.5 px-4 mobile:text-lg mobile:py-1.5 mobile:px-4'>NEW</span>
                <h1 className="w-titleForm leading-mobileHigh text-4xl mb-3 font-bold text-center mobile:text-3xl">{t('title')}</h1>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="name">{t('inputName')}</label>
                    <input
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="lastName">{t('inputLastName')}</label>
                    <input
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="email">{t('inputEmail')}</label>
                    <input
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="phone">{t('inputPhone')}</label>
                    <input
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                </div>
                <div className="w-paragraphWaitingList flex flex-col gap-2 mobile:w-full">
                    <label className="text-sm" htmlFor="dni">{t('dni')}</label>
                    <input
                        className="h-11 pl-2 border-2 rounded-lg"
                        type="text"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
                    {dniError && <p className="text-red-500 text-sm">{dniError}</p>}
                </div>
                <div className="flex items-start justify-center gap-2">
                    <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <p>{t('acepto')} <Link className="underline font-bold" href={''}>{t('terminos')}</Link> {t('ataraksian')}</p>
                </div>
                <Button
                    className={`w-paragraphWaitingList flex justify-between items-center  px-6 h-12 text-white font-bold rounded-lg mobile:w-full ${!validForm ? 'cursor-not-allowed bg-formButton' : 'cursor-pointer bg-neutral-950'}`}
                    imgSrc='/right_arrow_white.png'
                    imgAlt="White right arrow"
                    width={60}
                    height={60}
                    disabled={!validForm}
                >
                    {t('buttonRegister')}
                </Button>
            </form>
        </section>
    );
}
