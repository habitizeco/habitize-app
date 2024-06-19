import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import es from './locales/es.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: { translation: en }
        },
        interpolation: {
            escapeValue: false // React ya hace el escape por defecto
        }
    });

export default i18n;
