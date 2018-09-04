var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    firstname: {
        type: String, required: true
    },
    lastname: {
        type: String, required: true
    },
    gender: {
        type: String, enum: ["male", "female"], required: true
    },
    email: {
        type: String, required: true
    },
    phone: {
        type: String, required: true
    },
    organization: {
        type: String, required: true
    }

});

var utilitySchema = new mongoose.Schema({

    item: {
          type: String, required: true
      },
      unitPrice: {
          type: Number, required: true
      },
      quantity: {
          type: Number, required: true
      },
      dateOfPurchase: {
          type: Date, default: Date.now, required: true
      }
  
  });
  
  var consumptionSchema = new mongoose.Schema({

    item: {
          type: String, required: true
      },
    quantity: {
          type: Number, required: true
      },
    availabity: {
          type: Number, required: true
      }
  
  });

  

  var eventSchema = new mongoose.Schema({

    eventname: {
        type: String, required: true
    },
    
    firstname: {
        type: String, required: true
    },
    lastname: {
        type: String, required: true
    },
    gender: {
        type: String, enum: ["male", "female"], required: true
    },
    email: {
        type: String, required: true
    },
    organization: {
        type: String
    }

});

var assetSchema = new mongoose.Schema({

    item: {
        type: String, required: true
    },
    quantity: {
        type: String, required: true
    },
    state: {
        type: String, enum: ["Good", "Bad"], default: 'Good'
    }
  
  });
  
  

mongoose.model('Users', userSchema, 'users');
mongoose.model('Utilities', utilitySchema, 'utilities');
mongoose.model('Consumption', consumptionSchema, 'consumption');
mongoose.model('Events', eventSchema, 'events');
mongoose.model('Assets', assetSchema, 'assets');