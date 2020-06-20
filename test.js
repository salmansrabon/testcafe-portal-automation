import { Selector } from 'testcafe';

const name=Selector('input[name="name"]')
const chkbox1=Selector('#remote-testing')
const chkbox2=Selector('#reusing-js-code')
const chkbox3=Selector('#background-parallel-testing')
const chkbox4=Selector('#continuous-integration-embedding')
const chkbox5=Selector('#traffic-markup-analysis')
const chkbox6=Selector('#tried-test-cafe')
const radio=Selector('#windows')
const dropdownSelect=Selector('#preferred-interface')
const dropdownOption=dropdownSelect.find('option')
const textArea=Selector('#comments')
const btnSubmit=Selector('#submit-button')
const greet=Selector('#article-header').withText('Thank you')

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    // Test code
    await t
    .maximizeWindow()
    .typeText(name,'Salman Srabon')
    .wait(1000)
    .click(chkbox1)
    .wait(1000)
    .click(chkbox2)
    .wait(1000)
    .click(chkbox3)
    .wait(1000)
    .click(chkbox4)
    .wait(1000)
    .click(chkbox5)
    .wait(1000)
    .click(chkbox6)
    .wait(1000)
    .drag('#slider', 720, 0, { offsetX: 10, offsetY: 10 })
    .wait(1000)
    .click(radio)
    .wait(1000)
    .click(dropdownSelect)
    .click(dropdownOption.withText('Both'))
    .wait(1000)
    .typeText(textArea,'I love TestCafe')
    .wait(1000)
    .click(btnSubmit)
    .wait(1000)
    .expect(greet.exists).ok()
    .takeScreenshot()
    .wait(3000);
});