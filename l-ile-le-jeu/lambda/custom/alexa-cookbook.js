"use strict";
// alexa-cookbook.js
/* eslint-disable  no-console */
// *eslint : extend airbnb
Object.defineProperty(exports, "__esModule", { value: true });
var cookbookVersion = 0.01;
var speechcons = ['abracadabra', 'achoo', 'aha', 'ahem', 'ahoy', 'all righty', 'aloha',
    'aooga', 'argh', 'arrivederci', 'as you wish', 'au revoir', 'aw man', 'baa',
    'bada bing bada boom', 'bah humbug', 'bam', 'bang', 'batter up', 'bazinga',
    'beep beep', 'bingo', 'blah', 'blarg', 'blast', 'boing', 'bon appetit', 'bonjour',
    'bon voyage', 'boo', 'boo hoo', 'boom', 'booya', 'bravo', 'bummer', 'caw', 'cha ching',
    'checkmate', 'cheerio', 'cheers', 'cheer up', 'chirp', 'choo choo', 'clank',
    'click clack', 'cock a doodle doo', 'coo', 'cowabunga', 'darn', 'ding dong', 'ditto',
    'd’oh', 'dot dot dot', 'duh', 'dum', 'dun dun dun', 'dynomite', 'eek', 'eep',
    'encore', 'en gard', 'eureka', 'fancy that', 'geronimo', 'giddy up', 'good grief',
    'good luck', 'good riddance', 'gotcha', 'great scott', 'heads up', 'hear hear',
    'hip hip hooray', 'hiss', 'honk', 'howdy', 'hurrah', 'hurray', 'huzzah', 'jeepers creepers',
    'jiminy cricket', 'jinx', 'just kidding', 'kaboom', 'kablam', 'kaching', 'kapow',
    'katchow', 'kazaam', 'kerbam', 'kerboom', 'kerching', 'kerchoo', 'kerflop',
    'kerplop', 'kerplunk', 'kerpow', 'kersplat', 'kerthump', 'knock knock', 'le sigh',
    'look out', 'mamma mia', 'man overboard', 'mazel tov', 'meow', 'merci', 'moo',
    'nanu nanu', 'neener neener', 'no way', 'now now', 'oh boy', 'oh brother', 'oh dear',
    'oh my', 'oh snap', 'oink', 'okey dokey', 'oof', 'ooh la la', 'open sesame', 'ouch',
    'oy', 'phew', 'phooey', 'ping', 'plop', 'poof', 'pop', 'pow', 'quack', 'read ‘em and weep',
    'ribbit', 'righto', 'roger', 'ruh roh', 'shucks', 'splash', 'spoiler alert', 'squee',
    'swish', 'swoosh', 'ta da', 'ta ta', 'tee hee', 'there there', 'thump', 'tick tick tick',
    'tick-tock', 'touche', 'tsk tsk', 'tweet', 'uh huh', 'uh oh', 'voila', 'vroom',
    'wahoo', 'wah wah', 'watch out', 'way to go', 'well done', 'well well', 'wham',
    'whammo', 'whee', 'whew', 'woof', 'whoops a daisy', 'whoosh', 'woo hoo', 'wow',
    'wowza', 'wowzer', 'yadda yadda yadda', 'yay', 'yikes', 'yippee', 'yoink', 'yoo hoo',
    'you bet', 'yowza', 'yowzer', 'yuck', 'yum', 'zap', 'zing', 'zoinks'];
