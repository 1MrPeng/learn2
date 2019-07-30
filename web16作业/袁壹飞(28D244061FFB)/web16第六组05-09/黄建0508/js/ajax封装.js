function ajax(method,url,data,res,fail){
    var xhr = new XMLHttpRequest;
    try {
        xhr = new XMLHttpRequest;
    } catch (error) {
        xhr.ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open(method,url);
    if(method.toLowerCase() == "get"){
        xhr.send();
    }else{
        xhr.setRequestHeader("Content-Type", "Application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            res(data);
        }else{
            fail(xhr.status);
        }
    }
}