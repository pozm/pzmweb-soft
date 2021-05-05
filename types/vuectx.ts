import { ContentData } from "./content";

export interface CtxOnClickEvent {
    item : ContentData.File
    option : CtxOptions
}
export interface CtxOptions {
    name : string
    slug : string
    class : string
}