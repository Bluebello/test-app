

describe('Login app / Logout test', () => {
    it('Should be login with proper data for administrator', () => {
        browser.url('http://localhost:4200')
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input').setValue('admin')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input').setValue('admin')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button').click()
        $('body > app-dashboard > header > a').waitForExist()
        browser.pause(5000)
    })


    it('Should be logout from app', () =>{
        $('body > app-dashboard > header > ul.nav.navbar-nav.ml-auto > a > button').click()
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        browser.pause(5000)


    })

    it('Should be login with proper data for primary user', () => {
        browser.url('http://localhost:4200')
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input').setValue('uzytkownik')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input').setValue('uzytkownik')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button').click()
        $('body > app-dashboard > header > a').waitForExist()
        browser.pause(5000)


    })



    // it('Should be login with invalid data', () =>{
    //     browser.url('http://localhost:4200')
    //     $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
    //     $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input').setValue('username')
    //     $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input').setValue('password')
    //     $('body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button').click()
    //
    //     // dodac selektor dla dymku, ze logowanie nie udane
    //     const error = // selector dymku
    //     expect(error).toHaveText('Logowanie nie udane')
    //
    // })


})