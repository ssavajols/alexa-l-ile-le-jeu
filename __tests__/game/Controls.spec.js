"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls_1 = require("../../l-ile-le-jeu/lambda/custom/game/Controls");
var handlerInput_1 = require("../handlerInput");
describe('controls', function () {
    var CONTROLS;
    beforeEach(function () {
        var handlerInput = handlerInput_1.handlerInputFactory({
            action: {
                value: 'take'
            },
            direction: {
                value: 'right'
            }
        });
        CONTROLS = new Controls_1.Controls(handlerInput);
    });
    it('should get action from slot', function () {
        expect(CONTROLS.getAction()).toBe('take');
    });
    it('should get direction from slot', function () {
        expect(CONTROLS.getDirection()).toBe('right');
    });
    it('should return null if no action', function () {
        var handlerInput = handlerInput_1.handlerInputFactory({});
        var controls = new Controls_1.Controls(handlerInput);
        expect(controls.getAction()).toBe(null);
    });
    it('should return null if no direction', function () {
        var handlerInput = handlerInput_1.handlerInputFactory({});
        var controls = new Controls_1.Controls(handlerInput);
        expect(controls.getDirection()).toBe(null);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRyb2xzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyRUFBeUU7QUFDekUsZ0RBQXFEO0FBRXJELFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFFbkIsSUFBSSxRQUFRLENBQUE7SUFFWixVQUFVLENBQUM7UUFDVCxJQUFNLFlBQVksR0FBRyxrQ0FBbUIsQ0FBQztZQUN2QyxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNELFNBQVMsRUFBRTtnQkFDVCxLQUFLLEVBQUUsT0FBTzthQUNmO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsaUNBQWlDLEVBQUU7UUFDcEMsSUFBTSxZQUFZLEdBQUcsa0NBQW1CLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsb0NBQW9DLEVBQUU7UUFDdkMsSUFBTSxZQUFZLEdBQUcsa0NBQW1CLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9