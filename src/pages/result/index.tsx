import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';
import { ResultHappyHours } from '../../components/HappyHours';

function ResultPage() {
    return (
        <>
            <Header active={"записаться"}/>
            <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Итог</h1>
            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Мастер</p>
                <Link to="/masters" className="w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button">
                    <p className="w-fit font-mons text-12 box">Выберите мастера</p>
                    <button className="font-mons text-sm font-semibold text-white leading-18 rounded-100 bg-dark px-11p py-1">Выбрать</button>
                </Link>
            </fieldset>
            {/* Место для даты и времени */}
            <fieldset className="relative mx-3.25 mt-3.25 flex flex-col gap-3.25 z-20">
                <p className="text-base text-dark opacity-60 leading-21">Услуги</p>
                <Link to="/services" className="w-full bg-white rounded-20 border-1 border-light_grey2 flex justify-between items-center p-3.25 shadow-button">
                    <p className="w-fit font-mons text-12 box">Выберите услуги</p>
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