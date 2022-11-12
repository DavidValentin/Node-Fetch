import { createObjectCsvWriter as createCSV } from 'csv-writer';

// (B) CREATE NEW CSV DOCUMENT
const csv = createCSV({
  path: "demoD.csv",
  header: [
    {id: "producto", title: "PRODUCTO"},
    {id: "precio", title: "PRECIO"},
    {id: "vendedor", title: "VENDEDOR"},
    {id: "lugar", title: "LUGAR"},
  ]
});

// WRITE DATA ROWS
csv.writeRecords([{ 
    producto: "Doge",
    precio: "100.00",
    vendedor: "Pedro",
    lugar: "Lima"
},])
.then(() => { console.log("Done!"); });