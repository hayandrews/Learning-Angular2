import { Component} from '@angular/core';
import { HTTPTestService } from './http-test.service';

@Component({
    selector: 'http-test',
    templateUrl: './http-test.component.html'

})
export class HTTPTestComponent {
    getData: string;
    constructor (private httpService: HTTPTestService) {}
    onTestGet(){
        this. httpService.getCurrentTime().subscribe(
            data => this.getData = JSON.stringify(data),
            error => alert(error),
                () => console.log('Finished')
        );
    }
}
