const textarea = document.getElementById('codeInput');
        const charCount = document.getElementById('charCount');
        const localStorageKey = 'savedCode';

        // Laad opgeslagen code en toon deze in het tekstveld
        window.onload = () => {
            const savedCode = localStorage.getItem(localStorageKey);
            if (savedCode) {
                textarea.value = savedCode;
                charCount.innerText = `Karakters: ${savedCode.length}`;
            }
        };

        // Bijwerken van het aantal karakters en opslaan in localStorage
        textarea.addEventListener('input', () => {
            const code = textarea.value;
            charCount.innerText = `Karakters: ${code.length}`;
            localStorage.setItem(localStorageKey, code);
        });

        // Code uitvoeren in de iframe
        function executeScript() {
            const code = textarea.value;
            const iframe = document.getElementById('resultFrame');
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

            iframeDoc.open();
            iframeDoc.write(code);
            iframeDoc.close();
        }

        // Tekstveld wissen en localStorage leegmaken
        function clearField() {
            textarea.value = '';
            charCount.innerText = 'Karakters: 0';
            localStorage.removeItem(localStorageKey);
        }