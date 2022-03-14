import fs from "fs";

export default {
  collection: (collectionName) => {
    const dbDirname = `${__dirname}/../dbdocuments/${collectionName}/`;
    return {
      findOne: (id) => {
        const filenames = fs.readdirSync(dbDirname, "utf-8");
        const filename = filenames.find(
          (filename) => filename === `${id}.json`
        );

        const content = fs.readFileSync(dbDirname + filename, "utf-8");

        return JSON.parse(content);
      },
      list: () => {
        const filenames = fs.readdirSync(dbDirname, "utf-8");

        return filenames.map((filename) => {
          try {
            const content = fs.readFileSync(dbDirname + filename, "utf-8");
            return JSON.parse(content);
          } catch (err) {
            return res
              .status(500)
              .json({ error: err, message: "Failed to list users" });
          }
        });
      },
      create: (menaxhimiLibrarise) => {
        const filenames = fs.readdirSync(dbDirname, "utf-8");

        const ids = filenames.map((filename) => {
          // 1.json 2.json 3.json
          const idAsStr = filename.replace(".json", "");

          return parseInt(idAsStr, 10);
        });

        const nextId = Math.max(...ids) + 1;

        const newMenaxhimiLibrarise = { ...menaxhimiLibrarise, id: nextId };

        fs.writeFileSync(
          `${dbDirname}/${nextId}`,
          JSON.stringify(newMenaxhimiLibrarise)
        );
        return newMenaxhimiLibrarise;
      },
      update: (updatedMenaxhimiLibrarise) => {
  

        const oldVersionFilename = `${updatedMenaxhimiLibrarise.id}.json`;

        const filepath = dbDirname + oldVersionFilename;

        const contentAsString = fs.readFileSync(filepath);

        const oldMenaxhimiLibrarise = JSON.parse(contentAsString);

        const updatedVersion = { ...oldMenaxhimiLibrarise, ...updatedMenaxhimiLibrarise };

        fs.writeFileSync(filepath, JSON.stringify(updatedVersion));

        return updatedVersion;
      },
    };
  },
};
