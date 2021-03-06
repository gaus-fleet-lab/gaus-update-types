import { TypeString } from './string';

describe('string', (): void => {
  const sut = new TypeString();
  it('can compare equal', (): void => {
    let result = sut.compare('1a-', '1a-');
    expect(result).toBe(0);
    result = sut.compare('0a-', '1b-');
    expect(result).not.toBe(0);
  });

  it('can compare gt', (): void => {
    const result = sut.compare('bravo.', 'alpha1.');
    expect(result).toBeGreaterThan(0);
  });

  it('can compare lt', (): void => {
    const result = sut.compare('alpha1.', 'bravo1.');
    expect(result).toBeLessThan(0);
  });

  it('does validate semver', (): void => {
    const result = sut.valid('1.1.1');
    expect(result).toBe(true);
  });

  it('does validate float', (): void => {
    const result = sut.valid('1.1');
    expect(result).toBe(true);
  });

  it('does not validate null', (): void => {
    const result = sut.valid(null);
    expect(result).not.toBe(true);
  });

  it('does not validate undefined', (): void => {
    const result = sut.valid(undefined);
    expect(result).not.toBe(true);
  });

  it('validates valid number', (): void => {
    const result = sut.valid('1');
    expect(result).toBe(true);
  });

  it('validates valid alphanum', (): void => {
    const result = sut.valid('1abc');
    expect(result).toBe(true);
  });

  it('validates valid alpha', (): void => {
    const result = sut.valid('abc');
    expect(result).toBe(true);
  });

  it('validates weird chars', (): void => {
    const result = sut.valid('.%$#&^');
    expect(result).toBe(true);
  });

  it('does not validate an empty string', (): void => {
    const result = sut.valid('');
    expect(result).not.toBe(true);
  });

  it('does not validate a string containing spaces', (): void => {
    const result = sut.valid('blah blah');
    expect(result).not.toBe(true);
  });

  it('can use sortFn function to sort list', (): void => {
    const list = ['a0.', 'a23#', 'b3$', 'c1#@', 'b5$#@', 'd4*('];
    list.sort(sut.compare);
    expect(list[0]).toBe('a0.');
    expect(list[1]).toBe('a23#');
    expect(list[2]).toBe('b3$');
    expect(list[3]).toBe('b5$#@');
    expect(list[4]).toBe('c1#@');
    expect(list[5]).toBe('d4*(');
  });
});
