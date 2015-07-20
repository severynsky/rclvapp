rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'Devise',
  'uiGmapgoogle-maps',
  'pascalprecht.translate',
  'ezfb',
  'ngStorage'
]);

rclvapp.config([ '$httpProvider', 'uiGmapGoogleMapApiProvider', '$translateProvider', 'ezfbProvider',
  function($httpProvider, uiGmapGoogleMapApiProvider, $translateProvider, ezfbProvider) {

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });

    $httpProvider.defaults.withCredentials = true;

    ezfbProvider.setInitParams({
      appId: '591757474261298',
      xfbml: true,
      version: 'v2.0'
    });

    var translationsUK = {
      mainpage: {
        title: 'Ротарі Клуб Львів-Центр',
        rotary: "ротарійські",
        news: "новини",
        projects: "проекти",
        general_info: "загальна інформація",
        about_rotary: "про ротарі",
        rotary_members: "наші Ротарійці",
        upcomming_event: "найближчим часом",
        events: "події",
      },
      NEWS: "Новини",
      PROJECTS: {
        title: "Проекти",
        new: "Нові",
        running: "Діючі",
        ended: "Звершені",
        cooperation: "Співпраця"
      },
      EVENTS: {
        title: "Події",
        upcomming: "майбутні",
        passed: "минулі"
      },
      MEMBERS: {
        title: "Ротарійці",
        president: "Президент",
        сommitties: "Комітет",
        regular: 'члени Ротарі'
      },
      buttons: {
        ua: "укр",
        en: "eng",
        greeting: "Вітаємо",
        login: "увійти",
        logout: "вийти",
        email: "Ваший емейл",
        password: "Ваший пароль",
        forgot_password: "забули пароль?"
      }
    };
    var translationsEN = {
      mainpage: {
        title: 'Rotary Club Lviv-Center',
        rotary: "rotary",
        news: "news",
        projects: "projects",
        general_info: "general info",
        about_rotary: "about rotary",
        rotary_members: "rotary members",
        upcomming_event: "upcomming event",
        events: "events",
      },
      NEWS: "News",
      PROJECTS: {
        title: "Projecrs",
        new: "New",
        running: "Running",
        ended: "Completed",
        cooperation: "Cooperation"

      },
      EVENTS: {
        title: "Events",
        upcomming: "upcomming",
        passed: "passed"
      },
      MEMBERS: {
        title: "Members",
        president: "President",
        сommitties: "Committies",
        regular: 'Regular'
      },
      buttons: {
        ua: "укр",
        en: "eng",
        greeting: "Hello",
        login: "login",
        logout: "logout",
        email: "Your email",
        password: "Your password",
        forgot_password: "forgot password?"
      }
    };

    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('uk', translationsUK);
    $translateProvider.preferredLanguage('en');
  }
]);
rclvapp.run(['ezfb', function(ezfb){
    console.log('angular app is running')

    ezfb.init({
    // This is my FB app id for plunker demo app
    appId: '591757474261298'
  });

}]);

