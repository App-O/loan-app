
all:
	@echo Specify something...

clean:
	@rm ./index.js

build: build-index build-banker build-customer

build-index:
	export NODE_ENV=production
	browserify ./src/routes/index.js -v -d  -t [envify purge --NODE_ENV production]  -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > scripts/index.js

build-banker:
	browserify ./src/routes/banker.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > scripts/banker.js

build-customer:
	browserify ./src/routes/customer.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify | uglifyjs -c > scripts/customer.js

watch-index:
	watchify ./src/routes/index.js -v -d -t [babelify --presets [ es2015 react stage-2] ] -t node-lessify -t imgurify -o scripts/index.js

upload:
	scp ./*.html admin@nestor:www/minfastighet
	scp ./scripts/*.js admin@nestor:www/minfastighet/scripts
