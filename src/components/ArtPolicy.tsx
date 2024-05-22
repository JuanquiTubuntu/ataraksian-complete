interface ArtPolicyData {
    title?: string;
    title2?: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    listItem1?: string;
    listItem2?: string;
    listItem3?: string;
    listItem4?: string;
    listItem5?: string;
    listItem6?: string;
}

export const ArtPolicy = ({title, title2, p1, p2, p3, p4, p5, listItem1, listItem2, listItem3, listItem4, listItem5, listItem6}: ArtPolicyData) => {
    return (
        <article className='bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 mobile:w-full mobile:p-4 tablet:p-8 tablet:w-full w-full'>
            <header>
                {title && <h2 className='text-xl font-bold mobile:text-sm'>{title}</h2>}
            </header>
            {p1 && <p className='mobile:text-xs text-lg'>{p1}</p>}
            {title2 && <h2 className='text-xl font-bold mobile:text-sm'>{title2}</h2>}
            {p2 && <p className='mobile:text-xs text-lg'>{p2}</p>}
            {p3 && <p className='mobile:text-xs text-lg'>{p3}</p>}
            {p4 && <p className='mobile:text-xs text-lg'>{p4}</p>}
            {p5 && <p className='mobile:text-xs text-lg'>{p5}</p>}
            {listItem1 && 
                <ul className='pl-8'>
                    <li className='mobile:text-xs text-lg'>{listItem1}</li>
                    {listItem2 && <li className='mobile:text-xs text-lg'>{listItem2}</li>}
                    {listItem3 && <li className='mobile:text-xs text-lg'>{listItem3}</li>}
                    {listItem4 && <li className='mobile:text-xs text-lg'>{listItem4}</li>}
                    {listItem5 && <li className='mobile:text-xs text-lg'>{listItem5}</li>}
                    {listItem6 && <li className='mobile:text-xs text-lg'>{listItem6}</li>}
                </ul>
            }
            
        </article>
    );

}