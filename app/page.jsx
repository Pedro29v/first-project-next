async function fetchData() {
  const resp = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await resp.json();
  return data;
}

async function IndexPage() {
  const res = await fetchData();
  console.log(res);
  return (
    <div>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt="image"
        className="m-auto mb-10 h-[20rem]"
      ></img>

      <div className="m-auto w-[70%]">{JSON.stringify(res.value)}</div>

      <div className="flex items-center justify-center">
        <button className=" w-[6rem] p-2 bg-secondary mt-4 hover:w-[7rem] ">
          Retry
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
