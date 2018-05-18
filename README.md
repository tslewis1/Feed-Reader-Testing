# Project Overview

In this project you are given a web-based application that reads RSS feeds. This web application runs through different tests to ensure that various aspects of the page are running correctly.

## How to successfully run this application

The tests are as follows:
	
1. Tests to check that allFeeds variable has been defined and is not empty.
2. Loops through each feed in allFeeds to make sure that each URL is defined and not empty
3. Loops through each feed in allFeeds to make sure that each name is defined and not empty.
4. Checks that the menu element is hidden by default.
5. Test for menu visibility when the menu icon is clicked. It has two expectations: does the menu display when clicked and hide when clicked again.
6. Checks for at least one .entry element within the .feed container after loadFeed() has been called and completes.
7. Makes sure that when a new feed is loaded by loadFeed() the content changes.
