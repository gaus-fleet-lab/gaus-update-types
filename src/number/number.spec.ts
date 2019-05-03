import { TypeNumber } from "./number";

describe('number', () => {
    let sut: TypeNumber;
    beforeEach(() => {
        sut = new TypeNumber();
    })
    it('can compare equal', () => {
        let result = sut.eq("1", "1");
        expect(result).toBe(true);
    })
});