
all:
	@echo Specify something...

clean:
	@rm ./index.js

build:
	export NODE_ENV=production
	browserify ./src/routes/index.js -v -d  -t [envify purge --NODE_ENV production]  -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > scripts/index.js

watch:
	watchify ./src/routes/index.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify -o scripts/index.js

upload:
	scp ./*.html admin@nestor:www/minfastighet
	scp ./scripts/*.js admin@nestor:www/minfastighet/scripts
