import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  user = {} as User;

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(userId: number): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  createUser(createUser: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUser);
  }

  updateUser(userId: number, updateUser: UpdateUserDto): Promise<User> {
    return Promise.resolve(this.user);
  }

  async deleteUser(userId): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
