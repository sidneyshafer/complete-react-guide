## Course Goal Project
>React app for adding course goals to a list.

* [User Interface](#user-interface)
* [File Structure](#file-structure)

### User Interface

Main landing page:
![UI Image - 1](/assets/course-goal-project-assets/ui-1.png)

Adding a new course goal:
![UI Image - 2](/assets/course-goal-project-assets/ui-2.png)

New course goal added to list:
![UI Image - 3](/assets/course-goal-project-assets/ui-3.png)

## File Structure
```
course-goal-project/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── components/
    |   ├── CourseGoals/
    |   |   ├── CourseGoalItem/
    |   |   |   ├── CourseGoalItem.css
    |   |   |   ├── CourseGoalItem.js
    |   |   ├── CourseGoalList/
    |   |   |   ├── CourseGoalList.css
    |   |   |   ├── CourseGoalList.js
    |   |   ├── CourseGoalInput/
    |   |   |   ├── CourseInput.js
    |   |   |   ├── CourseInput.module.css
    |   ├── UI/
    |   |   ├── Button/
    |   |   |   ├── Button.js
    |   |   |   ├── Button.module.css
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```