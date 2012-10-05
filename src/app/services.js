App.Services = (function(lng, app, undefined) {

    var mockup = true;
    
    $$.ajaxSettings.error = function(xhr, type) { 
        app.Log.err(xhr);
    };
    
    /**
     * @see http://developer.github.com/v3
     */
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
                    // JSONP
                    $$.ajaxSettings.success = cb;
                    $$.get(basePath + '/users/' + username, {'callback': '?'} , cb);
                }
            },
            Orgs: {
                getOrgsByUser: function(username, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.orgs);
                        return;
                    }
                    // JSONP
                    $$.ajaxSettings.success = cb;
                    $$.get(basePath + '/users/' + username + '/orgs', {'callback': '?'} , cb);
                },
                getOrg: function(name, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.org);
                        return;
                    }
                    // JSONP
                    $$.ajaxSettings.success = cb;
                    $$.get(basePath + '/orgs/' + name, {'callback': '?'} , cb);
                }
            },
            Repos: {
                getReposByUser: function(username, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.repos);
                        return;
                    }
                    // JSONP
                    $$.ajaxSettings.success = cb;
                    $$.get(basePath + '/users/' + username + '/repos', {'callback': '?'});
                },
                getRepo: function(name, owner, cb) {
                    if (mockup) {
                        cb(App.Mockups.github.repo);
                        return;
                    }
                    // JSONP
                    $$.ajaxSettings.success = cb;
                    $$.get(basePath + '/repos/' + owner + '/' + name, {'callback': '?'});                    
                }
            }
        }
    })();
    
    /**
     * @see https://github.com/juandebravo/mobilehackaton
     */
    var gamification = (function(){
        // API
        var basePath = 'https://juandebravo:hackaton@juandebravo.cloudant.com/hackaton';
        // Public
        return {
            getOrganizations: function(cb) {
                // JSONP
                $$.ajaxSettings.success = cb;
                $$.get(basePath + '/organizations', {'callback': '?'});
            },
            getOrganizationData: function(name, cb) {
                // JSONP
                $$.ajaxSettings.success = cb;
                $$.get(basePath + '/organizations_' + name, {'callback': '?'});
            },
            getUserData: function(name, username, cb) {
                // JSONP
                $$.ajaxSettings.success = cb;
                $$.get(basePath + '/organizations_' + name + '_users_' + username, {'callback': '?'});
            }
        }
    })();
    
    return {
        github: github,
        gamification: gamification
    }

})(LUNGO, App);