import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const IngredientSchema = new mongoose.Schema({
  name: String,
  measureUnit: String
}, { timestamps: true });

export class Ingredient extends Document{

  _id: string;

  name: string;

  measureUnit: string;

}
