import page from './page-model';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    // Test code
    await t
    .maximizeWindow()
    .typeText(page.name,'Salman Srabon')
    .wait(1000)
    .click(page.chkbox1)
    .wait(1000)
    .click(page.chkbox2)
    .wait(1000)
    .click(page.chkbox3)
    .wait(1000)
    .click(page.chkbox4)
    .wait(1000)
    .click(page.chkbox5)
    .wait(1000)
    .click(page.chkbox6)
    .wait(1000)
    .drag('#slider', 720, 0, { offsetX: 10, offsetY: 10 })
    .wait(1000)
    .click(page.radio)
    .wait(1000)
    .click(page.dropdownSelect)
    .click(page.dropdownOption.withText('Both'))
    .wait(1000)
    .typeText(page.textArea,'I love TestCafe')
    .wait(1000)
    .click(page.btnSubmit)
    .wait(1000)
    .expect(page.greet.exists).ok()
    .takeScreenshot()
    .wait(3000);
});