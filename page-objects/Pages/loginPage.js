import Base from '../Base'

class loginPage extends Base {
    get loginForm() {
        return $('#body > ng-component > div > div > div > div > div > div > div > h1')
    }

    get usernameInput() {
        return $('#body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-3.mt-3 > input')
    }

    get passwordInput() {
        return $('#body > ng-component > div > div > div > div > div > div > div > div > div.input-group.mb-4 > input')
    }

    get submitBtn() {
        return $('#body > ng-component > div > div > div > div > div > div > div > div > div.text-center > button')
    }




    formIsVisible() {
        this.loginForm.waitForExist()
    }

    fillForm(username, password) {
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitBtn().click()
    }

    login(username, password){
        this.loginForm.waitForExist()
        this.usernameInput(username)
        this.passwordInput(password)
        this.submitBtn.click()
    }




}

export  default new loginPage()