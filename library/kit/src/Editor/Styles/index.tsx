
import React from 'react';

import Block from "../Button";

import styles from './defaults.module.scss';


const INLINE_STYLES = [
  { label: 'Bold', style: 'bold', icon: 'fas fa-bold', },
  { label: 'Italic', style: 'italic', icon: 'fas fa-italic', },
  { label: 'Underline', style: 'underline', icon: 'fas fa-underline', },
  { label: 'StrikeThrough', style: 'strikethrough', icon: 'fas fa-strikethrough', },
];

function Styles({ currentState, onChange }: any) {
  return (
    <div className={styles['wrapper']}>
      {INLINE_STYLES.map((type: any) => (
        <Block
          key={type['label']}
          icon={type['icon']}
          style={type['style']}
          className={styles[type['style']]}
          active={currentState[type['style']]}
          onToggle={(style: any) => onChange(style)}
        />
      ))}
    </div>
  );
}

export default Styles;
