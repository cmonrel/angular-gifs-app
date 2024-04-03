import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private _tagsList: string[] = [];

  constructor(private gifsService: GifsService) {
    this._tagsList = this.gifsService.tagsHistory;
  }

  public tagsList():string[] {return [...this._tagsList];}

  public getTag(i:number):string {return this._tagsList[i];}
}
