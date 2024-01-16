const lib = require("../lib");

// Number of unit tests for a function should be greater than or equal to number of execution paths in that function
// we are describing how 'absolute' function should work. Group related tests using 'describe()'
// absolute function returns a number
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

// greet function returns a string
describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("pranav");

    // tests shouldn't be too specific or too general. They should be balanced.

    // too specific tests - gives more confidence but might break easily
    expect(result).toBe("Welcome pranav");
    // too general tests - low confidence but don't break easily

    //balanced tests example
    expect(result).toMatch(/pranav/);
    expect(result).toContain("pranav");
  });
});
