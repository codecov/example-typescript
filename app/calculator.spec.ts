import { add, subtract, multiply, divide } from "./calculator";

test("add function", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(1.0, 2.0)).toBe(3.0);
  expect(add(0, 2.0)).toBe(2.0);
  expect(add(2.0, 0)).toBe(2.0);
  expect(add(-4, 2.0)).toBe(-2.0);
});

test("subtract function", () => {
  expect(subtract(1, 2)).toBe(-1.0);
  expect(subtract(2, 1)).toBe(1.0);
  expect(subtract(1.0, 2.0)).toBe(-1.0);
  expect(subtract(0, 2.0)).toBe(-2.0);
  expect(subtract(2.0, 0)).toBe(2.0);
  expect(subtract(-4, 2.0)).toBe(-6.0);
});

test("multiply function", () => {
  expect(multiply(1, 2)).toBe(2.0);
  expect(multiply(1.0, 2.0)).toBe(2.0);
  expect(multiply(0, 2.0)).toBe(0.0);
  expect(multiply(2.0, 0)).toBe(0.0);
  expect(multiply(-4, 2.0)).toBe(-8.0);
});

test("divide function", () => {
  expect(divide(1, 2)).toBe(0.5);
  expect(divide(1.0, 2.0)).toBe(0.5);
  expect(divide(0, 2.0)).toBe(0);
  // expect(divide(-4, 2.0)).toBe(-2.0);
  // expect(divide(2.0, 0)).toBe("Cannot divide by 0");
});
