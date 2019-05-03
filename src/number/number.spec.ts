import { typeNumber } from './number';

describe('number', (): void => {
  const sut = typeNumber;
  it('can compare equal', (): void => {
    const result = sut.eq('1', '1');
    expect(result).toBe(true);
  });

  it('does not validate semver', (): void => {
    const result = sut.validate('1.1.1', 'error');
    expect(result).toBe('error');
  });
});
