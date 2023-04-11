class system_specification {
    get sys_spec_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('System Specifications')
        })
    }
    
    get equip_class_btn () {
        return cy.get('[data-testid="Radio-Group-equipmentClassification"] > :nth-child(1)')
    }

    get location () {
        return cy.get('[data-testid="Input-Field-location"]')
    }

    get room () {
        return cy.get('[data-testid="Input-Field-room"]')
    }

}
export default system_specification