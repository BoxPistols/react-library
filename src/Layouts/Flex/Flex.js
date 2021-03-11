import PropTypes from 'prop-types'
import './Flex.scss'

export const Flex = ({ flex, style, ...props }) => {
  return (
    <div className={`fx-${flex}`} style={style}>
      {props.children}
    </div>
  )
}

Flex.propTypes = {
  flex: PropTypes.oneOf(['flex', 'inline','jc-center', 'ai-center', 'center', 'column']),
}

Flex.defaultProps = {
  flex: 'flex',
  children: 'block style on display flex',
}
