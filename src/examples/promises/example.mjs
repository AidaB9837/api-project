import * as fs from "node:fs/promises";

//promise chain
fs.readFile("file-1.txt", { encoding: "utf-8" }) //first promise
    .then((file1Data) => console.log("file1Data:", file1Data))
    .then(() => fs.readFile("file-2.txt", { encoding: "utf-8" })) //second promise
    .then((file2Data) => console.log("file2Data:", file2Data))
    .then(() => fs.readFile("file-3.txt", { encoding: "utf-8" })) //third promise
    .then((file3Data) => console.log("file3Data:", file3Data))

    // if one of these promises is rejected,
    //we will handle the error with the "catch" method, which captures all the rejected promises.
    .catch((error) => console.error(error));
