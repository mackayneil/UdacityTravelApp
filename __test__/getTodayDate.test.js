/**
 * @jest-environment jsdom
 */

import { getTodayDate } from "../src/client/js/getTodayDate";

describe('getTodayDate function test', () => {
    test('Check to see if function returns something', () => {
      expect(getTodayDate).toBeDefined();
    })
  })