import inicialization from "./inicialization.js";

export default (pl1, pl2) => {
    const body = document.querySelector('body');

    body.innerHTML = `
            <div class="body-container">
                <div class="logo">Odin Tic Tac Toe</div>

                <div class="main">
                    <div class="player">${pl1}</div>
                    <div class="board"></div>
                    <div class="player">${pl2}</div>
                </div>
                
                <div class="menu-game">
                    <div class="message"></div>    
                    <div class="btnReload">
                        <button class="btnReload">Reload</button>
                        <button class="btnExit">Exit</button>
                    </div>    
                </div>
            </div>
            
            <div class="modalBackground">
                <div class="modalActive">
                    <div class="modalClose">
                        <img class="closed" src="./assets/img/close.png" />
                    </div>
                    <div class="modalWindow"></div>
                </div>
            </div>`;
        
        body.style.backgroundImage = `url(./assets/img/5968949.jpg)`

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X'; 
    
    const boardEl = document.querySelector('.board');
    const messageEl = document.querySelector('.message');
    
    const createBoard = () => {
        for (let i = 0; i < 9; i++) {
            const field = document.createElement('div');
            field.classList.add('field');    
            field.addEventListener('click', () => (makeMove(i)));
            boardEl.append(field);
        }
    };
    
    const renderBoard = () => {
        const fields = document.querySelectorAll('.field');
        fields.forEach((field, indx) => (field.textContent = board[indx]))
    };
    
    const checkWinner = () => {
        const winsOutcomes = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
        for (const outcome of  winsOutcomes) {
            const [a, b, c] = outcome;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
    
        return board.includes('') ? null : 'Ничья';
    };
    
    const makeMove = (position) => {
        if (board[position] === '') {
            board[position] = currentPlayer;
            const winner = checkWinner();
            renderBoard();
    
            if (winner) {
                messageEl.textContent = winner === 'Ничья' ? modalView('Ничья') : modalView(currentPlayer);
                boardEl.style.pointerEvents = 'none';
            } else {
                currentPlayer = currentPlayer === 'X' ? '0' : 'X'
            }
        } else {
            alert('Эта ячейка занята')
        }
    }

    const modal = document.querySelector('.modalBackground');
    const modalWindow = document.querySelector('.modalWindow');
    const closed = document.querySelector('.closed');
    const btnReload = document.querySelector('.btnReload');
    const btnExit = document.querySelector('.btnExit');
   

    const modalView = (currentPlayer) => {
        if (currentPlayer === 'Ничья') {
            modal.style.display = 'block';
            modalWindow.innerHTML = `${currentPlayer}`;
        } else {
            const player = currentPlayer === 'X' ? pl1 : pl2;

            modal.style.display = 'block';
            modalWindow.innerHTML = `Игрок: ${player} победил !`;
        }
        
    }

    closed.addEventListener('click', () => {
        modal.style.display = 'none'
    });

    btnReload.addEventListener('click', () => {
        board = ['', '', '', '', '', '', '', '', ''];
        boardEl.style.pointerEvents = '';
        renderBoard();
    })
    
    btnExit.addEventListener('click', () => {
        inicialization();
    })

    

    createBoard()
}
