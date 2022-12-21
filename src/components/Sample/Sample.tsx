import styles from './Sample.module.scss';
import { SampleProps } from './Sample.props';
import { FC } from 'react';
import cn from 'classnames';

export const Sample: FC<SampleProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.sample)} {...props}></div>;
};
