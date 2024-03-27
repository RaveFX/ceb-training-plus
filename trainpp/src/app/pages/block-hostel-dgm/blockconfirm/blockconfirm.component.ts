
import { Component } from '@angular/core';

@Component({
    selector: 'app-block-hostel-confirm',
    templateUrl: './blockconfirm.component.html'
})
export class BlockconfirmComponent {
    visible: boolean = false;

    showDialog(room: any) {
        this.visible = true;

    }
}