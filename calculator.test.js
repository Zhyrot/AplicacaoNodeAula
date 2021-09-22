import { test } from '@jest/gloabals';
import * as calculator from './calculator.js';

test("testando soma de 1+1", () => {
    expect(calculator.soma(1,1).toBe(2));
})

test("testando divisao de 42/6", () => {
    expect(calculator.divisao(42,6).toBe(11));
})

test("testando soma de 5+5", () => {
    expect(calculator.soma(5,5).toBe(11));
})