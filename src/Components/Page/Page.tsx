import React, { useEffect } from 'react';
import Container from '../Container/Container';

interface PageProps {
  title: string;
  wide?: boolean;
  children: any;
}

const Page = (props: PageProps) => {
  useEffect(() => {
    document.title = props.title;
    window.scrollTo(0, 0);
  }, []);
  return <Container wide={props.wide}>{props.children}</Container>;
};

export default Page;
