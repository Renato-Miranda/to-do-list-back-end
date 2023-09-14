import ValidacaoServices from "../src/services/ValidacaoServices.js"

describe("Usuarios", ()=>{

    test("Quando a validação de nome  retorna false", ()=>{

        expect(ValidacaoServices.validaNome("")).toBe(false)
        expect(ValidacaoServices.validaNome("1")).toBe(false)
        expect(ValidacaoServices.validaNome("12")).toBe(false)
        expect(ValidacaoServices.validaNome(123)).toBe(false)
        expect(ValidacaoServices.validaNome(true)).toBe(false)
        expect(ValidacaoServices.validaNome([])).toBe(false)
        expect(ValidacaoServices.validaNome({})).toBe(false)
        expect(ValidacaoServices.validaNome(NaN)).toBe(false)
        expect(ValidacaoServices.validaNome()).toBe(false)
    })
    test("Quando a validação de nome retorna true", ()=>{
        expect(ValidacaoServices.validaNome("ren")).toBe(true)
    })
})


