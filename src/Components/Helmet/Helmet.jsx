/* eslint-disable react/prop-types */


const Helmet = (props) => {
    document.title = 'Ecommerce | ' + props.title;
  return (
    <div className="w-full">{props.children}</div>
  )
}

export default Helmet