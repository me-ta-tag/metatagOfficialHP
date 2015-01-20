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
	    	'member': 'member',
	    },

	    index: function(){
	    	console.log('index');
	    	$('.index-content').show(800);
		    $('.works-content').hide();
		    $('.member-content').hide();
		    $('.about-content').hide();

	    },

	    about: function(){
	    	console.log('about');
	    	$('.about-content').show(800);
	    	$('.index-content').hide();
		    $('.works-content').hide();
		    $('.member-content').hide();

	    },

	    works: function(){
	    	console.log('works');
	    	$('.works-content').show(800);
	    	$('.index-content').hide();
		    $('.member-content').hide();
		    $('.about-content').hide();

	    },

	    member: function(){
	    	console.log('member');
	    	$('.member-content').show(800);
	    	$('.index-content').hide();
		    $('.works-content').hide();
		    $('.about-content').hide();

	    }


    });

    var router = new Router();

    Backbone.history.start();


});