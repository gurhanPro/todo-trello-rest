import { Injectable } from '@nestjs/common';
const request = require("request");

@Injectable()
export class ListService {

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


}