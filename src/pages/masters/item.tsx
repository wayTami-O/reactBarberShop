import React from 'react';
import Master from '../../types/Masters';

function MasterItem({master, nowMaster, setMaster}: {master: Master; nowMaster:string, setMaster: React.Dispatch<React.SetStateAction<string>>}) {
    console.log(nowMaster);

    const handle = (newMaster: string) => {
        setMaster(newMaster)
    }

    return (
        <div className="w-148 h-300 bg-white border-1 border-light_grey2 rounded-55 overflow-hidden shadow-button relative z-10" onClick={(): void => {handle(master.id.toString())}}>
            <img className="w-full h-133" src={master.avatar_big} alt="" />
            <div className="px-3.25 pt-3.25 flex justify-between items-start">

            </div>
        </div>
    );
}

export default MasterItem;