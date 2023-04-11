class inst_calib_ver {
    get inst_calib_ver_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('Instrument Calibration Verification')
        })
    }

    get temp_int_unit () {
        return cy.get('[data-testid="Select-Field-temperatureIntervalUnit"]')
    }

    get temp_inst_yes_btn () {
        return cy.get('[data-testid="Radio-Group-temperatureControllerInstrumentLabelPresentOnUnit"] > :nth-child(1)')
    }

    get bms_probe_btn () {
        return cy.contains('BMS Probe - Temperature')
    }

    get bms_int_unit () {
        return cy.get('[data-testid="Select-Field-bmsTemperatureIntervalUnit"]')
    }

    get bms_inst_yes_btn () {
        return cy.get('[data-testid="Radio-Group- bMSProbeTemperatureInstrumentLabelPresentOnUnit"] > :nth-child(1)')
    }

    get others_btn () {
        return cy.contains('Other')
    }

    get other_id () {
        return cy.get('[data-testid="Input-Field-otherIdTag"]')
    }

    get other_int_unit () {
        return cy.get('[data-testid="Select-Field-otherIntervalUnit"]')
    }

    get other_calib_inter () {
        return cy.get('[data-testid="Input-Field-otherCalibrationInterval"]')
    }

    get other_inst_yes_btn () {
        return cy.get('[data-testid="Radio-Group-otherInstrumentLabelPresentOnUnit"] > :nth-child(1)')
    }
}
export default inst_calib_ver