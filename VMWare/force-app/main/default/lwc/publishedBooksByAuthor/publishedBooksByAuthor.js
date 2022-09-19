import { api, LightningElement, wire } from 'lwc';
import getBooksByAuthor from '@salesforce/apex/PublishedBooksByAuthorClass.getBooksByAuthor';

//Constant with the column names for table in the html
const COLUMNS = [
    { label: 'Author Name', fieldName:'Name', type: 'text' },
    { label: 'Total of Books', fieldName: 'c', type: 'number' }];

// retrieve the current record id and wire the apex method that retrieves the data from database. We use the record id as an argument to call the apex  getBooksByAuthor
export default class PublishedBooksByAuthor extends LightningElement {
    @api recordId;
    columns=COLUMNS;
    @wire(getBooksByAuthor, { publishingHouseID: '$recordId' }) books;
}



