import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';
import { ResultHappyHours } from '../../components/HappyHours';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { useSaveMaster } from '../masters/saveMaster';
import axios from 'axios';
import TimePicker from '../../components/TimePicker';
import { useSaveDay } from './saveDay';
import { useSaveServices } from '../services/saveServices';
// import moduleName from '';

const axiosCFGDays = axios.create({
    baseURL:'https://api.yclients.com/api/v1/schedule/64805',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

const axiosCFGAnyDays = axios.create({
    baseURL:'https://api.yclients.com/api/v1/book_dates/64805',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function useResultPage() {
    
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [daysMaster, setDayMaster] = useState([])

    const zusDay = useSaveDay((state) => state.day)
    const zusSetDay = useSaveDay((state) => state.setDay)

    const today = new Date();
    const sixMonthsLater = new Date(today);
    sixMonthsLater.setMonth(today.getMonth() + 6);

    const masterName = useSaveMaster((state) => state.masterName)
    const masterId = useSaveMaster((state) => state.masterId)

    const arrayServicesZus = useSaveServices((state) => state.arrayServices);

    useEffect(() => {
        if (masterId != "0") {
            axiosCFGDays.get(masterId + '/' + today.toISOString().slice(0, 10) + '/' + sixMonthsLater.toISOString().slice(0, 10)).then(({data}) => {
                const newDayMasterStr = data.data.map((el: { date: any; }) => {
                    if (el.is_working == 1) {
                        return new Date(el.date)
                    }
                    return null
                })
                const availableDates = newDayMasterStr.map((dateStr: string | number | Date) => new Date(dateStr));
                setDayMaster(availableDates)
            })
        } else {
            axiosCFGAnyDays.get('').then(({data}) => {
                console.log(data);
                const newDayMasterStr = data.data.booking_dates.map((el: { date: any; }) => {
                    return el
                })
                const availableDates = newDayMasterStr.map((dateStr: string | number | Date) => new Date(dateStr));
                setDayMaster(availableDates)
            })
        }
    }, [])

    const handleDateChange = (date: Date | null) => {
        if (date) {
            const formattedDate = date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
            zusSetDay(formattedDate)
            setSelectedDate(formattedDate);
        } else {
            setSelectedDate(null);
        }
    };

    return {selectedDate, zusDay, handleDateChange, masterName, daysMaster, arrayServicesZus}
}

function ResultPage() {

    const {selectedDate, zusDay, handleDateChange, masterName, daysMaster, arrayServicesZus} = useResultPage()



    return (
        <>
            <Header active={"записаться"}/>
            <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Итог</h1>
            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Мастер</p>
                <Link to="/masters" className="w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button">
                    <p className="w-fit font-mons text-12 box">{masterName == "" ? "Выберите мастера" : masterName}</p>
                    <button className="font-mons text-sm font-semibold text-white leading-18 rounded-100 bg-dark px-11p py-1">Выбрать</button>
                </Link>
            </fieldset>
            {/* Место для даты и времени */}
            <fieldset className="relative mx-3.25 mt-3.25 grid grid-cols-2 gap-x-3.5 z-30">
                <div className="h-fit flex flex-col">
                    <p className="font-mons text-base opacity-60 leading-21">Дата</p>
                    <DatePicker
                        className="relative z-40"
                        includeDates={daysMaster}
                        selected={selectedDate ? new Date(selectedDate.split('.').reverse().join('-')) : null}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                        customInput={<div className="w-full h-fit text-12 font-mons mt-3.25 py-17.5 px-28 bg-white border-1 border-light_grey2 rounded-20">{zusDay == "" ? "00.00.0000" : zusDay}</div>}
                        popperClassName="transform translate-x-10"
                        popperPlacement="bottom-start"
                        showIcon
                        icon={
                            <svg className="absolute z-50 top-23 right-4.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.75 2C6.16421 2 6.5 2.33579 6.5 2.75V4H13.5V2.75C13.5 2.33579 13.8358 2 14.25 2C14.6642 2 15 2.33579 15 2.75V4H15.25C16.7688 4 18 5.23122 18 6.75V15.25C18 16.7688 16.7688 18 15.25 18H4.75C3.23122 18 2 16.7688 2 15.25V6.75C2 5.23122 3.23122 4 4.75 4H5V2.75C5 2.33579 5.33579 2 5.75 2ZM4.75 7.5C4.05964 7.5 3.5 8.05964 3.5 8.75V15.25C3.5 15.9404 4.05964 16.5 4.75 16.5H15.25C15.9404 16.5 16.5 15.9404 16.5 15.25V8.75C16.5 8.05964 15.9404 7.5 15.25 7.5H4.75Z" fill="#171717"></path>
                            </svg>
                        }
                    />
                </div>
                <div className="w-full flex flex-col">
                    <p className="font-mons text-base opacity-60 leading-21">Время</p>
                    <TimePicker />
                </div>
            </fieldset>

            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Услуги</p>
                <Link to="/services" className="w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button">
                    <div className="w-fit flex flex-col font-mons text-12 box">
                        {
                            arrayServicesZus.length != 0 ? (
                                arrayServicesZus.map((el, index) => {
                                    return <p key={index} className="font-mons text-12 indent-3">{el.nameHaircut}</p>
                                })
                            ) : (
                                    <p className="font-mons text-12">Выберите мастера</p>
                            )
                        }
                    </div>
                    <button className="font-mons text-sm font-semibold text-white leading-18 rounded-100 bg-dark px-11p py-1">Выбрать</button>
                </Link>
            </fieldset>
            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Скидка</p>
            </fieldset>
            <ResultHappyHours />
            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Итоговая сумма</p>
                <div className="w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button">
                    <p className="w-fit font-mons text-12 box">0 ₽</p>
                </div>
            </fieldset>
            <div className="w-160 h-38 mx-auto mt-3.25 mb-5 flex justify-center items-center bg-dark rounded-100 text-white">Записаться</div>
            <BackgroundComponent />
        </>
    );
}

export default ResultPage;