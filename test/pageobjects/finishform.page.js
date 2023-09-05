class finisformPage {
    get chooseActivity() {
        return $('#rb_rest');
    }

    get title() {
        return $('#title_activity');
    }

    get btnFinish() {
        return $('#bt_finish');
    }

    async activity() {
        await this.chooseActivity.click()
        await this.btnFinish.click()
    }

}

module.exports = new finisformPage();