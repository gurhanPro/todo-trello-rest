import { CardController } from './card.controller';
import { CardService } from '../service/card.service';
import CreateCardDto from '../dto/create-card.dto';

describe('CardController', () => {
  let cardController: CardController;
  let cardService: CardService;

  beforeEach(() => {
    cardService = new CardService();
    cardController = new CardController(cardService);
  });

  describe('createCard', () => {
    it('should return created card', async () => {
      const cardDto: CreateCardDto = { name: 'cardName', listId: '1234' };
      const result: any = { card: ''};
      jest.spyOn(cardService, 'createCard').mockImplementation(() => result);

      expect(await cardController.createCard(cardDto)).toBe(result);
    });
  });
});