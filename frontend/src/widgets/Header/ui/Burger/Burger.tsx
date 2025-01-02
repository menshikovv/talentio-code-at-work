import { useState } from 'react';
import s from './Burger.module.scss';

export const Burger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
                <div className={`${s.burger} ${isActive ? s.active : ''}`}
                        onClick={() => setIsActive(!isActive)}>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                        <div className={s.bar}></div>
                </div>
        </>
    );
}