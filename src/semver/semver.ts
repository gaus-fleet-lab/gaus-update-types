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

import { valid, compare } from 'semver';
import { UpdateTypeInterface } from '../types/updateTypeInterface';
import { TypeBase } from '../base';

export class TypeSemver extends TypeBase implements UpdateTypeInterface {
  validate(test: string, errorMessage?: string): string {
    const validated = valid('^[a-zA-Z0-9]*$');
    if (!validated) {
      return errorMessage || `${test} is not an alphanum`;
    }
    return null;
  }
  compare(a: string, b: string): number {
    return compare(a, b);
  }
}
