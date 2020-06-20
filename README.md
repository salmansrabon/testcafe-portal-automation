# testcafe-web-automation

## Technology:
- Tool: testcafe
- IDE: Visual Studio Code
- Build tool: npm
- Language: JavaScript

## Requirement:
1. Navigate to testcafe example portal
2. Filling up the customer query
3. Submit the form
4. Verify if customer see the welcome page

## Prerequisite:
1. Need to install node.js package
2. Need good internet connectivity

## Run the automation script:
1. Open cmd to the project folder
2. Type this command:

```sh
npx testcafe chrome TC01_TestCafe_Portal.js
```

3. If you want to screen record while running the autmation, then type the command:

```sh
npx testcafe chrome test.js --video artifacts/videos
```

4. TestCafe will open the selected browser and start automation.
5. To view report, type the command:

```sh
npx testcafe chrome test.js --reporter spec,html:testresult.html
```
 
You will find the automation <a href="https://youtu.be/OqOMyJvtDAY" target="_blank">video</a> here.
