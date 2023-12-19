import { sum } from "../sum";

test("Sum function should caculate the sum of tow numbers", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
