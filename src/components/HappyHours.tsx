import { useState } from "react";
import { useTime } from './TimeSave';
import { useSaveDay } from '../pages/result/saveDay';

export default function HappyHours() {
    const [popup, setPopup] = useState(true)

    const handlePopup = () => {
        popup ? setPopup(false) : setPopup(true)
    }



    const liText = ["Счастливые часы проходят каждый - Вт, Ср, Чт", 
        "С 15:00 до 18:00",
        "В это время вы получаете скидку 10%",
        "Скидка не действует на стрижку под 1 насадку, оформление бороды, ваксинг, пенсионные стрижки."
    ]

    return(
        <>
            <div onClick={handlePopup} className="relative w-full h-full border-1 bg-white border-translucent_brick rounded-100 flex justify-center items-center z-10 shadow-button">
                <p className="font-mons font-semibold text-sm">Счастливые часы - 10% скидка.</p>
            </div>
            <div className={`w-full h-full fixed top-0 bg-light_grey4 z-50 items-center justify-center ${popup ? "hidden" : "flex"}`}>
                <div className="w-302 h-516 overflow-hidden relative bg-white p-30 rounded-10 flex flex-col gap-3">
                    <div className="flex items-center gap-58">
                        <h2 className="text-base font-mons font-semibold">Счастливые часы - 10% скидка</h2>
                        <svg onClick={handlePopup} width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L1 15M1 1L15 15" stroke="#1C1917" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <img className="w-full h-auto" src="../../public/img/image 3.png" alt="" />
                    <div className="w-full mt-2 px-17 flex justify-between items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 5L7 10" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 8.5L7 14.5" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 13L7.5 19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 2H4.5V5H19.5V2Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 19H4.5V22H19.5V19Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 5V19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 5V19" stroke="#D07852" strokeWidth="1.5"></path>
                        </svg>
                        <h3 className="font-mons text-sm">Счастливые часы </h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 5L7 10" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 8.5L7 14.5" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 13L7.5 19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 2H4.5V5H19.5V2Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 19H4.5V22H19.5V19Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 5V19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 5V19" stroke="#D07852" strokeWidth="1.5"></path>
                        </svg>
                    </div>
                    <ul role="list" className="flex flex-col items-end gap-3.5 list-disc">
                        {liText.map((el, index) => {
                            return (
                                <li key={index} className="font-mons w-224 text-13 font-normal leading-18">{el}</li>
                            )
                        })}
                    </ul>
                    <img className="absolute bottom-0 left-0" src="../../public/img/bottom_big.png" alt="" />
                </div>
            </div>
        </>
    )
}

export function ResultHappyHours() {
    const [popup, setPopup] = useState(true)

    const handlePopup = () => {
        popup ? setPopup(false) : setPopup(true)
    }

    const liText = ["Счастливые часы проходят каждый - Вт, Ср, Чт", 
        "С 15:00 до 18:00",
        "В это время вы получаете скидку 10%",
        "Скидка не действует на стрижку под 1 насадку, оформление бороды, ваксинг, пенсионные стрижки."
    ]

    const time = useTime((state) => state.time)

    const date = useSaveDay((state) => state.day)

    console.log(time);
    console.log(date);

    return(
        <>
            <div className="w-full px-3.25">
                <div onClick={handlePopup} className="px-3.25 mt-3.25 w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button ">
                    <p className="w-fit font-mons text-12 box">Счастливые часы - 10%</p>
                </div>
            </div>
            <div className={`w-full h-full fixed top-0 left-0 bg-light_grey4 z-50 items-center justify-center ${popup ? "hidden" : "flex"}`}>
                <div className="w-302 h-516 overflow-hidden relative bg-white p-30 rounded-10 flex flex-col gap-3">
                    <div className="flex items-center gap-58">
                        <h2 className="text-base font-mons font-semibold">Счастливые часы - 10% скидка</h2>
                        <svg onClick={handlePopup} width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L1 15M1 1L15 15" stroke="#1C1917" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <img className="w-full h-auto" src="../../public/img/image 3.png" alt="" />
                    <div className="w-full mt-2 px-17 flex justify-between items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 5L7 10" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 8.5L7 14.5" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 13L7.5 19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 2H4.5V5H19.5V2Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 19H4.5V22H19.5V19Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 5V19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 5V19" stroke="#D07852" strokeWidth="1.5"></path>
                        </svg>
                        <h3 className="font-mons text-sm">Счастливые часы </h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 5L7 10" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 8.5L7 14.5" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 13L7.5 19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 2H4.5V5H19.5V2Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.5 19H4.5V22H19.5V19Z" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 5V19" stroke="#D07852" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17 5V19" stroke="#D07852" strokeWidth="1.5"></path>
                        </svg>
                    </div>
                    <ul role="list" className="flex flex-col items-end gap-3.5 list-disc">
                        {liText.map((el, index) => {
                            return (
                                <li key={index} className="font-mons w-224 text-13 font-normal leading-18">{el}</li>
                            )
                        })}
                    </ul>
                    <img className="absolute bottom-0 left-0" src="../../public/img/bottom_big.png" alt="" />
                </div>
            </div>
        </>
    )
}

export function PopupFatherAndSon() {
    const [popup, setPopup] = useState(true)
    
    const handlePopup = () => {
        popup ? setPopup(false) : setPopup(true)
    }

    const liText = [
        "скидки только на стрижку головы, на бороду не распространяется.",
        "скидки не распространяются на комбо-услуги, т.к. они и так выгодные."
    ]

    return(
        <>
            <div className="w-full px-3.25">
                <div onClick={handlePopup} className="px-3.25 mt-3 w-full bg-white rounded-12 border-1 border-translucent_brick flex justify-between items-center p-3.25 relative z-10">
                    <p className="w-fit font-mons text-12 box">Отец + сын Скидка 10%</p>
                    <svg width="7" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 15L7.5 8L0.5 1" stroke="#171717"></path>
                    </svg>
                </div>
            </div>
            <div className={`w-full h-full fixed top-0 bg-light_grey4 z-50 items-center justify-center ${popup ? "hidden" : "flex"}`}>
                <div className="w-240 h-335 overflow-hidden relative bg-white p-4 rounded-10 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <h2 className="text-base font-mons font-semibold leading-18">Отец + сын Скидка 10%</h2>
                        <svg className="p-7px" onClick={handlePopup} width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L1 15M1 1L15 15" stroke="#1C1917" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="w-full font-mons font-normal text-11 leading-14">
                        Отец с сыном должны быть записаны на один день, будет скидка 10% на обе стрижки. Скидка суммируется со скидкой "счастливые часы".
                    </p>
                    <p className="text-base font-mons font-semibold leading-18 mt-2">Важно</p>
                    <ul role="list" className="flex flex-col items-end gap-3 list-disc">
                        {liText.map((el, index) => {
                            return (
                                <li key={index} className="font-mons tracking-0.8 w-190 text-11 font-normal leading-14">{el}</li>
                            )
                        })}
                    </ul>
                    <img className="absolute w-full left-0 bottom-0" src="../../public/img/Rectangle 4949.png" alt="" />
                </div>
            </div>
        </>
    )
}