async function fetchData() {
  const resp = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await resp.json();
  return data;
}

async function IndexPage() {
  const res = await fetchData();
  console.log(res);
  return <div>{JSON.stringify(res)}</div>;
}

export default IndexPage;
