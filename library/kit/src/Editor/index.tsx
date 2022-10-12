
import React from "react";
import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';

import Controls from './Controls';

import styles from './default.module.scss';


interface IProps {
  value?: string;
  onFocus?(e: any): void;
  onBlur?(e: any): void;
  onChange?(e: any): void;
}


function EditorHTML({ value, onFocus, onChange, onBlur }: IProps) {
  const editor = useEditor({
    content: value || '',
    editable: true,
    injectCSS: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    editorProps: {
      attributes: {
        class: styles['container'],
      },
    },
    onFocus({ editor }) {
      onFocus && onFocus(editor.getHTML());
    },
    onUpdate({ editor }) {
      onChange && onChange(editor.getHTML());
    },
    onBlur({ editor }) {
      onBlur && onBlur(editor.getHTML());
    },
  });

  if ( ! editor) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Controls editor={editor} />
      </div>
      <div className={styles['content']}>
        <EditorContent
          className={styles['editor']}
          editor={editor}
        />
      </div>
    </div>
  );
}


EditorHTML.defaultProps = {
  className: null,
  value: '',
}

export default React.memo(EditorHTML);
