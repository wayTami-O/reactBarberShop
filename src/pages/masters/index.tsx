import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';
import axios from 'axios';
import Masters from '../../types/Masters';
import MasterItem from './item';
import { useSaveMaster } from './saveMaster';
import { useEffect, useState } from 'react';
import { PopupFatherAndSon } from '../../components/HappyHours';
import MasterSmall from '../../types/MasterSmall';

const axiosCFG = axios.create({
    baseURL:'https://api.yclients.com/api/v1/company/64805/staff',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function MastersPage() {

    const [ master, setMaster ] = useState<string>('');

    const setNewMaster = useSaveMaster((state) => state.setMaster)
    const masterId = useSaveMaster((state) => state.masterId)

    console.log(masterId);

    const handleMaster = (newMaster: string) => {
        setMaster(newMaster)
        setNewMaster(newMaster)
    }

    const [data, setData] = useState<Masters[]>([]);

    useEffect(() => {
        axiosCFG.get('').then(({data}) => {
            setData(data.data)
        });
    }, []);

    return (
    <>
        <Header active={"мастера"}/>
        <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Мастера</h1>
        <PopupFatherAndSon />
        <div className="w-full px-3.25 pt-3.25">
            <div className="w-full px-3 pb-5 25 pt-3.25 grid grid-cols-2 gap-x-3 gap-y-3.25">
                <div className="w-148 h-300 bg-white border-1 border-light_grey2 rounded-55 overflow-hidden shadow-button relative z-10" onClick={(): void => {handleMaster('0')}}>
                    <div className="w-full h-133 bg-img_bg flex justify-center items-center">
                        <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 30C15.5 31.5177 15.6643 32.6762 16.0636 33.5744C16.4539 34.4525 17.0834 35.1149 18.0914 35.6189C19.1172 36.1318 20.5383 36.4817 22.5003 36.6997C24.4577 36.9172 26.9173 37 30 37C33.0827 37 35.5423 36.9172 37.4997 36.6997C39.4617 36.4817 40.8828 36.1318 41.9086 35.6189C42.9166 35.1149 43.5461 34.4525 43.9364 33.5744C44.3357 32.6762 44.5 31.5177 44.5 30C44.5 28.4823 44.3357 27.3238 43.9364 26.4256C43.5461 25.5475 42.9166 24.8851 41.9086 24.3811C40.8828 23.8682 39.4617 23.5183 37.4997 23.3003C35.5423 23.0828 33.0827 23 30 23C26.9173 23 24.4577 23.0828 22.5003 23.3003C20.5383 23.5183 19.1172 23.8682 18.0914 24.3811C17.0834 24.8851 16.4539 25.5475 16.0636 26.4256C15.6643 27.3238 15.5 28.4823 15.5 30Z" stroke="#171717" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="9.375" cy="9.375" r="8.875" transform="matrix(-1 0 0 1 39.375 0)" stroke="#171717"/>
                            <path d="M43.125 5.625C46.5 5.625 48.75 8.4375 48.75 11.25C48.75 14.0625 46.5 16.875 43.125 16.875" stroke="#171717" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.875 5.625C13.5 5.625 11.25 8.4375 11.25 11.25C11.25 14.0625 13.5 16.875 16.875 16.875" stroke="#171717" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M49.875 33.75C55.125 33.75 58.125 32.9464 58.125 28.125C58.125 23.3036 55.125 22.5 46.875 22.5" stroke="#171717" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.125 33.75C4.875 33.75 1.875 32.9464 1.875 28.125C1.875 23.3036 4.875 22.5 13.125 22.5" stroke="#171717" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="w-full px-3.25 pt-3.25 flex justify-between">
                        <h2 className="font-mons text-10 font-medium">Любой специалист</h2>
                        <div className={`w-4.5 h-4.5 border-1 border-dark rounded-100 flex justify-center items-center ${masterId == '0' ? 'bg-dark' : ''}`}>
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3L3.25 5.25L7.75 0.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {data.map(el => {
                    if (el.hidden != 1) return <MasterItem key={el.id} master={el} nowMaster={masterId} setMaster={setMaster} />
                })}
            </div>
        </div>
        <BackgroundComponent />
    </>
    );
}

export default MastersPage;