const mainPage = require('../pageobjects/main.page')
const finishformPage = require('../pageobjects/finishform.page')

describe('User create new user', () => {
    it('User successfully create new user', async () => {
        await expect(mainPage.header).toBeExisting()
        await expect(mainPage.header).toHaveTextContaining(
            'Welcome...'
        )
        await expect(mainPage.header_decs).toBeExisting()
        await expect(mainPage.header_decs).toHaveTextContaining(
            'Isi formulir untuk membuat/menambahkan user'
        )
        await mainPage.fill_form('Sofia Awiliyah', 46, 153)

        await expect(finishformPage.title).toBeExisting()
        await finishformPage.activity()
    })
})
