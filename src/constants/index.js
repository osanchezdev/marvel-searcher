import qs from 'query-string';

//const TS = '1585606761';
/* Create hash*/
//const HASH = '';
//const API_URL = 'https://gateway.marvel.com/v1/public';
/* Add your api key*/
//const API_KEY = '';
const AUTH_QUERIES = qs.stringify({
  ts: TS,
  apikey: API_KEY,
  hash: HASH,
});
const TOTAL_CHARACTERS = 1493;

export { TS, HASH, API_URL, API_KEY, TOTAL_CHARACTERS, AUTH_QUERIES };
