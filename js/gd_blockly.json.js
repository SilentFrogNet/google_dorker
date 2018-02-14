// Custom Blocks declaration

Blockly.Blocks['start'] = {
  init: function () {
    this.jsonInit({
      "type": "start",
      "message0": "Search for: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "QUERY"
        }
      ],
      "colour": 70,
      "tooltip": "",
      "helpUrl": ""
    });
    Blockly.BlockSvg.START_HAT = true;
  }
};

Blockly.Blocks['synonyms'] = {
  init: function () {
    this.jsonInit({
      "message0": "synonyms of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        }
      ],
      "inputsInline": false,
      "output": "String",
      "colour": 230,
      "tooltip": "Allow synonyms of the specified word",
      "helpUrl": ""
    });
  }
};

Blockly.Blocks['normal_text'] = {
  init: function () {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_input",
          "name": "TEXT",
          "text": ""
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": 230,
      "tooltip": "Create normal text (without quotes)."
    });
  }
};

// // Redefines logic:logic_boolean
// Blockly.Blocks['logic_boolean'] = {
//   init: function () {
//     this.jsonInit({
//       "type": "logic_boolean",
//       "message0": "%1",
//       "args0": [
//         {
//           "type": "field_dropdown",
//           "name": "BOOL",
//           "options": [
//             ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
//             ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]
//           ]
//         }
//       ],
//       "output": "Boolean",
//       "colour": "%{BKY_LOGIC_HUE}",
//       "tooltip": "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
//       "helpUrl": "%{BKY_LOGIC_BOOLEAN_HELPURL}"
//     });
//   }
// };
// };

// Redefines logic:logic_boolean
Blockly.Blocks['logic_negate'] = {
  init: function () {
    this.jsonInit({
      "type": "logic_negate",
      "message0": "%{BKY_LOGIC_NEGATE_TITLE}",
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL"
        }
      ],
      "output": "String",
      "colour": "%{BKY_LOGIC_HUE}",
      "tooltip": "%{BKY_LOGIC_NEGATE_TOOLTIP}",
      "helpUrl": "%{BKY_LOGIC_NEGATE_HELPURL}"
    });
  }
};
