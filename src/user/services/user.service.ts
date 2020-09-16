import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  user = {} as User;

  getUsers(): Promise<User[]> {
    return Promise.resolve([this.user]);
  }

  getUser(userId: number): Promise<User> {
    return Promise.resolve(this.user);
  }

  createUser(createUser: CreateUserDto): Promise<User> {
    return Promise.resolve(this.user);
  }

  updateUser(userId: number, updateUser: UpdateUserDto): Promise<User> {
    return Promise.resolve(this.user);
  }

  deleteUser(userId): Promise<void> {
    return Promise.resolve();
  }
}
