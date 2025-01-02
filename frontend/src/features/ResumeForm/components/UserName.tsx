import { Input, Flex } from "antd";
import { Controller } from "react-hook-form";
import { runes } from "runes2";
import "../../../app/assets/styles/FormTransitions.scss";
import { noForbiddenWords } from "../../../shared/validate/noForbiddenWords";
import { ErrorInput } from "../../../shared/ui/ErrorInput/ErrorInput";
import { memo } from "react";

const UserName = memo(({ control }: any) => {
  return (
    <Flex vertical gap={16}>
      <Controller
        name="userName"
        control={control}
        rules={{
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё]+$/u,
            message: "Некорректный ввод",
          },
          validate: noForbiddenWords,
        }}
        render={({ field, fieldState }) => (
          <>
            <Input
              className="input-form"
              placeholder="Введите"
              {...field}
              count={{
                show: true,
                max: 20,
                strategy: (txt) => runes(txt).length,
                exceedFormatter: (txt, { max }) =>
                  runes(txt).slice(0, max).join(""),
              }}
            />
            {fieldState?.error && <ErrorInput error={fieldState?.error.message} />}
          </>
        )}
      />
    </Flex>
  );
});

export default UserName;