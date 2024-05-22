interface ArtLegalData {
    title?: string;
    title2?: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
}

export const ArtLegal = ({title, title2, p1, p2, p3, p4, p5}: ArtLegalData) => {
    return (
        <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
            {title && <h2 className='font-bold'>{title}</h2>}
            {p1 && <p className='min-w-full'>{p1}</p>}
            {p2 && <p className='min-w-full'>{p2}</p>}
            {p3 && <p className='min-w-full'>{p3}</p>}
            {p4 && <p className='min-w-full'>{p4}</p>}
            {p5 && <p className='min-w-full'>{p5}</p>}
        </article>
    )
}