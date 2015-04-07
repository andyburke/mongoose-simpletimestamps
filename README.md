Simple Timestamps Plugin for mongoose
=====

#### About

This is a very simple mongoose plugin to add 'createdAt' and 'updatedAt' fields to your objects.

This differs from the UseTimestamps plugin from mongoose-types in that createdAt is not a virtual
field, and is instead stored with the object.

#### Example

    var mongoose = require("mongoose");
    var db = mongoose.createConnection("mongodb://localhost/sampledb");
    var SimpleTimestamps = require( "mongoose-SimpleTimestamps" ).SimpleTimestamps;
    var UserSchema = new Schema({
        username: String
    });
    UserSchema.plugin(SimpleTimestamps);
    mongoose.model('User', UserSchema);
    var User = db.model('User', UserSchema);
    
    var user = new User({username: 'Prince'});
    console.log(user.createdAt === user.updatedAt); // true
    
    user.save(function (err) {
      console.log(user.updatedAt); // Should be approximately now

      // Wait 1 second and then update the user
      setTimeout( function () {
        user.username = 'Symbol';
        user.save( function (err) {
          console.log(user.updatedAt); // Should be approximately createdAt + 1 second
          console.log(user.createdAt < user.updatedAt); // true
        });
      }, 1000);
    });

### Contributors

Based on the UseTimestamps plugin for mongoose-types by [Brian Noguchi](https://github.com/bnoguchi)

### License
MIT License

---
### Author
Andy Burke
