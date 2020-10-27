import Base from '../Base'

class dashboardNavbar extends  Base {

    get stworzTypProduktu() {
        return $('#dashboard-create-product-type-btn')
    }

    get Wyloguj() {
        return $('#body > app-dashboard > header > ul.nav.navbar-nav.ml-auto > a > button')
    }

    stworzTypProduktuIsVisible() {
        this.stworzTypProduktu.waitForExist()
    }

    clickWyloguj() {
        this.Wyloguj.click()
    }



}

export  default new dashboardNavbar()