import { OPTIONS_TECH } from "../../shared/constants/technologies";
import { NotFoundText } from "../../shared/ui/NotFoundText/NotFoundText";
import s from './styles/MainResume.module.scss';
import { capitalize } from "../../shared/lib/text/capitalize";
import { useUserData } from "../../shared/hooks/useUserData";
import { Collapse } from "antd";
import { handleOpacity } from "./lib/handleCustom";
import { useSettings } from "../../app/providers/SettingsContext";

export const Main = () => {
    const { stackValue, experienceFields, projectValue } = useUserData();
    const { opacity, radius , isBlurBlocks} = useSettings();
    const selectedTechLogos = OPTIONS_TECH.filter(option => stackValue.includes(option.label));

    return (
        <div className={s.container} style={{backgroundColor: `rgba(194, 194, 194, ${handleOpacity(opacity)})`, borderRadius: `${radius}px`, backdropFilter: isBlurBlocks ? 'blur(10px)' : 'none'}}>
                    <div className={s.experience}>
                        <h3 style={{marginBottom: 10, fontSize: 23}}>Ваш опыт:</h3>
                        <ul>
                            {experienceFields.length > 0 ?
                                experienceFields.map((exp: any, id: number) => ((
                                    <li key={id}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <svg fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z"></path></g></svg>
                                                <p style={{fontSize: 20}}>{capitalize(exp.name)}</p>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.974 482.974" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M155.504,204.774c4.4,28.6,26.5,65,62.8,77.8c14.9,5.2,31.2,5.3,46.1-0.1c35.7-12.9,58.5-49.2,63-77.7 c4.8-0.4,11.1-7.1,17.9-31.2c9.3-32.9-0.6-37.8-9-37c1.6-4.5,2.8-9.1,3.6-13.5c14.2-85.3-27.8-88.2-27.8-88.2s-7-13.4-25.3-23.5 c-12.3-7.3-29.4-12.9-51.9-11c-7.3,0.3-14.2,1.8-20.7,3.9l0,0c-8.3,2.8-15.9,6.9-22.8,11.7c-8.4,5.3-16.4,11.9-23.4,19.4 c-11.1,11.4-21,26.1-25.3,44.4c-3.6,13.7-2.8,28,0.2,43.4l0,0c0.8,4.5,2,9,3.6,13.5c-8.4-0.8-18.3,4.1-9,37 C144.404,197.674,150.704,204.374,155.504,204.774z"></path> <path d="M406.404,316.674c-51.1-13-92.6-42.2-92.6-42.2l-32.4,102.5l-6.1,19.3l-0.1-0.3l-5.3,16.4l-17.1-48.5 c42-58.6-8.5-58-11.3-57.9c-2.8-0.1-53.3-0.7-11.3,57.9l-17.1,48.5l-5.3-16.4l-0.1,0.3l-6.1-19.3l-32.5-102.5 c0,0-41.5,29.2-92.6,42.2c-38.1,9.7-39.9,53.7-38.4,75.4c0,0,2.2,29.5,4.4,42.5c0,0,74.4,48.3,199,48.4c124.6,0,199-48.4,199-48.4 c2.2-13,4.4-42.5,4.4-42.5C446.304,370.374,444.504,326.374,406.404,316.674z"></path> </g> </g> </g></svg>
                                                <p style={{fontSize: 20}}>{capitalize(exp.job_title)}</p>
                                            </div>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#ffffff"></path> </g></svg>
                                                <p style={{fontSize: 20}}>{exp.startDateMonth} {exp.startDateYear}</p>
                                                <span style={{ margin: '0 8px' }}>-</span>
                                                <p style={{fontSize: 20}}>{exp.isCurrent ? `По настоящее время` : `${exp.endDateMonth} ${exp.endDateYear}`}</p>
                                            </div>
                                        <Collapse 
                                            items={[{ key: '1', label: 'О работе', children: <p className={s.about__job}>{exp.about_job}</p> }]}
                                        />
                                    </li>
                                )))
                            : <NotFoundText text='Отсутствует'/>}
                        </ul>
                    </div>
                    <div className={s.stack}>
                        <h3 style={{marginBottom: 10, fontSize: 23}}>Стек:</h3>
                        <ul>
                            {stackValue.map((tech: string, index: number) => (
                                <li key={index}>
                                        {selectedTechLogos.find(option => option.label === tech)?.logo && (
                                            <img 
                                                src={selectedTechLogos.find(option => option.label === tech)?.logo} 
                                                alt={tech} 
                                                className={s.logo} 
                                            />
                                        )}
                                        {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.project}>
                        <h3 style={{marginBottom: 10, fontSize: 23}}>Пет проекты:</h3>
                        {
                            projectValue.length > 0
                            ?
                            projectValue.map((project: { name: string, link: string, id: number }) => (
                                <span key={project.id}>
                                    <a href={project.link} target='_blank' rel="noopener noreferrer">{capitalize(project.name)}</a>
                                    <br />
                                </span>
                            ))
                            : <NotFoundText text={'Отсутствуют'}/>
                        }
                    </div>
            </div>
    );
}