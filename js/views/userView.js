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
        this.logoutButton = document.getElementById('btnLogout');
        this.bindLoginForm();

        this.messages = document.querySelector('#messages')
        this.checkLoginStatus();
    }

    bindRegisterForm() {
        this.registerButton.addEventListener('click', () => {

            try {
                if (this.registerPw.value !== this.registerPw2.value) {
                    throw Error('Password and Confirm Password are not equal');
                }
                this.userController.register(this.registerUsername.value, this.registerPw.value);
                this.displayMessage('User registered with success!', 'success');
            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });
    }

    bindLoginForm() {
        this.loginButton.addEventListener('click', () => {
            try {
                this.userController.login(this.loginUtilizador.value, this.loginPassword.value);
                this.displayMessage('User logged in with success!', 'success');

                // Wait 1 second before reloading, so the user can see the login success message
                setTimeout(() => {
                    this.updateButtons('login');
                    location.reload()
                },
                    1000);

            } catch (e) {
                this.displayMessage(e, 'danger');
            }
        });

        this.logoutButton.addEventListener('click', () => {
            this.userController.logout();
            this.updateButtons('logout');
            location.reload()
        });
    }


    checkLoginStatus() {
        if (this.userController.isLogged()) {
            this.updateButtons('login');
        } else {
            this.updateButtons('logout');
        }
    }

    updateButtons(event) {
        switch (event) {
            case 'login':
                this.loginButton.style.visibility = 'hidden'
                this.logoutButton.style.visibility = 'visible'
                break;
            case 'logout':
                this.loginButton.style.visibility = 'visible'
                this.logoutButton.style.visibility = 'hidden'
        }
    }
}    
