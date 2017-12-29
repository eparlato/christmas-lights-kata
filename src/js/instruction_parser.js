function InstructionParser() {

    this.parse = function(instructions) {
        return [new Command('ON', 0, 0)];
    };
}