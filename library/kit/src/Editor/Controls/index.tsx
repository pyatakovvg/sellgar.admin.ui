
import React from "react";
import { Editor } from '@tiptap/react';

import Button from './Button';

import styles from './default.module.scss';


interface IProps {
  editor: Editor;
}


function Controls({ editor }: IProps) {
  if ( ! editor) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <div className={styles['button']}>
          <Button icon={'fas fa-heading'} isActive={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} />
        </div>
        <div className={styles['button']}>
          <Button icon={'fas fa-paragraph'} isActive={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()} />
        </div>
      </div>
      <div className={styles['block']}>
        <div className={styles['button']}>
          <Button icon={'fas fa-bold'} isActive={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()} />
        </div>
        <div className={styles['button']}>
          <Button icon={'fas fa-italic'} isActive={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()} />
        </div>
        <div className={styles['button']}>
          <Button icon={'fas fa-underline'} isActive={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()} />
        </div>
      </div>
      <div className={styles['block']}>
        <div className={styles['button']}>
          <Button icon={'fa-solid fa-list-ul'} isActive={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()} />
        </div>
      </div>
      <div className={styles['block']}>
        <div className={styles['button']}>
          <Button icon={'fa-solid fa-broom'} isActive={false} onClick={() => editor.chain().focus().clearNodes().run()} />
        </div>
      </div>
      <div className={styles['block']}>
        <div className={styles['button']}>
          <Button icon={'fa-solid fa-rotate-left'} isActive={false} onClick={() => editor.chain().focus().clearNodes().run()} />
        </div>
        <div className={styles['button']}>
          <Button icon={'fa-solid fa-rotate-right'} isActive={false} onClick={() => editor.chain().focus().clearNodes().run()} />
        </div>
      </div>
    </div>
  );
}

export default Controls;
