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
    
    return {

    }

})(LUNGO, App);