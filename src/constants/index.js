import qs from 'query-string';

const TS = '1585606761';
const HASH = '6a04114df1d8f6784ad025a9c0eac182';
const API_URL = 'https://gateway.marvel.com/v1/public';
const API_KEY = '342d0588ed80d81fee3f32ce4bd8c85d';
const AUTH_QUERIES = qs.stringify({
  ts: TS,
  apikey: API_KEY,
  hash: HASH,
});
const TOTAL_CHARACTERS = 1493;

export { TS, HASH, API_URL, API_KEY, TOTAL_CHARACTERS, AUTH_QUERIES };
