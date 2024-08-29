import { useState } from "react";

export default function HappyHours() {
    const [popup, setPopup] = useState(false)

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