# Converter tool

The convertion consists of the following steps:

1. Use `moment-timezone` grunt task `data` to download IANA timezone data and to process it (via `zdump`).

2. Copy the unpacked generated `latest.json` over here.

3. Use `index.js` to convert the array of entries into a tree structure object similar to CLDR JSON.

   ```
   node index.js > iana-tz-data.json
   ```