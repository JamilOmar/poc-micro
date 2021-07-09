import { Injectable, Optional, Inject } from '@angular/core';
import { Config } from './config.types';
import defaults from './default.config.service';
import { APP_CONF } from '../global/global.injection-tokens';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    private config!: Config;
    constructor(@Optional() @Inject(APP_CONF) configuration: Config) {
        this.load(configuration);
    }
   

    /**
     * @description Gets a value from the LabShare config object. Since it wraps the Lodash get() method,
     * the key can be a string or an array of strings.
     * @example
     * NgxCoreConfig.get('myKey') => 'value'
     * NgxCoreConfig.get('my.nested.value') => 'nested value'
     * @returns The configuration key
     */
    public get(key: string, defaultValue?: any): any {
        return this.config[key] || defaultValue;
    }

    /**
     * @description Validates if the property exists in the LabShare configuration
     * @example
     * NgxCoreConfig.has('myKey') => true
     * @returns If the configuration is defined
     */
    public has(key: string): boolean {
        return !!this.config[key]
    }

    /**
     * @description Loads the configuration value from injection
     */
    public load(configuration?: Config) {
        this.config = {...configuration , ...defaults}
    }
}