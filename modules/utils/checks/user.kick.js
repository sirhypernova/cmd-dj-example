module.exports = {
    error: 'You do not have permission to kick',
    check(msg,args,dj) {
        return msg.member.hasPermission('KICK_MEMBERS');
    }
}