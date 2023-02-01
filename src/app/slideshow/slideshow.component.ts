import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit{
  title = 'angular';
  images = ['1.jpg', '2.jpg', '3.jpg'];
  headlines = ['Bring Engineering To The Next Level', 'Born To Code', 'Graduated At TUM'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;  
      }, 10);
    }, 5000)
  }
}
