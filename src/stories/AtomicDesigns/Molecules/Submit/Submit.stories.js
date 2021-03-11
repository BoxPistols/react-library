import { Button } from '../../Atoms/Button/Button'
import Input from '../../Atoms/Form/Input/Input'
import './Submit.scss'

const Storybook = {
  title: 'Atomic Designs/Molecules/Form/Submit',
}
export default Storybook

export const Submits = ({size}) => {
  return (
    <div className="form-area">
      <div className="form-area_input">
        <Input rad="" size={size} />
      </div>

      <div className="form-area_button">
        <Button color="primary" size={size} label="submit" />
      </div>
    </div>
  )
}

export const Submit = () => {
  return (
    <>
      {/* Small */}
      <Submits size="small"/>
      <Submits size="medium"/>
      <Submits size="large"/>
      {/* <Submits size="x-large"/> */}
    </>
  )
}
