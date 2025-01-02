import s from './styles/FooterResume.module.scss';
import { NotFoundText } from '../../shared/ui/NotFoundText/NotFoundText';
import { LANGUAGES } from '../../shared/constants/languages';
import { capitalize } from '../../shared/lib/text/capitalize';
import { useUserData } from '../../shared/hooks/useUserData';
import { handleOpacity } from './lib/handleCustom';
import { useSettings } from '../../app/providers/SettingsContext';

export const Footer = () => {
    const { educationLevel, nameUniversity, languageValue, nameFaculty, nameSpecialization, yearEnd } = useUserData();
    const { opacity, radius, isBlurBlocks } = useSettings();

    return (
        <div className={s.container}>
                <div className={s.education} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
                        <h3 style={{marginBottom: 10, fontSize: 23}}>Образование:</h3>
                        <p>{educationLevel}</p>
                        {!['Школьник', 'Студент', 'Специальное'].includes(educationLevel) ? (
                            <>
                                <p>Учебное заведение: {capitalize(nameUniversity)}</p>
                                <p>Факультет: {capitalize(nameFaculty)}</p>
                                <p>Специализация: {capitalize(nameSpecialization)}</p>
                                <p>Год окончания: {yearEnd}</p>
                            </>
                        ) : ''}
                </div>
                <div className={s.language} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
                        <h3 style={{marginBottom: 10, fontSize: 23}}>Языки:</h3>
                        <ul>
                            {languageValue.length > 0 ? languageValue.map((lang: any, index: number) => {
                                const languageData = LANGUAGES.find(l => l.label === lang.name);
                                return (
                                    <li key={index}>
                                        {languageData?.logo && (
                                            <img src={languageData.logo} alt={`${lang.name} flag`} className={s.flag} />
                                        )}
                                        {lang.name} - {lang.level}
                                    </li>
                                )
                            }) : <NotFoundText text={'Отсутствуют'}/>}
                        </ul>
                </div>
            </div>
    );
}