import { LightningElement, track } from 'lwc';

export default class StudentList extends LightningElement {
    @track students = [
        { id: 1, name: "Amit" },
        { id: 2, name: "Rohan" },
        { id: 3, name: "Priya" }
    ];
}
