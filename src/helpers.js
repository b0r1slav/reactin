export const url = (path) => {

    if (process.env.NODE_ENV === 'production') {
        return "https://engrexapi.000webhostapp.com/" + path;
    }

    return "http://www.engrexapi.com/" + path;
};