//
// exported module
//
exports.default = {
    //
    // Display Related Helpers
    //
    display: {
        supportsDisplay: function (event) {
            if (event.context &&
                event.context.System &&
                event.context.System.device &&
                event.context.System.device.supportedInterfaces &&
                event.context.System.device.supportedInterfaces.Display) {
                return true;
            }
            return false;
        }
    },
    version: cookbookVersion,
    //
    // Core Voice UI Helpers
    //
    getRandomItem: function (arrayOfItems) {
        // can take an array, or a dictionary
        if (Array.isArray(arrayOfItems)) {
            // the argument is an array []
            var i = 0;
            i = Math.floor(Math.random() * arrayOfItems.length);
            return (arrayOfItems[i]);
        }
        if (typeof arrayOfItems === 'object') {
            // argument is object, treat as dictionary
            var result = {};
            var key = this.getRandomItem(Object.keys(arrayOfItems));
            result[key] = arrayOfItems[key];
            return result;
        }
        // not an array or object, so just return the input
        return arrayOfItems;
    },
    getFormattedList: function (arrayOfListItems, penultimateWord) {
        if (penultimateWord === void 0) { penultimateWord = 'and'; }
        // the first argument is an array [] of items
        // the second argument is the list penultimate word; and/or/nor etc.  Default to 'and'
        var result = '';
        arrayOfListItems.forEach(function (element, index, arr) {
            if (index === 0) {
                result = element;
            }
            else if (index === arr.length - 1) {
                result += " " + penultimateWord + " " + element;
            }
            else {
                result += ", " + element;
            }
        });
        return result;
    },
    wrapSpeehconsInSSML: function (textToSearch) {
        // if the text contains a speechcon, add the proper SMML around the speechcon
        var text = textToSearch;
        speechcons.forEach(function (element) {
            var elementWithSSML = ",<say-as interpret-as=\"interjection\">" + element + "</say-as>,";
            text = text.replace(element, elementWithSSML);
        });
        return text;
    },
    isSlotValid: function (request, slotName) {
        if (request &&
            request.intent &&
            request.intent.slots &&
            request.intent.slots[slotName] &&
            request.intent.slots[slotName].value) {
            var slotValue = request.intent.slots[slotName].value;
            if (slotValue !== '') {
                return true;
            }
        }
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxleGEtY29va2Jvb2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGV4YS1jb29rYm9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLGdDQUFnQztBQUNoQywwQkFBMEI7O0FBRTFCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQTtBQUU1QixJQUFNLFVBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE9BQU87SUFDdEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSztJQUMzRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUztJQUMxRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUztJQUNqRixZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVc7SUFDdEYsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTztJQUMzRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU87SUFDcEYsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDNUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWTtJQUNqRixXQUFXLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFdBQVc7SUFDOUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsa0JBQWtCO0lBQzNGLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTztJQUNoRixTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVM7SUFDakYsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSztJQUM3RSxXQUFXLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTO0lBQ3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNO0lBQ25GLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG1CQUFtQjtJQUMxRixRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsT0FBTztJQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3hGLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPO0lBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU07SUFDOUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSztJQUM5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFTO0lBQ3BGLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUN2RSxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixrQkFBZTtJQUNiLEVBQUU7SUFDRiwwQkFBMEI7SUFDMUIsRUFBRTtJQUNGLE9BQU8sRUFBRTtRQUNQLGVBQWUsWUFBRSxLQUFLO1lBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU87Z0JBQ2YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CO2dCQUMvQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQTthQUNaO1lBQ0QsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsZUFBZTtJQUN4QixFQUFFO0lBQ0Ysd0JBQXdCO0lBQ3hCLEVBQUU7SUFDRixhQUFhLFlBQUUsWUFBWTtRQUN6QixxQ0FBcUM7UUFDckMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQy9CLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDVCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25ELE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN6QjtRQUVELElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFO1lBQ3BDLDBDQUEwQztZQUMxQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7WUFDakIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMvQixPQUFPLE1BQU0sQ0FBQTtTQUNkO1FBQ0QsbURBQW1EO1FBQ25ELE9BQU8sWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFDRCxnQkFBZ0IsWUFBRSxnQkFBZ0IsRUFBRSxlQUF1QjtRQUF2QixnQ0FBQSxFQUFBLHVCQUF1QjtRQUN6RCw2Q0FBNkM7UUFDN0Msc0ZBQXNGO1FBQ3RGLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNmLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRztZQUMzQyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLE9BQU8sQ0FBQTthQUNqQjtpQkFBTSxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxJQUFJLE1BQUksZUFBZSxTQUFJLE9BQVMsQ0FBQTthQUMzQztpQkFBTTtnQkFDTCxNQUFNLElBQUksT0FBSyxPQUFTLENBQUE7YUFDekI7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUNELG1CQUFtQixZQUFFLFlBQVk7UUFDL0IsNkVBQTZFO1FBQzdFLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQTtRQUN2QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixJQUFNLGVBQWUsR0FBRyw0Q0FBd0MsT0FBTyxlQUFZLENBQUE7WUFDbkYsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBQ0QsV0FBVyxZQUFFLE9BQU8sRUFBRSxRQUFRO1FBQzVCLElBQUksT0FBTztZQUNULE9BQU8sQ0FBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFBO1lBQ3RELElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUE7YUFDWjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0NBQ0YsQ0FBQSJ9