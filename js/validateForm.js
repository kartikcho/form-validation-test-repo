const inputName = document.getElementById('name')
const mobnumber = document.getElementById('number')
const email = document.getElementById('email')
const tableBody = document.getElementById('table-body')

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function handleSubmit() {
  const checkValid =
    mobnumber.value.length === 10 &&
    emailRegExp.test(email.value) &&
    inputName.value.length > 2
  if (checkValid) {
    appendTableRow(inputName.value, mobnumber.value, email.value)
    console.log('lezzgoooo')
  } else {
    alert(
      'Please fill all fields with valid data including a 3 letter or longer name, a valid mail and a 10 digit mobile number.'
    )
  }
}

function appendTableRow(inputName, mobnumber, email) {
  const newRow = document.createElement('tr')
  const nameTd = document.createElement('td')
  const numTd = document.createElement('td')
  const emailTd = document.createElement('td')
  const deleteTd = document.createElement('td')
  const deleteButton = document.createElement('button')

  nameTd.className = 'px-4 py-3'
  numTd.className = 'px-4 py-3'
  emailTd.className = 'px-4 py-3'
  deleteTd.className = 'px-4 py-3'
  deleteButton.className =
    'flex text-white bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-600 rounded text-md'

  nameTd.innerText = inputName
  numTd.innerText = mobnumber
  emailTd.innerText = email
  deleteButton.innerText = 'Delete'

  deleteButton.setAttribute(
    'onclick',
    'return this.parentNode.parentNode.remove();'
  )

  deleteTd.appendChild(deleteButton)
  newRow.appendChild(nameTd)
  newRow.appendChild(numTd)
  newRow.appendChild(emailTd)
  newRow.appendChild(deleteTd)
  tableBody.appendChild(newRow)
}

// P.S: If you've found my repo and plan to copy it, pls spice it up a bit so I don't get blamed ♥
