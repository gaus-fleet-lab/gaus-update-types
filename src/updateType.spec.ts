import { updateType } from './updateType';

describe('update type tests', (): void => {
  it('can use alphanum', (): void => {
    expect(updateType('alphanum').validate('abc0123')).toBe(null);
  });

  it('can use number', (): void => {
    expect(updateType('number').validate('0')).toBe(null);
  });

  it('can use semver', (): void => {
    expect(updateType('semver').validate('1.2.3')).toBe(null);
  });

  it('can use string', (): void => {
    expect(updateType('string').validate('abc0123.^%')).toBe(null);
  });
});
