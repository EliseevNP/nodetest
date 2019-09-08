# Dependencies
- Docker & Docker Compose.

# Installation and run
```sh
$ git clone https://github.com/EliseevNP/nodetest
$ cd nodetest
$ docker-compose build && docker-compose up -d
$ cd users && docker-compose build && docker-compose up -d && cd ..
$ cd balances && docker-compose build && docker-compose up -d && cd ..
```

# Usage
```sh
$ curl http://localhost:3000/users/1
```
> {"id":1,"name":"Ivan Ivanov","age":20,"balance":100}

```sh
$ curl http://localhost:3001/balances/1
```
> {"balance":100}