# Angular Direct Line Web Chat

A simple and lightweight Angular + Bootstrap 4 seed project designed to get you up and running with building 
a custom web client using the Direct Line API to communicate with a bot built with the Microsoft Bot Framework<sup>&reg;</sup>.

Prerequisites:
* You should already have a bot built and published on Azure
* You should have Direct Line included as one of your bot's channels
 
 
 ## Getting Started:
 
 ###1. Clone or fork this repo.
 You need to either clone or fork this repo to get started.
 ```shell
 $ git clone https://github.com/mhthompson86/angular-directline-webchat.git
 ```
 ###2. Add your Direct Line Secret Key
 Before anything will work, you must configure the project to use your bot's Direct Line secret key.  
 To do this, copy the secret from your bot's Direct Line channel on the Azure portal and paste it into the 
 __directLineSecret.json__ file that can be located in 
 _angular-directline-webchat/src/app/directLineSecret.json_.
 ###3. Test it out
 Test that you can connect to your bot by opening a a command prompt or terminal at the project's location and
  running `ng serve -o`. _(the -o flag opens the browser to localhost:4200 automatically)_
  
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
