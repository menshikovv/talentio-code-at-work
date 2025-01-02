import { Button, Tooltip } from 'antd';
import s from '../styles/UserEducation.module.scss';
import { IUserExperienceProps } from './interfaces/IUserExperienceProps';
import { UserUniversity } from './UserUniversity';
import { useState, memo } from 'react';
import { useFormContext } from 'react-hook-form';

const UserEducation = memo(({ setStep, step = 0 }: IUserExperienceProps) => {
  const { setValue } = useFormContext();
  const [showUniversity, setShowUniversity] = useState(false);

  const handleButtonClick = (educationLevel: string) => {
    setValue('userEducationLevel', educationLevel);

    if (['Среднее специальное', 'Неоконченное высшее', 'Высшее', 'Бакалавр', 'Магистр', 'Кандидат наук', 'Доктор наук'].includes(educationLevel)) {
      setShowUniversity(true);
    } else {
      setStep(step + 1);
    }
  };

  if (showUniversity) return <UserUniversity />;

  return (
    <div className={s.wrapper}>
      <Button className={s.btn} onClick={() => handleButtonClick('Школьник')}>
        <Tooltip title="Если вы сейчас учитесь в школе">
          <span style={{ textDecoration: 'underline' }}>Школьник</span>
        </Tooltip>
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Студент')}>
        <Tooltip title="Если вы сейчас учитесь в университете или колледже">
          <span style={{ textDecoration: 'underline' }}>Студент</span>
        </Tooltip>
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Среднее')}>
        Среднее
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Среднее специальное')}>
        Среднее специальное
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Неоконченное высшее')}>
        Неоконченное высшее
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Высшее')}>
        Высшее
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Бакалавр')}>
        Бакалавр
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Магистр')}>
        Магистр
      </Button>
      <Button className={s.btn} onClick={() => handleButtonClick('Кандидат наук')}>
        Кандидат наук
      </Button>
      <Button className={s.btn} style={{ marginBottom: 0 }} onClick={() => handleButtonClick('Доктор наук')}>
        Доктор наук
      </Button>
    </div>
  );
});

export default UserEducation;