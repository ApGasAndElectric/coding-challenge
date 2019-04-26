const chai = require('chai');
const should = chai.should();
const mochaAsync = require('./mochaAsync');

describe('errorHandlingII.js', () => {
	it('should return error properly', mochaAsync(async () => {
		const catchThrow = require('../exercises/errorHandlingII');

		try{
			const result = await catchThrow.run('https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey=');
			result.should.equal('Error: Request failed with status code 401');
		}
		catch(err){
			throw err;
		}
	}));
});
