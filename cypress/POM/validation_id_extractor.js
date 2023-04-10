class validation_id_extractor {
    id_extractor (alias, file_path) {
        cy.wait('@' + alias).then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200)

            const validation_id = xhr.response.body.result.validationId

            cy.writeFile(file_path, {
                validation_id
            })
        })
    }
}
export default validation_id_extractor