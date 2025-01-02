import ReactDOM from 'react-dom';
import s from './ModalSettings.module.scss';
import { useState } from 'react';
import { Custom } from './components/Custom';
import { Edit } from './components/Edit';
import { Privacy } from './components/Privacy';

export const ModalSettings = ({ onClose }: ISettingsProps) => {
    const [activeTab, setActiveTab] = useState<'custom' | 'edit' | 'privacy'>('custom');

    const tabs = {
        custom: <Custom />,
        edit: <Edit />,
        privacy: <Privacy />
    }

    return ReactDOM.createPortal(
        <div className={s.modalOverlay} onClick={onClose}>
            <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={s.closeButton} onClick={onClose}>×</button>
                <div className={s.contentWrapper}>
                    {tabs[activeTab]}
                </div>
                <div className={s.choice}>
                    <p onClick={() => setActiveTab('custom')}>Кастомизация</p>
                    <div className={s.vertical__border} />
                    <p onClick={() => setActiveTab('edit')}>Редактирование</p>
                    <div className={s.vertical__border} />
                    <p onClick={() => setActiveTab('privacy')}>Приватность</p>
                </div>
            </div>
        </div>,
        document.body
    );
    
};

interface ISettingsProps {
    onClose: () => void;
}