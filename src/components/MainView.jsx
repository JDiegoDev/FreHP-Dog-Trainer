import { useTranslation } from 'react-i18next';
import '../styles/MainView.scss';

const MainView = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Main' });

    return (
        <section className='main-view'>
            <div className='main-view-container'>
                <div className='main-view-welcome'>
                    <h1 className='main-view-welcome--italic'>{t('welcome')}</h1>
                    <h1 className='main-view-welcome--bold'>{t('dogTraining')}</h1>
                    <h1 className='main-view-welcome--academy'>{t('academy')}</h1>
                </div>
                <div className='main-view-image-container'>
                </div>
            </div>
            <div className='main-view-background' />
        </section>
    );
};

export default MainView;