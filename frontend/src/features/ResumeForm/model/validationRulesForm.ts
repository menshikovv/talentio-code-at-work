import { useFormContext } from "react-hook-form";
import { useUserData } from "../../../shared/hooks/useUserData";
import { avatarStore } from "../../../shared/stores/avatarStore/avatarStore";
import { hasValidExperienceFields, hasValidLanguageFields, hasValidProjectFields } from './index'

export const validationRulesForm = (): Record<number, () => boolean> => {
    const { formState } = useFormContext();
    const { userNameValue, ageValue, userCity, userCountry, nameUniversity, nameFaculty, nameSpecialization, 
        yearEnd, stackValue, experienceFields, projectValue, languageValue, usertgValue, userAvatar, userAbout, 
        userNameError, userCityError, userCountryError, userFacultyError, userSpecializationError, userNameUniversityError, 
        usertgError, userAboutError, userAboutWorkError, userDrections, userGithub, userGithubError 
    } = useUserData();
    return {
        0: () => !!userDrections,
        1: () => !!userNameValue && !userNameError,
        2: () => !!ageValue,
        3: () => !!userCity && !userCityError && !!userCountry && !userCountryError && userCountry.length >= 3,
        4: () => !!nameUniversity && !!nameFaculty && !!nameSpecialization && !!yearEnd && !userFacultyError && !userSpecializationError && !userNameUniversityError,
        5: () => stackValue.length > 0,
        6: () => hasValidExperienceFields(experienceFields),
        7: () => hasValidProjectFields(projectValue, formState.errors),
        8: () => hasValidLanguageFields(languageValue, userAboutWorkError),
        9: () => !!usertgValue && usertgValue.length >= 5 && !usertgError,
        10: () => !!userGithub && !userGithubError,
        11: () => avatarStore.avatar !== null && !!userAvatar,
        12: () => !!userAbout && !userAboutError && userAbout.length >= 15,
    }
  };