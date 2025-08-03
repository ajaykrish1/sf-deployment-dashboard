import { LightningElement, wire } from 'lwc';
import getLogs from '@salesforce/apex/DeploymentLogController.getLogs';

export default class DeploymentDashboard extends LightningElement {
    logs;
    columns = [
        { label: 'Commit Message', fieldName: 'Commit_Message__c' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Timestamp', fieldName: 'Timestamp__c', type: 'date' }
    ];

    @wire(getLogs)
    wiredLogs({ error, data }) {
        if (data) {
            this.logs = data;
        } else {
            console.error(error);
        }
    }
}
