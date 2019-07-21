# Kingdomworks React Native Coding Assesment
This purpose of this repo is to provide you a starting point as you move through the react native developer interview process for Kingdomworks. We thank you for your time as you complete this assesment, we know it's valuable. Please make sure to read this readme completely as part of this assesment is accurately following the instructions.

## Purpose of the assesment.
We at kingdomworks have been through the hiring process of many different kinds of engineering firms. We don't believe in the value of you coming into our offices and doing an extremely intense engineering interview where you have to write SQL queries on a whiteboard. We believe while assesing you for a job, we should ask you to perform work skills you will use during the job in an environment you will be doing them. We also dont believe in looking over your shoulder as you do the assesment, as sometimes just completing an assesment is enough of a challenge. However, because we extend you these curtesies, we expect to see your best most high quality code. Good luck :)

## Instructions for the assesment.
In the root folder of the project you will find a file called `mockup.png`. This will provide you a visual idea of what you are being asked to implement. Make sure to review this and the rest of the readme before proceeding with the steps outline above. Make sure you have 2 - 3 hours set aside without distraction as we will use the time from your first commit to the last commit as part of our assesment of you as a candidate. Also: make sure you look at the existing files in the repo, as some of the work may already be done for you.

*Assesment scenario*: You have been approached to build a prototype of an app for a friend of yours. He has a radical new idea: build a social network for programmers with integrations into services like github in order to share new programming concepts and coding libraries / frameworks. He isn't ready to build the full app, and just wants you to build a quick prototype so he can use it to pitch investors on his idea. He's hired a UX designer to do a quick mockup, and wants you to build the prototype. It does not need to really work, just look like it works. He doesn't care if you the save the data to an external data store (i.e. firebase, a server, etc) or use the in device memory to store data. He cares more about completing the prototype as quickly as possible, while still following good coding practices. He only has enough money to pay you for 2 -3 hours of work.

1. Fork this repository to your personal github page. If you don't have a github account, make one now.
2. Clone this repository to your machine and install the development dependencies. You will need at a bare minimum, node.js v10 installed on your machine, a code editor, and to [setup a simulator for previewing your app](https://expo.io/learn). (We like [nvm](https://github.com/nvm-sh/nvm) for managing node versions and [VS Code](https://code.visualstudio.com/) for code editing).
3. Create a commit with a small change and call it "starting"
4. Start working on your app. Make sure to commit often so we can see your git history and iterative thought process.
5. Finalize your app with a final commit stating "finished." This will be used to measure the time you work.
6. Message your kingdomworks recruiter with a link to the repository on your page.

## Completed feature story list (please update in your repo)
[] A user should be able to open the app and see a list of git repositories from their friends
[] A user should be able to click on a git repository and have it take them to the website for that github repo in an embedded web view popup
[] A user should be able to like a github repo
[] A user should be able to comment on a github repo
[] A user should be able to share a github repo

## What you are being assessed on
- The quality, style and cleanliness of the code you submit (specifically looking for code smells and following SOLID programming practices).
- Your knowledge of react (components, hooks, functional components, state management, etc) and react-native, (Usage of react-native components, styles, and APIs).
- Your knowledge of Typescript, static typing and typing systems.
- Your knowledge of Javascript, specifically using ES6 and esnext language features (lamdas, destructuring, promises, etc)
- Your knowledge of programming patterns, data structures, and the performance of your code
- Your knowledge of asynchronous coding practices.
- Your ability to adapt your programming style to the linter and code editor styles outlined in a project (hint: run `npm run lint:watch` and/or install a tslint addon to your editor)

What you are not being assessed on:
- completing the entire project in the time allotted. do the best you can, but we care more about seeing good code then an assesment that matches the 
- making things pretty -> we do not care if your end result is a pixel perfect representation of the mockups.
- your coding prefrences. If you prefer hooks to component classes, or vice versa; if you like redux or props and component state for state management; etc - this will not effect your hiring prospects.

## Extras to distinguish yourself from others IF you finish early
1. Use more strict typescript compiler settings (i.e. strict, noUnusedLocals, noUnusedParameters, etc).
2. Query [githups developer REST apis](https://developer.github.com/v3/#current-version) or an available graphQL API for realtime githup data
3. Save the data using either an external data store or the devices memory (hint: AsyncStorage) so the data is recoverable when the app closes
4. Add unit tests using a testing library (we currently use react-native-testing-library and jest)
5. Hook up your code repo to CI/CD system and run the code linter, typescript compiler and any unit tests as required steps of your CI pipeline
