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
          "name": "TEXT",
          "check": "String"
        }
      ],
      "inputsInline": false,
      "output": "String",
      "colour": "%{BKY_TEXTS_HUE}",
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
      "colour": "%{BKY_TEXTS_HUE}",
      "tooltip": "Create normal text (without quotes)."
    });
  }
};

// Redefines logic:logic_operation
Blockly.Blocks['logic_operation'] = {
  init: function () {
    this.jsonInit({
      "type": "logic_operation",
      "message0": "%1 %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "A"
        },
        {
          "type": "field_dropdown",
          "name": "OP",
          "options": [
            ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
            ["%{BKY_LOGIC_OPERATION_OR}", "OR"]
          ]
        },
        {
          "type": "input_value",
          "name": "B"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": "%{BKY_LOGIC_HUE}",
      "helpUrl": "%{BKY_LOGIC_OPERATION_HELPURL}",
      "extensions": ["logic_op_tooltip"]
    });
  }
};

// Redefines logic:logic_negate
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
      "tooltip": "%{BKY_LOGIC_NEGATE_TOOLTIP}"
    });
  }
};


/* [Operators] */
var OPERATORS_COLOUR = 230;

Blockly.Blocks['in_title'] = {
  init: function() {
    this.jsonInit({
      "type": "in_title",
      "message0": "intitle: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "output": "String",
      "colour": OPERATORS_COLOUR,
      "tooltip": ""
    });
  }
};

Blockly.Blocks['site'] = {
  init: function () {
    this.jsonInit({
      "type": "site",
      "message0": "site: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "output": "String",
      "colour": OPERATORS_COLOUR,
      "tooltip": ""
    });
  }
};

Blockly.Blocks['in_url'] = {
  init: function () {
    this.jsonInit({
      "type": "in_url",
      "message0": "inurl: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "output": "String",
      "colour": OPERATORS_COLOUR,
      "tooltip": ""
    });
  }
};
/* [/Operators] */