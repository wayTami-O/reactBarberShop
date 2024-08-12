import { Link } from 'react-router-dom';
import { ButtonTypes } from '../../types/ButtonTypes';
import BackgroundComponent from '../../components/Background';

function HomePage() {
    
    const arrayButton: ButtonTypes[] = [
        {
            text: 'Записаться',
            link: '/result'
        },
        {
            text: 'Услуги',
            link: '/services'
        },
        {
            text: 'Мастера',
            link: '/masters'
        },
        {
            text: 'О нас',
            link: '/about'
        },
        {
            text: 'Мои записи',
            link: '/notes'
        }
    ]

    return (
        <>
            <h1 className="px-3.25 mt-10 w-full h-10 flex justify-center items-center font-extrabold tracking-1.8 text-xl">Дядя барбершоп</h1>
            <div className='px-3.25 mt-5 w-full h-20 flex justify-center items-center relative'>
                <div className="relative w-full h-full border-1 bg-white border-translucent_brick rounded-100 flex justify-center items-center z-10 shadow-button">
                    <p className="font-mons font-semibold text-sm">Счастливые часы - 10% скидка.</p>
                </div>
                <div className="absolute w-full h-20 top-3 px-3.5">
                    <div className="w-full h-full bg-brick rounded-100"></div>
                </div>
            </div>
            <div className="px-3.25 mt-6.5 grid grid-cols-2 gap-x-3 gap-y-3.25">
                {arrayButton.map((el, index) => {
                    return (
                        <Link key={index} to={el.link} className='w-full even:mt-3.25 z-10' >
                            <div className="w-full h-20 border-1 bg-white border-translucent_brick rounded-100 flex justify-center items-center relative z-10">
                            <div className="relative w-full h-full border-1 bg-white border-translucent_brick rounded-100 flex justify-center items-center z-10 shadow-button">
                                <p className="font-mons font-semibold text-sm">{el.text}</p>
                            </div>
                                <div className="absolute w-full h-20 top-3 z-0">
                                    <div className="w-full h-full bg-brick rounded-100"></div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <BackgroundComponent />
        </>
    );
}

export default HomePage;