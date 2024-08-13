import { Link } from 'react-router-dom';
import { ButtonTypes } from '../types/ButtonTypes';

interface HeaderProps {
    active:string
}

function Header({active}: HeaderProps) {

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
            text: 'Мои записи',
            link: '/notes'
        },
        {
            text: 'О нас',
            link: '/about'
        }
    ]

    return (
        <div className="w-full px-3.25 h-15">
            <div className="w-full h-full border-y-1 border-translucent_brick flex justify-between items-center gap-2.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.3335 10L2.97994 9.64645L2.62639 10L2.97994 10.3536L3.3335 10ZM15.8335 10.5C16.1096 10.5 16.3335 10.2761 16.3335 10C16.3335 9.72386 16.1096 9.5 15.8335 9.5V10.5ZM7.97994 4.64645L2.97994 9.64645L3.68705 10.3536L8.68705 5.35355L7.97994 4.64645ZM2.97994 10.3536L7.97994 15.3536L8.68705 14.6464L3.68705 9.64645L2.97994 10.3536ZM3.3335 10.5H15.8335V9.5H3.3335V10.5Z" fill="#171717"/>
                </svg>
                <nav className="w-full h-6.25 overflow-x-scroll overflow-y-hidden">
                    <ul className="w-26.25 flex gap-3.25 mx-auto">
                        {arrayButton.map((el, index) => {
                            return (
                                <Link key={index} to={el.link} className={`h-6 w-73 flex justify-center items-center font-mons text-11 
                                ${active.toLowerCase() === el.text.toLowerCase() ? 'rounded-xl bg-dark text-white' : '' }`} >
                                    {el.text}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;