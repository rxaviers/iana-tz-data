# IANA tz data

Npm module for an ***unofficial*** JSON binding for [IANA timezone data](https://www.iana.org/time-zones).

## Goal

- Allow i18n libraries to define IANA timezone data as versioned "peer" dependency.

## Usage

On the `package.json` of your i18n library, define its IANA timezone data dependency.

    "dependencies": {
      "iana-tz-data": ">=2017.x"
    }

On your application, access IANA timezone JSON data using `require("iana-tz-data")`.

```javascript
import IANATimezoneData from "iana-tz-data";
```

## License

MIT © [Rafael Xavier de Souza](http://rafael.xavier.blog.br)
