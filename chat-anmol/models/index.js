const mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise=Promise;
mongoose.connect(process.env.MONGODB_URI,{
	keepAlive:true
});
module.exports.User=require("./user");
module.exports.Message=require("./message");