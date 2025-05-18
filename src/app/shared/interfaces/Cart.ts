import { Furniture } from "./Furniture";

export interface Cart{
    id:string;
    userid: string;
    items: Furniture[];
}