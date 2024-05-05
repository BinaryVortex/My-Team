document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle the visibility of social media links
            const socialLinks = card.querySelector('.social-links');
            socialLinks.classList.toggle('hidden');

            // Toggle the expanded state of the card content
            const cardBody = card.querySelector('.card-body');
            cardBody.classList.toggle('expanded');

            // Remove 'selected' class from all cards
            cards.forEach(c => {
                c.classList.remove('selected');
            });

            // Add 'selected' class to the clicked card
            card.classList.add('selected');

            // Smooth scroll to the clicked card
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});
