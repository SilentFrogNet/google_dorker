/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
    toolbox: toolbox,
    collapse: true,
    comments: true,
    disable: false,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    rtl: false,
    scrollbars: true,
    sounds: false,
    oneBasedIndex: true
};

/* Inject your workspace */
var workspace = Blockly.inject('blocklyDiv', options);

/* Load Workspace Blocks from XML to workspace. */
var workspaceBlocks = document.getElementById("workspaceBlocks");
/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

/* Ignore all elements that are not under the root */
workspace.addChangeListener(Blockly.Events.disableOrphans);

function myUpdateFunction(event) {
    var code = Blockly.Dorker.workspaceToCode(workspace);
    document.getElementById('outputCodeArea').value = code;
}
workspace.addChangeListener(myUpdateFunction);
