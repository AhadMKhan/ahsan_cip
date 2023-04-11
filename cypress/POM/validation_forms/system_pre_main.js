class sys_pre_main {
    get sys_pre_main_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('System Preventive Maintenance')
        })
    }

    get pm_plan_yes_btn () {
        return cy.get('[data-testid="Radio-Group-pmPlanActiveInQualityManagmentSystem"] > :nth-child(1)')
    }

    get pm_due_date () {
        return cy.get('[name="nextPMDueDate"]')
    }

    get pm_interval () {
        return cy.get('[data-testid="Input-Field-PMInterval"]')
    }

    get pm_inter_unit () {
        return cy.get('[data-testid="Select-Field-pmIntervalUnit"]')
    }

    get pm_workplan_id () {
        return cy.get('[data-testid="Input-Field-PMWorkPlanIDorEquivalent"]')
    }
}
export default sys_pre_main