let deleteBtn = document.getElementsByClassName('close')
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].onclick = function() {
      var elem = document.getElementsByClassName('list');
      elem[i].style.display = "none";
      
    }
  }

  var submit = document.getElementById('addBtn')

  function newElement() {
    var li = document.createElement("li");
    li.className = 'list'
    var inputValue = document.getElementById("myInput").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text)
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var btn = document.createElement('BUTTON')
    btn.className = 'close';
    var icon = document.createElement('I')
    icon.className = 'fa fa-trash-alt'
    btn.appendChild(icon)
    li.appendChild(btn);
  
    const close = document.getElementsByClassName('close')
      for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let elem = document.getElementsByClassName('list');
          elem[i].style.display = "none";
          
        }

      }
    
    }