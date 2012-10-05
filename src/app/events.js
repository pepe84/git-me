App.Events = (function(lng, app, undefined) {
    
    $$('#activity').ready(function(e){
        lng.View.Template.List.create({
            el: '#activity',
            template: 'activity-item-tpl',
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
    
    $$('.goto-org').tap(function(e){
        var name = $$(this).attr('data-name');
        app.Services.github.Orgs.getOrg(name, function(resp){
            lng.View.Template.render('#organization', 'organization-tpl', resp);
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

    $$('.goto-repo').tap(function(e){
        var name = $$(this).attr('data-name');
        var owner = $$(this).attr('data-owner');
        app.Services.github.Repos.getRepo(name, owner, function(resp){
            lng.View.Template.render('#repository', 'repository-tpl', resp);
        });
    });
    
    return {

    }

})(LUNGO, App);