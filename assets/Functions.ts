export const PowerArray = ["user","friend","mod","x","x","ADMIN"]
export function parsePowerId(u_id : string | number) {
    let id = Number(u_id)
    return PowerArray[id]
}
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export const collectionOptionsctx = [
    {
        name: 'View',
        slug: 'download',
        class: 'my-custom-class'
      },
      {
        name: 'Download',
        slug: 'download'
      }
]
export function Clamp(min:number, max:number,v:number) {
    return Math.min(Math.max(v, min), max);
};
