# service-communicator-example

This application is example of [service-communicator](https://www.npmjs.com/package/serivce-communicator) library usage

## Dependencies

- Docker;
- Docker Compose.

## Installation and run

```sh
$ git clone https://github.com/EliseevNP/service-communicator-example
$ cd service-communicator-example
$ sudo docker network create service-communicator-example-net
$ sudo docker-compose build && sudo docker-compose up -d
$ cd users && sudo docker-compose build && sudo docker-compose up -d && cd ..
$ cd balances && sudo docker-compose build && sudo docker-compose up -d && cd ..
```

## Usage

```sh
$ curl http://localhost:3000/users/1
```

> {"id":1,"name":"Ivan Ivanov","age":20,"balance":100}

```sh
$ curl http://localhost:3001/balances/1
```

> {"balance":100}

## License

MIT.