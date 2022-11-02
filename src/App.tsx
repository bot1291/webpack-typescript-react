import { ClickCounter } from './ClickCounter';

export const App = () => {
    return (
        <>
            <h1>
                React TypeScript Webpack Starter Template -{' '}
                {process.env.NODE_ENV}
                {process.env.name}
            </h1>
            {/* <img src={image} width="100px" height="100px" alt="A dog take place" /> */}
            <ClickCounter />
        </>
    );
};
