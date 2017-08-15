import $ = require("jquery");

class Login {

    gAuth(gUsr) {
        var profile = gUsr.getBasicProfile();
        console.log(profile.getName());
    }

    initLAuth() {
        alert('LinkedIn Auth Started');
    }

    initNormalReg (){

    }

}

export = Login;
