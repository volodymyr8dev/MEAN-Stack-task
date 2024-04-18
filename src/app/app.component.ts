import { Component } from '@angular/core';
import { FormStructure,FormFieldType, FormFieldStructureBuilder } from 'nextsapien-component-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // formGroup: FormGroup;
  // formFields = [
  //   new FormFieldStructureBuilder(FormFieldType.incrementer, 'IncrementorField')
  //     .setLabel('Incrementor Field')
  //     .setFlexGrow(1)
  //     .setDisabled(false)
  //     .buildFormStructure()
  // ];
 // constructor(private formGeneratorService: FormGeneratorService) { }

placesText=['Optio...','Optio...','Optio...','Optio...','Optio...','Optio...','Optio...']

selectedPrice: number = 0;

updatePrice(price: number) {
  this.selectedPrice = this.selectedPrice === price ? 0 : price;
}


  ngOnInit(): void {
      // const formStructure: FormStructure = {
      //   groupStructures: [
      //         {
      //             groupName: 'Group 1',
      //             fieldStructures: [
      //                 {
      //                   inputType: FormFieldType.incrementer,  
      //                   label: 'Incrementor Field',
                      
      //                 }
      //             ]
      //         }
      //     ],
         
      // };

      // this.formGeneratorService.generateForm(formStructure).subscribe(formGroup => {
      //     this.formGroup = formGroup;
      // });
  }
 
}
