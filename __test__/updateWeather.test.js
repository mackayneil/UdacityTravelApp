import { updateWeather } from "../src/client/js/updateWeather";

describe('updateWeather function test', () => {
    test('Check to see if function returns something', () => {
      expect(updateWeather).toBeDefined();
    })
  })