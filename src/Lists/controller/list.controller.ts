import { Controller, Get, Post, Body } from '@nestjs/common';
import { ListService } from '../service/list.service';

@Controller('api/list')
export class ListController {
  constructor(private readonly appService: ListService) {}
  
  @Get('')
  getLists(): Promise<any> {
    return this.appService.getBoardList();
  }
}
