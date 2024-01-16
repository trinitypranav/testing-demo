const lib = require("../lib");

// Number of unit tests for a function should be greater than or equal to number of execution paths in that function
// we are describing how 'absolute' function should work. Group related tests using 'describe()'
describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    //make an assertion
    expect(result).toBe(1);

    // for floating point numbers, use 'toBeCloseTo()'
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    //make an assertion
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    //make an assertion
    expect(result).toBe(0);
  });
});
