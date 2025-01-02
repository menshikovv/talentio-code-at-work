import s from '../styles/Custom.module.scss';
import { useSettings } from '../../../app/providers/SettingsContext';
import { THEMES } from '../../../shared/constants/themes';
import { Theme } from '../../../app/providers/SettingsContext';
import { Radio, Switch, Tooltip } from 'antd';
import { useState } from 'react';

export const Custom = () => {
    const { 
        theme, setTheme, 
        opacity, setOpacity, 
        radius, setRadius, 
        setIsBlurBlocks, isBlurBlocks, 
        setIsBlurThemes, isBlurThemes 
    } = useSettings();

    const [hoveredThemeId, setHoveredThemeId] = useState<Theme | null>(null);

    return (
        <div className={s.wrapper}>
            <h2 style={{marginBottom: 10, fontSize: 18}}>Темы</h2>
            <div className={s.theme__container}>
                {THEMES.map(({ id, name, imgThemeProfile, imgDefault }) => (
                    <div key={id} className={s.item} onClick={() => setTheme(id as Theme)}>
                        <img src={hoveredThemeId === id ? imgDefault : imgThemeProfile} 
                            alt={`${name} theme`} 
                            onMouseEnter={() => setHoveredThemeId(id as Theme)}
                            onMouseLeave={() => setHoveredThemeId(null)}
                        />
                        <p className={s.name} style={{ color: theme === id ? '#30c73f' : 'inherit', marginBottom: 20, marginTop: 5 }}>{name}</p>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                <Tooltip title="Применяется к заднему фону">
                    <h3 style={{fontSize: 15, marginRight: 20, textDecoration: 'underline', fontWeight: 600}}>Блюр</h3>
                </Tooltip>
                <Switch onChange={() => setIsBlurThemes(!isBlurThemes)} checked={isBlurThemes} />
            </div>
            
            <h2 style={{marginTop: 20, marginBottom: 10, fontSize: 18}}>Блоки</h2>
            <div style={{display: 'flex', alignItems: 'center'}} className={s.opacity}>
                <h3 style={{fontSize: 15}}>Прозрачность блоков</h3>
                <Radio.Group value={opacity} onChange={e => setOpacity(e.target.value)} defaultValue={10} style={{marginLeft: 10}}>
                    <Radio value={0}>0%</Radio>
                    <Radio value={10}>10%</Radio>
                    <Radio value={25}>25%</Radio>
                    <Radio value={45}>45%</Radio>
                </Radio.Group>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{fontSize: 15}}>Закругление блоков</h3>
                <Radio.Group style={{marginLeft: 25}} value={radius} onChange={e => setRadius(e.target.value)} defaultValue={25}>
                    <Radio value={0}>0%</Radio>
                    <Radio value={10}>10%</Radio>
                    <Radio value={25}>25%</Radio>
                    <Radio value={45}>45%</Radio>
                </Radio.Group>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Tooltip title="Применяется к блокам">
                    <h3 style={{fontSize: 15, marginRight: 20, textDecoration: 'underline', fontWeight: 600}}>Блюр</h3>
                </Tooltip>
                <Switch onChange={() => setIsBlurBlocks(!isBlurBlocks)} checked={isBlurBlocks} />
            </div>
        </div>
    );
}
