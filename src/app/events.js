App.Events = (function(lng, app, undefined) {
    
    $$('#activity').ready(function(e){
        lng.View.Template.List.create({
            el: '#activity',
            template: 'activity-tpl',
            data: app.Mockups.github.activity
        });
    });
    
    $$('.goto-user').tap(function(e){
        app.Services.github.Users.getUser(this.innerHTML, function(resp){
            lng.View.Template.render('#profile', 'profile-tpl', resp);
        });
    });
    
    // TODO Dynamic user param
    $$('#goto-orgs').tap(function(e){
        app.Services.github.Orgs.getOrgsByUser(this.innerHTML, function(resp){
            lng.View.Template.List.create({
                el: '#orgs-list',
                template: 'org-item-tpl',
                data: resp
            });
        });
    });
    
    // TODO Dynamic user param
    $$('#goto-repos').tap(function(e){
        app.Services.github.Repos.getReposByUser(this.innerHTML, function(resp){
            lng.View.Template.List.create({
                el: '#repos-list',
                template: 'repo-item-tpl',
                data: resp
            });
        });
    });
    
    return {

    }

})(LUNGO, App);