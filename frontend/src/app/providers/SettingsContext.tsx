import { createContext, ReactNode, useContext, useState } from "react";

const SettingsContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isVisibleName: boolean;
    isVisibleAge: boolean;
    isVisibleCity: boolean;
    isVisibleCountry: boolean;
    isVisibleTg: boolean;
    isVisibleGithub: boolean;
    opacity: number;
    radius: number;
    isBlurBlocks: boolean;
    isBlurThemes: boolean;
    setIsVisibleName: (flag: boolean) => void;
    setIsVisibleAge: (flag: boolean) => void;
    setIsVisibleCity: (flag: boolean) => void;
    setIsVisibleCountry: (flag: boolean) => void;
    setOpacity: (opacity: number) => void;
    setRadius: (radius: number) => void;
    setIsBlurBlocks: (flag: boolean) => void;
    setIsVisibleTg: (flag: boolean) => void;
    setIsVisibleGithub: (flag: boolean) => void;
    setIsBlurThemes: (flag: boolean) => void;
}>({
    theme: 'default',
    setTheme: () => {},
    isVisibleName: true,
    isVisibleAge: true,
    isVisibleCity: true,
    isVisibleCountry: true,
    isVisibleTg: true,
    isVisibleGithub: true,
    opacity: 0.079,
    radius: 25,
    isBlurBlocks: false,
    isBlurThemes: false,
    setIsVisibleName: () => {},
    setIsVisibleAge: () => {},
    setIsVisibleCity: () => {},
    setIsVisibleCountry: () => {},
    setOpacity: () => {},
    setRadius: () => {},
    setIsBlurBlocks: () => {},
    setIsVisibleTg: () => {},
    setIsVisibleGithub: () => {},
    setIsBlurThemes: () => {},
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('default');
    const [isVisibleName, setIsVisibleName] = useState(true);
    const [isVisibleAge, setIsVisibleAge] = useState(true);
    const [isVisibleCity, setIsVisibleCity] = useState(true);
    const [isVisibleTg, setIsVisibleTg] = useState(true);
    const [isVisibleGithub, setIsVisibleGithub] = useState(true);
    const [isVisibleCountry, setIsVisibleCountry] = useState(true);
    const [opacity, setOpacity] = useState(10);
    const [radius, setRadius]= useState(25);
    const [isBlurBlocks, setIsBlurBlocks] = useState(false);
    const [isBlurThemes, setIsBlurThemes] = useState(false);
    

    return (
        <SettingsContext.Provider value={{ theme, setTheme, isVisibleName, isVisibleAge, isVisibleCity, isVisibleCountry, setIsVisibleName, setIsVisibleAge, setIsVisibleCity, setIsVisibleCountry, opacity, setOpacity, radius, setRadius, isBlurBlocks, setIsBlurBlocks, isVisibleTg, setIsVisibleTg, isBlurThemes, setIsBlurThemes, isVisibleGithub, setIsVisibleGithub }}>
            {children}
        </SettingsContext.Provider>
    )
};

export const useSettings = () => {
    return useContext(SettingsContext);
};

export type Theme = 'default' | 'night' | 'katana';