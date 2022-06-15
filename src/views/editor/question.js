import { html, render } from '../../lib.js';

const editorTemplate = () => html`
<div class="layout">
    <div class="question-control">
        <button class="input submit action"><i class="fas fa-check-double"></i>
            Save</button>
        <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
    </div>
    <h3>Question 1</h3>
</div>
<form>
    <textarea class="input editor-input editor-text" name="text" placeholder="Enter question"></textarea>
    <div class="editor-input">

        <label class="radio">
            <input class="input" type="radio" name="question-1" value="0" />
            <i class="fas fa-check-circle"></i>
        </label>

        <input class="input" type="text" name="answer-0" />
        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="editor-input">

        <label class="radio">
            <input class="input" type="radio" name="question-1" value="1" />
            <i class="fas fa-check-circle"></i>
        </label>

        <input class="input" type="text" name="answer-1" />
        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="editor-input">

        <label class="radio">
            <input class="input" type="radio" name="question-1" value="2" />
            <i class="fas fa-check-circle"></i>
        </label>

        <input class="input" type="text" name="answer-2" />
        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="editor-input">
        <button class="input submit action">
            <i class="fas fa-plus-circle"></i>
            Add answer
        </button>
    </div>
</form>`;


export function createQuestion(question) {
    const element = document.createElement('article');
    element.className = 'editor-question';
}
