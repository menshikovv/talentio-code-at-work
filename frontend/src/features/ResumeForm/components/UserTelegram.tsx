import { Input } from "antd";
import { Controller } from "react-hook-form";
import { ErrorInput } from "../../../shared/ui/ErrorInput/ErrorInput";
import { memo } from "react";

const UserTelegram = memo(({ control, width }: IUserTelegramProps) => {
    return (
        <>
            <Controller
                name="userTg"
                control={control}
                rules={{
                    pattern: {
                        value: /^[a-zA-Z0-9_@]*$/,
                        message: "Некорректный ввод",
                    }
                }}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <Input
                            style={width ? {width: '100%'} : {width: '250px'}}
                            placeholder="Ваш username"
                            {...field}
                        />
                        {error && <ErrorInput error={error.message} />}
                    </>
                )}
            />
            <p style={{marginTop: 20}}>без @ и ссылки, только юзернейм</p>
        </>
    );
});

export interface IUserTelegramProps {
    control?: any,
    width?: boolean,
}

export default UserTelegram;