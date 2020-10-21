/*
 *  Entryfile for itivrutaha project.
 *  Created On 20 October 2020
 */

import { LoggerClassConfigImpl } from './config'

// this variable holds the default configuration
// which acts a replacement when no value is provided
// for a particular configuration key
const defaultConfig: LoggerClassConfigImpl = {
    theme: ':type :message',
    color: true,
    verboseIdentifier: {
        node: ['--verbose', '-v'],
        web: ['localhost'],
    },
}

// the function that creates a new LoggerClass instance
const create = async (config: LoggerClassConfigImpl): Promise<void> => {
    // check if any config was passed, if not just return with default config
    if (!config) return

    // loop through all possible config keys, fill the defaults to keys
    // for which the user hasn't specified any value
    for (const obj in defaultConfig) {
        if (config[obj] === undefined) {
            config[obj] = defaultConfig[obj]
        }
    }

    // now return a LoggerClass with the user's passed config
    return
}

// make these exported objects global
const exported = Object.create(null)
exported.create = create

try {
    window['itivrutaha'] = exported
} catch {
    true
}

export = exported
