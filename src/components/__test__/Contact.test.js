import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  it("Should load contact us Component", () => {
    // you can write test or it also (it just alias no difference between this )
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion whenever i want  to check something whether it is loaded or not i use this function toBeInTheDocument
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //  const button = screen.getByText("Submit");

    // Assertion whenever i want  to check something whether it is loaded or not i use this function toBeInTheDocument
    expect(button).toBeInTheDocument();
  });

  it("Should input name inside contact us Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion whenever i want  to check something whether it is loaded or not i use this function toBeInTheDocument
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);
    // when i have a multiple items i use all
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes[0]);

    //console.log(inputBoxes.length);

    // expect(inputBoxes.length).not.toBe(3);

    //expect(inputBoxes.length).toBeTruthy();
    expect(inputBoxes.length).toBe(2);
  });
});
