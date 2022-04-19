# Hello! This is the quick guide to run our project.

Prerequisites:
# node.js installed including npm

To run the project unzip the file, after that open Powershell/terminal

Using the cd method go to the unziped folder (for example cd Downloads cd photocast) and run those two commands:

# npm install

# npm start

It also should work with yarn (yarn install, yarn start), but we have not tested it

After that you can open it in your browser of choice using this url:

# https://localhost:3000

To have the best experience use a phone aspect ratio, 
we recommend using iPhone 12 Pro ascpect ratio (available in most
browser though inspect (for example Google Chrome))

There is a very low chance you might see this error:

# Plugin "react" was conflicted between "package.json » eslint-config-react-app »

This is a a rare problem cased by some folder trees having name conflicts. 
Make sure you use the correct case when using cd (for example using "cd downloads" rather than "cd Downloads" can cause this error). 
The error is minor and after closing the pop-up the app will work fine. We would like to eliminate the chance of this error but 
because it is on the "client side" it is frankly impossible. 