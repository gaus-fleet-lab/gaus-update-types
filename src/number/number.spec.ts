import { typeNumber } from './number';

describe('number', () => {
  let sut = typeNumber;
  it('can compare equal', () => {
    let result = sut.eq('1', '1');
    expect(result).toBe(true);
  });
});
