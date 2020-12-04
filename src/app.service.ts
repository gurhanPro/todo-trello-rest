import { Injectable, BadRequestException } from '@nestjs/common';
import CreateCardDto from './app.dto';
const request = require("request");

@Injectable()
export class AppService {

  async getBoardList(): Promise<any> {
    try {
      let lists: any = await this.fetchBoardListRequest();
      lists = JSON.parse(lists);
      return lists
    } catch (error) {
      console.log(error);
      return error
    }
  }

  fetchBoardListRequest() {
    const { TRELLO_KEY, TRELLO_TOKEN } = process.env;
    console.log('keys: ', TRELLO_KEY, 'token: ', TRELLO_TOKEN);
    
    var options = {
      'method': 'GET',
      'url': `https://api.trello.com/1/boards/5fc66eabd8c4e11a83a2ac82/lists?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}&cards=open`,
    };
    return new Promise((resolve, reject) => {
      request(options, function (error, response, body) {
        resolve(body)
        reject(error)
      });
    })
  }


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
