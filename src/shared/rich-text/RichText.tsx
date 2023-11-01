import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const editorConfiguration = {
    toolbar: [ 'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'blockQuote',
        'codeBlock',
        'code' ]
};

export default function RichText (props) {
    return (
        <div>
            <h2>Using CKEditor&nbsp;5 from builder in React</h2>
            <CKEditor
                editor={ Editor }
                config={ editorConfiguration }
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    if (props.content !== undefined && props.content !== null) {
                      editor.setData(props.content);
                    }
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );

                    props.setTextEditor(data);
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    )
}