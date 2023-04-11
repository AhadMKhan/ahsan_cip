class loc_visual_insp {
    get loc_visual_insp_btn () {
        return cy.get("[class='ant-card-body']").then((main_slider) => {
            cy.wrap(main_slider).contains('Location And Visual Inspection')
        })
    }

    get next_btn () {
        return cy.contains("Next")
    }

    get actual_1_no_btn () {
        return cy.get('[data-testid="Radio-Group-DamageOnUnit"] > :nth-child(1)')
    }

    get actual_pass_1_btn () {
        return cy.get('[data-testid="Radio-Group-DamageOnUnitPassFail"] > :nth-child(1)')
    }

    get actual_2_no_btn () {
        return cy.get('[data-testid="Radio-Group-GasketSeal"] > :nth-child(1)')
    }

    get actual_pass_2_btn () {
        return cy.get('[data-testid="Radio-Group-GasketSealPassFail"] > :nth-child(1)')
    }

    get actual_3_no_btn () {
        return cy.get('[data-testid="Radio-Group-UnitLevel"] > :nth-child(1)')
    }

    get actual_pass_3_btn () {
        return cy.get('[data-testid="Radio-Group-UnitLevelPassFail"] > :nth-child(1)')
    }

    get actual_4_no_btn () {
        return cy.get('[data-testid="Radio-Group-InstrumentLablesPresent"] > :nth-child(1)')
    }

    get acutal_pass_4_btn () {
        return cy.get('[data-testid="Radio-Group-InstrumentLablesPresentPassFail"] > :nth-child(1)')
    }

    get measure_unit () {
        return cy.get('[data-testid="Select-Field-MeasuringUnit"]')
    }

    get manufacture_cubic () {
        return cy.get('[data-testid="Input-Field-ManufacturerSpecifiedCubicDimensions"]').eq(0)
    }

    get exterior_btn () {
        return cy.get('[data-testid="Radio-Group-ExteriorInterior"] > :nth-child(1)')
    }

    get source_user_manual_btn () {
        return cy.get('[data-testid="Radio-Group-SourceForSpecifications"] > :nth-child(1)')
    }

    get unit_height () {
        return cy.get('[data-testid="Input-Number-Field-UnitHeight"]')
    }

    get unit_width () {
        return cy.get('[data-testid="Input-Number-Field-UnitWidth"]')
    }

    get unit_depth () {
        return cy.get('[data-testid="Input-Number-Field-UnitDepth"]')
    }

    get inter_dimen_yes_btn () {
        return cy.get('[data-testid="Radio-Group-DimensionsMeetManufacturerSpecifications"] > :nth-child(1)')
    }

    get clear_left () {
        return cy.get('[data-testid="Input-Number-Field-ClearanceLeft"]')
    }

    get clear_right () {
        return cy.get('[data-testid="Input-Number-Field-ClearanceRight"]')
    }

    get clear_top () {
        return cy.get('[data-testid="Input-Number-Field-ClearanceTop"]')
    }

    get clear_rear () {
        return cy.get('[data-testid="Input-Number-Field-ClearanceRear"]')
    }

    get spec_user_manual_btn () {
        return cy.get('[data-testid="Radio-Group-SpecificationSource"] > :nth-child(1)')
    }

    get spec_user_man_pass_btn () {
        return cy.get('[data-testid="Radio-Group-ClearancePassFail"] > :nth-child(1)')
    }

    get door_open_90_yes_btn () {
        return cy.get('[data-testid="Radio-Group-CanDoorOpen90Degree"] > :nth-child(1)')
    }

    get door_90_pass_btn () {
        return cy.get('[data-testid="Radio-Group-CanDoorOpen90DegreePassFail"] > :nth-child(1)')
    }

    get ambient_temp_sor () {
        return cy.get('[data-testid="Select-Field-AmbientTemperatureSpecificationSource"]')
    }

    get ambient_temp_spec () {
        return cy.get('[data-testid="Input-Field-AmbientTemperatureSpecification"]')
    }

    get ambient_temp_measure () {
        return cy.get('[data-testid="Input-Number-Field-TemperatureMeasurement"]')
    }

    get ambient_temp_yes_btn () {
        return cy.get('[data-testid="Radio-Group-AmbientTemperatureMeetsSpecification"] > :nth-child(1)')
    }

    get ambient_temp_pass_btn () {
        return cy.get('[data-testid="Radio-Group-AmbientTemperaturePassFail"] > :nth-child(1)')
    }

    get ambient_hum_sor () {
        return cy.get('[data-testid="Select-Field-AmbientHumiditySpecificationSource"]')
    }

    get ambient_hum_spec () {
        return cy.get('[data-testid="Input-Field-AmbientHumiditySpecification"]')
    }

    get ambient_hum_measure () {
        return cy.get('[data-testid="Input-Number-Field-HumidityMeasurement"]')
    }

    get ambient_hum_yes_btn () {
        return cy.get('[data-testid="Radio-Group-AmbientHumidityMeetsSpecification"] > :nth-child(1)')
    }

    get ambient_hum_pass_btn () {
        return cy.get('[data-testid="Radio-Group-AmbientHumidityPassFail"] > :nth-child(1)')
    }

    get pow_conn_utility_yes_btn () {
        return cy.get('[data-testid="Radio-Group-UnitEquippedwithPowerSwitchControl"] > :nth-child(1)')
    }

    get pow_conn_utility_pass_btn () {
        return cy.get('[data-testid="Radio-Group-UnitEquippedwithPowerSwitchControlPassfail"] > :nth-child(1)')
    }

    get chamber_temp_yes_btn () {
        return cy.get('[data-testid="Radio-Group-UnitEquippedwithControlInterface"] > :nth-child(1)')
    }

    get chamber_temp_pass_btn () {
        return cy.get('[data-testid="Radio-Group-UnitEquippedwithControlInterfacePassFail"] > :nth-child(1)')
    }
}
export default loc_visual_insp