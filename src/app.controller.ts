import { Controller, Get, Post, Body } from '@nestjs/common';
import CreateCardDto from './app.dto';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/list')
  getLists(): Promise<any> {
    return this.appService.getBoardList();
  }

  @Post('/card')
  createCard(@Body() createCardDto: CreateCardDto): Promise<any> {
    console.log('createCardDto controller: ', createCardDto);
    return this.appService.createCard(createCardDto);
  }

}
