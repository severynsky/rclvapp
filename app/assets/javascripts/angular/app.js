rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'Devise',
  'uiGmapgoogle-maps',
  'pascalprecht.translate'
]);

rclvapp.config([ '$httpProvider', 'uiGmapGoogleMapApiProvider', '$translateProvider', 
  function($httpProvider, uiGmapGoogleMapApiProvider, $translateProvider) {

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });

    $httpProvider.defaults.withCredentials = true;

    var translationsUK = {
      NEWS: "Новини",
      PROJECTS: {
        title: "Проекти",
        new: "Нові",
        running: "Діючі",
        ended: "Звершені",
        cooperation: "Співпраця",

      },
      EVENTS: {
        title: "Події"
      },
      MEMBERS: {
        title: "Ротарійці",
        president: "Президент",
        сommitties: "Комітет",
        regular: 'члени Ротарі'
      },
      buttons: {
        ua: "укр",
        en: "eng"
      }
    };
    var translationsEN = {
      NEWS: "News",
      PROJECTS: {
        title: "Projecrs",
        new: "New",
        running: "Running",
        ended: "Completed",
        cooperation: "Cooperation",

      },
      EVENTS: {
        title: "Events"
      },
      MEMBERS: {
        title: "Members",
        president: "President",
        сommitties: "Committies",
        regular: 'Regular'
      },
      buttons: {
        ua: "укр",
        en: "eng"
      }
    };

    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('uk', translationsUK);
    $translateProvider.preferredLanguage('en');
  }
]);
rclvapp.run(function(){
    console.log('angular app is running')
});

