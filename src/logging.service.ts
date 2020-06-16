import { Injectable, HttpService, LoggerService } from '@nestjs/common';
import { LogMessageFormat } from 'logging-format';

@Injectable()
export class IssueLoggingService {

    issueCreatorUrl = "http://localhost:3500"

    constructor(private http: HttpService) {}

    log(log: LogMessageFormat) {
        this.http.post(`${this.issueCreatorUrl}`, log);
    }
}
