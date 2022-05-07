//unit test

//expect method for chai
let expect = chai.expect;
//describe uses a name for the test and a function will facilitate it
describe('MyFunction', () => {
    describe('Player Class', () => {
        it('It should return a name', () => {
            let testName = new Player('Cyborg');
            expect(testName.name).to.equal('Cyborg');
        });
    });
});
