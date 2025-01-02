import s from './FieldButton.module.scss';

export const FieldButton = ({ text, handleClick }: FieldButton) => {
    return (
        <>
            <button onClick={handleClick} className={`${s.btn} button`}>{text}</button>
        </>
    );
}

interface FieldButton {
    text: string,
    handleClick: () => void,
}