import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';
import { useSaveMaster } from '../masters/saveMaster';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Services from '../../types/Services';
import ServicesItem from './item';
import { PopupFatherAndSon } from '../../components/HappyHours';

const axiosCFG = axios.create({
    baseURL:'https://api.yclients.com/api/v1/company/64805/services',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function ServicesPage() {
    
    const masterId = useSaveMaster((state) => state.masterId)

    const [ services, setServices ] = useState<Services[]>([])
    
    useEffect(() => {
        if (masterId !== "") {
            let urlMasterId = "?staff_id=" + masterId
            axiosCFG.get(urlMasterId).then(({data}) => {
                setServices(data.data)
            })
        } else {
            setServices([])
        }
    }, [])

    if (services.length == 0) {
        return (
            <>
                <Header active={"услуги"}/>
                <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Услуги</h1>
                <PopupFatherAndSon />
                <div className="mx-3.25 my-3.25 flex flex-col gap-3.25">
                    <p className="font-mons text-base text-center">Кажется вы ещё не выбрали мастера...</p>
                </div>
                <BackgroundComponent />
            </>
        )
    }

    return (
        <>
            <Header active={"услуги"}/>
            <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Услуги</h1>
            <PopupFatherAndSon />
            <div className="mx-3.25 my-3.25 flex flex-col gap-3.25">
                {services.map(el => {
                    return <ServicesItem key={el.id} service={el} />
                })}
            </div>
            <BackgroundComponent />
        </>
    );
}

export default ServicesPage;