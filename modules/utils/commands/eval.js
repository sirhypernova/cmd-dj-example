const { RichEmbed } = require('discord.js');
const micro = require('microtime');

module.exports = {
    checks: ['dj.owner'],
    help: 'Evaluates javascript',
    usage: '{prefix}eval {code}',
    async handler(msg,args,dj) {
        const code = args.join(' ');
        var output = '';
        var error = false;

        var start = micro.now();

        try {
            output = eval(code);
        } catch (e) {
            output = e;
            error = true;
        }
        var time = micro.now() - start;

        msg.channel.send(new RichEmbed()
            .setTitle('Eval')
            .addField('Input','```js\n'+code+'```')
            .addField('Output','```js\n'+output+'```')
            .setFooter('Finished in '+ time + 'μ')
            .setColor(error ? 'RED' : 'GREEN'));
    },
    checkFail(msg,args,dj,errors) {
        msg.channel.send('Error: No permission');
    }
}