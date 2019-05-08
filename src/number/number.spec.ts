import { TypeNumber } from './number';

describe('number', (): void => {
  const sut = new TypeNumber();
  it('can compare equal', (): void => {
    let result = sut.eq('1', '1');
    expect(result).toBe(true);
    result = sut.eq('0', '1');
    expect(result).toBe(false);
  });

  it('can compare gt', (): void => {
    let result = sut.gt('2', '1');
    expect(result).toBe(true);
    result = sut.gt('0', '1');
    expect(result).toBe(false);
    result = sut.gt('1', '1');
    expect(result).toBe(false);
  });

  it('can compare gte', (): void => {
    let result = sut.gte('2', '1');
    expect(result).toBe(true);
    result = sut.gte('0', '1');
    expect(result).toBe(false);
    result = sut.gte('1', '1');
    expect(result).toBe(true);
  });

  it('can compare lt', (): void => {
    let result = sut.lt('2', '1');
    expect(result).toBe(false);
    result = sut.lt('0', '1');
    expect(result).toBe(true);
    result = sut.lt('1', '1');
    expect(result).toBe(false);
  });

  it('can compare lte', (): void => {
    let result = sut.lte('2', '1');
    expect(result).toBe(false);
    result = sut.lte('0', '1');
    expect(result).toBe(true);
    result = sut.lte('1', '1');
    expect(result).toBe(true);
  });

  it('does not validate semver', (): void => {
    const result = sut.valid('1.1.1');
    expect(result).not.toBe(true);
  });

  it('does not validate float', (): void => {
    const result = sut.valid('1.1');
    expect(result).not.toBe(true);
  });

  it('validates valid number', (): void => {
    const result = sut.valid('1');
    expect(result).toBe(true);
  });

  it('can use sortFn function to sort list', (): void => {
    const list = ['0', '2', '3', '1', '5', '4'];
    list.sort(sut.compare);
    expect(list[0]).toBe('0');
    expect(list[1]).toBe('1');
    expect(list[2]).toBe('2');
    expect(list[3]).toBe('3');
    expect(list[4]).toBe('4');
    expect(list[5]).toBe('5');
  });
});
