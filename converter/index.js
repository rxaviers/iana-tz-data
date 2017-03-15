var momentTimezoneJson = require("./latest.json");

var output = {
  version: momentTimezoneJson.version,
  zoneData: {}
};

momentTimezoneJson.zones.forEach(({name, abbrs, untils, offsets, isdsts}) => {
  name = name.split('/');
  name.slice(0, -1).reduce(function (tree, item) {
    return tree[item] || (tree[item] = {});
  }, output.zoneData)[name.slice(-1)[0]] = {abbrs, untils, offsets, isdsts};
})

console.log(JSON.stringify(output, null, 2));
