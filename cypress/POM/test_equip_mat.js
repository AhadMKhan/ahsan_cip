class test_equip_mat {
    get test_equip_mat_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('Test Equipment And Materials')
        })
    }

    get select_equip () {
        return cy.get('[data-testid="Select-Field-equipmentSelect"]')
    }
}
export default test_equip_mat