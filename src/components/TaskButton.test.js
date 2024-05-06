import { fireEvent, render, screen } from "@testing-library/react";
import TaskButton from "./TaskButton";

describe("check type", () => {
  it("done button  should be render when type => done ", () => {
    render(<TaskButton type="done" />);
    const doneSpan = screen.getByTestId("done");
    expect(doneSpan).toBeInTheDocument();
  });

  it("delete button  should be render when type => '' ", () => {
    render(<TaskButton type="as" />);
    const doneSpan = screen.getByTestId("delete");
    expect(doneSpan).toBeInTheDocument();
  });
});

it("functional prop testing ", () => {
  const testFunction = jest.fn();
  render(<TaskButton type="done" onClick={testFunction} />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(testFunction).toBeCalled();
});
