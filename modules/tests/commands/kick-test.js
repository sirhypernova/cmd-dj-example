module.exports = {
    checks: ['utils.user.kick'],
    handler(msg,args,dj) {
        msg.channel.send('You have permissions to kick');
    },
    checkFail(msg,args,dj,errors) {
        msg.channel.send(errors['utils.user.kick']);
    }
}