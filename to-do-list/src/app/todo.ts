export class Todo{
    id: number
    title : string
    desc : string
    isActive : boolean

    constructor(id: number, title: string, desc: string, isActive: boolean) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.isActive = isActive;
    }
}