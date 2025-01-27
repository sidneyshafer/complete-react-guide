## Login Page UI
>React app for displaying a login page and performing authentication check on login information.

* [User Interface](#login-page-user-interface)
* [File Structure](#login-page-file-structure)

### <a name="login-page-user-interface">User Interface</a>

Main landing page:

![UI Image - 1](/assets/login-page-ui-assets/ui-1.png)

Invalid email input:

![UI Image - 2](/assets/login-page-ui-assets/ui-2.png)

Valid email input:

![UI Image - 3](/assets/login-page-ui-assets/ui-3.png)

### <a name="login-page-file-structure">File Structure</a>
```
login-page-ui/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── components/
    |   ├── Home/
    |   |   ├── Home.js
    |   |   ├── Home.module.css
    |   ├── Login/
    |   |   ├── Login.js
    |   |   ├── Login.module.css
    |   ├── MainHeader/
    |   |   ├── MainHeader.js
    |   |   ├── MainHeader.module.css
    |   |   ├── Navigation.js
    |   |   ├── Navigation.module.css
    |   ├── UI/
    |   |   ├── Button/
    |   |   |   ├── Button.js
    |   |   |   ├── Button.module.css
    |   |   ├── Card/
    |   |   |   ├── Card.js
    |   |   |   ├── Card.module.css
    |   |   ├── Input/
    |   |   |   ├── Input.js
    |   |   |   ├── Input.module.css
    ├── context/
    |   |   ├── auth-context.js
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```

<kbd> <br> [Back to Top](#login-page-ui) <br> </kbd>
---
