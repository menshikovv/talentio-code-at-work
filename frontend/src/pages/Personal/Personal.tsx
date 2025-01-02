import { ModalSettings } from '../../features/ModalSettings/ModalSettings';
import { useEffect, useState } from 'react';
import { Header } from '../../widgets/Personal/Header';
import { Main } from '../../widgets/Personal/Main';
import { Footer } from '../../widgets/Personal/Footer';
import JSConfetti from 'js-confetti';

const Personal = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [confettiShown, setConfettiShown] = useState(false);

    useEffect(() => {
        if (!confettiShown) {
            const confetti = new JSConfetti();
            confetti.addConfetti();
            setConfettiShown(true);
        }
    }, [confettiShown]);

    return (
        <>
            <div className='container'> 
                <Header showSettings={showSettings} setShowSettings={setShowSettings} />
                {showSettings && <ModalSettings onClose={() => setShowSettings(false)}/>}
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default Personal;