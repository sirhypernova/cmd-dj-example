const path = require('path');

module.exports = {
    events: {
        ready() {
            this.scanCommands(path.resolve(__dirname,'utils','commands'));
            this.scanChecks(path.resolve(__dirname,'utils','checks'));
            console.log('Loaded utils module');
        }
    }
}