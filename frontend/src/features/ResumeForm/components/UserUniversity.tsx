import { Controller, useFormContext } from 'react-hook-form';
import s from '../styles/UserUniversity.module.scss'
import { Input, InputNumber } from 'antd';
import { noForbiddenWords } from '../../../shared/validate/noForbiddenWords';
import { ErrorInput } from '../../../shared/ui/ErrorInput/ErrorInput';
import { memo } from "react";

export const UserUniversity = memo(() => {
    const { control } = useFormContext();
    return (
        <div className={s.wrapper}>
            <Controller 
                name='userNameUniversity'
                control={control}
                rules={{ validate: noForbiddenWords }}
                render={({ field, fieldState }) => (
                    <>
                        <Input placeholder="Название учебного заведения" {...field} className={s.input}/>
                        {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                    </>
                )}
            />
            <Controller 
                name='userFaculty'
                control={control}
                rules={{ validate: noForbiddenWords }}
                render={({ field, fieldState }) => (
                    <>
                        <Input placeholder="Факультет" {...field} className={s.input}/>
                        {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                    </>
                )}
            />
            <Controller 
                name='userSpecialization'
                control={control}
                rules={{ validate: noForbiddenWords }}
                render={({ field, fieldState }) => (
                    <>
                        <Input placeholder="Специализация" {...field} className={s.input}/>
                        {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                    </>
                )}
            />
            <Controller 
                name='userYearEndStudy'
                control={control}
                render={({ field }) => (
                    <>
                        <InputNumber placeholder="Год окончания" {...field} className={s.input} min={1950} max={new Date().getFullYear()} />
                    </>
                )}
            />
        </div>
    );
});