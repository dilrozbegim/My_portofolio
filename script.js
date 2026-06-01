
        function openModal(imgSrc) {
            const modal = document.getElementById('certModal');
            const modalImg = document.getElementById('modalImg');
            modalImg.src = imgSrc;
            modal.classList.add('active');
        }

        function closeModal() {
            const modal = document.getElementById('certModal');
            modal.classList.remove('active');
        }

        // ESC tugmasi bosilganda modalni yopish
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
 