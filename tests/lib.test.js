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

// getCurrencies returns an array of 3 strings
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    //Too general tests - almost useless tests in this case
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific tests - if order changes or array updates, test will break
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    // proper way
    expect(result).toContain("USD"); // array should contain USD. Doesn't matter at what index and length of the array, etc
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // Ideal way - as long as result includes values in arrayContaining, tests will pass
    expect(result).toEqual(expect.arrayContaining(["USD", "EUR", "AUD"]));
  });
});
