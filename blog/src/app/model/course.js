const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongoose_delete = require('mongoose-delete')
const Schema = mongoose.Schema

const course = new Schema({
    name: { type: String },
    title: { type: String },
    slug: { type: String, slug: "name", uniqe: true },
    videoId: { type: String },
    image: { type: String },
},
    {
        timestamps: true,
    });

mongoose.plugin(slug)
course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('course', course);
