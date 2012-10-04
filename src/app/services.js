App.Services = (function(lng, app, undefined) {

    var mockup = true;
    
    var github = (function(){
        // API
        var basePath = 'https://api.github.com';
        // Public
        return {
            Users: {
                getUser: function(username, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.user);
                        return;
                    }
                    // TODO fix Access-Control-Allow-Origin issue using JSONP
                    $$.get(basePath + '/users/' + username, {'callback': '?'} , cb);
                }
            },
            Orgs: {
                getOrg: function(id) {
                    
                }
            }
        }
    })();
    
    return {
        github: github
    }

})(LUNGO, App);