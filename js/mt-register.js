var form = document.getElementById('formsheet');
form.addEventListener('focus',content_change,true);
function content_change(e){
	var inputtype = e.target.type;
	if (inputtype == "text") {
		e.target.nextElementSibling.innerHTML = "6-16字符的字母或数字，不能以数字开头";
		e.target.nextElementSibling.className = "inputstyle"
	}
	else{
		e.target.nextElementSibling.innerHTML = "";
		e.target.nextElementSibling.className = "focusstyle"
	}
}
var inforcheck = false;
form.addEventListener('blur',content_blur,true)
function content_blur(e){
	var input = e.target;
	var message = e.target.nextElementSibling;
	var messagetype = e.target.type
	switch (messagetype){
		case 'email':
		var reg = /^\w+\@\w+\.\w+$/;
		return inforcheck = showmsg_email(input,reg,message);
		break;
		case 'text':
		var reglength = /^.{6,16}$/;
		var regfisrtnumber = /^[a-zA-z]+.+$/;
		var regother = /^[a-zA-z]+\w{5,15}$/;
		return inforcheck = showmsg_username(input,reglength,regfisrtnumber,regother,message);
		break;
		case 'password':
		var passwordname = e.target.name;
		if(passwordname == "setpassword"){
			var regminlength = /^.{6,}$/;
			var reglength = /^.{6,32}$/;
			var regother = /^\S{6,32}$/;
			return inforcheck = showmsg_password(input,regminlength,reglength,regother,message);
		}
		else{
			var reg = document.getElementById("inp3").value;
			return inforcheck = showmsg_checkpassword(input,reg,message)
		}
		break;
	}
	e.target.nextElementSibling.className = "errortip"
}
function showmsg_email(input,reg,obj){
	 if(input.value == ""){
		obj.innerHTML = "请填写邮箱";
		obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(reg.test(input.value) == false){
        obj.innerHTML = "邮箱格式错误，请重新输入"
        obj.className = "errortip";
        input.className = "inputerror";
        return false
    }
    else {      
        input.className ="email-style";
        obj.className = "correct-tip";
        return true
    }
}
function showmsg_checkpassword(input,reg,obj){
	 if(input.value == ""){
		obj.innerHTML = "请再次输入密码";
		obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(reg == input.value){
        input.className ="email-style";
        obj.className = "correct-tip"
        return true
    }
    else {      
        obj.innerHTML = "两次输入密码不一致，请重新输入";
		obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
}
function showmsg_password(input,minlength,length,other,obj){
	 if(input.value == ""){
		obj.innerHTML = "请填写密码";
		obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(minlength.test(input.value) == false){
        obj.innerHTML = "密码太短，至少6个字符"
        obj.className = "errortip";
        input.className = "inputerror";
        return false
    }
    else if(length.test(input.value) == false){
        obj.innerHTML = "密码太长，最多32个字符"
        obj.className = "errortip";
        input.className = "inputerror";
        return false
    }
    else if(other.test(input.value) == false){
        obj.innerHTML = "请正确输入密码"
        obj.className = "errortip";
        input.className = "inputerror";
        return false
    }
    else {      
        input.className ="email-style";
        obj.className = "correct-tip";
        return true
    }
}

function showmsg_username(input,length,fisrtnumber,other,obj){
     if(input.value == ""){
        obj.innerHTML = "请填写用户名";
        obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(length.test(input.value) == false){
        obj.innerHTML = "用户名为6-16个字符";
        obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(fisrtnumber.test(input.value) == false){
        obj.innerHTML = "用户名必须以英文字母开头";
        obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else if(other.test(input.value) == false){
        obj.innerHTML = "用户名只能是字母或数字";
        obj.className = "errortip";
        input.className = "inputerror";
        return false;
    }
    else { 
        input.className ="email-style";     
        obj.className = "correct-tip";
        return true
    }
}
function submit_tip(){
	if (inforcheck == false) {
		alert("请正确填写，完整注册信息");
	}
	
}
//1。如何提示错误地方的具体信息，2.如何识别密码的强弱
