import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

describe("check type", () => {
  it("done text should be render when done => true ", () => {
    const testFunction = jest.fn();

    render(<TaskItem task={testFunction} done={true} />);
    const done = screen.getByText(/done/i);
    expect(done).toBeInTheDocument();
  });

  it("done text should be render when done => true ", () => {
    const testFunction = jest.fn();
    render(<TaskItem task={testFunction} done={false} />);
    const doneBtn = screen.getByTestId("doneBtn");
    expect(doneBtn).toBeInTheDocument();
  });
});

it("Task name should be render ", () => {
  const testFunction = jest.fn();
  render(<TaskItem task={testFunction} done={false} />);
  const taskName = screen.getByTestId("task-name");
  expect(taskName).toBeInTheDocument();
});
