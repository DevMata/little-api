import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://nestjs:nestjs4tw@localhost:5432/nestjs',
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
