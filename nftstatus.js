const apiKey = "sk_staging_AFYGRjpe5YBm77t2ZS7KH9e5CFkGsYT42wEq4o3oGVonbH2pGQhk3Gys8jddcKbSdXTzTH63TC9h2KVxip7SF561Z52oMfCtTBiKfjnF3DDJQtTS6LwR91y2SuU4NB11giB8jUoBdQJruGFDuHDZtxGEvg3KTYSzz7tc3SEWXVdBfu3fkCC9idWApqNfbefqC8t9xyoBbxeGToks9CDUjosC";
const chain = "polygon"; // or "solana", "ethereum", ...
const env = "staging"; // or "www"
const actionId = "7b8b9e48-9739-44e1-a42e-bf8118a4157c";

const url = `https://${env}.crossmint.com/api/2022-06-09/actions/${actionId}`;
const options = {
  method: "GET",
  headers: { "X-API-KEY": apiKey },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
