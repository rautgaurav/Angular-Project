import { identifierModuleUrl } from '@angular/compiler';


export class Product {

    id: number;
    name :string;
    description  : string;
    price : number;
    imageUrl : string;

    constructor(id, name, description='', price=0, imageUrl='https://collectionapi.metmuseum.org/api/collection/v1/iiif/503282/1024192/restricted'){
     this.id = id
     this.name = name
     this.description = description
     this.price = price
     this.imageUrl = imageUrl
}

}