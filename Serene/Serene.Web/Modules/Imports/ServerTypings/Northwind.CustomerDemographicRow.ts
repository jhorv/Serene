﻿namespace Serene.Northwind {
    export interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }

    export namespace CustomerDemographicRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CustomerTypeID';
        export const localTextPrefix = 'Northwind.CustomerDemographic';

        export namespace Fields {
            export declare const ID: 'ID';
            export declare const CustomerTypeID: 'CustomerTypeID';
            export declare const CustomerDesc: 'CustomerDesc';
        }

        ['ID', 'CustomerTypeID', 'CustomerDesc'].forEach(x => (<any>Fields)[x] = x);
    }
}

