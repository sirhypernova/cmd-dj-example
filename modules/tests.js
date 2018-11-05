const path = require('path');

module.exports = {
    events: {
        ready() {
            this.scanCommands(path.resolve(__dirname,'tests','commands'));
            console.log(`Loaded tests module`);
        }
    }
}