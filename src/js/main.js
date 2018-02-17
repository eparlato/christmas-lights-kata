(function main() {

    var txt_total_lit_lights = document.getElementById("txt_total_lit_lights");

    function go() {
        var btn_launch_version1 = document.getElementById("btn_launch_version1");
        btn_launch_version1.onclick = run_version_1;
    }

    function run_version_1() {
        console.log("Launching version 1...");
        
        var grid = new Grid(1000, 1000, LightV1);
        var commandParser = new CommandParser();
        var commandProcessor = new CommandProcessor();
        var manager = new Manager(grid, commandParser, commandProcessor);
        var commandSequence = [{
            from: {
                row: 0,
                column: 0
            },
            to: {
                row: 999,
                column: 999
            },
            action: 'ON'
        }, {
            from: {
                row: 0,
                column: 0
            },
            to: {
                row: 999,
                column: 0
            },
            action: 'TOGGLE'
        }, {
            from: {
                row: 499,
                column: 499
            }, 
            to: {
                row: 500,
                column: 500
            },
            action: 'OFF'
        }
    ];

        var total_lit_lights;

        manager.process(commandSequence);

        total_lit_lights = manager.getTotalLitLights();

        txt_total_lit_lights.value = total_lit_lights;
    }

    go();
})();