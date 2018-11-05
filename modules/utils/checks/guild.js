module.exports = {
    error: 'Channel is not in a guild',
    check(msg,args,dj) {
        return msg.channel.type == 'text';
    }
}