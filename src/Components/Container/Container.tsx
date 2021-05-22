import React from 'react';

interface ContainerProps {
  wide?: boolean;
  children: any;
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={'container py-md-5' + (props.wide ? '' : ' container--narrow')}
    >
      {props.children}
    </div>
  );
}
