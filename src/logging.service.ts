import { Injectable, HttpService, LoggerService } from '@nestjs/common';
import { LogMessageFormat } from 'logging-format';

@Injectable()
export class IssueLoggingService {

    issueCreatorUrl = "http://localhost:3500"

    constructor(private http: HttpService) {}
   /**
    * sending the log to the issue creator and displaying 'Log reported' on the console if it was successful and 
    * 'ERROR when reporting log' if an error occured
    */
    log(log: LogMessageFormat) {
        this.http.post(`${this.issueCreatorUrl}`, JSON.parse(JSON.stringify(log))).subscribe(
            res => console.log("Log reported"),
            err => console.log("ERROR when reporting log")
        );
    }
}
    
