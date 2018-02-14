// Custom Blocks Implementation

Blockly.Dorker['start'] = function (block) {
  // Text value.
  var code = Blockly.Dorker.valueToCode(block, 'QUERY', Blockly.Dorker.ORDER_ATOMIC);
  return [code, Blockly.Dorker.ORDER_ATOMIC];
};

Blockly.Dorker['synonyms'] = function (block) {
  var value_name = Blockly.Dorker.valueToCode(block, 'VALUE', Blockly.Dorker.ORDER_ATOMIC);
  var code = '~' + value_name;
  return [code, Blockly.Dorker.ORDER_NONE];
};

Blockly.Dorker['normal_text'] = function (block) {
  // Text value.
  var code = block.getFieldValue('TEXT');
  return [code, Blockly.Dorker.ORDER_ATOMIC];
};


/* [Operators] */
Blockly.Dorker['in_title'] = function (block) {
  var value_name = Blockly.Dorker.valueToCode(block, 'VALUE', Blockly.Dorker.ORDER_ATOMIC);
  var code = 'intitle:' + value_name;
  return [code, Blockly.Dorker.ORDER_ATOMIC];
};

Blockly.Dorker['site'] = function (block) {
  var value_name = Blockly.Dorker.valueToCode(block, 'VALUE', Blockly.Dorker.ORDER_ATOMIC);
  var code = 'site:' + value_name;
  return [code, Blockly.Dorker.ORDER_ATOMIC];
};

Blockly.Dorker['in_url'] = function (block) {
  var value_name = Blockly.Dorker.valueToCode(block, 'VALUE', Blockly.Dorker.ORDER_ATOMIC);
  var code = 'inurl:' + value_name;
  return [code, Blockly.Dorker.ORDER_ATOMIC];
};
/* [/Operators] */
