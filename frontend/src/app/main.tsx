import ReactDOM from 'react-dom/client';
import { App } from './router/AppRouter.tsx';
import './index.scss';
import './assets/styles/normalize.scss';
import { SettingsProvider } from './providers/SettingsContext.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { Background } from '../shared/ui/Background/Background.tsx';
import { BrowserRouter } from 'react-router-dom';
import Snowfall from 'react-snowfall';

const Main = () => { 
    const methods = useForm({ mode: 'onChange' });
    return (
        <SettingsProvider>
            <Snowfall snowflakeCount={100} /> 
            <FormProvider {...methods}>
                <Background />
                <App />
            </FormProvider>
        </SettingsProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
);
