function signup(e){
    event.preventDefault();
    //console.Log ('working');

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;


    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
localStorage.setItem(username,json);
console.log('user added');
}


function loginFunc(e){
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user = null){
        result.innerHTML = 'Tên đăng nhập không hợp lệ';
    }else if(username ==data.username && pass == data.password){
        result.innerHTML = 'Đăng nhập';
    }else{
        result.innerHTML = 'Sai mật khẩu';
    }
}