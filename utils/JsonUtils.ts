import * as fs from 'fs'; //fs - file system that helps to interact with files and folders

export class JsonUtils {
    static readJsonFile(filePath: string) {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(jsonData); //to convert objects to String
    }
}