"use client";

function Content({ res }) {
  return (
    <div className="m-auto w-[70%]  text-center ">
      {JSON.stringify(res.value)}
    </div>
  );
}

export default Content;
