// get trigger button and modal
const deleteBtn = document.getElementById('delete');
const modal = document.querySelector('.modal');

// function to open modal white triggered
function openModal() {
    modal.classList.add('is-visible')
}

deleteBtn.addEventListener('click', openModal);

// function to close modal when clicked on 'cancle' btn
const cancleBtn = document.getElementById('modal-btn-cancle');

function closeModal() {
    modal.classList.remove('is-visible')
}

cancleBtn.addEventListener('click', closeModal);

// function to clode modal when clicked on gray background
function modalHidden(event) {
    if (event.target == modal) {
        modal.classList.remove('is-visible');
    }
}

window.addEventListener('click', modalHidden);


