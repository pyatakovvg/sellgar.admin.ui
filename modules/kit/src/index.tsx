
import {Button, Input, List, Select, Checkbox, Text, Header, Label, Link, Image, Spinner, Logotype } from '@library/kit';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './default.module.scss';


function Test(): React.ReactNode {
  const [value, setValue] = React.useState('Hello');
  const [check, setCheck] = React.useState(true);
  const [listValue, setListValue] = React.useState<any>(null);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <NavLink to={process.env['PUBLIC_URL'] + '/design'}>Design</NavLink>
          <Logotype />
        </div>
        <div className={styles['block']}>
          <Button>Default button</Button>
          <Button mode={'danger'}>Default button</Button>
          <Button mode={'success'}>Default button</Button>
          <Button disabled>Default button</Button>
        </div>
        <div className={styles['block']}>
          <Button form={'context'}>Context button</Button>
          <Button form={'context'} mode={'danger'}>Context button</Button>
          <Button form={'context'} mode={'success'}>Context button</Button>
          <Button form={'context'} disabled>Context button</Button>
        </div>
        <div className={styles['block']}>
          <Button form={'outline'}>Outline button</Button>
          <Button form={'outline'} mode={'danger'}>Outline button</Button>
          <Button form={'outline'} mode={'success'}>Outline button</Button>
          <Button form={'outline'} disabled>Outline button</Button>
        </div>
        <div className={styles['block']}>
          <Input value={value} disabled={listValue === 1} type={'email'} name={'email'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
        <div className={styles['block']}>
          <Select
            clearable
            value={listValue}
            options={[
              { id: 1, value: 'One value' },
              { id: 2, value: 'Two value' },
              { id: 3, value: 'Three value' },
            ]}
            onChange={setListValue}
          />
        </div>
        <div className={styles['block']}>
          <List
            value={listValue}
            options={[
              { id: 1, value: 'Disabled input' },
              { id: 2, value: 'Disabled' },
              { id: 3, value: 'Three value' },
            ]}
            onClick={setListValue}
          />
        </div>
        <div className={styles['block']}>
          <Checkbox type={'switch'} disabled={listValue === 2} value={check} onChange={setCheck} />
          <Checkbox disabled={listValue === 2} value={check} onChange={setCheck} />
          <Checkbox disabled={listValue === 3} value={check} onChange={setCheck}>checkbox label</Checkbox>
        </div>
        <div className={styles['block']}>
          <div className={styles['row']}>
            <div className={styles['col']}>
              <Text>Default text</Text>
              <Text type={'strong'}>Strong text</Text>
              <Text type={'description'}>Description text</Text>
            </div>
            <div className={styles['col']}>
              <Header>Level 1</Header>
              <Header level={2}>Level 2</Header>
              <Header level={3}>Level 3</Header>
              <Header level={4}>Level 4</Header>
              <Header level={5}>Level 5</Header>
            </div>
            <div className={styles['col']}>
              <Label>label for element</Label>
              <Link href={'/'}>Default link</Link>
              <Text>Link in <Link href={'#'}>default</Link> text</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['block']}>
        <Spinner/>
        <Image src={'https://st.depositphotos.com/1325441/1367/i/450/depositphotos_13671733-stock-photo-handsome-guy-with-dreamy-eyes.jpg'} />
      </div>
    </div>
  );
}

export default Test;