import { readFile } from "fs";

readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    const datos = JSON.parse(jsonString);

    for (var dato of datos){
        var body = dato.body[0]
        var cookie = dato.cookie[0]
        var xfblsd = dato.xfblsd[0]
        var referer = dato.referer[0]
        console.log(body)
    }
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
