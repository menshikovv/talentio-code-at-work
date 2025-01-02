import { OPTIONS_TECH } from '../../../shared/constants/technologies';
import s from '../PreviewResume.module.scss';

export const renderStack = (stack: string[]) => {
    return stack.map((tech, index) => {
        const techData = OPTIONS_TECH.find(option => option.label === tech);
        return (
            <div key={index} style={{display: 'flex'}} className={s.text}>
                {techData?.logo && <img src={techData.logo} alt={techData.label} style={{ width: 35, height: 20, marginRight: 4, marginLeft: 8 }} />}
                {tech}
                {index < stack.length - 1 && ', '}
            </div>
        );
    });
}
