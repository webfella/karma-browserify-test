var testModule = require('../../js/modules/test');

describe('testModule', function() {
    describe('add2', function() {
        var subject = testModule.add2;

        it('should add 2', function() {
            expect(subject(5)).toBe(7);
        });
    });
});
