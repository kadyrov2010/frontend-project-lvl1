install:
	npm install

start:
	sudo npx babel-node src/bin/brain-prime.js

trans:
	sudo npx babel src --out-dir dist

publish:
	sudo npm publish --dry-run

lint:
	npx eslint .
