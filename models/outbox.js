var mongoose = require('mongoose');

var registrationSchema = new mongoose.Schema({

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
    altphone: {
        type: String, required: true
    },
    idType: {
        type: String, required: true
    },
    idNumber: {
        type: String, required: true
    },
    company: {
        type: String, required: true
    }

});

var userInfo = new mongoose.Schema({
    dateJoined: {
        type: Date
    },
    dateOut: {
        type: Date
    },
    memberShipPeriod:{
        type: Number
    },
    userDetails: [registrationSchema]
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

    tagNumber: {
        type: String
    },
    serialNumber: {
        type: String
    },
    class: {
        type: String
    },

    itemName: {
        type: String, required: true
    },
    manufacturerSeller: {
        type: String, required: true
    },
    color: {
        type: String, required: true
    },
    numberOfItems: {
        type: String, required: true
    },
    itemDescription: {
        type: String
    },
    owner: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    dateOfPurchase: {
        type: Date, required: true
    },
    purchasePrice: {
        type: Number, required: true
    }
  
  });


var servicesSchema = new mongoose.Schema({
    cow: {
        type: String, enum: ["Yes", "No"]
    },
    locker: {
        type: String, enum: ["Yes", "No"]
    },
    key: {
        type: String, enum: ["Yes", "No"]
    }  
});


var paymentSchema = new mongoose.Schema({
      lockerFee: {
          type: Number
      },
      accessKeyFee: {
          type: Number
      },
      monthlyFee: {
          type: Number
      },
      servicesUsed: {

    },
    userDetails: [registrationSchema]

  });


  var brandingMaterials = new mongoose.Schema({
       item: {
           type: String, required: true
       },
       condition: {
            type: String, enum: ["Good", "Very Good", "Poor", "Very Poor"], required: true    
       },
       commentsCurrent: {
            type: String, required: true
       },
       itemsTaken: {
           type: String, enum: ["Yes", "No"], required: true
       },
       dateTaken: {
           type: Date
       },
       dateReturned: {
           type: Date
       },
       commentsonReturn: {
           type: String, required: true
       }
  });
  
  

mongoose.model('UserReg', registrationSchema, 'users');
mongoose.model('Utilities', utilitySchema, 'utilities');
mongoose.model('Consumption', consumptionSchema, 'consumption');
mongoose.model('Events', eventSchema, 'events');
mongoose.model('Assets', assetSchema, 'assets');
mongoose.model('UserInfo', userInfo, 'userinfo');
mongoose.model('Services', servicesSchema, 'services');
mongoose.model('Payments', paymentSchema, 'payments');
mongoose.model('Branding', brandingMaterials, 'branding');
