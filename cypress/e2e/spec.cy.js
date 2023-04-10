import login_page from "../POM/login_page"
import home_page from "../POM/home_page"
import validation_id_extractor from "../POM/validation_id_extractor"
import system_specification from "../POM/validation_forms/system_specification.js"

const login_page_obj = new login_page()
const home_page_obj = new home_page()
const validation_id = new validation_id_extractor()
const sys_spec = new system_specification()

import {
  validation_id_api
} from '../POM/api_urls/api_url.js'

import {
  validation_id_path
} from '../POM/file_paths/id_paths.js'

describe('Quality Agent Forms', () => {
  it('Creating Form', () => {
    
    cy.visit('/')
    cy.login_app()
    
    cy.intercept({
      method: 'POST',
      url: validation_id_api
    }).as('id_extractor')

    cy.fixture('./new_validation_data.json').then((nv_data) => {
      home_page_obj.new_validation_btn.click()
      home_page_obj.validation_name.type(nv_data.validation_name)
      home_page_obj.testing_protocol_btn.click()
      home_page_obj.equipment_type.type(nv_data.ref_equip_type+"{enter}")
      home_page_obj.equipment_id.type(nv_data.equipment_id+"{enter}")
      home_page_obj.initiate_qual_btn.click()

      validation_id.id_extractor('id_extractor', validation_id_path)
    })
  })

  it('Fill System Specification forms', () => {
    
    cy.visit('/')
    cy.login_app()
    
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
      home_page_obj.sys_spec_btn.click()
      cy.get('[data-testid="Radio-Group-equipmentClassification"]').click()
      cy.get('[data-testid="Input-Field-location"]').type("Karachi")
      cy.get('[data-testid="Input-Field-room"]').type("3")
      cy.get('[data-testid="Radio-Group-yesOrNo"] > :nth-child(1)').click()
      cy.get('[data-testid="[object Object]comments"]').type("testing")
      cy.get('[type="submit"]').click()
      cy.get('[class="ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]').should('be.visible')
    })
    
  })

  it('Fill System Operational Parameters Verification forms', () => {
    
    cy.visit('/')
    cy.login_app()
    
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
      home_page_obj.sys_ops_para_btn.click()
      cy.get('[data-testid="Radio-Group-meetRequirments1"] > :nth-child(1)').click()
      cy.get('[data-testid="Input-Field-value2"]').type("25")
      cy.get('[data-testid="Radio-Group-meetRequirments2"] > :nth-child(1)').click()
      cy.get('[data-testid="Input-Field-value3"]').type("20")
      cy.get('[data-testid="Radio-Group-meetRequirments3"] > :nth-child(1)').click()
      cy.get('[data-testid="Radio-Group-yesOrNo"] > :nth-child(1)').click()
      cy.get('[data-testid="[object Object]comments"]').type("testing")
      cy.get('#rc-tabs-1-tab-SysOpParamVerificationBuildingMoniteringSetPointsTab').click()
      cy.get('[data-testid="Input-Field-value10"]').type("25")
      cy.get('[data-testid="Radio-Group-meetRequirments10"] > :nth-child(1)').click()
      cy.get('[data-testid="Input-Field-value11"]').type("20")
      cy.get('[data-testid="Radio-Group-meetRequirments11"] > :nth-child(1)').click()      
      cy.get('[type="submit"]').click()
      cy.get('[class="ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]').should('be.visible')
    })    
  })

  it('Fill Instrument Calibration Verification forms', () => {
    
    cy.visit('/')
    cy.login_app()
    
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
      home_page_obj.inst_calib_ver_btn.click()
      cy.get('[data-testid="Select-Field-temperatureIntervalUnit"]').type("Months"+"{enter}")
      cy.get('[data-testid="Radio-Group-temperatureControllerInstrumentLabelPresentOnUnit"] > :nth-child(1)').click()
      cy.contains('BMS Probe - Temperature').click()
      cy.get('[data-testid="Select-Field-bmsTemperatureIntervalUnit"]').type("Months{enter}")
      cy.get('[data-testid="Radio-Group- bMSProbeTemperatureInstrumentLabelPresentOnUnit"] > :nth-child(1)').click()
      cy.contains('Other').click()
      cy.get('[data-testid="Input-Field-otherIdTag"]').type("001")
      cy.get('[data-testid="Select-Field-otherIntervalUnit"]').type("Months{enter}")
      cy.get('[data-testid="Input-Field-otherCalibrationInterval"]').type("4")
      cy.get('[data-testid="Radio-Group-otherInstrumentLabelPresentOnUnit"] > :nth-child(1)').click()
      cy.get('[data-testid="Radio-Group-yesOrNo"] > :nth-child(1)').click()
      cy.get('[data-testid="[object Object]comments"]').type("testing")   
      cy.get('[type="submit"]').click()
      cy.get('[class="ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]').should('be.visible')
    })    
  })
})