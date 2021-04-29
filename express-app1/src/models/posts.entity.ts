import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Posts {

    id?: number;

    @Column()
    userId?: number;

    @Column()
    title?: string;

    @Column()
    body?: string;
}

export default Posts;