import { Select } from "antd";
import { OPTIONS_TECH } from "../../../shared/constants/technologies";
import { Controller } from "react-hook-form";
import s from '../styles/UserStack.module.scss';
import { memo } from "react";

const UserStack = memo(({ control }: IUserStackProps) => {
    return (
        <div className={s.wrapper}>
                <Controller
                name="userStack"
                control={control}
                render={({ field }) => (
                        <Select 
                            {...field}
                            mode="multiple"
                            placeholder="Начните вводить или выберите"
                            className={s.select}
                            onChange={(value) => field.onChange(value)}
                            options={OPTIONS_TECH.map(optionsTech => ({
                                label: (
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img 
                                            src={optionsTech.logo} 
                                            alt={optionsTech.label} 
                                            style={{ width: 20, height: 20, marginRight: 5 }}
                                        />
                                        {optionsTech.label}
                                    </div>
                                ),
                                value: optionsTech.label
                            }))}
                    />
                )}
            />
        </div>
    );
});

export interface IUserStackProps {
    control?: any,
    width?: boolean
}

export default UserStack;