import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AdoscopeProvider {
  constructor(protected app: ApplicationContract) {}

  public async ready() {
    const config = this.app.container.use('Adonis/Core/Config').get('adoscope')
    const { Adoscope } = require('App/Services/Adoscope')
    Adoscope.start(config)
  }
}
