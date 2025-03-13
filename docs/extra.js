document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.highlight').forEach((block) => {
        // 복사 버튼 추가
        let button = document.createElement('button');
        button.innerText = 'Copy';
        button.classList.add('copy-button');

        block.appendChild(button);

        // 버튼 클릭 시 복사 기능
        button.addEventListener('click', () => {
            let code = block.querySelector('pre code');
            let text = code.innerText;

            navigator.clipboard.writeText(text).then(() => {
                button.innerText = 'Copied!';
                button.classList.add('copied');

                setTimeout(() => {
                    button.innerText = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            });
        });
    });
});
