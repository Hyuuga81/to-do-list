const item = document.querySelector("#todo");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");
const message = document.querySelector(".message");

button.addEventListener('click', function() {
	enterItem();
  
});

todo.addEventListener("keydown", function(e) {
	if (e.key === "Enter") {
  	enterItem();
  }
});

//Enter item
const enterItem = () => {
	if (item.value === "") {
  	message.innerText = "Please enter a to-do item";
  } else {
		const listItem = document.createElement('li');
    listItem.innerHTML = `<p>${item.value}</p><i class="fa-solid fa-trash"></i>`;
    list.append(listItem);
    clear();
    delete(listItem);
	}
}

// delete listItem. pass listItem from enterItem 
const deleteItem = (listItem) => {
  const junk = listItem.querySelectorAll('.fa-trash');
  for (let item of junk) {
    item.style.display = 'none';
  }
};




//Clear input box
const clear = function() {
	item.value = "";
}