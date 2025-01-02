import { Input } from "antd";
import { Controller } from "react-hook-form";
import { ErrorInput } from "../../../shared/ui/ErrorInput/ErrorInput";
import { memo } from "react";

const UserGithub = memo(({ control, width }: IUserGithubProps) => {
    return (
        <>
            <Controller
                name="userGithub"
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
            <p style={{marginTop: 20}}>без ссылки, только юзернейм</p>
        </>
    );
});

export interface IUserGithubProps {
    control?: any,
    width?: boolean,
}

export default UserGithub;