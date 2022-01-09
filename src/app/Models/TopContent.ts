import { SafeStyle } from '@angular/platform-browser';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { Actor } from './Actor';
export class TopContent {
  public id: number = 0;
  public title: string = '';
  public release: Date;
  public score: number = 0;
  public imageLocation: string = '';
  public description: string = '';
  public actors: Array<Actor>=[];
}