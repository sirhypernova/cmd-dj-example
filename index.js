const config = require('./config');

const { Client } = require('cmd-dj');
const dj = new Client(config);

dj.modules.scan('modules');

dj.run().then(() => {
    console.log(`Logged in as ${dj.user.tag}!`);
});