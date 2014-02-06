# portfolio site

## 使用

		npm install

		supervisor app

## 環境建置心得

主要是想用node的express來做一個簡單的站，但也要可以demo出我會做的幾樣東西

一開始使用Grunt想說可以一口氣來做compiles sass, haml, coffee...etc

摸索到現在的發現是:用express + haml的話就不用去用grunt compile haml了XD

很多觀念還是不夠清楚，但還是要多嘗試才會知道

覺得很奇怪的是express裡面的haml語法竟然跟之前用的稍微不同！？

需要看這邊的document: https://github.com/visionmedia/haml.js/

然後現在在考慮是不是要用bower

這樣就變成

各個頁面的主結構是從express + haml來

css的部分要用grunt

modernizr用bower?

其實根本不用這樣...只需要第一個

如果還有要跑test跟coffeescript 才比較需要加上grunt，現在好像只需要sass --watch就可以了XD



## 有關Grunt... I learned...

- 一開始裝了grunt-express跟grunt-express-server在嘗試，他們好像是要用express的server，因為一直試不出來（用grunt去跑express, localhost:3000還是不行），所以拔掉沒有用了

- 裝grunt-contrib-watch之後可以開始用sass, coffeescript等等要用watch的

- 裝grunt-contrib-sass, grunt-contrib-coffee

- 看到很多人用grunt-nodemon還不了解怎麼用@@

- 有很多人裝grunt-contrib-uglify, grunt-contrib-jshint還沒去瞭解...

- gruntfile.js裡面主要就是要有

			module.exports = function(grunt) {
				grunt.initConfig({...})
			}

裡面就可以做很多設定





