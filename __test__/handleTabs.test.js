/**
 * @jest-environment jsdom
 */

import { handleTabs } from "../src/client/js/handleTabs";

describe('handleTabs function test', () => {
    test('Check to see if function returns something', () => {
      expect(handleTabs).toBeDefined();
    })
  })