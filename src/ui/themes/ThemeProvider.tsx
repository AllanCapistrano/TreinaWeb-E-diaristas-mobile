import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionProvider } from '@emotion/react';

import AppTheme from './app-theme';

const ThemeProvider: React.FC = (props) => {
    return (
        <EmotionProvider theme={AppTheme}>
            <PaperProvider theme={AppTheme}>
                { props.children }
            </PaperProvider>
        </EmotionProvider>
    );
};

export default ThemeProvider;