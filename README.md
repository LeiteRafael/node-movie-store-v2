# Locadora De Filmes

> O sistema permite a criação de usuários (clientes), logon e logoff de um usuário, listagem de filmes disponíveis, locação de um filme, devolução de um filme, e pesquisa de filme pelo título.

---

### Dependências

- bcrypt
- Sequelize
- express
- express-session
- mysql

### Conceitos

- Session para Login/Logoff
- Bcrypt para senha do usuário
- Destructuring assignment (ES6 )
- Padrao de projeto: Models & Controllers
- Querystring para filtro

## Rotas

- ### Create User
  > |POST| localhost:5555/users

#### Body

```
{
	"nome": "nome",
	"email" : "email",
	"senha" : "senha"
}
```

#### Response

```
{
  "msg": "Usuario cadastrado com sucesso"
}
```

---

- ### Login
  > |POST| localhost:5555/users/login

#### Body

```
{
	"email" : "email",
	"password" : "password"
}
```

#### Response

```
{
  "msg": "Login efetuado com sucesso"
}
```

---

- ### Availables
  > |GET| localhost:5555/movies/availables

#### Response

```
{
  "item": [
    {
      "title": "Sonic: O Filme",
      "director": "Jeff Fowler",
      "idmovie": 1
    },
    {
      "title": "Velozes e Furiosos 1",
      "director": "Justin Lin",
      "idmovie": 2
    },
    {
      "title": "Velozes e Furiosos 2",
      "director": "Justin Lin",
      "idmovie": 3
    },
  ]
}
```

---

- ### Find 
  > |GET| localhost:5555/movies?director=Justin Lin

#### Response

```
{
  "item": [
    {
      "title": "Velozes e Furiosos 1",
      "director": "Justin Lin",
      "idmovie": 2
    },
    {
      "title": "Velozes e Furiosos 2",
      "director": "Justin Lin",
      "idmovie": 3
    },
    {
      "title": "Velozes e Furiosos 3",
      "director": "Justin Lin",
      "idmovie": 4
    }
  ]
}
```

---

- ### Rent Movie
  > |POST| localhost:5555/rents


#### Body

```
{
	"idmovie":"8"
}
```


#### Response

```
{
  "msg": "Filme alugado"
}
```

---

- ### Return Movie
  > |PATCH| localhost:5555/rents/84/movie/8

#### Response

```
{
  "msg": "Filme Devolvido"
}
```

---

- ### Logoff
  > |GET| localhost:5555/users/logout

#### Response

```
{
  "msg": "Logoff realizado"
}
```

---
