<p align="center">
  <img src="https://raw.githubusercontent.com/ccims/overview-and-documentation/c66a3c246886466653c8d7a09e8dd1cfd4dbc17d/app_logos/logo_final_6.25p.svg">
</p>

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
        sourceUrl: someUrl,
        detectorUrl: someUrl,
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
