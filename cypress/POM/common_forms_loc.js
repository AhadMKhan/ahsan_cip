class common_forms_loc {
    get criteria_met_yes_btn () {
        return cy.get('[data-testid="Radio-Group-yesOrNo"] > :nth-child(1)')
    }

    get comments () {
        return cy.get('[data-testid="[object Object]comments"]')
    }

    get save_btn () {
        return cy.get('[type="submit"]')
    }

    get success_msg () {
        return cy.get('[class="ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]')
    }
}
export default common_forms_loc