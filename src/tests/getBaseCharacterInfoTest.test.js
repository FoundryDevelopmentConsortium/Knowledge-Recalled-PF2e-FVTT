import NPCActor from "../models/ActorModel.js";
import expect from 'expect';

describe('Actor', () => 
{
   let actor; // Declare a variable for the actor instance

   beforeEach(() => 
{
      actor = new NPCActor(); // Create a new actor instance before each test
   });

   describe('getActions', () => 
{
      it('should return an array of abilities', () =>
      {
         const expected = [
            {
               name: 'ability1',
               description: 'description1',
               visibility: false
            },
            {
               name: 'ability2',
               description: 'description2',
               visibility: false
            }
         ];
         const result = actor.getActions();
         expect(result).toEqual(expected);
      });
   });

   describe('getBaseCharacterInfo', () =>
   {
      it('should return an object with the base character information', () => {
         const expected = {
            name: 'John Doe',
            actorImg: 'img/john_doe.png',
            rarity: 5,
            armorValue: 10
         };
         const result = actor.getBaseCharacterInfo();
         expect(result).toEqual(expected);
      });
   });

   // Add additional describe blocks for each method in your Actor class
});