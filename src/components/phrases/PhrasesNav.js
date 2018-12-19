import WordsNav from '../words/WordsNav';

class PhrasesNav extends WordsNav {
    
    constructor(props) {
        super(props);

        this.module = 'phrases';
        this.dataUrl = '/phrases/1'
    }
}

export default PhrasesNav;