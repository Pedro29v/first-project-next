import Button from "@/components/Button";
import Content from "@/components/Content";

async function fetchData() {
  const resp = await fetch("https://api.chucknorris.io/jokes/random", {
    cache: "no-store",
  });
  const data = await resp.json();
  return data;
}

async function IndexPage() {
  const res = await fetchData();

  return (
    <div>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt="image"
        className="m-auto mb-10 h-[20rem]"
      ></img>

      <Content res={res} />

      <div className="flex items-center justify-center">
        <Button />
      </div>
    </div>
  );
}

export default IndexPage;
