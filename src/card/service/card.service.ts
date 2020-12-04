import { Injectable, BadRequestException } from '@nestjs/common';
import CreateCardDto from '../dto/create-card.dto';
const request = require("request");

@Injectable()
export class CardService {

  async createCard(createCardDto: CreateCardDto): Promise<any> {
    const { TRELLO_KEY, TRELLO_TOKEN } = process.env;
    const { listId, name } = createCardDto

    if (!listId || !name) {
      throw new BadRequestException('should have both listId and name')
    }

    try {
      let lists: any = await this.createCardRequest(name, listId, TRELLO_KEY, TRELLO_TOKEN);
      return JSON.parse(lists)
    } catch (error) {
      console.log(error);
      throw new BadRequestException('could not create card', error)
    }
  }

  createCardRequest(name, listId, TRELLO_KEY, TRELLO_TOKEN) {
    var options = {
      'method': 'POST',
      'url': `https://api.trello.com/1/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}&idList=${listId}&name=${name}`,
    };
    return new Promise((resolve, reject) => {
      request(options, function (error, response, body) {
        resolve(body)
        reject(error)
      });
    })
  }

}
