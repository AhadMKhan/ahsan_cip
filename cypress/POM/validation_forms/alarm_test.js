class alarm_test {
    get alarm_test_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('Alarm Testing')
        })
    }

    get high_alarm_point () {
        return cy.get('[data-testid="Input-Number-Field-alarmTemperatureSetPoint"]').eq(0)
    }

    get high_curr_temp () {
        return cy.get('[data-testid="Input-Number-Field-currentUnitTemperature"]').eq(0)
    }

    get high_act_method () {
        return cy.get('[data-testid="Input-Field-activationMethod"]').eq(0)
    }

    get high_alarm_trig_yes_btn () {
        return cy.get('[data-testid="Radio-Group-alarmTriggered"] > :nth-child(1)').eq(0)
    }

    get high_alarm_setpoint_left () {
        return cy.get('[data-testid="Input-Number-Field-alarmSetPointAsLeft"]').eq(0)
    }

    get high_result_pass_btn () {
        return cy.get('[data-testid="Radio-Group-result"] > :nth-child(1)').eq(0)
    }

    get low_alarm_point () {
        return cy.get('[data-testid="Input-Number-Field-alarmTemperatureSetPoint"]').eq(1)
    }

    get low_curr_temp () {
        return cy.get('[data-testid="Input-Number-Field-currentUnitTemperature"]').eq(1)
    }

    get low_act_method () {
        return cy.get('[data-testid="Input-Field-activationMethod"]').eq(1)
    }

    get low_alarm_trig_yes_btn () {
        return cy.get('[data-testid="Radio-Group-alarmTriggered"] > :nth-child(1)').eq(1)
    }

    get low_alarm_setpoint_left () {
        return cy.get('[data-testid="Input-Number-Field-alarmSetPointAsLeft"]').eq(1)
    }

    get low_result_pass_btn () {
        return cy.get('[data-testid="Radio-Group-result"] > :nth-child(1)').eq(1)
    }

    get build_mont_sys () {
        return cy.get('#rc-tabs-1-tab-AlarmTestingBuildingMonitoringSetPointsTab')
    }

    get build_high_alarm_point () {
        return cy.get('[label="High Alarm Setpoint"]').eq(1)
    }

    get build_high_curr_temp () {
        return cy.get('[label="Current Unit Temperature"]').eq(2)
    }

    get build_high_act_method () {
        return cy.get('[label="Activation Method"]').eq(2)
    }

    get build_high_alarm_trig_btn () {
        return cy.get('[data-testid="Radio-Group-alarmTriggered"] > :nth-child(1)').eq(2)
    }

    get build_high_alarm_setpoint_left () {
        return cy.get('[data-testid="Input-Number-Field-alarmSetPointAsLeft"]').eq(2)
    }

    get build_high_result_pass_btn () {
        return cy.get('[data-testid="Radio-Group-result"] > :nth-child(1)').eq(2)
    }

    get build_low_alarm_point () {
        return cy.get('[data-testid="Input-Number-Field-alarmTemperatureSetPoint"]').eq(3)
    }

    get build_low_curr_temp () {
        return cy.get('[label="Current Unit Temperature"]').eq(3)
    }

    get build_low_act_method () {
        return cy.get('[data-testid="Input-Number-Field-currentUnitTemperature"]').eq(3)
    }

    get build_low_alarm_trig_btn () {
        return cy.get('[data-testid="Radio-Group-alarmTriggered"] > :nth-child(1)').eq(3)
    }

    get build_low_alarm_setpoint_left () {
        return cy.get('[data-testid="Input-Number-Field-alarmSetPointAsLeft"]').eq(3)
    }

    get build_low_result_pass_btn () {
        return cy.get('[data-testid="Radio-Group-result"] > :nth-child(1)').eq(3)
    }
}
export default alarm_test