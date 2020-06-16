import { HttpService } from '@nestjs/common';
import { LogMessageFormat } from 'logging-format';
export declare class IssueLoggingService {
    private http;
    issueCreatorUrl: string;
    constructor(http: HttpService);
    log(log: LogMessageFormat): void;
}
//# sourceMappingURL=logging.service.d.ts.map