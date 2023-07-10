const Discord = require('discord.js');
const math = require('mathjs');
const client = new Discord.Client();
const prefix = ''

client.once('ready' , () => {console.log('The bot is online');});

client.on
('message', message =>
{
    if(message.author.bot) {return;}

    let equation = message.content;

    if (equation.startsWith('0'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('1'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('2'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('3'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('4'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('5'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('6'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('7'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('8'))
    { const result = math.evaluate(equation); message.channel.send(result); }

    if (equation.startsWith('9'))
    { const result = math.evaluate(equation); message.channel.send(result); }

}
);
client.login('');
