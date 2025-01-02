import './App.scss'
import { Route, Routes, Navigate } from 'react-router-dom';
import '../assets/styles/globals.scss';
import { ROUTES } from './router.config.ts';
import { Layout } from '../layout/Layout.tsx';
import { Loader } from '../../shared/ui/Loader/Loader.tsx';
import { lazy, Suspense } from 'react';

const NewPersonal = lazy(() => import('../../pages/NewPersonal/NewPersonal'));
const Personal = lazy(() => import('../../pages/Personal/Personal'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Navigate to={ROUTES.NEW} />} />
                <Route path={ROUTES.NEW} element={<NewPersonal />} />
                <Route path='*' element={<Navigate to={ROUTES.NEW} />}/>
                <Route path={ROUTES.PERSONAL_PAGE} element={<Personal />}/>
            </Route>
        </Routes>
    </Suspense>
  )
}
