let main = {
    "name": "Hello World", // Users will see this name in the extension manager
    "description": "A simple extension that add blocks which print \"Hello World\" or \"Goodbye World\" to the console.", // Also shown in the extension manager
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Hello", // The name of the category
            "category_style": '#fff',
            "blocks": [ // The blocks that the category contains
                {
                    "type": "hello_world", // The internal name of the block
                    "block": { // The block definition (see https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)
                        "init": function() {
                            this.appendDummyInput()
                                .appendField("Hello World");
                            this.setPreviousStatement(true, null);
                            this.setNextStatement(true, null);
                            this.setColour(230);
                            this.setTooltip("Prints \"Hello World\" to the console.");
                            this.setHelpUrl(""); // Optional, remove if not needed
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n";
                    }
                }
            ]
        },
        {
            "name": "Goodbye",
            "category_style": 120,
            "blocks": [{
                "type": "goodbye_world",
                "block": {
                    "init": function() {
                        this.appendDummyInput()
                            .appendField("Goodbye World");
                        this.setPreviousStatement(true, null);
                        this.setNextStatement(true, null);
                        this.setColour(230);
                        this.setTooltip("Prints \"Goodbye World\" to the console.");
                        this.setHelpUrl("");
                    }
                },
                "generator": function(block) {
                    return "print(\"Goodbye World\")\n";
                }
            }]
        }
    ]
};
main
