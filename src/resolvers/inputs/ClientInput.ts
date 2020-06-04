import {Field, InputType} from "type-graphql";
import {Client} from "../../models/Client";
import {Length} from "class-validator";

@InputType()
export default class ClientInput implements Partial<Client> {

    @Field()
    @Length(1, 255)
    name: string;

}
