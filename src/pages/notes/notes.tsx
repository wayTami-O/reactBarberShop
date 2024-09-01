import Header from '../../components/Header';
import BackgroundComponent from '../../components/Background';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { usePhoneNumber } from '../../components/SaveNumber';
import Notes from '../../types/NotesType';
import ItemNotes from './item';

const axiosCFG = axios.create({
    baseURL:'https://api.yclients.com/api/v1/records/64805',
    headers:{
        "Accept":"application/vnd.yclients.v2+json",
        "Content-Type":"application/json",
        "Authorization":"Bearer c7cdyh5smyrr6wgttzpc, User 0a0bde63ad1fb202b08f135ea026f722"
    }
})

function NotesPage() {
    
    const phone = usePhoneNumber((state) => state.phone)

    const redactPhone = phone.replace(/[^0-9]/g, '')

    const [notes, setNotes] = useState<Notes[]>()

    useEffect(() => {
        axiosCFG.get('').then(({data}) => {
            const newNotes = data.data.filter((el: Notes) => {
                if (el?.client?.phone == redactPhone && !el.deleted) {
                    return el
                }
            })
            setNotes(newNotes)
        })
    }, [])

    if (notes?.length == 0) {
        return(
            <>
                <Header active={"Мои записи"}/>
                <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Записи</h1>
                <h2 className="mx-3.25 mt-6.5 font-medium font-mons">Кажется вы ещё не делали записи...</h2>
                <BackgroundComponent />
            </>
        )
    }

    return ( 
        <>
            <Header active={"Мои записи"}/>
            <h1 className="mx-3.25 mt-5 font-extrabold text-xl leading-6">Записи</h1>
            <div className="w-full mt-3.25 px-3 pb-5 25 pt-3.25 grid grid-cols-2 gap-x-3 gap-y-3.25">
                {notes?.map((el, index) => {
                    return <ItemNotes key={index} note={el} />
                })}
            </div>
            <BackgroundComponent />
        </>
    );
}

export default NotesPage;