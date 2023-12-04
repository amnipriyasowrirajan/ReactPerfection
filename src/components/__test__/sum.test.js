import { sum } from "../sum";

text("Sum function should caculate the sum of tow numbers", () => {
  const result = sum(4, 4);

  // Assertion
  expect(result).toBe(8);
});
