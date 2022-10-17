import Playground from "@agney/playground";
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import "@reach/tabs/styles.css";

const App = () => {
    const snippet = {
        markup: `<div id=app />`,
        css: ``,
        javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));`,
    };
    return (
        <Playground
            id="example"
            initialSnippet={snippet}
            defaultEditorTab="javascript"
            transformJs
        />
    );
};