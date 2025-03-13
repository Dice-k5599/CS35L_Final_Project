# Read me for ClassSync
## Check out our website [here](https://classsync-35l.web.app/)! If you want to make your own Firebase database and use it with our app, the instruction is below.
ClassSync offers CS students an altenative version of UCLA's Degree Audit Systems (DARS) that is more lightweight while retaining major functions in DARS. We aim to give students a faster and more accessible way to keep track of their degree progress and we hope ClassSync can help make your academic journey more productive and therefore be part of your success. Happy studying!
## Features
- Feature 1: Robust authentication that can help users sign up/sign in with either email or google. They can also reset password and verify their email.
- Feature 2: Class Selector that updates Firestore whenever a class is selected.
- Feature 3: Notify the user which class to prioritize depending on their current completed courses and their done prerequisites.
- Feature 4: Dynamic data displayed by a pie chart and an auto units calculator that will be updated whenever a class is selected or unselected.
- Feature 5: Upload and download client file to back-end. File persists in firebase and user is able to retrieve them. 
- Feature 6: See information about a class when a class card is clicked (course title, units, description)
- Feature 7: Meaningful search through server-side data: User is able to search and filter courses on the course selection page. 

## Technologies

- Javascript [![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev)
- React [![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)
- Node.js [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev)
- HTML[![My Skills](https://skillicons.dev/icons?i=html)](https://skillicons.dev)
- CSS[![My Skills](https://skillicons.dev/icons?i=css)](https://skillicons.dev)
- Firebase[![My Skills](https://skillicons.dev/icons?i=firebase)](https://skillicons.dev)
  
Hello! Below is the instruction on how to run our app by creating your own firebase database.
Please be sure that tools like Node.js, Git, and Bash are all installed prior to following this instruction as these tools are needed for the certain commands.
Let's get started!
## 1. Create a Firebase database
### A. Create a Firebase account and login:
- Go to the [firebase console here](https://console.firebase.google.com/)
- Complete the registration using one of the google account. After login, you should arrive at this dashboard:
  
<img width="1672" alt="Screenshot 2024-03-12 at 11 12 14 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/a32d552a-82c1-4387-8fe9-15fe72f34f21">

### B. Create a project:
- Click on create a project.
  
  <img width="1672" alt="Screenshot 2024-03-12 at 11 24 39 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/265da9f7-8b49-46ad-9ef1-ed8965414333">

- Type your project name, in our case, we use "testing123". Then, check the two boxes to continue.
- You can enable or disable the Google Analytics, we recommend enable since you can report issues to google if something goes wrong with the database. Continue
- Analytic location should be where closest to you, check all boxes to continue.
- It can take some time for google to create your project. When it's done, click on continue. You should see this page:

<img width="1672" alt="Screenshot 2024-03-12 at 11 30 32 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/62594463-c460-40c4-befc-08165551daf8">

### C. Create a web app:
- Click on the "</>" next to the android icon to create a web app.
- Type an app nickname, in our case, we use "testing123app". You can ignore the Firebase hosting check since we won't deploy the app. Click register app.
- A panel named "add firebase sdk" will popup that has a command and a code to copy. In this code snippet, copy everything INSIDE the firebaseconfig function, which should be seven pairs of keys and values.
- Go to our source code, go to folder named "config", which has a file called "firebase.js", paste copied pairs of keys and values into the firebaseConfig function, right below the comment that says "paste your copied keys and values pairs below". Finally, on the firebase website, click on "continue to console" to finish creating the app. 

<img width="1674" alt="Screenshot 2024-03-12 at 11 41 44 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/41a77054-1ba6-4579-af5c-7a866510e39a">

### D. Configuring the authentication, the firestore
- Click on the cog on the left, next to "Project Overview", then "project settings". We need to do this when we first make an app to enable metrics.
- On the left panel, click on "Build", in which a list of stuff will drop down. Click on "Authentication". You should see the page below, click on "Get started":

<img width="1674" alt="Screenshot 2024-03-12 at 11 45 38 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/d1b0ae9b-60ae-46f9-9017-65ace7fae9a7">

You will see a list of sign-in providers. Our app will use email-password and Google sign-in, so click on Email/Password under Native Providers. Enable email/password; ignore passwordless sign-in since we don't use that. Click save. You should see email/password with a green check mark saying enabled. Click "add new provider" and click on Google under Additional Providers.
- Enable it. The public-facing name should be automatically filled in, add the support email for the project, which should be the one logged in to the firebase right now. It should look like below:
<img width="1674" alt="Screenshot 2024-03-12 at 11 51 02 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/3c2a0f28-2fd1-4dac-bb50-b6dcb889efda">

- Click save. It might take a bit longer to load compared to the email one.
- Your authentication is now set up. Click on "Build" again on the left panel, click on "Firestore database". You should see the page below:

<img width="1674" alt="Screenshot 2024-03-12 at 11 53 18 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/156a827f-bf93-4293-8252-427d9e645813">

- Click "Create database". Database ID should be greyed out and location should be the one closest to you. Click next.
- Choose "start in production mode", click create. After several seconds, you should see this page:

<img width="1674" alt="Screenshot 2024-03-12 at 11 55 41 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/00a41d96-6645-4aeb-adb6-1318c275341e">

- Go to Rules, change line 6 by replacing "false" with "true". Click publish. It should look like below: 
<img width="1674" alt="Screenshot 2024-03-12 at 11 58 56 PM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/807517a3-ac54-4a30-871a-cae535b09279">

- Finally, to set up our storage, go to storage under Project shortcuts. Click on "Get Started". Finish the set-up. There should be no files by default. Click on the Create folder button next to the Upload File button, and name the folder "userTranscripts".
<img width="1512" alt="image" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/108194726/d7bb904b-094c-4e8d-90b9-030975c95941">

- Go to Rules, and change line 9 by replacing "false" with "true". Click Publish. It should look like below:
<img width="1511" alt="image" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/108194726/fd324e81-6588-4f91-913a-5d560855dfab">


- That's it! You have set up Firebase properly, let's go back to the source code. 

## 2. Running the app: 
- In our app, in the terminal, be sure that you are in react_dars_website directory. You can check using `pwd` command to see where your current directory is and use `cd` to change to react_dars_website.
- Run the following two commands, the app should start shortly after.
  
  ```
  npm install
  npm start
  ```
- The app will launch, you can now begin using it, under a localhost. It should look like this:
<img width="1674" alt="Screenshot 2024-03-13 at 12 06 37 AM" src="https://github.com/Dice-k5599/CS35L_Final_Project/assets/64292779/1333d7db-3bc0-43e3-8967-89cd3126aef9">

- That's it! Phewww...
- Thank you for following the instructions. Happy coding!

## Written by Phi Nguyen
