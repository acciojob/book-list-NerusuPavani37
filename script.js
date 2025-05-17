let form = document.getElementById("book-form");

form.addEventListener('submit' , function(e){
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  let cell1 = document.createElement('td');
  cell1.textContent = title;

  let cell2 = document.createElement('td');
  cell2.textContent = author;

  let cell3 = document.createElement('td');
  cell3.textContent = isbn;

  let cell4 = document.createElement('td');
  let tableBody = document.querySelector('#book-list') ;
  let newRow = document.createElement('tr');
  let clearBtn = document.createElement('button');
  clearBtn.innerHTML='&#10060';
  clearBtn.setAttribute("class", "delete") ;
  cell4.appendChild(clearBtn);

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);

  tableBody.appendChild(newRow)
 form.reset()

  clearBtn.addEventListener('click', function(){
   tableBody.removeChild(newRow)
  });

});
