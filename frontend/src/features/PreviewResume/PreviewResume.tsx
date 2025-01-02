import { useFormContext } from 'react-hook-form';
import s from './PreviewResume.module.scss'
import { avatarStore } from '../../shared/stores/avatarStore/avatarStore';
import { useNavigate } from 'react-router-dom';
import { IPreviewResumeProps } from './interfaces/IPreviewResumeProps';
import { capitalize } from '../../shared/lib/text/capitalize';
import { DropdownDisplay } from './components/DropdownDisplay';
import { ExperienceList } from './components/ExperienceList';
import { ProjectList } from './components/ProjectList';
import { generateAboutItems } from './lib/generateAboutItems';
import { renderLanguages } from './ui/renderLanguages';
import { renderStack } from './ui/renderStack';
import { ROUTES } from '../../app/router/router.config';

const PreviewResume = ({ setStep }: IPreviewResumeProps) => {
    const { getValues, reset } = useFormContext();
    const navigate = useNavigate();
    const formData = getValues();

    const { userName, userAge, userCountry, userCity, userEducationLevel, userNameUniversity, userFaculty, userSpecialization, userYearEndStudy, userStack, userExperience, userProject, userLanguage, userTg, userAbout, userDirections, userGithub } = formData;

    const onReset = () => {
        reset();
        setStep(0);
        avatarStore.resetAvatar();
    }

    const aboutItems = generateAboutItems(userAbout);

    return (
        <div className={s.wrapper}>
            <div className={s.preview}>
                <h1 className={s.title}>Проверьте информацию</h1>
                <div className={s.data}>
                        <p style={{marginTop: 20}}><strong>Профессия:</strong> {userDirections}</p>
                        <p style={{marginTop: 20}}><strong>Имя:</strong> {capitalize(userName)}</p>
                        <p><strong>Возраст:</strong> {userAge}</p>
                        <strong>О себе: </strong><DropdownDisplay items={aboutItems}/>
                        <p style={{marginTop: 20}}><strong>Страна и город:</strong> {userCountry}, {capitalize(userCity)}</p>
                        <p><strong>Образование:</strong> {userEducationLevel}</p>
                        {!['Школьник', 'Студент', 'Среднее'].includes(userEducationLevel) ? (
                            <>
                                <p><strong>Учебное заведение:</strong> {capitalize(userNameUniversity)}</p>
                                <p><strong>Факультет:</strong> {capitalize(userFaculty)}</p>
                                <p><strong>Специальность:</strong> {capitalize(userSpecialization)}</p>
                                <p><strong>Год окончания:</strong> {userYearEndStudy}</p>
                            </>
                        ) : ''}
                        <div style={{ display: 'flex' }}>
                            <p>Стек:</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {renderStack(userStack)}
                            </div>
                        </div>
                        <strong>Опыт: </strong> <ExperienceList experiences={userExperience}/>
                        <ProjectList projects={userProject}/>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            <p style={{margin: 0}}>Иностранные языки: </p>
                                {renderLanguages(userLanguage)}
                        </div>
                        <p><strong>Telegram:</strong> <a href={`https://t.me/${userTg}`} target='_blank' rel="noopener noreferrer">@{userTg}</a></p>
                        <p><strong>GitHub:</strong> <a href={`https://github.com/${userGithub}`} target='_blank' rel="noopener noreferrer">@{userTg}</a></p>
                        <p className={s.other}>остальная информация будет доступна после создания...</p>
                </div>
            </div>
            <div className={s.buttons}>
                    <h2 className={s.confirmText}>Все верно?</h2>
                    <button className={`${s.btn__false} button`} onClick={onReset}>Нет, начать заново</button>
                    <button className={`${s.btn__true} button`} onClick={() => navigate(ROUTES.PERSONAL_PAGE)}>Да, все верно</button>
            </div>
        </div>
    );
}

export default PreviewResume;