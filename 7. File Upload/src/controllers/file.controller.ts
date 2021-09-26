import { Controller, Logger, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileController {

  private log = new Logger(FileController.name);

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(@UploadedFile() file: Express.Multer.File)
  {
    this.log.debug('Upload de arquivo realizado com sucesso!');
    return { uploadedFile: file.filename };
  }

  @UseInterceptors(FilesInterceptor('files'))
  @Post('files')
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>)
  {
    this.log.debug('Upload de arquivos realizado com sucesso!');
    return { uploadedFiles: files.map(f => f.filename) };
  }

  @Post('fields')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'photo', maxCount: 1 },
    { name: 'theme', maxCount: 1 },
  ]))
  uploadFileFields(@UploadedFiles() files: { photo: Express.Multer.File[], theme?: Express.Multer.File[] }) {
    this.log.debug('Upload de campos de arquivos realizado com sucesso!');
    return { 
      uploadedPhoto: files.photo[0]?.filename,
      uploadedTheme: files.theme[0]?.filename
    };
  }

}
