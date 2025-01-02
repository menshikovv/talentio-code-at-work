import { Input, Mentions } from "antd";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import s from '../styles/UserExperience.module.scss';
import { IUserExperienceProps } from './interfaces/IUserExperienceProps';
import { ErrorInput } from "../../../shared/ui/ErrorInput/ErrorInput";
import { WorkStartDate, WorkEndDate } from "../ui/WorkDate";
import { CurrentSwitch } from "../ui/CurrentSwitch/CurrentSwitch";
import { noForbiddenWords } from "../../../shared/validate/noForbiddenWords";
import { FieldButton, FieldSkip } from "../ui";
import { memo } from "react";

const UserExperience = memo(({ control, step = 0, setStep, textAdd, hideSkipButton }: IUserExperienceProps) => {
    const { setValue, getValues } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "userExperience"
    });

    const addField = () => {
        append({ name: '', job_title: '', startDateMonth: null, startDateYear: '', endDateMonth: null, endDateYear: '', about_job: '', isCurrent: true, showEndDate: false });
    };

    return (
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {fields.length > 0 && <FieldButton text='-' handleClick={() => remove(fields.length - 1)}/>}
                <FieldButton text='+' handleClick={addField}/>
                {!fields.length && !hideSkipButton && <FieldSkip handleClick={() => setStep(step + 1)}/>}
            </div>
                {fields.map((field, index) => (
                    <div key={field.id} className={s.input__wrapper}>
                        <Controller
                            name={`userExperience.${index}.name`}
                            control={control}
                            rules={{ validate: noForbiddenWords }}
                            render={({ field, fieldState }) => (
                                <>
                                    <Input placeholder="Название компании" {...field} className={s.input} style={{marginTop: 20}}/>
                                    {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                                </>
                            )}
                        />
                        <Controller
                            name={`userExperience.${index}.job_title`}
                            control={control}
                            rules={{ validate: noForbiddenWords }}
                            render={({ field, fieldState }) => (
                                <>
                                    <Input placeholder="Должность" {...field} className={s.input} style={{marginTop: 20, marginBottom: 20}}/>
                                    {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                                </>
                                
                            )}
                        />
                        <Controller 
                            name={`userExperience.${index}.about_job`}
                            control={control}
                            rules={{ validate: noForbiddenWords }}
                            render={({ field, fieldState }) => (
                                <>
                                    <Mentions {...field} allowClear rows={3} placeholder="Расскажите чем занимались на месте работы" className={s.mentions}/>
                                    {fieldState.error && <ErrorInput error={fieldState.error.message} />}
                                </>
                            )}
                        />
                        <div className={s.dates} style={getValues(`userExperience.${index}.showEndDate`) ? {alignItems: 'normal'} : {alignItems: 'center'}}>
                            <WorkStartDate control={control} index={index}/>
                            <div style={{marginTop: 20}}>
                                <WorkEndDate control={control} index={index} getValues={getValues}/>
                                <CurrentSwitch control={control} index={index} setValue={setValue} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
});

export default UserExperience;