import { UpdateTypeInterface } from './types/updateTypeInterface';

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

  sort(list: string[]): string[] {
    return list.sort((a, b): number => this.compare(a, b));
  }

  abstract validate(test: string): string;

  abstract compare(a: string, b: string): number;
}
