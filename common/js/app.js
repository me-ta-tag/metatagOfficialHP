/**
 * Created by LastyRain on 2014/12/08.
 */
$(function(){

    // Model
    var Member = Backbone.Model.extend();

    var member = new Member;
    console.log(member);


    var Router = Backbone.Router.extend({
    	
    	routes: {
	    	'': 'index',
	    	'about': 'about',
	    	'works': 'works',
	    	'member': 'member'
	    },

	    index: function(){
	    	console.log('index');

	    },

	    about: function(){
	    	console.log('about');
	    	$('.about-card').hide();

	    },

	    works: function(){
	    	console.log('works');
	    	$('.works-card').hide();

	    },

	    member: function(){
	    	console.log('member');
	    	$('.member-card').hide();

	    }


    });

    var router = new Router();

    Backbone.history.start();

});