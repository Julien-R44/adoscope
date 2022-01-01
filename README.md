<div align="center">
  <img src="https://i.imgur.com/UfEF0GR.png" width="450px" />  
  <br/>
  <h3>Adoscope</h3>
  <p>🔭 An elegant debug assistant for AdonisJS Framework.</p>
  <a href="https://www.npmjs.com/package/adoscope">
    <img src="https://img.shields.io/npm/v/adoscope.svg?style=for-the-badge&logo=npm" />
  </a>
  <img src="https://img.shields.io/npm/l/adoscope?color=blueviolet&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript" />

  <br/>
  <br/>
</div>

## 🚧 Warning: WORK-IN-PROGRESS
This package is **under development** and not ready to use. I'm currently working with the core team to bring this project to life. Most of the work has been done on Adoscope, the front-end of the application is ready, models too, we only need to develop the watchers that will retrieve the real events from Adonis. 

**Currently only fake data are seeded**, and the application is currently not a package. It is a complete Adonis application but the whole thing will be exported in a package once the watchers are implemented.

# Introduction
Adoscope is an elegant debug assistant for the AdonisJS framework. Adoscope provides insight into the requests coming into your application, exceptions, log entries, database queries, mails, notifications, redis operations, and more. Adoscope makes a wonderful companion to your local Adonis development environment.

![](https://i.imgur.com/tfqgKQJ.png)

## Prequisites
- You must have a database to store Adoscope entries. ( [Adonis Sail](http://github.com/Julien-R44/adonis-sail) allows you to create your database in 2 minutes! )
- Therefore, you must have `@adonisjs/lucid` installed and configured.

## Installation
// TODO

### Configuration
After installing Adoscope, you will find the main configuration file in `app/adoscope.ts`. Each of the configuration options has a description of its purpose.

### Data Pruning
Without pruning, the telescope_entries table can accumulate records very quickly. To mitigate this, you should schedule the `adoscope:prune` Ace command to run daily. Since AdonisJS does not (yet?) have a built-in Scheduler, you can do this by using a simple cronjob, or using [adonis5-scheduler](https://github.com/reg2005/adonis5-scheduler).

By default, all entries older than 24 hours will be pruned. You may use the `hours` option when calling the command to determine how long to retain Telescope data. For example, the following command will delete all records created over 48 hours ago:
```
node ace adoscope:prune --hours=48
```

### Authorization
//TODO

## Available Watchers
// TODO

## License
Adoscope is open-sourced software licensed under the [MIT license](https://github.com/julien-r44/adoscope/LICENSE.md).

## Thanks
Thanks to Laravel team and its awesome Ecosystem ! In case it wasn't obvious, [Laravel Telescope](https://laravel.com/docs/8.x/telescope) was a BIG inspiration for Adoscope.
