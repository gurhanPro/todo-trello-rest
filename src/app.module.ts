import { Module } from '@nestjs/common';
import { ListController } from './Lists/controller/list.controller';
import { ListService } from './Lists/service/list.service';
import { CardController } from './card/controller/card.controller';
import { CardService } from './card/service/card.service';

@Module({
  imports: [],
  controllers: [ListController, CardController],
  providers: [ListService, CardService],
})
export class AppModule {}
