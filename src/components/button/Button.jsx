import './style.css'

const Button = ({ type, text, onClick }) => {
    let buttonStyle;
  
    // Determine button style based on the type prop
    switch (type) {
      case 'secondary':
        buttonStyle = {
          backgroundColor: 'var(--white)',
          color: 'var(--wine-red)',
          border: '1px solid var(--wine-red)',
          fontWeight: '600'
        };
        break;
      case 'tertiary':
        buttonStyle = {
          backgroundColor: 'var(--brown)',
          color: 'white',
        };
        break;
      default:
        buttonStyle = {
            backgroundColor: 'var(--wine-red)',
            color: 'white',
            border: '1px solid transparent',
        };
    }
  
    // General styling
    const generalStyle = {
      padding: '13px 26px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem'
    };
  
    return (
      <button style={{ ...generalStyle, ...buttonStyle }} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;