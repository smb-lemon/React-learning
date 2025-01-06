# React Learning
Welcome to the React Learning. This README provides a roadmap for getting started with React, its ecosystem, and building interactive web applications.

## React Project Folder Structure
***src*/**

- **assests**/<br> <span style="color:orange"> Static files like images, fonts, icons etc</span>    

- **components**/<br> <span style="color:orange"> Reusable Component</span>

    - **Button**/

        - **Button.jsx**
        - **Button.css**
        - **index.js** <br> <span style="color:orange"> Optional, for cleaner imports</span>
    - **Header.jsx**
    - **Footer.jsx**
- **contexts/** <br> <span style="color:orange"> React context for global state  management</span>

    - **ThemeContest.js**
    - **UserContest.js**

- **hooks/** <br> <span style="color:orange"> Custom React Hooks</span>

    - **useAuth.js**
    - **useAuth.js**
- **layouts/** <br> <span style="color:orange"> Layout component for pages</span>
    - **mainLayout.jsx**
    - **variables.css**
    - **mix.css**
    - **global.css**
- **utils/** <br> <span style="color:orange"> Utility Functions/Helpers</span>
    - **formateDate.js**
    - **validateForm.js**
    - **constant.js**
- **App.jsx** <br> <span style="color:orange"> Main App Component</span>
- **index.jsx** <br> <span style="color:orange"> Entry point for React</span>
- **routes/** <br> <span style="color:orange"> App routing configuration</span>
    - **AppRoutes.jsx**
    - **PrivatRoute.jsx**

## 🚀 Setup Instructions
1. **Install Node.js**: [Download and install Node.js](https://nodejs.org/)
   - Verify installation: `node -v` and `npm -v`
2. **Create a React App**:
   
   - Using Vite :
     ```bash
     npm create vite@latest my-app --template react
     cd my-app
     npm install
     npm run dev
     ```
## 🔗 Useful Resources
- **Official React Documentation**: [https://reactjs.org/](https://reactjs.org/)
