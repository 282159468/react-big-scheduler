const path = require("path");
const fs = require("fs");
const util = {
  isFile: (fileName) => {
    return fs.lstatSync(fileName).isFile();
  },
};
const reName = (dir, ext) => {
  const dir_path = path.resolve(dir);
  const fileList = fs.readdirSync(dir_path);
  for (let i = 0; i < fileList.length; i++) {
    let file = fileList[i];
    file = path.join(dir, file);
    if (util.isFile(file)) {
      let parsed = path.parse(file);
      let newFileName = parsed.name + ext;
      try {
        fs.renameSync(file, path.join(parsed.dir, newFileName));
        console.log(`${file} ========> ${path.join(parsed.dir, newFileName)}`);
      } catch (error) {
        throw error;
      }
    }
  }
  console.log("done");
};

reName("./react-big-scheduler", ".tsx");
