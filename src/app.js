import { page, render } from './lib.js';

import { logout as apiLogout, getQuizById, getQuestionsByQuizId } from './api/data.js';
import { editorPage } from './views/editor/editor.js';
import { browsePage } from './views/browse.js';
import { loginPage, registerPage } from './views/auth.js';
import { quizPage } from './views/quiz/quiz.js';
import { cube } from './views/common/loader.js';

const cache = {};
const main = document.getElementById('content');
setUserNav();
document.getElementById('logoutBtn').addEventListener('click', logout);

page('/browse', decorateContext, browsePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/quiz/:id', decorateContext, getQuiz, quizPage);
page('/create', decorateContext, editorPage);
page('/edit/:id', decorateContext, editorPage);

page.start();

async function getQuiz(ctx, next) {
    const quizId = ctx.params.id;

    if (cache[quizId] == undefined) {
        ctx.render(cube());
        cache[quizId] = await getQuizById(quizId);
        const ownerId = cache[quizId].owner.objectId;
        cache[quizId].questions = await getQuestionsByQuizId(quizId, ownerId)
    }

    ctx.quiz = cache[quizId];
    next();
}

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
        document.getElementById('user-nav').style.display = 'block';
        document.getElementById('guest-nav').style.display = 'none';
    } else {
        document.getElementById('user-nav').style.display = 'none';
        document.getElementById('guest-nav').style.display = 'block';
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
