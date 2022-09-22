import Mongoose from "mongoose";


const schema = new Mongoose.Schema({
    name: String,
    salary: Number,
    approved: Boolean
},  {
    publishDate: { createdAt: true, updatedAt: true  },
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    },
    versionKey: false,
}) 

const UserModel = Mongoose.model('Person', schema)

export default UserModel
 