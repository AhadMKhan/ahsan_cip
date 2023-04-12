class calib_verf {
    get calib_verf_btn () {
        return cy.get(':nth-child(2) > .gutter-row > :nth-child(1) > :nth-child(4) > .ant-col > .ant-space-align-end > :nth-child(1) > .ant-space > :nth-child(2) > .ant-typography')
    }

    get data_log_btn () {
        return cy.get('[data-testid="Radio-Group-temperatureMeasuringDevice"] > :nth-child(1)')
    }

    get chamber_size () {
        return cy.get('[data-testid="Input-Number-Field-chamberSize"]')
    }

    get no_of_sensors () {
        return cy.get('[data-testid="Input-Number-Field-numberOfDataLoggers"]')
    }

    get ref_no_1_btn () {
        return cy.contains('Reference Number 1')
    }

    get ref_no_2_btn () {
        return cy.contains('Reference Number 2')
    }
}
export default calib_verf