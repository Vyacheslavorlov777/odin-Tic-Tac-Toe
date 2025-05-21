import game from "./app.js"

export default () => {
    const body = document.querySelector('body');

    body.innerHTML = `
        <div class="menu-container">
            <div class="logo">Tic Tac Toe</div>

            <div class="menu">
                <div class="player">
                    <label for="player1">Player 1 name:</label>
                    <input type="text" id="player1" name="player1" required minlength="2" maxlength="50" />
                </div>
                <div><button type="submit" class="btnPlay">Play</button></div>
                <div class="player">
                    <label for="player2">Player 2 name:</label>
                    <input type="text" id="player2" name="player2" required minlength="2" maxlength="50" />
                </div>
            </div>

            <div class="telega"><a href="https://t.me/ramzaii">By Vyacheslav Ryabov</a></div>

        </div>`;

        body.style.backgroundImage = `url(./assets/img/4931029.jpg)`

        const btnPlay = document.querySelector('.btnPlay');
        const player1 = document.querySelector('#player1');
        const player2 = document.querySelector('#player2');

        btnPlay.addEventListener('click', (e) => {
            e.preventDefault();

            const namePlayer1 = player1.value;
            const namePlayer2 = player2.value;

            (namePlayer1 === '' || namePlayer2 === '') ? alert('Пожалуйста, заполните имя игроков') : game(namePlayer1, namePlayer2);            
        });
    
}