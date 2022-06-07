Mini Project Back-End

library yang digunakan dalam membuat back-end:
- express
- sequelize
- sequelize-cli
- mysql2
- bcrypt
- jsonwebtoken
- joi
- moment
- nodemon

terdiri dari 2 database yang digunakan:
- merchant
    - id:
    - name:
    - password:
    - address:
    - join_date:
    - phone_number:

- product
    - id:
    - name:
    - quantity:
    - price:

folder dan file yang dibuat:

- mini-project-backend (folder)
    - app (folder)
        - controller (folder)
            - login.controller.js (js file)
            - product.controller.js (js file)
            - register.controller.js (js file)
        - middlewares (folder)
            - auth.middleware.js (js file)
        - routes (folder)
            - index.js (js file)
        - validation.js (js file)
            -validation.js (js file)
        - view (folder)
    - app.js (js file)
