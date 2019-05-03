import { typeNumber } from './number';

describe('number', (): void => {
  const sut = typeNumber;
  it('can compare equal', (): void => {
    const result = sut.eq('1', '1');
    expect(result).toBe(true);
  });
});
