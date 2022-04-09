const mongoose = require('mongoose');
const slugify = require('slugify');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A estate must have name'],
        trim: true,
    },
    slug: String,
    describe: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

facultySchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

// facultySchema.pre('save', async function (next) {
//     const estatesPromies = this.estates.map(
//         async (id) => await Estate.findById(id)
//     );
//     this.estates = await Promise.all(estatesPromies);
//     next();
// });

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
