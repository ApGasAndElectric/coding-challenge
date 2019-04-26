const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');
describe('errorHandlingI.js', () => {
	it('should return error properly', mochaAsync(async () => {
		const catchThrow = require('../exercises/errorHandlingI');

		try{
			await catchThrow.run('https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey=');
			throw new Error ('sooper dooper pooper scooper');
		}
		catch(err){
			err.should.equal('Request failed with status code 401')
		}
	}));
});
