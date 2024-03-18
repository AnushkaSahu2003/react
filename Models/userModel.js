const { default: mongoose } = require("mongoose")

const userModel = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"username is required"],
        minlength:[3,"usernmae must be least 3 characters"],
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true,],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
    },
    
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[3,"username must be at least 3 characters"],
        maxlength:[15,"username must be at most 15 characters"],
    },
},

 {timestamps:true}
)
const user = mongoose.model("user",userModel)