import Base from '../page-objects/Base'
import App from '../page-objects/App'
import loginPage from '../page-objects/Pages/loginPage'
import dashboardNavbar from '../page-objects/components/dashboardNavbar'


describe('Login app / Logout test', () => {
    it('Should be login with proper data for administrator', () => {
        browser.url('http://localhost:4200')
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input').setValue('admin')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input').setValue('admin')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button').click()
        $('dashboard-create-product-type-btn').waitForExist()
        browser.pause(5000)


        // App.openHomePage()
        // loginPage.formIsVisible()
        // loginPage.fillForm('admin', 'admin')
        // loginPage.submitForm()
        // dashboardNavbar.stworzTypProduktuIsVisible()
        // Base.pauseMedium()

    })


    it('Should be logout from app', () =>{
        $('body > app-dashboard > header > ul.nav.navbar-nav.ml-auto > a > button').click()
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        browser.pause(5000)

        dashboardNavbar.clickWyloguj()
        App.openHomePage()
        Base.pauseMedium()


    })

    it('Should be login with proper data for primary user', () => {
        browser.url('http://localhost:4200')
        $('body > ng-component > div > div > div > div > div > div > div > h1').waitForExist()
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input').setValue('uzytkownik')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input').setValue('uzytkownik')
        $('body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button').click()
        $('body > app-dashboard > header > a').waitForExist()
        browser.pause(5000)

        // App.openHomePage()
        // loginPage.formIsVisible()
        // loginPage.fillForm('uzytkownik', 'uzytkownik')
        // loginPage.submitForm()





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

    // App.openHomePage()
    // loginPage.formIsVisible()
    // loginPage.fillForm('uzytkownik', 'uzytkownik')
    // loginPage.submitForm()
    //
    // })


})