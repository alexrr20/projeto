import userController from './controllers/userController.js'

export default class UserView {
    constructor() {
        this.userController = new userController();

        // register DOM
        this.registerName = document.getElementById('inpName');
        this.registerDateofbirth = document.getElementById('inpDOB');
        this.registerNIF = document.getElementById('inpNIF');
        this.registerLocal = document.getElementById('inpLocal');
        this.registerGender = document.getElementById('inpGender');
        this.registerEmail = document.getElementById('inpEmail');
        this.registerPhone = document.getElementById('inpPhone');
        this.registerPw = document.getElementById('inpPw');
        this.registerPw2 = document.getElementById('inpPw2');
        this.registerButton = document.getElementById('btnCriar');
        this.bindRegisterForm();

        // login DOM
        this.loginUtilizador = document.getElementById('inpUtilizador');
        this.loginPassword = document.getElementById('inpPassword');
        this.loginButton = document.getElementById('btnLogin');
        this.bindLoginForm();

        this.messages = document.querySelector('#messages')
        this.checkLoginStatus();
    }
}    
