import { Select } from "antd";
import { Controller,} from "react-hook-form";
import { DIRECTONS } from "../../../shared/constants/directions";
import s from '../styles/UserDirection.module.scss';
import { memo } from "react";

const UserDirection = memo(({ control }: any) => {

    return (
        <div className={s.wrapper}>
            <Controller 
                name="userDirections"
                control={control}
                render={({ field }) => (
                    <Select 
                        {...field}
                        placeholder="Ваша сфера в IT"
                        className={s.select}
                        showSearch
                        options={DIRECTONS}
                    />
                )}/>
        </div>
    );
});

export default UserDirection;