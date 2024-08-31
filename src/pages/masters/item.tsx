import React, { useEffect, useState } from 'react';
import Master from '../../types/Masters';
import { useSaveMaster } from './saveMaster';
import axios from 'axios';
import MasterSmall from '../../types/MasterSmall';

const axiosCFG = axios.create({
    baseURL: 'https://api.yclients.com/api/v1/book_times/64805/',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function MasterItem({master, nowMaster, setMaster}: {master: Master; nowMaster:string, setMaster: React.Dispatch<React.SetStateAction<string>>}) {

    const setNewMaster = useSaveMaster((state) => state.setMaster)

    const handleMaster = (newMaster: string, nameMaster: string) => {
        setMaster(newMaster)
        let item: MasterSmall = {
            id: newMaster,
            name: nameMaster
        } 
        setNewMaster(item)
    }

    const [ workTime, setWorkTime ] = useState<[]>([])

    useEffect(() => {
        let dataISO = new Date
        const isoDateTime = dataISO.toISOString().split("T")[0]
        axiosCFG.get(master.id.toString() + '/' + isoDateTime).then(({data}) => {
            setWorkTime(data.data)
        })
    }, [])

    return (
        <div className="w-148 h-300 bg-white border-1 border-light_grey2 rounded-55 overflow-hidden shadow-button relative z-10" onClick={(): void => {handleMaster(master.id.toString(), master.name)}}>
            <img className="w-full h-133" src={master.avatar_big} alt="" />
            <div className="px-3.25 pt-3.25 flex justify-between items-start">
                <div className="w-fit flex flex-col gap-6px">
                    <h1 className="font-mons text-10 font-medium">{master.name}</h1>
                    <p className="font-mons text-8 font-normal leading-9.6">{master.specialization}</p>
                    <div className="flex justify-start items-end gap-0.5">
                        <div className="flex col">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3496_4687)">
                                <path d="M4.70102 1.4389C4.79706 1.24434 4.84508 1.14707 4.91026 1.11598C4.96698 1.08894 5.03287 1.08894 5.08959 1.11598C5.15477 1.14707 5.20279 1.24434 5.29883 1.4389L6.20994 3.28472C6.2383 3.34216 6.25247 3.37088 6.27319 3.39318C6.29153 3.41292 6.31353 3.42892 6.33797 3.44028C6.36557 3.45311 6.39726 3.45775 6.46064 3.46701L8.49867 3.7649C8.71328 3.79627 8.82058 3.81195 8.87024 3.86437C8.91345 3.90998 8.93377 3.97264 8.92555 4.03493C8.91609 4.10651 8.83841 4.18218 8.68303 4.33351L7.20886 5.76936C7.1629 5.81412 7.13992 5.8365 7.1251 5.86313C7.11197 5.88671 7.10355 5.91261 7.1003 5.9394C7.09663 5.96965 7.10205 6.00127 7.1129 6.06449L7.46074 8.09257C7.49742 8.30647 7.51577 8.41343 7.48129 8.47689C7.4513 8.53211 7.39798 8.57085 7.33619 8.5823C7.26518 8.59547 7.16914 8.54496 6.97705 8.44394L5.15508 7.48578C5.09831 7.45593 5.06992 7.441 5.04002 7.43514C5.01354 7.42995 4.98631 7.42995 4.95983 7.43514C4.92993 7.441 4.90154 7.45593 4.84478 7.48578L3.0228 8.44394C2.83072 8.54496 2.73467 8.59547 2.66366 8.5823C2.60187 8.57085 2.54855 8.53211 2.51856 8.47689C2.48409 8.41343 2.50243 8.30647 2.53912 8.09257L2.88695 6.06449C2.8978 6.00127 2.90322 5.96965 2.89955 5.9394C2.8963 5.91261 2.88788 5.88671 2.87475 5.86313C2.85993 5.8365 2.83695 5.81412 2.791 5.76936L1.31682 4.33351C1.16144 4.18218 1.08376 4.10651 1.0743 4.03493C1.06608 3.97264 1.0864 3.90998 1.12961 3.86437C1.17927 3.81195 1.28657 3.79627 1.50119 3.7649L3.53921 3.46701C3.6026 3.45775 3.63429 3.45311 3.66188 3.44028C3.68632 3.42892 3.70832 3.41292 3.72666 3.39318C3.74738 3.37088 3.76156 3.34216 3.78991 3.28472L4.70102 1.4389Z" fill="#FFC700" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3496_4687">
                                <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3496_4687)">
                                <path d="M4.70102 1.4389C4.79706 1.24434 4.84508 1.14707 4.91026 1.11598C4.96698 1.08894 5.03287 1.08894 5.08959 1.11598C5.15477 1.14707 5.20279 1.24434 5.29883 1.4389L6.20994 3.28472C6.2383 3.34216 6.25247 3.37088 6.27319 3.39318C6.29153 3.41292 6.31353 3.42892 6.33797 3.44028C6.36557 3.45311 6.39726 3.45775 6.46064 3.46701L8.49867 3.7649C8.71328 3.79627 8.82058 3.81195 8.87024 3.86437C8.91345 3.90998 8.93377 3.97264 8.92555 4.03493C8.91609 4.10651 8.83841 4.18218 8.68303 4.33351L7.20886 5.76936C7.1629 5.81412 7.13992 5.8365 7.1251 5.86313C7.11197 5.88671 7.10355 5.91261 7.1003 5.9394C7.09663 5.96965 7.10205 6.00127 7.1129 6.06449L7.46074 8.09257C7.49742 8.30647 7.51577 8.41343 7.48129 8.47689C7.4513 8.53211 7.39798 8.57085 7.33619 8.5823C7.26518 8.59547 7.16914 8.54496 6.97705 8.44394L5.15508 7.48578C5.09831 7.45593 5.06992 7.441 5.04002 7.43514C5.01354 7.42995 4.98631 7.42995 4.95983 7.43514C4.92993 7.441 4.90154 7.45593 4.84478 7.48578L3.0228 8.44394C2.83072 8.54496 2.73467 8.59547 2.66366 8.5823C2.60187 8.57085 2.54855 8.53211 2.51856 8.47689C2.48409 8.41343 2.50243 8.30647 2.53912 8.09257L2.88695 6.06449C2.8978 6.00127 2.90322 5.96965 2.89955 5.9394C2.8963 5.91261 2.88788 5.88671 2.87475 5.86313C2.85993 5.8365 2.83695 5.81412 2.791 5.76936L1.31682 4.33351C1.16144 4.18218 1.08376 4.10651 1.0743 4.03493C1.06608 3.97264 1.0864 3.90998 1.12961 3.86437C1.17927 3.81195 1.28657 3.79627 1.50119 3.7649L3.53921 3.46701C3.6026 3.45775 3.63429 3.45311 3.66188 3.44028C3.68632 3.42892 3.70832 3.41292 3.72666 3.39318C3.74738 3.37088 3.76156 3.34216 3.78991 3.28472L4.70102 1.4389Z" fill="#FFC700" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3496_4687">
                                <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3496_4687)">
                                <path d="M4.70102 1.4389C4.79706 1.24434 4.84508 1.14707 4.91026 1.11598C4.96698 1.08894 5.03287 1.08894 5.08959 1.11598C5.15477 1.14707 5.20279 1.24434 5.29883 1.4389L6.20994 3.28472C6.2383 3.34216 6.25247 3.37088 6.27319 3.39318C6.29153 3.41292 6.31353 3.42892 6.33797 3.44028C6.36557 3.45311 6.39726 3.45775 6.46064 3.46701L8.49867 3.7649C8.71328 3.79627 8.82058 3.81195 8.87024 3.86437C8.91345 3.90998 8.93377 3.97264 8.92555 4.03493C8.91609 4.10651 8.83841 4.18218 8.68303 4.33351L7.20886 5.76936C7.1629 5.81412 7.13992 5.8365 7.1251 5.86313C7.11197 5.88671 7.10355 5.91261 7.1003 5.9394C7.09663 5.96965 7.10205 6.00127 7.1129 6.06449L7.46074 8.09257C7.49742 8.30647 7.51577 8.41343 7.48129 8.47689C7.4513 8.53211 7.39798 8.57085 7.33619 8.5823C7.26518 8.59547 7.16914 8.54496 6.97705 8.44394L5.15508 7.48578C5.09831 7.45593 5.06992 7.441 5.04002 7.43514C5.01354 7.42995 4.98631 7.42995 4.95983 7.43514C4.92993 7.441 4.90154 7.45593 4.84478 7.48578L3.0228 8.44394C2.83072 8.54496 2.73467 8.59547 2.66366 8.5823C2.60187 8.57085 2.54855 8.53211 2.51856 8.47689C2.48409 8.41343 2.50243 8.30647 2.53912 8.09257L2.88695 6.06449C2.8978 6.00127 2.90322 5.96965 2.89955 5.9394C2.8963 5.91261 2.88788 5.88671 2.87475 5.86313C2.85993 5.8365 2.83695 5.81412 2.791 5.76936L1.31682 4.33351C1.16144 4.18218 1.08376 4.10651 1.0743 4.03493C1.06608 3.97264 1.0864 3.90998 1.12961 3.86437C1.17927 3.81195 1.28657 3.79627 1.50119 3.7649L3.53921 3.46701C3.6026 3.45775 3.63429 3.45311 3.66188 3.44028C3.68632 3.42892 3.70832 3.41292 3.72666 3.39318C3.74738 3.37088 3.76156 3.34216 3.78991 3.28472L4.70102 1.4389Z" fill="#FFC700" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3496_4687">
                                <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3496_4687)">
                                <path d="M4.70102 1.4389C4.79706 1.24434 4.84508 1.14707 4.91026 1.11598C4.96698 1.08894 5.03287 1.08894 5.08959 1.11598C5.15477 1.14707 5.20279 1.24434 5.29883 1.4389L6.20994 3.28472C6.2383 3.34216 6.25247 3.37088 6.27319 3.39318C6.29153 3.41292 6.31353 3.42892 6.33797 3.44028C6.36557 3.45311 6.39726 3.45775 6.46064 3.46701L8.49867 3.7649C8.71328 3.79627 8.82058 3.81195 8.87024 3.86437C8.91345 3.90998 8.93377 3.97264 8.92555 4.03493C8.91609 4.10651 8.83841 4.18218 8.68303 4.33351L7.20886 5.76936C7.1629 5.81412 7.13992 5.8365 7.1251 5.86313C7.11197 5.88671 7.10355 5.91261 7.1003 5.9394C7.09663 5.96965 7.10205 6.00127 7.1129 6.06449L7.46074 8.09257C7.49742 8.30647 7.51577 8.41343 7.48129 8.47689C7.4513 8.53211 7.39798 8.57085 7.33619 8.5823C7.26518 8.59547 7.16914 8.54496 6.97705 8.44394L5.15508 7.48578C5.09831 7.45593 5.06992 7.441 5.04002 7.43514C5.01354 7.42995 4.98631 7.42995 4.95983 7.43514C4.92993 7.441 4.90154 7.45593 4.84478 7.48578L3.0228 8.44394C2.83072 8.54496 2.73467 8.59547 2.66366 8.5823C2.60187 8.57085 2.54855 8.53211 2.51856 8.47689C2.48409 8.41343 2.50243 8.30647 2.53912 8.09257L2.88695 6.06449C2.8978 6.00127 2.90322 5.96965 2.89955 5.9394C2.8963 5.91261 2.88788 5.88671 2.87475 5.86313C2.85993 5.8365 2.83695 5.81412 2.791 5.76936L1.31682 4.33351C1.16144 4.18218 1.08376 4.10651 1.0743 4.03493C1.06608 3.97264 1.0864 3.90998 1.12961 3.86437C1.17927 3.81195 1.28657 3.79627 1.50119 3.7649L3.53921 3.46701C3.6026 3.45775 3.63429 3.45311 3.66188 3.44028C3.68632 3.42892 3.70832 3.41292 3.72666 3.39318C3.74738 3.37088 3.76156 3.34216 3.78991 3.28472L4.70102 1.4389Z" fill="#FFC700" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3496_4687">
                                <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3496_4687)">
                                <path d="M4.70102 1.4389C4.79706 1.24434 4.84508 1.14707 4.91026 1.11598C4.96698 1.08894 5.03287 1.08894 5.08959 1.11598C5.15477 1.14707 5.20279 1.24434 5.29883 1.4389L6.20994 3.28472C6.2383 3.34216 6.25247 3.37088 6.27319 3.39318C6.29153 3.41292 6.31353 3.42892 6.33797 3.44028C6.36557 3.45311 6.39726 3.45775 6.46064 3.46701L8.49867 3.7649C8.71328 3.79627 8.82058 3.81195 8.87024 3.86437C8.91345 3.90998 8.93377 3.97264 8.92555 4.03493C8.91609 4.10651 8.83841 4.18218 8.68303 4.33351L7.20886 5.76936C7.1629 5.81412 7.13992 5.8365 7.1251 5.86313C7.11197 5.88671 7.10355 5.91261 7.1003 5.9394C7.09663 5.96965 7.10205 6.00127 7.1129 6.06449L7.46074 8.09257C7.49742 8.30647 7.51577 8.41343 7.48129 8.47689C7.4513 8.53211 7.39798 8.57085 7.33619 8.5823C7.26518 8.59547 7.16914 8.54496 6.97705 8.44394L5.15508 7.48578C5.09831 7.45593 5.06992 7.441 5.04002 7.43514C5.01354 7.42995 4.98631 7.42995 4.95983 7.43514C4.92993 7.441 4.90154 7.45593 4.84478 7.48578L3.0228 8.44394C2.83072 8.54496 2.73467 8.59547 2.66366 8.5823C2.60187 8.57085 2.54855 8.53211 2.51856 8.47689C2.48409 8.41343 2.50243 8.30647 2.53912 8.09257L2.88695 6.06449C2.8978 6.00127 2.90322 5.96965 2.89955 5.9394C2.8963 5.91261 2.88788 5.88671 2.87475 5.86313C2.85993 5.8365 2.83695 5.81412 2.791 5.76936L1.31682 4.33351C1.16144 4.18218 1.08376 4.10651 1.0743 4.03493C1.06608 3.97264 1.0864 3.90998 1.12961 3.86437C1.17927 3.81195 1.28657 3.79627 1.50119 3.7649L3.53921 3.46701C3.6026 3.45775 3.63429 3.45311 3.66188 3.44028C3.68632 3.42892 3.70832 3.41292 3.72666 3.39318C3.74738 3.37088 3.76156 3.34216 3.78991 3.28472L4.70102 1.4389Z" fill="#FFC700" stroke="#FFC700" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3496_4687">
                                <rect width="10" height="10" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="font-mons text-7">{master.weight} отзывы</p>
                    </div>
                </div>
                <div className={`w-4.5 h-4.5 border-1 border-dark rounded-100 flex justify-center items-center ${nowMaster.toString() == master.id.toString() ? 'bg-dark' : ''}`}>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3L3.25 5.25L7.75 0.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <p className="px-3.25 pt-3.25 w-full text-light_grey4 text-8">
                Ближайшее время для записи ср, <span className="text-dark">сегодня:</span>
            </p>
            <div className="w-full p-3.25 overflow-y-scroll flex gap-4.5">
                {workTime.length != 0 ? workTime.map(el => {
                        return <TimeWork key={parseInt(el)} el={el} />
                    }) : <p className="flex justify-start items-center text-8 ">На сегодня записи нет</p>}
            </div>
            <div className="absolute">
                <svg width="148" height="37" viewBox="0 0 148 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.55081C0 6.55081 95.8025 -8.18851 96.7901 6.55081C97.7778 21.2901 160 6.55081 160 6.55081V49H0V6.55081Z" fill="#D07852"/>
                </svg>
            </div>
        </div>
    );
}

function TimeWork({el}: {el: string}) {
    return (
        <div className="h-5 px-10px text-8 flex justify-center items-center border-1 border-light_grey2 rounded-100">{el}</div>
    )
}

export default MasterItem;