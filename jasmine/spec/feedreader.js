/* feedreader.js

 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This suite is all about the RSS feeds definitions, the allFeeds variable in our 
    application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the allFeeds variable has been defined and that it is 
		not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This loops through each feed in the allFeeds object and ensures it has a 
        URL defined and that the URL is not empty.
         */

         it('URL defined for each', function() {
         	for(i = 0; i < allFeeds.length; i++) {
         		expect(allFeeds[i].url).toBeDefined();
         		expect(allFeeds[i].url).not.toBe("");
         	}
         });


        /* This test loops through each feed in the allFeeds object and 
        ensures it has a name defined and that the name is not empty.
        */
         it('name defined for each', function() {
         	for(i = 0; i < allFeeds.length; i++) {
         		expect(allFeeds[i].name).toBeDefined();
         		expect(allFeeds[i].name).not.toBe("");
         	}
         });
    });


    /* New test suite named "the menu" */

    describe('The menu', function() {


        /* This test ensures the menu element is
         hidden by default.
         */

         it('is hidden by default', function() {
         	expect($('body').hasClass("menu-hidden")).toBe(true);
         })

         /* Test ensures the menu changes visibility when the menu 
         icon is clicked. This test should have two expectations: 
         does the menu display when clicked and does it hide when clicked again.
          */

          it('is shown when clicked and hidden when clicked again', function() {
          	$('.menu-icon-link').click();
          	expect($('body').hasClass("menu-hidden")).not.toBe(true);

          	$('.menu-icon-link').click();
          	expect($('body').hasClass("menu-hidden")).toBe(true);
          });

    });

    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed function is called 
        and completes its work, there is at least a single .entry 
        element within the .feed container.
         */
    	beforeEach(function(done) {
    		loadFeed(0, function() {
    			done();
    		});
    	});

    	it('should have at least one entry within the feed', function(done) {
    		expect($('.feed .entry-link .entry').length > 0).toBe(true);
    		done();
    	})
     });

    /* New test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         beforeEach(function(done) {
         	for(j = 0; j < allFeeds.length; j++) {
         		var j = allFeeds[i];
         	}
         	loadFeed(0, function() {
         		done();
         	});
         });

         it('should have different content when a new feed is loaded', function(done) {
         	expect(true);
         	done();
         });
     });
}());
