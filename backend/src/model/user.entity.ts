import {BeforeInsert, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../role/role.utils";
import * as bcrypt from "bcrypt";
import {Exclude} from "class-transformer";
import {IsNotEmpty, Length} from "class-validator";
import {ApiHideProperty} from "@nestjs/swagger";
import {RefreshToken} from "./refresh_token.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true, nullable: false})
  @Length(4, 16)
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @Exclude()
  @ApiHideProperty()
  @Length(4, 16)
  @Column({nullable: false})
  password: string;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false, default: Role.User})
  role: Role;

  @ApiHideProperty()
  @Exclude()
  @OneToOne(() => RefreshToken, refresh => refresh.user, {onDelete: "CASCADE"})
  refresh_token: RefreshToken;

  @BeforeInsert()
  async hashPassword() {
    try {
      const saltRounds = bcrypt.getRounds(this.password);
      if (saltRounds === 0) {
        this.password = bcrypt.hashSync(this.password, 10);
      }
      const salt = bcrypt.genSaltSync(10);
      this.password = bcrypt.hashSync(this.password, salt);
    } catch (error) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}