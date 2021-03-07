import { Button } from '../../Button/Button.js';
import Input from '../Input/Input.js';
import './Submit.scss'

const Storybook = {
  title: 'Submit/Button',
  // component: Submit,
}
export default Storybook

export const Submit = () => {
  return (
    <div className="form-area submit">
      <Input />
      <Button color="primary" size="small" label='submit'/>
    </div>
  )
}
