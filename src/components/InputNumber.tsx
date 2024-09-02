import { IMaskInput } from 'react-imask';
import { usePhoneNumber } from './SaveNumber';
import { useRef } from 'react';

export default function InputNumber() {

    const phone = usePhoneNumber((state) => state.phone)
    const setPhone = usePhoneNumber((state) => state.setPhone)

    const phoneNum = useRef<string>('')

    const handleButtonClick = () => {
        // console.log("Введенный номер телефона:", phoneNum.current);
        setPhone(phoneNum.current)
    };

    const handleAccept = (value: string) => {
        // console.log('Текущее значение телефона:', value);
        phoneNum.current = value
    };

    if (phone !== "") {
        return null;
    }

    return(
        <>
            <div className={`w-full h-full fixed top-0 bg-light_grey4 z-50 items-center justify-center flex`}>
                <div className="w-302 h-fit bg-white rounded-10 flex flex-col justify-center items-center gap-4.5 overflow-hidden py-6 px-11p">
                    <h2 className="font-mons text-base font-semibold">Авторизация</h2>
                    <fieldset className="w-full flex flex-col gap-3">
                        <label className="font-mons text-base" htmlFor="tel">Номер телефона</label>
                        <IMaskInput 
                            className="font-mons border-1 border-light_grey2 rounded-20 py-17 pr-2 pl-3.25 text-base leading-18"
                            mask="+{7} (000) 000-00-00"
                            placeholder="Номер"
                            onAccept={handleAccept}
                            />
                    </fieldset>
                    <div onClick={handleButtonClick} className="relative bg-white z-20 w-full h-50 mt-2.5 font-mons border-1 rounded-100 border-translucent_brick flex justify-center items-center">Авторизация</div>
                    <svg className="absolute bottom-0 z-10" width="302" height="58" viewBox="0 0 302 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.75401C0 7.75401 180.827 -9.69252 182.691 7.75401C184.556 25.2005 302 7.75401 302 7.75401V58H0V7.75401Z" fill="#D07852"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}