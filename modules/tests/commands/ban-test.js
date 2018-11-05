module.exports = {
    checks: ['utils.user.ban'],
    handler(msg,args,dj) {
        msg.channel.send('You have permissions to ban');
    },
    checkFail(msg,args,dj,errors) {
        msg.channel.send(errors['utils.user.ban']);
    }
}