import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  template: `
    <h5>Buscar:</h5>
    <input
      class="form-control"
      type="text"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService) {}

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag); //enviar el value a service

    this.tagInput.nativeElement.value = '';

    // console.log({ newTag });
  }
}
