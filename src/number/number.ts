/* The MIT License (MIT)
 *
 * Copyright 2019, Sony Mobile Communications Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { UpdateTypeInterface } from '../types/updateTypeInterface';

export const typeNumber: UpdateTypeInterface = {
  validate: function(test: string, errorMessage?: string): string {
    if (Number(test) === NaN) {
      return errorMessage || `${test} is not a number`;
    }
    return null;
  },
  eq: function(str1: string, str2: string): boolean {
    return Number(str1) === Number(str2);
  },
  gt: function(str1: string, str2: string): boolean {
    return Number(str1) > Number(str2);
  },
  gte: function(str1: string, str2: string): boolean {
    return Number(str1) >= Number(str2);
  },
  lt: function(str1: string, str2: string): boolean {
    return Number(str1) < Number(str2);
  },
  lte: function(str1: string, str2: string): boolean {
    return Number(str1) <= Number(str2);
  },
  sort: function(list: number[]): number[] {
    return list.sort();
  },
};
