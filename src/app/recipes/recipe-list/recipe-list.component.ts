import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Kuru Fasulye', 'Sulamayi unutma', 'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg'),
    new Recipe('Barbunya', 'Sulamayi unutma', 'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg'),
    new Recipe('Taze Fasulye', 'Sulamayi unutma', 'https://im.haberturk.com/2020/04/21/ver1587444948/2652945_810x458.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}