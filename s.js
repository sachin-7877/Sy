document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const documentsList = document.getElementById('documents-list');

    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const documentInput = document.getElementById('document');
        const file = documentInput.files[0];

        if (file) {
            const listItem = document.createElement('li');
            listItem.textContent = file.name;

            const shareButton = document.createElement('button');
            shareButton.textContent = 'Share';
            shareButton.addEventListener('click', () => {
                const email = prompt('Enter family member email:');
                if (email) {
                    alert(`Document shared with ${email}`);
                    // Here, you would send the document and email to the backend server.
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.marginLeft = '10px';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
                alert('Document deleted');
                // Here, you would also delete the document from the backend server.
            });

            listItem.appendChild(shareButton);
            listItem.appendChild(deleteButton);
            documentsList.appendChild(listItem);

            documentInput.value = '';
        }
    });
});

