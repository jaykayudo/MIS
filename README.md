
# MIS

Management Information System for storing data and compiling analytics for projects


## Run Locally

Clone the project

```bash
  git clone https://github.com/jaykayudo/MIS.git
```

Go to the project directory

```bash
  cd mis
```

Install dependencies for Frontend
```bash
  cd frontend
```

```bash
  npm install
```
Install dependencies for Backend
```bash
  cd backend
```
```bash
  pip install -r requirements.txt
```
Start the server
(Frontend)
```bash
  npm start
```
(Backend)
```bash
  python manage.py runserver
```
```bash
  Frontend Project hosted on http://localhost:3000
  Backend Project hosted on http://localhost:8000
```

## API Reference (Backend)

#### Login

```http
  POST /rest-auth/login/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email |

#### Login

```http
  POST /rest-auth/password/change/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `old_password` | `string` | **Required**. Your Old Password |
| `new_password1` | `string` | **Required**. Your New Password |
| `new_password2` | `string` | **Required**. Confirm Your New Password |

#### Project List
```http
  GET /projects/
```

#### Add Project
```http
  POST /projects/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | |
| `description`      | `string` | |
| `cost`      | `decimal` | |
| `plan`      | `number<Planid>` | |
| `currency`      | `string` | |
| `source_of_funding`      | `string` | |
| `location`      | `string` | |
| `status`      | `number(1 - 4)` | |
| `level_of_completion`      | `number(1 - 100)` | |
| `longitude`      | `decimal` | |
| `latitude`      | `decimal` | |
| `start`      | `date` | |
| `end`      | `date` | |


#### Get Project

```http
  GET /projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Project to Fetch |


