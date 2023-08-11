import { exec } from "child_process";
// reads the command line arguments and runs `node filepathFromArguments`
const args = process.argv.slice(2);
console.log("args: ", args);
if (args.length > 0) {
  const filepath = args[0];
  const filename = filepath.split("/").pop();
  const ext = filename.split(".").pop();
  if (ext === "js") {
    exec(`node ${filepath}`, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error: ${err}`);
        return;
      }
      console.log(stdout);
      console.log(stderr);
    });
  }
} else {
  console.log("No file specified");
}
