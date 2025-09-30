import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_FILE = path.join(__dirname, 'db.json');

export const dataAccess = {
  readData: () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8')).tasks,
  writeData: (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
};