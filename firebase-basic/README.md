# Firebase Installation

**Firstly, 
Create a React project. Then Open firebase website and follow the process of creating a project. There will be installing instructions.After all the submission,heading to the main homepage, we have to select web version as we are using web version.Afer that there will be a page staring add Firebase to your web app.Then we will follow the below process** 

[Terminal Command] `npm install firebase`

**Then add the code as javascript file and save it in src**

**To check firebase installation, you can check in package.json file**

[Terminal Command] `npm install -g firebase-tools`

**For newly projects, skip the next few process and continue**

## Authentication

**For Authentication, we can use different option given in the authentication page. We just have to select the option we need for our project and give it a save**

**To import the authentication , we have to use import below code**

[code] `import { getAuth} from "firebase/auth";`

[code] ` export const auth = getAuth(app);` **exporting for using on different code file**



