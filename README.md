К сожаленю, данный проект не возможно посмотреть в Live режиме так как публичный API ограничен работой только на localhost домене.
Поетому его можно развернуть локально выполнив сдедующие комманды `npm install` и `npm start`. Логин и пароль для авторизации могу предоставить.

# Login page
Валидная форма для ввода корректных данных для авторизации.
При вводе некорректных данных появляется окно с описанием данной ошибки.
После 5-ти неправильных попыток ввода, система просит ввести код подтверждения (captcha).
Если captcha была введена не корректно, появляется другая картинка с новым кодом.

![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/login-page.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/login-page-error.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/login-page-captcha.png)

# Profile page

На этой странице находится вся информация о пользователе, с возвожностью ее изменения, добавления поста,
изменения картинки и статуса пользователя. 
Для всех форм реализована валидация данных.

![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-status.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-enter-post.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-add-post.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-choice-img.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-change-info.png)

# Users page

На странице users находится список пользователей. На каждого из них можно подписаться или отписаться (кнопка Follow/Unfollow).
Если перейти на пользователя, мы видим информацию о нем:
картинка, статус, соцсети и т.д. (если он ее оставил). 
Также на этой странице, в верхней части, находится пагинация.

![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/users-page.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/users-page-follow-unfollow.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/profile-page-other-user-info.png)
![enter image description here](https://github.com/Shvarts91/react-project/raw/project-description/demo-screenshots/users-page-paginator.png)
