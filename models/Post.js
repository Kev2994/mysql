
const db= require('./../config/db')
class Post {
    constructor(id, name, zone) {
        this.deptid = id;
        this.deptname = name;
        this.deptzone = zone;
    }

    save() {
        let sql = `
        INSERT INTO department(
        dept_id,
        dept_name,
        dept_zone
        )
        VALUES(
        '${this.deptid}',
        '${this.deptname}',
        '${this.deptzone}'
        )`;

        const [newPost, _] = db.execute(sql);
        return newPost;


    }

    static findAll() {
        let sql = "SELECT * FROM department;";
        return db.execute(sql);
    }
    static findByID(id) {
        let sql = `SELECT * FROM department WHERE dept_id = ${id};`;
        return db.execute(sql);
    }
}

module.exports = Post;