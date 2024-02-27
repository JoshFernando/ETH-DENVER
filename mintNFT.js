const apiKey = "sk_staging_AFYGRjpe5YBm77t2ZS7KH9e5CFkGsYT42wEq4o3oGVonbH2pGQhk3Gys8jddcKbSdXTzTH63TC9h2KVxip7SF561Z52oMfCtTBiKfjnF3DDJQtTS6LwR91y2SuU4NB11giB8jUoBdQJruGFDuHDZtxGEvg3KTYSzz7tc3SEWXVdBfu3fkCC9idWApqNfbefqC8t9xyoBbxeGToks9CDUjosC";
const chain = "polygon"; // or "solana", "ethereum", ...
const env = "staging"; // or "www"
const recipientEmail = "jsneakest@gmail.com";
const recipientAddress = `email:${recipientEmail}:${chain}`;

const url = `https://${env}.crossmint.com/api/2022-06-09/collections/default/nfts`;
const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "x-api-key": apiKey,
  },
  body: JSON.stringify({
    recipient: recipientAddress,
    metadata: {
      name: "Crossmint Test NFT",
      image: "https://picsum.photos/400",
      description: "My first NFT using Crossmint",
    },
  }),
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
