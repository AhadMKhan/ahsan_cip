class sen_plac_dia {
    get sen_plac_btn () {
        return cy.get(':nth-child(2) > .gutter-row > :nth-child(1) > :nth-child(5) > .ant-col > .ant-space-align-end > :nth-child(1) > .ant-space > :nth-child(2)')
    }

    get sen_room_no () {
        return cy.get('[data-testid="Input-Field-roomNumber"]')
    }

    get sen_data_log_btn () {
        return cy.get('[data-testid="Radio-Group-temperatureMeasuringDevice"] > :nth-child(2)')
    }

    get sen_single_door_btn () {
        return cy.contains('Single Door')
    }

    get sen_no_of_shelf () {
        return cy.get('[data-testid="Select-Field-numberOfShelves"]')
    }

    get sen_overall_sensors () {
        return cy.get('[data-testid="Select-Field-overallSensors"]')
    }

    get sen_data_image () {
        return cy.get('.image-marker__image')
    }

    get sen_marker_1 () {
        return cy.get('[data-testid="image-marker-0"]')
    }

    get sen_marker_2 () {
        return cy.get('[data-testid="image-marker-1"]')
    }

    get sen_probe_adj_loc () {
        return cy.get('[data-testid="Select-Field-probe"]')
    }

    get sen_actual_loc () {
        return cy.get('[data-testid="Select-Field-location"]')
    }

    get sen_comment () {
        return cy.get('[data-testid="Input-Field-comment"]')
    }

    get sen_update_com_btn () {
        return cy.contains('Update Comments')
    }

}
export default sen_plac_dia