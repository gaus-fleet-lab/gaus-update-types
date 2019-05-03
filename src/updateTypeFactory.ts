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

import {  typeNumber } from './number/number';
import { UpdateTypeInterface } from './types/updateTypeInterface';

type UpdateType = 'string' | 'number' | 'alphanum' | 'semver';
const UPDATE_TYPES: UpdateType[] = ['string', 'number', 'alphanum', 'semver'];

/**
 * @description
 * Return the object for the type
 *
 * @usageNotes
 *
 * ```ts
 * updateType('semver').validate('1.1.1')
 * ```
 *
 * @param  type - must be one of the supported types
 */
export function updateType(type: UpdateType): UpdateTypeInterface {
    switch (type) {
      case 'semver':
        return null;
      case 'string':
        return null;
      case 'number':
        return typeNumber;
      case 'alphanum':
        return null;
      default:
        return null;
    }
}

  /**
   * @description
   * Return the array of valid types
   *
   * @usageNotes
   *
   * ```ts
   * getSupportedUpdateTypes()
   * ```
   *
   * @return  array of valid types
   */
export function getSupportedUpdateTypes(): UpdateType[] {
  return UPDATE_TYPES;
}
