import { html } from '../../lib.js';
import { createList } from './list.js';
import { createQuiz, updateQuiz, getQuizById, getQuestionsByQuizId } from '../../api/data.js';

const template = (quiz, onSave, working) => html`
<section id="editor">

    <header class="pad-large">
        <h1>${quiz ? 'Edit Quiz' : 'New Quiz'}</h1>
    </header>

    <div class="pad-large alt-page">
        <form @submit=${onSave}>
            <label class="editor-label layout">
                <span class="label-col">Title:</span>
                <input class="input i-med" type="text" name="title" .value=${quiz ? quiz.title : ''}
                    ?disabled=${working}>
            </label>
            <label class="editor-label layout">
                <span class="label-col">Topic:</span>
                <select class="input i-med" name="topic" .value=${quiz ? quiz.topic : '0'} ?disabled=${working}>
                    <option value="0"><span class="quiz-meta">-- Select Categories</span></option>
                    <option value="it">Languages</option>
                    <option value="hardware">Hardware</option>
                    <option value="software">Tools and Software</option>
                </select>
            </label>
            <label class="editor-label layout">
                <span class="label-col">Description:</span>
                <textarea class="input" name="description" .value=${quiz ? quiz.description : ''}
                    ?disabled=${working}></textarea>
            </label>
            <input class="input submit action" type="submit" value="Save">
        </form>

        ${working ? html`<div class="loading-overlay working"></div>` : ''}
    </div>


    ${quiz ? createList(quiz.questions) : ''}

</section>`;


// const questions = [
//     {
//         text: 'Is this the first question?',
//         answers: [
//             'Yes',
//             'No',
//             'Maybe'
//         ],
//         correctIndex: 0
//     },
//     {
//         text: 'Is this the second question?',
//         answers: [
//             'Maybe',
//             'Yes',
//             'No'
//         ],
//         correctIndex: 1
//     }
// ]
export async function editorPage(ctx) {
    const quizId = ctx.params.id;
    let quiz = null;
    let questions = [];

    if (quizId) {
        [quiz, questions] = await Promise.all([
            getQuizById(quizId),
            getQuestionsByQuizId(quizId)
        ]);
        quiz.questions = questions;
    }

    ctx.render(template(quiz, onSave));

    async function onSave(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const title = formData.get('title');
        const topic = formData.get('topic');
        const description = formData.get('description');

        const data = {
            title,
            topic,
            description,
            questionCount: questions.length
        }

        try {
            ctx.render(template(quiz, onSave, true));

            if (quizId) {
                await updateQuiz(quizId, data);
            } else {
                const result = await createQuiz(data);
                ctx.page.redirect('/edit/' + result.objectId);
            }
        } catch (err) {
            console.error(err);
        } finally {
            ctx.render(template(quiz, onSave, false));
        }
    }
}
