import { funcionPrueba } from "./funcion"

describe('Testeando mis primeras pruebas', () => {

    test('Mi primera prueba', () => {
        const can1 = {
            flavor: 'pineapple',
            number: 20,
        }
        const can2 = {
            flavor: 'pineapple',
            number: 20,
        }
        expect(can1).toEqual(can2)
    })

    test('Mi segunda prueba', () => {
        let testfuncion = funcionPrueba(1,2)
        expect(testfuncion).toEqual(3)
    })
})
