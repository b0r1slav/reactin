import Words from '../words/Words';

class Phrases extends Words {
    constructor(props) {
        super(props);

        this.module = 'phrases';
        this.moduleUrl = '/phrases/';
        this.itemsCount = 20;
    }
}

export default Phrases;