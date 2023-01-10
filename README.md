Considering npm and webdriverio is installed on the computer and up to date.
The user can run the cases while on directory of your main folder or by opening up the terminal
 in your code editor and the type the command: npx wdio wdio.conf.ts

Possible to run the tests separately by configuring the following setting in the wdio.conf.ts file.
To run the first case modify this setting and add your custom tagged scenario:

tagExpression: 'failcase1'

And run on directory of the project from cmd line: npx wdio wdio.conf.ts

At the end of the two cases the scenarios and steps can be seen in the report detailing each case
and its success of passing or failing the test.

View the feature and step definition and page objects in the features map.


