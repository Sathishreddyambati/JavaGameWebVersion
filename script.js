let health1 = 100;
let health2 = 100;
let turn = 'player1';

function updateHealth() {
    document.getElementById('health1').textContent = health1;
    document.getElementById('health2').textContent = health2;
}

function makeMove(player, action) {
    if (player !== turn) {
        document.getElementById('status').textContent = "It's not your turn!";
        return;
    }

    let opponent = player === 'player1' ? 'player2' : 'player1';
    let armour = document.getElementById('armourToggle').checked;

    if (action === 'gun1') {
        if (opponent === 'player2') {
            health2 -= armour ? 20 : 30;
        } else {
            health1 -= 30;
        }
    } else if (action === 'gun2') {
        if (opponent === 'player2') {
            health2 -= armour ? 40 : 50;
        } else {
            health1 -= 50;
        }
    } else if (action === 'heal') {
        if (player === 'player1') {
            health1 += 60;
            if (health1 > 100) health1 = 100;
        } else {
            health2 += 60;
            if (health2 > 100) health2 = 100;
        }
    }

    if (health1 <= 0) {
        health1 = 0;
        document.getElementById('status').textContent = "Player 1 is dead. Game Over!";
        disableButtons();
    } else if (health2 <= 0) {
        health2 = 0;
        document.getElementById('status').textContent = "Player 2 is dead. Game Over!";
        disableButtons();
    } else {
        turn = opponent;
        document.getElementById('status').textContent = turn + "'s turn";
    }

    updateHealth();
}

function disableButtons() {
    document.querySelectorAll('button').forEach(btn => btn.disabled = true);
}
