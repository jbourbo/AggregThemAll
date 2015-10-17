// Events
Template.github.events({
    "click .linkgithub": function(event){

        Meteor.linkWithGithub();

        console.log("link with github");

        //FlashMessages.sendSuccess('Review Added');
        //Router.go('/');

    }
});

Template.github.helpers({
    services: function () {
        var user = Meteor.user();
        if (user) {
            return _.keys(user.services);
        } else {
            return;
        }
    }
});