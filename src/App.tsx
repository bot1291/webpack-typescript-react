import './styles.scss'
import image from './1who_let.jpg'
import { ClickCounter } from './ClickCounter'
const maslo =  432
export const App = () => {
  return (
    <>
      <h1>
        React TypeScript Webpack Starter Template - {process.env.NODE_ENV}
        {process.env.name}
      </h1>
      <img src={image} width="100px" height="100px" alt="A dog take place" />
      <ClickCounter />
    </>
  )
}
