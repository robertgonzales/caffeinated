var Colors = {
  dgray: '38,34,29,',
  gray: '47,42,36,',
  lgray: '76,68,59,',
  dred: '121,38,12,',
  red: '140,44,15,',
  dtan: '191,179,141,',
  tan: '206,205,165,',
  ltan: '229,229,184,',
  dbrown: '51,36,24,',
  brown: '64,45,31,',
  lbrown: '76,54,36,',
  blue: '115,153,165,',
  lblue: '130,171,184,'
};

var getColor = function(name, opacity) {
  opacity = opacity || 1;
  return 'rgba(' + Colors[name] + opacity + ')';
}

module.exports = getColor;