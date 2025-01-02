import s from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.blur}/>
            <div className={s.menu__content}>
                <ul>
                    <li>Главная</li>
                    <li>Talentio Premium</li>
                    <li>Создать новое</li>
                </ul>
            </div>
        </div>
    );
}