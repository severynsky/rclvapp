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
      ROTARY:{
        rotary: "Ротарі"
      },
      mainpage: {
        title1: 'Ротарі Клуб',
        title2: 'Львів-Центр',
        rotary: "ротарі",
        news: "новини",
        projects: "проекти",
        general_info: "загальна інформація",
        about_rotary: "про Наше Ротарі",
        rotary_members: "наші Ротарійці",
        upcomming_event: "найближчим часом",
        events: "події",
      },
      NEWS: {
        news: "Новини",
        sort_by: "Сортувати за",
      },
      PROJECTS: {
        title: "Проекти",
        title_one: "Проект",
        new: "Нові",
        running: "Діючі",
        ended: "Звершені",
        cooperation: "Співпраця"
      },
      EVENTS: {
        title: "Події",
        today: "сьогодні",
        regular: "чергова зустріч",
        upcomming: "майбутні",
        passed: "минулі",
        date: "дата події",
        time: "час події",
        place: "місце",
        address: "адреса",
        additional_info: "додаткова інформація"
      },
      MEMBERS: {
        title: "Учасники",
        president: "Президент",
        сommitties: "Комітет",
        regular: 'члени Ротарі'
      },
      CONTACTS: {
        contact_page: "Контакти"
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
      ROTARY:{
        rotary: "Rotary"
      },
      mainpage: {
        title1: 'Rotary Club',
        title2: 'Lviv International',
        rotary: "rotary",
        news: "news",
        projects: "projects",
        general_info: "general info",
        about_rotary: "Our Rotary Club",
        rotary_members: "rotary members",
        upcomming_event: "upcomming event",
        events: "events",
      },
      NEWS: {
        news: "News",
        sort_by: "sort by",
      },
      PROJECTS: {
        title: "Projects",
        title_one: "Project",
        new: "New",
        running: "Running",
        ended: "Completed",
        cooperation: "Cooperation"

      },
      EVENTS: {
        title: "Events",
        today: "today",
        regular: "regular metting",
        upcomming: "upcomming",
        passed: "passed",
        date: "date",
        time: "time",
        place: "place",
        address: "address",
        additional_info: "additional info"
      },
      MEMBERS: {
        title: "Members",
        president: "President",
        сommitties: "Board and Committees",
        regular: 'Members'
      },
      CONTACTS: {
        contact_page: "Contacts"
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
rclvapp.run(['ezfb', '$rootScope', '$window', '$timeout', function(ezfb, $rootScope, $window, $timeout){
    console.log('angular app is running')

    $timeout(function(){
      $(".square").fadeOut();
    }, 500);

    $rootScope.user = {};
    $window.fbAsyncInit = function() {
      FB.init({
        appId: '730303527113361',
        /* Set if you want to check the authentication status at the start up of the app */
        // status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.4'
      });

      // sAuth.watchAuthenticationStatusChange();
    }

    (function(d){
    // load the Facebook javascript SDK

      var js,
      id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";

      ref.parentNode.insertBefore(js, ref);

    }(document));


    ezfb.init({
    // This is my FB app id for plunker demo app
    appId: '591757474261298'
  });

}]);

