class home_page {    
    get new_validation_btn () {
        return cy.get('[data-testid="Page-Main-Header-Heading-Validation"] > .ant-btn > span')
    }

    get validation_name () {
        return cy.get('[data-testid="Input-Field-name"]')
    }

    get testing_protocol_btn () {
        return cy.get("[data-testid='Radio-Field-0']")
    }

    get equipment_type () {
        return cy.get('[data-testid="Select-Field-equipmentType"]')
    }

    get equipment_id () {
        return cy.get('[data-testid="Select-Field-equipmentId"]')
    }

    get initiate_qual_btn () {
        return cy.get('[name="validationFormSubmit"]')
    }
}
export default home_page