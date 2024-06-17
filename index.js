import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv'

dotenv.config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready',(c)=>{
    console.log(`${c.user.username} is online.`)
})

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    console.log(message.content);
    if(message.content.startsWith('create')){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating ShortID for "+url,
        })
    }
    message.reply({
        content: 'God knows why.',
    });
})

client.on("interactionCreate", (interaction)=>{
    // console.log(interaction);
    interaction.reply('Pong!')
})

client.login(process.env.BOT_TOKEN)