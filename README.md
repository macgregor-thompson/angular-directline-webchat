# Angular Direct Line Web Chat

A simple and lightweight Angular + Bootstrap 4 seed project designed to get you up and running with building 
a custom web client using the Direct Line API to communicate with a bot built with the Microsoft Bot Framework<sup>&reg;</sup>.

Prerequisites:
* You should already have a bot built and published on Azure
* You should have Direct Line included as one of your bot's channels
 
 
 ## Getting Started:
 
 ### 1. Clone or fork this repo.
 You need to either clone or fork this repo to get started.
 ```shell
 $ git clone https://github.com/mhthompson86/angular-directline-webchat.git
 ```
 ### 2. Add your Direct Line Secret Key
 Before anything will work, you must configure the project to use your bot's Direct Line secret key.  
 To do this, copy the secret from your bot's Direct Line channel on the Azure portal and paste it into the 
 __directLineSecret.json__ file that can be located in 
 _angular-directline-webchat/src/app/directLineSecret.json_.
 
 ```json
 {
   "directLineSecret": "YOUR_DIRECT_LINE_SECRET"
 }

 ```
 
 ### 3. Customize the Settings
 To make it easier for you, we created a settings.ts file that will contain some information that will get used
 in various places in the code. Just swap out the values for the ones you want.
 The __settings.ts__ file can be located in 
 _angular-directline-webchat/src/app/settings.ts_.
 
 ```javascript
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
 ``` 
 
 ### 4. Test it out
 Test that you can connect to your bot by opening a a command prompt or terminal at the project's location and
  running `ng serve -o`. _(the -o flag opens the browser to localhost:4200 automatically)_
 
 If you are able to connect, then you are all set and you can start customizing the project however you see fit!
  
--------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
