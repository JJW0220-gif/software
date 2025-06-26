function get_info() {
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.5) {
            let tmp_id = Math.floor(Math.random() * 14000 + 6000);
            setTimeout(() => {
                resolve(tmp_id);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_firstname() {
    first_name_list = ['Adam', 'Eric', 'Peter'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list

    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 500 + 500);
        setTimeout(() => {
            if (success_rate <= 0.9) {
                resolve(first_name_list[Math.floor(Math.random() * first_name_list.length)]);
            } else {
                reject("First name failed");
            }
        }, timer);
    });


}

function get_lastname() {
    last_name_list = ['Jones', 'Smith', 'Johnson'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 500 + 500);
        setTimeout(() => {
            if (success_rate <= 0.9) {
                resolve(last_name_list[Math.floor(Math.random() * last_name_list.length)]);
            } else {
                reject("Last name failed");
            }
        }, timer);
    });
}

function get_username() {
    username_list = ['Zeus', 'Faker', 'Keria'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 500 + 500);
        setTimeout(() => {
            if (success_rate <= 0.9) {
                resolve(username_list[Math.floor(Math.random() * username_list.length)]);
            } else {
                reject("Username failed");
            }
        }, timer);
    });
}

function get_email() {
    email_list = ['asdf@google.com', 'qwer@microsoft.com', 'zxcv@cs.nthu.edu.tw'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 500 + 500);
        
        setTimeout(() => {
            if (success_rate <= 0.9) {
                resolve(email_list[Math.floor(Math.random() * email_list.length)]);
            } else {
                reject("Email failed");
            }
        }, timer);
    });
}

function get_address() {
    address_list = ['1027 Alpha Avenue', '3132 Kidd Avenue', '876 Jefferson Street'];

    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 500 + 500);
        setTimeout(() => {
            if (success_rate <= 0.9) {
                resolve(address_list[Math.floor(Math.random() * address_list.length)]);
            } else {
                reject("Address failed");
            }
        }, timer);
    });
}

const initApp = () => {
    const reSamplebtn = document.getElementById('resamplebtn');
    reSamplebtn.addEventListener('click', retrieve_data);
}

async function retrieve_data() {
    const txtInfoName = document.getElementById('user-info-name');
    const txtFirstName = document.getElementById('firstName');
    const txtLastName = document.getElementById('lastName');
    const txtUserName = document.getElementById('username');
    const txtEmail = document.getElementById('email');
    const txtAddress = document.getElementById('address');
    const boxReSample = document.getElementById('re-sample');

    txtInfoName.innerText = '-';
    txtFirstName.value = '-';
    txtLastName.value = '-';
    txtUserName.value = '-';
    txtEmail.value = '-';
    txtAddress.value = '-';

    let success = false;
    
    while (!success) {
        try {
            let info = await get_info();
            txtInfoName.innerText = `ID: ${info}`;

            let firstName = await get_firstname();
            let lastName = await get_lastname();
            let username = await get_username();
            let email = await get_email();
            let address = await get_address();

            txtFirstName.value = firstName;
            txtLastName.value = lastName;
            txtUserName.value = username;
            txtEmail.value = email;
            txtAddress.value = address;

            success = true;
        } catch (error) {
            txtInfoName.innerText = "failed";
            console.error(error);
            if (!boxReSample.checked) {
                break;
            }
        }
    }
}


window.onload = function() {
    initApp();
}