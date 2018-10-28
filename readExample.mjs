import fs from "fs";

export default async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "./example.txt",
      "utf-8",
      (err, data) => (err ? reject(err) : resolve(data.replace(/[\r\n]+/g, "")))
    );
  });
};
