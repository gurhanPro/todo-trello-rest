import { ListController } from './list.controller';
import { ListService } from '../service/list.service';

describe('ListController', () => {
  let listController: ListController;
  let listService: ListService;

  beforeEach(() => {
    listService = new ListService();
    listController = new ListController(listService);
  });

  describe('createCard', () => {
    it('should return board lists', async () => {
      const result:any = [{name: 'list name', cards: []}];
      jest.spyOn(listService, 'getBoardList').mockImplementation(() => result);

      expect(await listController.getLists()).toBe(result);
    });
  });
});