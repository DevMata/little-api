<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
 
<p align="center">A little API built with NestJs.</p>

## Description

This little API is built around a user crud to give example of common concepts like requests, responses and HTTP methods.

## Installation

```bash
$ npm install
```

## Before running the app

Replace the url with your own database url

``` ts
TypeOrmModule.forRoot({
  type: 'postgres',
  url: 'postgres://<user>:<password>@<host>:<port>/<database>',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
}),
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## References
* [NestJs Docs](https://docs.nestjs.com/)
* [Typeorm Docs](https://typeorm.io/)

## Resources for learning
* [NestJs series - Youtube playlist in spanish](https://www.youtube.com/playlist?list=PLzHaXzj_WAyk9NF0OIa1gRYqAntHF0fMF)
* [NestJs profile on dev.to](https://dev.to/nestjs)
* [NestJs:From zero to hero - Udemy](https://www.udemy.com/course/nestjs-zero-to-hero/)
* [Official courses](https://courses.nestjs.com/)
