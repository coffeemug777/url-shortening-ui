import { Component } from '@angular/core';
import { UrlService } from './service/url.service';

export type UrlDataResponse = {
  id: number;
  url: string;
  shortUrl: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private urlService: UrlService) {}

  title = 'url-shortening-ui';
  urlInput = 'http://test.com/some/page/1/1234';
  urlOutput = '';

  createButtonClick() {
    console.log(this.urlInput);
    if (this.urlInput !== '') {
      this.urlService.create(this.urlInput).subscribe((returnData) => {
        if (returnData) {
          this.urlOutput = (returnData as UrlDataResponse).shortUrl;
          console.log(
            'return data ',
            returnData,
            this.urlOutput,
            typeof this.urlOutput
          );
        }
      });
    } else {
      console.log('input empty');
    }
  }
}
