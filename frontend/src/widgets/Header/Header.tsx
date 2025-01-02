import s from './Header.module.scss';
import logoBig from '../../../../../sources/logo/logo.svg';
import { Avatar } from '@nextui-org/react';
import { Dropdown, MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { avatarStore } from '../../shared/stores/avatarStore/avatarStore';
import { Burger } from './ui/Burger/Burger';
import { ROUTES } from '../../app/router/router.config';

export const Header  = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reset } = useFormContext();

  const handleCreate = () => {
    reset();
    navigate(ROUTES.NEW);
    avatarStore.resetAvatar();
  }
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Мои страницы',
    },
    {
      key: '2',
      label: 'Настройки',
    },
    {
      key: '3',
      label: 'Выход',
    },
  ];

  const isPersonalPage = location.pathname === ROUTES.PERSONAL_PAGE;
  return (
    <div className={s.wrapper}>
        <div className={`${s.content} container`}>
            <div className={s.logo}>
              <img src={logoBig} width={200}/>
            </div>
            <div className={s.centerContent}>
                {isPersonalPage && (
                    <div className={s.modeResume}>
                        <Link to="/resume">Режим "Резюме"</Link>
                    </div>
                )}
                <div className={s.premium}>
                    <Link to='/premium'>Talentio Premium</Link>
                </div>
                <div className={s.create}>
                    <Link to="/new">Создать новое</Link>
                </div>
            </div>
            <div className={s.right}>
                <Avatar/>
                <p>menshikov</p>
                <Dropdown menu={{ items }}>
                    <DownOutlined />
                </Dropdown>
            </div>
            <Burger />
        </div>
    </div>
  );
};