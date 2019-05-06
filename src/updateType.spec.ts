import { updateType } from './updateType';

describe('update type tests', (): void => {
  it('can use number', (): void => {
    expect(updateType('number').validate('0')).toBe(null);
  });
});
