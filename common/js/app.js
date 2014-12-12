/**
 * Created by LastyRain on 2014/12/08.
 */
$(function(){

    // Model
    var Member = Backbone.Model.extend();

    var member = new Member;


/* Works-Page */
	// Model
    var WorkCard = Backbone.Model.extend({

    });
    // Collection
    var WorkCards = Backbone.Collection.extend({
    	model: WorkCard
    });

    // View
    var WorkCardsView = Backbone.View.extend({
        template: _.template( $('#works_card_template').html() ),
    	render: function(){
            // workcards内のJSONを1つずつ#cardsにappend
    		this.collection.each(function(workcard){
                var tmp = this.template( workcard.attributes );
                $('#cards').append(tmp);
    		}, this);
    		return this;
    	}
    });

    // Collection生成
    var workcards = new WorkCards([
    	{name: '作品1', detail: '詳細情報', link_title: 'title'},
    	{name: '作品2', detail: '詳細情報', link_title: 'title'},
    	{name: '作品3', detail: '詳細情報', link_title: 'title'}
    ]);

    var workcardsView = new WorkCardsView({
    	collection: workcards
    });

    workcardsView.render();

});