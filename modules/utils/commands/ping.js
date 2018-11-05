module.exports = {
    help: 'Displays bot and api ping',
    usage: '{prefix}ping',
    checks: ['utils.guild'],
    async handler(msg,args,dj) {
        var m = await msg.channel.send('Pong?');
        m.edit(`Pong! ${Math.floor(Date.now() -m.createdTimestamp)}ms (API: ${Math.floor(dj.ping)}ms)`);
    },
    checkFail(msg,args,dj,errors) {
        msg.channel.send(`Error: ${errors['utils.guild']}`);
    }
}