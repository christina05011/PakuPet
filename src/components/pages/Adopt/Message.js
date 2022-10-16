import React, { useContext } from 'react';
import { DataContext } from '../../../context/AdoptDataProvider';

export const Message = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;

    const show1 = menu ? "msgs show" : "msgs";
    const show2 = menu ? "msg show" : "msg"; 

    const tooglefalse = () => {
        setMenu(false);
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <h2>Gracias por adoptar!</h2>
                <div className='msg_footer' onClick={tooglefalse}>
                    <button className='btn'>Continuar</button>
                </div>
            </div>
        </div>
    )
}