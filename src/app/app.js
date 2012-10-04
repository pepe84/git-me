var App = (function(lng, undefined) {

    //Define your LungoJS Application Instance
    
    lng.App.init({
        name: 'git me!',
        version: '0.1',
        resources: {
            sections: [
                'user.html'
            ],
            templates: [
                'activity.html',
                'profile.html'
            ]
        }
    });
    
    var log = {
        debug: function(msg) {
            lng.Core.log(1, msg);
        },
        warn: function(msg) {
            lng.Core.log(2, msg);
        },
        err: function(msg) {
            lng.Core.log(3, msg);
        }
    }
    
    return {
        Log: log,
        Mockups: {
            github: {
                user: {
                    "public_repos": 33,
                    "type": "User",
                    "gravatar_id": "2becaf1073957bdad2f06e183731131d",
                    "login": "timdream",
                    "hireable": false,
                    "avatar_url": "https://secure.gravatar.com/avatar/2becaf1073957bdad2f06e183731131d?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
                    "followers": 58,
                    "bio": " Hi there :) My portfolio and CV can be found [here](http://timdream.org/) and [there](https://www.linkedin.com/in/timdream).",
                    "public_gists": 20,
                    "html_url": "https://github.com/timdream",
                    "created_at": "2009-06-08T09:30:09Z",
                    "email": "timdream@gmail.com",
                    "company": "Mozilla Corporation",
                    "blog": "http://timc.idv.tw/",
                    "following": 30,
                    "name": "Timothy Guan-tin Chien",
                    "id": 93093,
                    "location": "Taipei, Taiwan",
                    "url": "https://api.github.com/users/timdream"
                },
                activity: [
                    {
                        user: "timdream",
                        action: "has commited",
                        repo: "gaia"
                    },
                    {
                        user: "timdream",
                        action: "has commited",
                        repo: "gaia"
                    },
                    {
                        user: "pepe84",
                        action: "has commited",
                        repo: "gaia"
                    },
                    {
                        user: "jdbd",
                        action: "has a pull request",
                        repo: "gaia"
                    },
                    {
                        user: "timdream",
                        action: "has commited",
                        repo: "gaia"
                    },
                    {
                        user: "pepe84",
                        action: "has commited",
                        repo: "gaia"
                    }
                ]
            }
        }
    }

})(LUNGO);