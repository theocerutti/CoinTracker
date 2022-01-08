import {User} from "../model/user.entity";
import {Injectable, Logger} from "@nestjs/common";
import {Role} from "src/role/role.utils";
import {getRepository, Repository} from "typeorm";
import * as faker from "faker";
import {RefreshToken} from "../model/refresh_token.entity";

const SEED_USER = 20;
const SEED_TEAM = 5;
const SEED_WORKING_TIME = ["month"];

const randomNum = (min, max): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

@Injectable()
export class Seeder {
  private readonly logger = new Logger(Seeder.name);

  userRepo: Repository<User>;
  refreshTokenRepo: Repository<RefreshToken>;

  buildSeeder() {
    this.logger.log("Getting repositories...");
    this.userRepo = getRepository(User);
    this.refreshTokenRepo = getRepository(RefreshToken);
  }

  async cleanDatabase() {
    this.logger.log("Clean database...");
    await this.refreshTokenRepo.delete({});
    await this.userRepo.delete({});
  }

  async seedUsers(): Promise<User[]> {
    this.logger.log("Seed users...");
    const users = [];

    // create one admin
    const admin: User = new User();
    admin.username = "admin";
    admin.email = "admin@email.com";
    admin.password = "admin";
    admin.role = Role.GeneralManager;
    users.push(admin);

    // and create manager/user
    for (let i = 0; i < SEED_USER; i++) {
      const user = new User();
      user.username = faker.name.findName();
      user.email = faker.internet.email();
      user.password = "userpassword";
      user.role = i % 5 !== 0 ? Role.User : Role.Manager;
      users.push(user);
    }
    return await this.userRepo.save(users);
  }

  async seed() {
    // call constructor-like
    this.buildSeeder();

    // clean db
    await this.cleanDatabase();

    // seeds
    const seededUsers = await this.seedUsers();
  }
}