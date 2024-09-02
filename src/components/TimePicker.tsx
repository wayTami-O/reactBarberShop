import { useEffect, useState } from 'react';
import { useSaveDay } from '../pages/result/saveDay';
import { useSaveMaster } from '../pages/masters/saveMaster';
import axios from 'axios';
import ArrayTime from '../types/ArrayTimes';
import { useTime } from './TimeSave';

const axiosCFGTime = axios.create({
    baseURL:'https://api.yclients.com/api/v1/book_times/64805',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function TimePicker() {

    type accordeonType = 0 | 1 | 2 | 3

    const [popup, setPopup] = useState(false)

    const handlePopup = () => {
        popup ? setPopup(false) : setPopup(true)
    }

    const setTime = useTime((state) => state.setTime)
    const time = useTime((state) => state.time)

    const [accordeon, setAccordeon] = useState<accordeonType>(null)

    const [freeTime, setFreeTime] = useState<ArrayTime | null>(null)

    const handleTime = (newTime: string) => {
        setTime(newTime)
    }

    // console.log(time);

    const handleAccordeon = (newAccordeon: accordeonType) => {
        newAccordeon == accordeon ? setAccordeon(0) : setAccordeon(newAccordeon)
    }

    const masterId = useSaveMaster((state) => state.masterId)
    const zusDay = useSaveDay((state) => state.day)
    const [day, month, year] = zusDay.split('.');
    const dataApi = `${year}-${month}-${day}`
    useEffect(() => {
        axiosCFGTime.get(masterId + "/" + dataApi).then(({data}) => {
            const newFreeTime = data.data.map(el => {
                return el
            })
            const getFreeTime = newFreeTime.reduce((acc, el) => {
                const time = el.time
                const [hours, minutes] = time.split(':').map(Number);
            
                if (hours < 12) {
                    return {
                        ...acc,
                        morning: [...acc.morning, time]
                    };
                } else if (hours < 18) {
                    return {
                        ...acc,
                        day: [...acc.day, time]
                    };
                } else {
                    return {
                        ...acc,
                        evening: [...acc.evening, time]
                    };
                }
            }, { morning: [], day: [], evening: [] })
            setFreeTime(getFreeTime)
        })
    },[zusDay])

    return (
        <>
            <div onClick={handlePopup} className="w-full h-full flex items-center justify-between mt-3.25 bg-white border-1 border-light_grey2 rounded-20 relative py-17.5 px-28">
                <p className="font-mons text-12">{time == "" ? "--:--" : time}</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5001 9.16675H10.8334V5.83342C10.8334 5.6124 10.7456 5.40044 10.5893 5.24416C10.4331 5.08788 10.2211 5.00008 10.0001 5.00008C9.77907 5.00008 9.56711 5.08788 9.41083 5.24416C9.25455 5.40044 9.16675 5.6124 9.16675 5.83342V10.0001C9.16675 10.2211 9.25455 10.4331 9.41083 10.5893C9.56711 10.7456 9.77907 10.8334 10.0001 10.8334H12.5001C12.7211 10.8334 12.9331 10.7456 13.0893 10.5893C13.2456 10.4331 13.3334 10.2211 13.3334 10.0001C13.3334 9.77907 13.2456 9.56711 13.0893 9.41083C12.9331 9.25455 12.7211 9.16675 12.5001 9.16675ZM10.0001 1.66675C8.35191 1.66675 6.74074 2.15549 5.37033 3.07117C3.99992 3.98685 2.93182 5.28834 2.30109 6.81105C1.67036 8.33377 1.50533 10.0093 1.82687 11.6258C2.14842 13.2423 2.94209 14.7272 4.10753 15.8926C5.27297 17.0581 6.75782 17.8517 8.37433 18.1733C9.99084 18.4948 11.6664 18.3298 13.1891 17.6991C14.7118 17.0683 16.0133 16.0002 16.929 14.6298C17.8447 13.2594 18.3334 11.6483 18.3334 10.0001C18.3334 8.90573 18.1179 7.8221 17.6991 6.81105C17.2803 5.80001 16.6665 4.88135 15.8926 4.10752C15.1188 3.3337 14.2002 2.71987 13.1891 2.30109C12.1781 1.8823 11.0944 1.66675 10.0001 1.66675ZM10.0001 16.6667C8.68154 16.6667 7.39261 16.2758 6.29628 15.5432C5.19996 14.8107 4.34547 13.7695 3.84089 12.5513C3.3363 11.3331 3.20428 9.99269 3.46152 8.69948C3.71875 7.40627 4.35369 6.21839 5.28604 5.28604C6.21839 4.35369 7.40628 3.71875 8.69948 3.46151C9.99269 3.20428 11.3331 3.3363 12.5513 3.84088C13.7695 4.34547 14.8107 5.19995 15.5432 6.29628C16.2758 7.39261 16.6668 8.68154 16.6668 10.0001C16.6668 11.7682 15.9644 13.4639 14.7141 14.7141C13.4639 15.9644 11.7682 16.6667 10.0001 16.6667Z" fill="#171717"></path>
                </svg>
            </div>
            <div className={`w-full h-full bg-light_grey4 fixed left-0 top-0 z-50 items-center justify-center ${popup ? "flex" : "hidden"}`}>
                <div className="w-334 h-fit max-h-516 bg-white rounded-10 px-24 pt-5 pb-84 relative overflow-hidden flex flex-col gap-3">
                    <div className="w-full flex justify-between">
                        <p className="pb-3 font-mons text-base">Выберите время записи</p>
                        <svg onClick={handlePopup} width="20" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L1 15M1 1L15 15" stroke="#1C1917" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-3">
                        <div className="w-full h-fit flex justify-between">
                            <h3 className="font-mons">Утро</h3>
                            <svg onClick={() => {handleAccordeon(1)}} className={`${accordeon === 1 ? "rotate-180" : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#171717"></path>
                            </svg>
                        </div>
                        <div className={`w-full h-fit max-h-265 overflow-scroll grid-cols-3 gap-x-3 gap-y-2 ${accordeon === 1 ? "grid" : "hidden"}`}>
                            {freeTime?.morning.map((el, index) => {
                                return <p key={index} onClick={() => {handleTime(el)}} className={`w-full py-7px text-center border-1 rounded-100 border-light_grey2 font-mons text-12 ${time == el ? "bg-dark text-white" : ""}`}>{el}</p>
                            })}
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-3">
                        <div className="w-full h-fit flex justify-between">
                            <h3 className="font-mons">День</h3>
                            <svg onClick={() => {handleAccordeon(2)}} className={`${accordeon === 2 ? "rotate-180" : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#171717"></path>
                            </svg>
                        </div>
                        <div className={`w-full h-fit max-h-265 overflow-scroll grid-cols-3 gap-x-3 gap-y-2 ${accordeon === 2 ? "grid" : "hidden"}`}>
                            {freeTime?.day.map((el, index) => {
                                return <p key={index} onClick={() => {handleTime(el)}} className={`w-full py-7px text-center border-1 rounded-100 border-light_grey2 font-mons text-12 ${time == el ? "bg-dark text-white" : ""}`}>{el}</p>
                            })}
                        </div>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-3">
                        <div className="w-full h-fit flex justify-between">
                            <h3 className="font-mons">Вечер</h3>
                            <svg onClick={() => {handleAccordeon(3)}} className={`${accordeon === 3 ? "rotate-180" : ""}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#171717"></path>
                            </svg>
                        </div>
                        <div className={`w-full h-fit max-h-265 overflow-scroll grid-cols-3 gap-x-3 gap-y-2 ${accordeon === 3 ? "grid" : "hidden"}`}>
                            {freeTime?.evening.map((el, index) => {
                                return <p key={index} onClick={() => {handleTime(el)}} className={`w-full py-7px text-center border-1 rounded-100 border-light_grey2 font-mons text-12 ${time == el ? "bg-dark text-white" : ""}`}>{el}</p>
                            })}
                        </div>
                    </div>
                    <img className="w-full absolute left-0 bottom-0" src="../../public/img/bottom_very_big.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default TimePicker;