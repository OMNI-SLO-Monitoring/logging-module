# Logging Module

Provides a Nest Module that exports a Logging Service. It sends logs to the [IssueCreator](https://github.com/ccims/issue-creator).


## Installation

Install: `npm i https://github.com/ccims/logging-module.git`

The IssueCreatorUrl can be currently found at "http://localhost:3500".

## Usage

Import Module:

```
@Module({
  imports: [
    HttpModule,
    LoggingModule
  ],
  controllers: [AppController],
})
export class AppModule {}
```

Inject Service: `constructor(private logger: IssueLoggingService)`

Create Logs:
```
    this.logger.log({
        source: someUrl,
        detector: someUrl,
        time: new Date().getTime(),
        type: LogType.CPU,
        message: someMessage,
        data: {
          cpuUtilization: someNumber
        },
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
