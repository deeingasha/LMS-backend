const mongoose = require("mongoose");

const { Schema } = mongoose;

const ClassLevelSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
       description: {
        type: String,

      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
      },
      //students added to class level when registered
      students: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student",
        },
      ],
      
      teachers: [
        {
            type: Schema.Types.ObjectId,
            ref:"Teacher",
        },
      ],
    },
      {
        timestamps: true
      }  
);

const ClassLevel = mongoose.model("ClassLevel", ClassLevelSchema);

module.exports = ClassLevel;