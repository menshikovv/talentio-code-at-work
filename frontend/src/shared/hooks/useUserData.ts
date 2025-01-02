import { useFormContext } from "react-hook-form";
import { IExperienceField, ILanguageField, IProjectField } from "../../features/ResumeForm/interface/IForm";

export const useUserData = () => {
    const { watch, formState } = useFormContext();
    
    return {
        userNameValue: watch('userName', ''),
        ageValue: watch('userAge', undefined),
        experienceFields: watch('userExperience', [] as IExperienceField[]),
        stackValue: watch('userStack', []),
        projectValue: watch('userProject', []) as IProjectField[],
        languageValue: watch('userLanguage', [] as ILanguageField[]),
        usertgValue: watch('userTg', ''),
        educationLevel: watch('userEducationLevel', ''),
        userCity: watch('userCity', ''),
        userCountry: watch('userCountry', ''),
        userAvatar: watch('userAvatar', null),
        userAbout: watch('userAbout', ''),
        nameUniversity: watch('userNameUniversity', ''),
        nameFaculty: watch('userFaculty', ''),
        nameSpecialization: watch('userSpecialization', ''),
        yearEnd: watch('userYearEndStudy', undefined),
        userDrections: watch('userDirections', ''),
        userGithub: watch('userGithub', ''),

        userNameError: formState.errors['userName']?.message,
        usertgError: formState.errors['user_tg']?.message,
        userCityError: formState.errors['userCity']?.message,
        userCountryError: formState.errors['userCountry']?.message,
        userFacultyError: formState.errors['userFaculty']?.message,
        userNameUniversityError: formState.errors['userNameUniversity']?.message,
        userSpecializationError: formState.errors['userSpecialization']?.message,
        userAboutError: formState.errors.userAbout?.message,
        userAboutWorkError: formState.errors.about_job?.message,
        userGithubError: formState.errors['userGithub']?.message,
    }
}



