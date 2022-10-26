install:
	npm install

start:
	mkdir -p reports
	rm -f reports/*
	npm start

audit:
	npm run audit
