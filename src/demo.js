import React from 'react';
import style from './demo.module.less'

export default (props) => {
  return (
    <span className={style.btn}>hello, {props.name}</span>
  )
}
