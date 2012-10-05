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
                getOrgsByUser: function(username, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.orgs);
                        return;
                    }
                    // TODO fix Access-Control-Allow-Origin issue using JSONP
                    $$.get(basePath + '/users/' + username + '/orgs', {'callback': '?'} , cb);
                },
                getOrg: function(name, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.org);
                        return;
                    }
                    // TODO fix Access-Control-Allow-Origin issue using JSONP
                    $$.get(basePath + '/orgs/' + name, {'callback': '?'} , cb);
                }
            },
            Repos: {
                getReposByUser: function(username, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.repos);
                        return;
                    }
                    // TODO fix Access-Control-Allow-Origin issue using JSONP
                    $$.get(basePath + '/users/' + username + '/repos', {'callback': '?'} , cb);
                },
                getRepo: function(name, owner, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.repo);
                        return;
                    }
                    // TODO fix Access-Control-Allow-Origin issue using JSONP
                    $$.get(basePath + '/repos/' + owner + '/' + name, {'callback': '?'} , cb);                    
                }
            }
        }
    })();
    
    return {
        github: github
    }

})(LUNGO, App);