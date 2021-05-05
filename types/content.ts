
export declare namespace ContentData {

    export interface File {
        High: string,
        Low: string,
        Width: number,
        Height: number,
        ID: number
    }

    export interface Collection {
        Files:File[],
        Types:String[],
        Fit:number
    }

}

