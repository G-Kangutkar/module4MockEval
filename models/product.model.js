import {readFileSync,writeFileSync} from "fs";
import path from "path";
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname,"./db.json")

export function readData(){
    const data = readFileSync(dbPath,'utf-8');
    return JSON.parse(data)
}
export function writeData(data){
    return writeData(dbPath,JSON.stringify(data,null,2))
}