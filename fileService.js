import { v4 as uuidv4 } from 'uuid';
uuidv4();

class FileService{
   saveFile(file){
    try{
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve('statuc', fileName)
      file.mv(filePath);
      return fileName;
    }catch(e){
       console.log(e);
    }
 }

}

export default new FileService()