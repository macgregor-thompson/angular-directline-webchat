export const Settings = {
  bot: {
    // This must match your bot's ID from Azure...(activity.from.id)
    // Bot page on Azure portal > Application Settings > BotId in the App Settings table
    id: 'chime-basic-bot-poc',

    // this is what will be shown in the chat dialog
    name: 'Chime bot'
  },

  // this is what is statically shown to the user before anything arrives from the bot
  welcomeMessage: 'Welcome to Instant Chime',

  // the image used in the top left of the chat window
  logo: '../../assets/img/chime-red.png'
};
