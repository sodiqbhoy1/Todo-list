var cart =[]


// This is the function forthe submit button
function submitBtn(){
    if(document.getElementById("input").value ==''){
        warning.style.display= "block"
    }

    else{
        warning.style.display= "none"
        cart.push(document.getElementById('input').value)
        document.getElementById('input').value =''
        displayResult()
    }
}

// Fuction to delete item in an array

function deleteBtn(){
    var confirmation = confirm("Are you sure you want to delete ?")
    if(confirmation==true){
        cart.splice(0,1)
        displayResult()
    }
    
}


// Edit btn inside the card that triggers the modal
// The same button will be used to get the indexnumber of the item

var cartIndex
function editBtn(i){
cartIndex= i

}


// Save changes button inside the modal to sve changes made


function edit(){
    if (document.getElementById("inputModal").value==''){
       modalError.style.display = "block"
       
    }

    else{
        modalError.style.display = "none"
        cart.splice(cartIndex, 1, inputModal.value)
        inputModal.value=""
        displayResult()
    }
}


// function to display results on the screen instad of console

function displayResult(){
    
    document.getElementById("notAdded").style.display="none"
    document.getElementById("result").style.display="flex"
    document.getElementById("result").innerHTML =''
    cart.map((items, index)=>{
    document.getElementById('inputModal').value = items

        result.innerHTML += `
        
    
        <div class="card" style="width: 16rem; background-color:#00224D;">
  <div class="card-body ">
    <h5 class="card-title text-light">${index+1}</h5>
    <p class="card-text" style="color:#E72929;">${items}</p>
    <button onclick="editBtn(${index})" class="btn btn-warning" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal"> <i class="fa-solid fa-pen"></i> </button>
    <button onclick="deleteBtn()" class="btn btn-danger"> <i class="fa-solid fa-trash"></i> </button>
    
  </div>
</div>
        `
    }

    )
}
