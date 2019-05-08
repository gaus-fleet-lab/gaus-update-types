import { updateType } from './updateType';

describe('update type tests', (): void => {
  it('can use alphanum', (): void => {
    expect(updateType('alphanum').valid('abc0123')).toBe(true);
  });

  it('can use number', (): void => {
    expect(updateType('number').valid('0')).toBe(true);
  });

  it('can use semver', (): void => {
    expect(updateType('semver').valid('1.2.3')).toBe(true);
  });

  it('can use string', (): void => {
    expect(updateType('string').valid('abc0123.^%')).toBe(true);
  });
});
