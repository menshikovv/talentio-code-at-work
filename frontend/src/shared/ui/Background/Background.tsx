import './Background.scss';
import { useSettings } from '../../../app/providers/SettingsContext';
import { night_theme, katana_theme } from '../../assets/background-img/video';
export const Background = () => {
    const { theme, isBlurThemes } = useSettings();

    return (
        <>
            {theme === 'default' ? (
                <div className="test">
                    <div className="background_background__3Oeal">
                        {Array.from({ length: 21 }).map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="video-background">
                    <video
                        className="video-element"
                        src={theme === 'night' ? night_theme : katana_theme}
                        autoPlay
                        style={{filter: isBlurThemes ? 'blur(10px)' : 'none'}}
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                    ></video>
                </div>
            )}
        </>
    );
};
