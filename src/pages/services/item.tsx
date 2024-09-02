import { useState } from 'react';
import Services from '../../types/Services';
import { useSaveServices } from './saveServices';
import { ServicesInfo } from '../../types/ServicesZustandType';

function useToggleServices() {
    const arrayServicesZus = useSaveServices((state) => state.arrayServices);
    const setArrayServices = useSaveServices((state) => state.setArrayServices);
    
    // console.log(arrayServicesZus);

    const toggleService = (service: ServicesInfo) => {
        const itemExists = arrayServicesZus.some((i) => i.id === service.id);

        if (itemExists) {
            setArrayServices(arrayServicesZus.filter(i => i.id !== service.id));
        } else {
            setArrayServices([...arrayServicesZus, service]);
        }
    }

    return { arrayServicesZus, toggleService };
}

function ServicesItem({service}: {service: Services}) {

    const { arrayServicesZus, toggleService } = useToggleServices();

    const item: ServicesInfo = {
        nameHaircut: service.title,
        id: service.id.toString(),
        price: service.price_max.toString()
    }

    const handleServices = () => {
        toggleService(item);
    }

    const [ accordeon, setAccordeon ] = useState<boolean>(false)

    const handleAccordeon = () => {
        accordeon == true ? setAccordeon(false) : setAccordeon(true)
    }

    const itemExists = arrayServicesZus.some((i) => i.id === service.id.toString());

    return (
        <>
            <div className="w-full border-1 border-light_grey2 rounded-10 bg-white p-3.25 relative z-10 flex flex-col gap-3.25">
                <div className="w-full flex justify-between relative">
                    <div className="w-fit flex flex-col gap-3.25">
                        <h1 className="text-sm font-medium opacity-60">{service.title}</h1>
                        <h1 className="text-sm leading-18 font-inter font-semibold">{service.price_max} ₽</h1>
                        <h1 className="text-11 leading-14 font-medium">{service.duration / 60} мин</h1>
                    </div>
                    <div className="w-fit h-5 flex gap-1.5 items-center">
                        <svg className={`${accordeon ? "rotate-180" : "" }`} onClick={handleAccordeon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.5L10 12.5L5 7.5" stroke="#171717"/>
                        </svg>
                        <div onClick={handleServices} className={`w-4.5 h-4.5 border-1 rounded-100 flex justify-center items-center ${itemExists ? "bg-dark" : ""}`}>
                            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 3L3.25 5.25L7.75 0.75" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <svg className="absolute bottom-0 left-152" width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.61729 9.3335L30.2544 31.3354M35.5425 15.5299L5.02142 20.0813M13.9494 1.27562C16.5682 2.15177 17.9808 4.98494 17.1047 7.60369C16.2285 10.2224 13.3953 11.6351 10.7766 10.7589C8.15785 9.88278 6.7452 7.04961 7.62135 4.43086C8.4975 1.81212 11.3307 0.39947 13.9494 1.27562ZM7.60377 20.2422C10.2225 21.1184 11.6352 23.9516 10.759 26.5703C9.88287 29.1891 7.04969 30.6017 4.43095 29.7255C1.81221 28.8494 0.399555 26.0162 1.27571 23.3975C2.15186 20.7787 4.98503 19.3661 7.60377 20.2422Z" stroke="#D07852" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={`w-full h-fit items-start gap-3.25 flex-col ${accordeon ? "flex" : "hidden"}`}>
                    <div className="w-full">
                        <img src={service.image_group?.images?.basic?.path ?? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjujutsu-kaisen.fandom.com%2Fru%2Fwiki%2F%25D0%25A1%25D0%25B0%25D1%2582%25D0%25BE%25D1%2580%25D1%2583_%25D0%2593%25D0%25BE%25D0%25B4%25D0%25B6%25D0%25BE&psig=AOvVaw16iL3COkPhoiUiwV52BOM8&ust=1724170545603000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjs0Pi5gYgDFQAAAAAdAAAAABAE"} alt="" />
                    </div>
                    <p className="w-full">{service.comment}</p>
                </div>
                <svg className="absolute bottom-0 right-102" width="39" height="20" viewBox="0 0 39 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5214 28.5379L11.3075 1.14781M1.60707 14.7007L32.1176 19.3219M18.0562 34.6724C15.8107 33.0652 15.2933 29.9419 16.9005 27.6964C18.5077 25.4509 21.6309 24.9335 23.8764 26.5407C26.122 28.1479 26.6394 31.2711 25.0322 33.5167C23.425 35.7622 20.3017 36.2796 18.0562 34.6724ZM29.6967 18.409C27.4512 16.8018 26.9337 13.6785 28.5409 11.433C30.1482 9.18748 33.2714 8.67004 35.5169 10.2772C37.7624 11.8845 38.2799 15.0077 36.6727 17.2532C35.0654 19.4987 31.9422 20.0162 29.6967 18.409Z" stroke="#D07852" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </>
    )
}

export default ServicesItem;