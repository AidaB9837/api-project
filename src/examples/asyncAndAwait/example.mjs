import * as fs from "node:fs/promises";

/*In this way it is executed one after the other*/
// async function outputFile() {
//     try {
//         const file1Data = await fs.readFile("file-1.txt", {
//             encoding: "utf-8",
//         });
//         console.log("file1Data:", file1Data);

//         const file2Data = await fs.readFile("file-2.txt", {
//             encoding: "utf-8",
//         });
//         console.log("file2Data:", file2Data);

//         const file3Data = await fs.readFile("file-3.txt", {
//             encoding: "utf-8",
//         });
//         console.log("file3Data:", file3Data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// outputFile();

/*This way everything is carried out together thanks to the
promise.all method, so the files are read in parallel all at the same time.*/

// async function outputFilesTogether() {
//     try {
//         const data = await Promise.all([
//             fs.readFile("file-1.txt", { encoding: "utf-8" }),
//             fs.readFile("file-2.txt", { encoding: "utf-8" }),
//             fs.readFile("file-3.txt", { encoding: "utf-8" }),
//         ]);

//         console.log("data:", data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// outputFilesTogether();

/*Alternative to previous way: top level async-await method*/
try {
    const data = await Promise.all([
        fs.readFile("file-1.txt", { encoding: "utf-8" }),
        fs.readFile("file-2.txt", { encoding: "utf-8" }),
        fs.readFile("file-3.txt", { encoding: "utf-8" }),
    ]);

    console.log("data:", data);
} catch (error) {
    console.error(error);
}
