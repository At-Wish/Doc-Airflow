import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Redirect } from '@docusaurus/router';


export default function HomepageFeatures(): ReactNode {
  return <Redirect to="/docs/intro" />;
}
