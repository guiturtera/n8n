import {
    IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import {
    OptionsWithUri,
} from 'request';

export class Ploomes implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Ploomes',
        name: 'ploomes',
        icon: 'file:ploomes.svg',
        group: ['transform'],
        version: 1,
        description: 'Consume Ploomes API',
        defaults: {
            name: 'Ploomes',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
        ],
        properties: [
            // Node properties which the user gets displayed and
            // can change on the node.
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        return [[]];
    }
}
 