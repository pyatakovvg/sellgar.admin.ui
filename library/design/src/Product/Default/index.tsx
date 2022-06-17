
import { Image, Text } from '@library/kit';

import React from 'react';
import { Link } from 'react-router-dom';

import Modes from './Modes';
import Button from './Button';

import styles from './default.module.scss';


interface IMode {
  uuid: string;
  value: string;
  unit: string;
}

interface IProps {
  uuid: string;
  count?: number;
  gallery: Array<string>;
  title: string;
  modes: Array<IMode>;
  disabled?: boolean;
  inProcess?: boolean;
  onClick?(): void;
  onSelect?(uuid: object): void;
}


function useGetPrice(modes: Array<IMode>, selectedMode: string) {
  const mode = React.useMemo(() => modes.find((item) => item['uuid'] === selectedMode), [selectedMode])
  return mode ? mode['value'] : null;
}


function Product({ uuid, count, gallery, title, modes, disabled, inProcess, onSelect }: IProps): JSX.Element {
  const [selectedModeUuid, setModeUuid] = React.useState(modes[0]['uuid']);
  const price = useGetPrice(modes, selectedModeUuid);

  function handleToBucket(uuid: string) {
    if (disabled) {
      return void 0;
    }
    if (onSelect) {
      onSelect({
        uuid,
        modeUuid: selectedModeUuid,
      });
    }
  }

  function handleChangeMode(modeUuid: string) {
    setModeUuid(modeUuid);
  }

  return (
    <div className={styles['wrapper']}>
      <Link className={styles['image']} to={process.env['PUBLIC_URL'] + '/' + uuid}>
        <Image src={gallery[0]} />
      </Link>
      <div className={styles['description']}>
        <Text>{ title }</Text>
      </div>
      <div className={styles['mode']}>
        <Modes
          selectedUuid={selectedModeUuid}
          items={modes}
          disabled={disabled}
          onClick={handleChangeMode}
        />
      </div>
      <div className={styles['controls']}>
        <Button
          count={count}
          disabled={disabled}
          inProcess={inProcess}
          onClick={() => handleToBucket(uuid)}
        >{ price }</Button>
      </div>
    </div>
  );
}

export default Product;
