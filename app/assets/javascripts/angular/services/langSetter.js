rclvapp.factory('langSetter', function(){
  console.info('hello from get langSetter')
  var language;

    return {
      setLang: function(lang){
        language = lang;
      }
    }

});

