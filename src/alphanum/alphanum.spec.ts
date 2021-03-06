import { TypeAlphanum } from './alphanum';

describe('alphanum', (): void => {
  const sut = new TypeAlphanum();
  it('can compare equal', (): void => {
    let result = sut.compare('1a', '1a');
    expect(result).toBe(0);
    result = sut.compare('0a', '1b');
    expect(result).not.toBe(0);
  });

  it('can compare gt', (): void => {
    const result = sut.compare('bravo', 'alpha1');
    expect(result).toBeGreaterThan(0);
  });

  it('can compare lt', (): void => {
    const result = sut.compare('alpha1', 'bravo1');
    expect(result).toBeLessThan(0);
  });

  it('does validate dot notation format', (): void => {
    const result = sut.valid('1.1.1');
    expect(result).toBe(true);
  });

  it('does validate float style notation', (): void => {
    const result = sut.valid('1.1');
    expect(result).toBe(true);
  });

  it('does not validate undefined', (): void => {
    const result = sut.valid(undefined);
    expect(result).not.toBe(true);
  });

  it('does not allow whitespaces', (): void => {
    const result = sut.valid('1 2 3 4');
    expect(result).not.toBe(true);
  });

  it('does not validate empty string', (): void => {
    const result = sut.valid('');
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

  it('validates just about anything', (): void => {
    const result = sut.valid('1abc.#¤%&%¤&/%/(#¤##¤%&ÖÄÅ_');
    expect(result).toBe(true);
  });

  it('can use sortFn function to sort list', (): void => {
    const list = ['a0', 'a2', 'b3', 'c1', 'b5', 'd4'];
    list.sort(sut.compare);
    expect(list[0]).toBe('a0');
    expect(list[1]).toBe('a2');
    expect(list[2]).toBe('b3');
    expect(list[3]).toBe('b5');
    expect(list[4]).toBe('c1');
    expect(list[5]).toBe('d4');
  });

  it('sorts randomized version array in natural order', (): void => {
    const list = [
      '1.0',
      '2.0',
      '1001.0',
      '3.0',
      '10.0',
      '4.0',
      '1.2',
      '1.3',
      '1.2-SNAPSHOT',
      '100.0',
      '1000.0',
      '15.0',
    ];
    list.sort(sut.compare);
    expect(list).toEqual([
      '1.0',
      '1.2',
      '1.2-SNAPSHOT',
      '1.3',
      '2.0',
      '3.0',
      '4.0',
      '10.0',
      '15.0',
      '100.0',
      '1000.0',
      '1001.0',
    ]);
  });
});
