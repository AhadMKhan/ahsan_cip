class system_ops_para {
    get sys_ops_para_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('System Operational Parameters Verification')
        })
    }

    get build_mon_tab_btn () {
        return cy.get('#rc-tabs-1-tab-SysOpParamVerificationBuildingMoniteringSetPointsTab')
    }
    get meet_req_1_btn () {
        return cy.get('[data-testid="Radio-Group-meetRequirments1"] > :nth-child(1)')
    }

    get high_alarm_1 () {
        return cy.get('[data-testid="Input-Field-value2"]')
    }

    get meet_req_2_btn () {
        return cy.get('[data-testid="Radio-Group-meetRequirments2"] > :nth-child(1)')
    }

    get low_alarm_1 () {
        return cy.get('[data-testid="Input-Field-value3"]')
    }

    get meet_req_3_btn () {
        return cy.get('[data-testid="Radio-Group-meetRequirments3"] > :nth-child(1)')
    }

    get high_alarm_2 () {
        return cy.get('[data-testid="Input-Field-value10"]')
    }

    get meet_req_4_btn () {
        return cy.get('[data-testid="Radio-Group-meetRequirments10"] > :nth-child(1)')
    }

    get low_alarm_2 () {
        return cy.get('[data-testid="Input-Field-value11"]')
    }

    get meet_req_5_btn () {
        return cy.get('[data-testid="Radio-Group-meetRequirments11"] > :nth-child(1)')
    }
}
export default system_ops_para