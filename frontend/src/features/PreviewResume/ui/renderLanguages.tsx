import { NotFoundText } from "../../../shared/ui/NotFoundText/NotFoundText";
import { LANGUAGES } from "../../../shared/constants/languages";

export const renderLanguages = (languages: { name: string, link: string }[]) => {
    return (
        <>
            {languages.length > 0 ? languages.map((lang: any, index: number) => {
                                    const languageData = LANGUAGES.find(option => option.label === lang.name);
                                    console.log(languageData)
                                    return (
                                        <div key={index} style={{display: 'flex'}}>
                                            {languageData?.logo && <img src={languageData.logo} alt={languageData.label} style={{ width: 20, height: 20, marginRight: 4, marginLeft: 8 }} />}
                                            <p>{lang.name} - {lang.level}</p>
                                            <p>{index < languages.length - 1 && ', '}</p>
                                        </div>
                                    )
                                }) : <NotFoundText text={'Отсутствуют'}/>}
        </>
    )
}