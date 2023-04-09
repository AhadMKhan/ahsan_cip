import login_page from "../POM/login_page"
import home_page from "../POM/home_page"

const login_page_obj = new login_page()
const home_page_obj = new home_page()

describe('Quality Agent Forms', () => {
  it('Creating Form', () => {
    
    cy.visit('/')
    cy.login_app()    

    cy.fixture('./new_validation_data.json').then((nv_data) => {
      home_page_obj.new_validation_btn.click()
      home_page_obj.validation_name.type(nv_data.validation_name)
      home_page_obj.testing_protocol_btn.click()
      home_page_obj.equipment_type.type(nv_data.ref_equip_type+"{enter}")
      home_page_obj.equipment_id.type(nv_data.equipment_id+"{enter}")
      home_page_obj.initiate_qual_btn.click()
    })
  })
})