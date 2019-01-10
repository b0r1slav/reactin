import WordsNav from '../words/WordsNav';

class WordsCompetitionNav extends WordsNav {
    
    constructor(props) {
        super(props);

        this.module = 'wordsCompetition';
        this.moduleUrl = '/words-competition/';
        this.dataUrl = '/words-competition/1/1'
    }
}

export default WordsCompetitionNav;