/*
 *  This file holds TypeScript interfaces for different configuration
 *  objects consumed by the project.
 *  Created On 21 October 2020
 */

// interface skeleton for verbose identifiers of LoggerClass
export interface VerboseIdentifierImpl {
    node: Array<string>
    web: Array<string>
}

// the interface skeleton for config of LoggerClass
export interface LoggerClassConfigImpl {
    color: boolean
    theme: string
    verboseIdentifier: VerboseIdentifierImpl
    timeFormat?: string
}
