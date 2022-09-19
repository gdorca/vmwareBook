import { api, LightningElement, wire } from 'lwc';
import getBooksByGenre from '@salesforce/apex/PublishedBooksByGenreClass.getBooksByGenre';


    const COLUMNS = [
        { label: 'Genre', fieldName:'Genre__c', type: 'text' },
        { label: 'Total of Books', fieldName: 'c', type: 'number' }];

    export default class PublishedBooksByGenre extends LightningElement {
            @api recordId;
        columns=COLUMNS;
        @wire(getBooksByGenre, { publishingHouseID: '$recordId' }) books;
}

