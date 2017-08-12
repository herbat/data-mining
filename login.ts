import $ = require("jquery");

class Login {

    gAuth(gUsr) {
        var profile = gUsr.getBasicProfile();
        console.log(profile.getName());
    }

    initLAuth() {
    }

    initNormalReg (){
    }

}

export = Login;
