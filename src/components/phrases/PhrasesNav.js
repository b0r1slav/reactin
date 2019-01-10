import WordsNav from '../words/WordsNav';

class PhrasesNav extends WordsNav {
    
    constructor(props) {
        super(props);

        this.module = 'phrases';
        this.moduleUrl = '/phrases/';
        this.dataUrl = '/phrases/1/1'
    }
}

export default PhrasesNav;