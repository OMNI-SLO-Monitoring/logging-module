# Logging Module

Provides a Nest Module that exports a Service used for logging. It sends logs to the IssueCreator.

## Installation

Install: `npm i https://github.com/ccims/logging-module.git`

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
        source: url,
        target: null,
        time: new Date().getTime(),
        type: LogType.CPU,
        message: message
    });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
