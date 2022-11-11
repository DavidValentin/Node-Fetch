import fetch from 'node-fetch';
import chalk from 'chalk';
import { readFile } from "fs";

// Imprimir en consola la fecha de ejecucion
let now= new Date();
console.log(chalk.bgCyanBright(now.toLocaleString()));

// Crear arreglos para iterar en getData
const body_arr = []
const cookie_arr = []
const xfblsd_arr = []
const referer_arr = []

// Leer JSON proveniente del codigo Python
readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const datos = JSON.parse(jsonString);

    for (var dato of datos){
      body_arr.push(dato.body[0])
      cookie_arr.push(dato.cookie[0])
      xfblsd_arr.push(dato.xfblsd[0])
      referer_arr.push(dato.referer[0])
    }
    console.log(referer_arr[0])
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

// Obtencion de productos
const getData = async () => {
  try {
    const response = await fetch("https://www.facebook.com/api/graphql/", {
      "headers": {
        "accept": "*/*",
        "accept-language": "es",
        "content-type": "application/x-www-form-urlencoded",
        "sec-ch-prefers-color-scheme": "light",
        "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"107\", \"Not;A=Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "viewport-width": "1536",
        "x-fb-friendly-name": "CometMarketplaceSearchContentPaginationQuery",
        "x-fb-lsd": xfblsd,
        "cookie": cookie,
        "Referer": referer,
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": body,
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    const data = await response.json();

    // console.log(data)

    var listing_price = ''
    var listing_location = ''
    var marketplace_listing_title = ''
    var marketplace_listing_seller = ''


    for (const edge of data.data.marketplace_search.feed_units.edges) {
      if (edge.node) {
        listing_price = edge.node.listing.listing_price.amount
        listing_location = edge.node.listing.location.reverse_geocode.city
        marketplace_listing_title = edge.node.listing.marketplace_listing_title
        marketplace_listing_seller = edge.node.listing.marketplace_listing_seller.name
        console.log(listing_price, listing_location, marketplace_listing_title, marketplace_listing_seller);
      }
    }
  } catch (e) {
    console.log("Error happened", e);
  }
};

getData();