import { Controller, Get, Post, Body } from '@nestjs/common';
import CreateCardDto from '../dto/create-card.dto';
import { CardService } from '../service/card.service';

@Controller('api/card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('')
  createCard(@Body() createCardDto: CreateCardDto): Promise<any> {
    console.log('createCardDto controller: ', createCardDto);
    return this.cardService.createCard(createCardDto);
  }

}
