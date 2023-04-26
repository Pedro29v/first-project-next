"use client";

function Button({ callAPI }) {
  return (
    <>
      <button className=" w-[6rem] p-2 bg-secondary mt-4 rounded-lg hover:bg-white hover:text-secondary hover:font-bold">
        Retry
      </button>
    </>
  );
}

export default Button;
