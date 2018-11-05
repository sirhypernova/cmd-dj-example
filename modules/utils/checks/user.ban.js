module.exports = {
    error: 'You do not have permission to ban',
    check(msg,args,dj) {
        return msg.member.hasPermission('BAN_MEMBERS');
    }
}