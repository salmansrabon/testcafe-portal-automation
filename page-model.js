import { Selector } from 'testcafe';
class Page {
    constructor() {
        this.name = Selector('input[name="name"]')
        this.chkbox1 = Selector('#remote-testing')
        this.chkbox2 = Selector('#reusing-js-code')
        this.chkbox3 = Selector('#background-parallel-testing')
        this.chkbox4 = Selector('#continuous-integration-embedding')
        this.chkbox5 = Selector('#traffic-markup-analysis')
        this.chkbox6 = Selector('#tried-test-cafe')
        this.radio = Selector('#windows')
        const dropdownSelect = Selector('#preferred-interface')
        this.dropdownSelect = dropdownSelect
        this.dropdownOption = dropdownSelect.find('option')
        this.textArea = Selector('#comments')
        this.btnSubmit = Selector('#submit-button')
        this.greet = Selector('#article-header').withText('Thank you')
    }
}

export default new Page();