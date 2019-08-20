install:
	npm install

start:
	sudo npx babel-node src/bin/brain-games.js

trans:
	sudo npx babel src --out-dir dist

publish:
	npm publish --dry-run

lint:
	npx eslint .
