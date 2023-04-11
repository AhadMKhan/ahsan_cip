import login_page from "../POM/login_page"
import home_page from "../POM/home_page"
import validation_id_extractor from "../POM/validation_id_extractor"
import system_specification from "../POM/validation_forms/system_specification.js"
import common_forms_loc from "../POM/common_forms_loc.js"
import system_ops_para from "../POM/system_ops_para.js"
import inst_calib_ver from "../POM/inst_calib_ver.js"
import sys_pre_main from "../POM/validation_forms/system_pre_main"

const login_page_obj = new login_page()
const home_page_obj = new home_page()
const validation_id = new validation_id_extractor()
const sys_spec_obj = new system_specification()
const com_loc_obj = new common_forms_loc()
const sys_ops_para_obj = new system_ops_para()
const inst_calib_ver_obj = new inst_calib_ver()
const sys_pre_main_obj = new sys_pre_main()

import {
  validation_id_api
} from '../POM/api_urls/api_url.js'

import {
  validation_id_path
} from '../POM/file_paths/id_paths.js'

describe('Quality Agent Forms', () => {

  beforeEach(() => {
    cy.viewport(1240, 800)
    cy.visit('/')
  })

  it('Creating Form', () => {    
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
    cy.login_app()    
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
    })

    cy.fixture('./sys_spec_data.json').then((sys_spec_data) => {
      sys_spec_obj.sys_spec_btn.click()
      sys_spec_obj.equip_class_btn.click()
      sys_spec_obj.location.type(sys_spec_data.location)
      sys_spec_obj.room.type(sys_spec_data.room)
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(sys_spec_data.comments)
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible') 
    })    
  })

  it('Fill System Operational Parameters Verification forms', () => {
    cy.login_app()
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
    })

    cy.fixture('./sys_ops_para_data.json').then((sys_ops_data) => {
      sys_ops_para_obj.sys_ops_para_btn.click()
      sys_ops_para_obj.meet_req_1_btn.click()
      sys_ops_para_obj.high_alarm_1.type(sys_ops_data.high_alram)
      sys_ops_para_obj.meet_req_2_btn.click()
      sys_ops_para_obj.low_alarm_1.type(sys_ops_data.low_alram)
      sys_ops_para_obj.meet_req_3_btn.click()
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(sys_ops_data.comments)
      sys_ops_para_obj.build_mon_tab_btn.click()
      sys_ops_para_obj.high_alarm_2.type(sys_ops_data.high_alram)
      sys_ops_para_obj.meet_req_4_btn.click()
      sys_ops_para_obj.low_alarm_2.type(sys_ops_data.low_alram)
      sys_ops_para_obj.meet_req_5_btn.click()      
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible')
    })      
  })

  it('Fill Instrument Calibration Verification forms', () => {
    cy.login_app()
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
    })

    cy.fixture('./inst_calib_ver_data.json').then((inst_calib_ver_data) => {
      inst_calib_ver_obj.inst_calib_ver_btn.click()
      inst_calib_ver_obj.temp_int_unit.type(inst_calib_ver_data.interval_unit+"{enter}")
      inst_calib_ver_obj.temp_inst_yes_btn.click()
      inst_calib_ver_obj.bms_probe_btn.click()
      inst_calib_ver_obj.bms_int_unit.type(inst_calib_ver_data.interval_unit+"{enter}")
      inst_calib_ver_obj.bms_inst_yes_btn.click()
      inst_calib_ver_obj.others_btn.click()
      inst_calib_ver_obj.other_id.type(inst_calib_ver_data.others_id)
      inst_calib_ver_obj.other_int_unit.type(inst_calib_ver_data.interval_unit+"{enter}")
      inst_calib_ver_obj.other_calib_inter.type(inst_calib_ver_data.other_calibration_interval)
      inst_calib_ver_obj.other_inst_yes_btn.click()
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(inst_calib_ver_data.comments)   
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible')
    })    
  })

  it('Fill System Preventive Maintenance forms', () => {
    cy.login_app()
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
    })

    cy.fixture('./sys_pre_main_data.json').then((sys_pre_main_data) => {
      sys_pre_main_obj.sys_pre_main_btn.click()
      sys_pre_main_obj.pm_plan_yes_btn.click()
      sys_pre_main_obj.pm_due_date.click().type(sys_pre_main_data.next_pm_due_date)
      sys_pre_main_obj.pm_interval.type(sys_pre_main_data.pm_interval)
      sys_pre_main_obj.pm_inter_unit.type(sys_pre_main_data.pm_inter_unit+"{enter}")
      sys_pre_main_obj.pm_workplan_id.type(sys_pre_main_data.pm_workplan_id)
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(sys_pre_main_data.comments)   
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible')
    })    
  })

  it.only('Fill Test Equipment And Materials form', () => {
    cy.login_app()
    cy.fixture('./validation_id/id.json').then((id) => {
      home_page_obj.forms_opening_btn(id.validation_id)
    })

    cy.fixture('./sys_pre_main_data.json').then((sys_pre_main_data) => {
      sys_pre_main_obj.sys_pre_main_btn.click()
      sys_pre_main_obj.pm_plan_yes_btn.click()
      sys_pre_main_obj.pm_due_date.click().type(sys_pre_main_data.next_pm_due_date)
      sys_pre_main_obj.pm_interval.type(sys_pre_main_data.pm_interval)
      sys_pre_main_obj.pm_inter_unit.type(sys_pre_main_data.pm_inter_unit+"{enter}")
      sys_pre_main_obj.pm_workplan_id.type(sys_pre_main_data.pm_workplan_id)
      com_loc_obj.criteria_met_yes_btn.click()
      com_loc_obj.comments.type(sys_pre_main_data.comments)   
      com_loc_obj.save_btn.click()
      com_loc_obj.success_msg.should('be.visible')
    })    
  })
})