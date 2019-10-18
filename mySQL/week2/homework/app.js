'use-strict';

require('./printHelp');
const results = require('./renderResult');
const que = require('./queryAndLog');

const queryDatabase = async () => {
  results.start();
  try {
    let input_number = '';
    const options = await results.input(['option']);
    input_number = options.option;

    input_number === '1'
      ? results.renderResults('country', que.one)
      : input_number === '2'
      ? results.renderResults('region', que.two)
      : input_number === '3'
      ? results.renderResults('language', que.three)
      : input_number === '4'
      ? results.renderResultsFour('Region', 'Language', que.four)
      : input_number === '5'
      ? results.renderResult(que.five)
      : console.log(`Please put a valid number!`);
  } catch (error) {
    console.error(error);
  }
};

queryDatabase();
