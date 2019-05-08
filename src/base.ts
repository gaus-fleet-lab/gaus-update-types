import { UpdateTypeInterface } from './updateType';

export abstract class TypeBase implements UpdateTypeInterface {
  eq(str1: string, str2: string): boolean {
    return this.compare(str1, str2) === 0;
  }

  gt(str1: string, str2: string): boolean {
    return this.compare(str1, str2) > 0;
  }

  gte(str1: string, str2: string): boolean {
    return this.compare(str1, str2) >= 0;
  }

  lt(str1: string, str2: string): boolean {
    return this.compare(str1, str2) < 0;
  }

  lte(str1: string, str2: string): boolean {
    return this.compare(str1, str2) <= 0;
  }

  abstract valid(test: string): boolean;

  abstract compare(a: string, b: string): number;
}
