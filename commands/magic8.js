const magic8 = () => {
    const r = Math.floor(Math.random() * 20);
    const answers = [
        'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'It is certain.',
        'It is decidedly so.',
        'Most likely.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Outlook good.',
        'Reply hazy, try again.',
        'Signs point to yes.',
        'Very doubtful.',
        'Without a doubt.',
        'Hell yasss.',
        'Yes – definitely.',
        'You may rely on it.',
    ];
    return `> Magic 8 Ball: ${answers[r]}`;
};
exports.magic8 = magic8;