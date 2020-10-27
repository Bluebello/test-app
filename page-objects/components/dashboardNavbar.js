import Base from '../Base'

class dashboardNavbar extends  Base {

    get stworzTypProduktu() {
        return $('#dashboard-create-product-type-btn')
    }

    get Wyloguj() {
        return $('#body > app-dashboard > header > ul.nav.navbar-nav.ml-auto > a > button')
    }

    get linkProdukty() {
        return $('#nav-link-/dashboard')
    }

    get linkListaProduktów(){
        return $('#nav-link-/produkty/lista')
    }

    stworzTypProduktuIsVisible() {
        this.stworzTypProduktu.waitForExist()
    }

    clickWyloguj() {
        this.Wyloguj.click()
    }

    linkProduktyIsVisible(){
        this.linkProdukty.waitForExist()
    }

    linkListaProduktówIsVisible() {
        this.linkListaProduktów.waitForExist()
    }





}

export  default new dashboardNavbar()