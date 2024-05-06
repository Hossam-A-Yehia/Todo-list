import { fireEvent, render, screen } from "@testing-library/react";
import AddTask from "./AddTask.js";

describe("Input", () => {
  it("input should be rendered ", () => {
    render(<AddTask />);
    const taskInput = screen.getByPlaceholderText(/Add a task here/i);
    expect(taskInput).toBeInTheDocument();
  });

  it("input should be Empty ", () => {
    render(<AddTask />);
    const taskInput = screen.getByPlaceholderText(/Add a task here/i);
    expect(taskInput.value).toBe("");
  });
  it("input should be change ", () => {
    render(<AddTask />);
    const taskInput = screen.getByPlaceholderText(/Add a task here/i);
    const dummyValue = "Test";
    fireEvent.change(taskInput, { target: { value: dummyValue } });
    expect(taskInput.value).toBe(dummyValue);
  });
});

describe("Button add task", () => {
  it("button should be rendered ", () => {
    render(<AddTask />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("button should be disabled ", () => {
    render(<AddTask />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("button should not be disabled when input exist ", () => {
    render(<AddTask />);
    const button = screen.getByRole("button");
    const taskInput = screen.getByPlaceholderText(/Add a task here/i);
    const dummyValue = "Test";
    fireEvent.change(taskInput, { target: { value: dummyValue } });
    expect(button).not.toBeDisabled();
  });
});
