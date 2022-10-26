prologue:
	npm install -g @lhci/cli	
	npm i

run:
	mkdir -p reports
	rm -f reports/*
	npm start

audit:
	npm run audit
