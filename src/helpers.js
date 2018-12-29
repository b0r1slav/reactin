import * as AppConfig from './appconfig';

export const getModuleVersion = (module) => {
    
    return AppConfig[`${module}Version`];
};

export const url = (path) => {

    if (process.env.NODE_ENV === 'production') {
        return AppConfig.prodUrl + path;
    }

    return AppConfig.devUrl + path;
};

export const makeClasses = classes => {

    if (Array.isArray(classes)) {

        return classes.join(' ');
    }

    return classes;
};