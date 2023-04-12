class utilities_verif {
    get utilities_verif_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('Utilities Verification')
        })
    }

    get amperage () {
        return cy.get('[data-testid="Input-Field-AmperageRequirement"]')
    }

    get voltage_req () {
        return cy.get('[data-testid="Input-Field-VoltageRequirement"]')
    }

    get voltage_measure () {
        return cy.get('[data-testid="Input-Field-VoltageMeasurement"]')
    }

    get amp_measure () {
        return cy.get('[data-testid="Input-Field-AmperageMeasurement"]')
    }

    get breaker_info () {
        return cy.get('[data-testid="Input-Field-Breaker"]')
    }

    get breaker_size () {
        return cy.get('[data-testid="Input-Field-BreakerSize"]')
    }

    get elec_pannel_no () {
        return cy.get('[data-testid="Input-Field-ElectricalPanel"]')
    }

    get elec_pan_loc () {
        return cy.get('[data-testid="Input-Field-PanelLocation"]')
    }

    get eme_pow () {
        return cy.get('[data-testid="Radio-Group-EmergencyPowerRequired"] > :nth-child(1)')
    }

    get type_eme_pow () {
        return cy.get('[data-testid="Radio-Group-EmergencyPowerType"] > :nth-child(1)')
    }
}
export default utilities_verif