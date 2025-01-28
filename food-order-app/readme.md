## Food Order App
>React app for adding menu items to an online food order cart.

* [User Interface](#food-order-app-user-interface)
* [File Structure](#food-order-app-file-structure)

### <a name="food-order-app-user-interface">User Interface</a>

Main landing page, with a food menu and items to choose from (adding to cart):

![UI Image - 1](./src/assets/ui-1.png)

Food cart modal overlay:

![UI Image - 2](./src/assets/ui-2.png)

### <a name="food-order-app-file-structure">File Structure</a>
```
food-order-app/
├── public/
    ├── index.html
    ├── favicon.ico
    ├── manifest.json
    └── robots.txt
├── src/
    ├── assets/
    |   ├── images/
    |   |   ├── ui-1.png
    |   |   ├── ui-2.png
    ├── components/
    |   ├── Cart/
    |   |   ├── Cart.js
    |   |   ├── Cart.module.css
    |   |   ├── CartIcon.js
    |   |   ├── CartItem.js
    |   |   ├── CartItem.module.css
    |   ├── Layout/
    |   |   ├── Header.js
    |   |   ├── Header.module.css
    |   |   ├── HeaderCardButton.js
    |   |   ├── HeaderCardButton.module.css
    |   ├── Meals/
    |   |   ├── MealItem/
    |   |   |   ├── MealItem.js
    |   |   |   ├── MealItem.module.css
    |   |   |   ├── MealItemForm.js
    |   |   |   ├── MealItemForm.module.css
    |   |   ├── AvailableMeals.js
    |   |   ├── AvailableMeals.module.css
    |   |   ├── Meals.js
    |   |   ├── MealsSummary.js
    |   |   ├── MealsSummary.module.js
    |   ├── UI/
    |   |   ├── Card.js
    |   |   ├── Card.module.css
    |   |   ├── Input.js
    |   |   ├── Input.module.css
    |   |   ├── Modal.js
    |   |   ├── Modal.module.css
    ├── store/
    |   |   ├── cart-context.js
    |   |   ├── CartProvider.js
    ├── App.js
    ├── index.css
    ├── index.js
├── .gitignore
├── package.json
├── readme.md
```

<kbd> <br> [Back to Top](#food-order-app) <br> </kbd>
---