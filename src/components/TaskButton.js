import { IoMdDoneAll, IoMdClose } from "react-icons/io";

export default function ({ type, onClick }) {
  return (
    <button
      type="button"
      className="py-2 px-3 bg-slate-200 rounded-full flex justify-center items-center transition hover:text-white hover:bg-sky-500 hover:scale-125 text-blue-500"
      onClick={onClick}
    >
      {type === "done" ? (
        <span data-testid="done" className=" font-bold ">
          <IoMdDoneAll />{" "}
        </span>
      ) : (
        <span data-testid="delete" className=" font-bold">
          {" "}
          <IoMdClose color="red" />{" "}
        </span>
      )}
    </button>
  );
}
