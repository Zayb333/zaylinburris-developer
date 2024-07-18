export class Project {
    constructor(name, role, collab, language, description, coverImg) {
        this.name = name;
        this.role = role;
        this.collab = collab;
        this.language = language;
        this.description = description;
        this.coverImg = coverImg;
        this.supportingImgs = [];
    }
}