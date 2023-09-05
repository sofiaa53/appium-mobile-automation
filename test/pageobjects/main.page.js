class mainPage {
    get header() {
        return $('#header_welcome')
    }

    get header_decs() {
        return $('#tv_header_desc')
    }

    get inputName() {
        return $('#et_name');
    }

    get inputWeight() {
        return $('#et_weight');
    }

    get inputHeight() {
        return $('#et_height');
    }

    get chooseGender() {
        return $('#rb_female');
    }

    get btnNext() {
        return $('#bt_next');
    }

    async fill_form(name, weight, height) {
        await this.inputName.setValue(name)
        await this.inputWeight.setValue(weight)
        await this.inputHeight.setValue(height)
        await this.chooseGender.click()
        await this.btnNext.click()
    }
}

module.exports = new mainPage();
