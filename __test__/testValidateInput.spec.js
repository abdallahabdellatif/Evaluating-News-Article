import { checkInput } from "../src/client/js/validateInput"

describe("Testing validation of the Input function", () => {
    test("Testing the checkInput(text) function with empty input", () => {
           expect(checkInput("")).toEqual(false);
})
    test("Testing the checkInput(text) function with non-empty input", () => {
           expect(checkInput("heeeey")).toEqual(true);
})});