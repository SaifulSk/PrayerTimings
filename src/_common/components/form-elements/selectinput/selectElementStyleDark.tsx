// import { Styles, StylesConfig } from 'react-select'
// import { menuListCSS } from 'react-select/src/components/Menu'

const styles = {
  option: (provided:any, state:any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#556ee6' : '#FFFFFF',
    ':hover': {
      backgroundColor: '#90a0ee',
      color: '#ffffff'
    },
  }),
  input: (provided:any, state:any) => ({
    ...provided,
      color: '#BFC8E2'
  }),
  menu: (provided:any, state:any) => ({
    ...provided,
    zIndex:999999
  }),
  menuList: (provided:any, state:any) => ({
    ...provided,
    color: '#636363',
    fontSize: '14.4px',
  }),
  control: (provided:any, state:any) => ({
    ...provided,
    height: `calc(1.9em + .94rem + 2px)`,
    borderRadius: '.5rem',
    backgroundColor:'#464D61',
    // color: '#BFC8E2',
    borderColor: '1.5px solid #58627F',
    boxShadow: 'none',
    ':hover': {
      borderColor: '#58627F',
    }
  }),
  indicatorSeparator: (provided:any, state:any) => ({
    ...provided,
    backgroundColor: '#353535'
  }),
  indicatorsContainer: (provided:any, state:any) => ({
    ...provided,
    color: '#676767'
  }),
  valueContainer: (provided:any, state:any) => ({
    ...provided,
  }),
  dropdownIndicator: (provided:any, state:any) => ({
    ...provided,
    color: '#676767'
  }),
  placeholder: (provided:any, state:any) => ({
    ...provided,
    color: '#BFC8E2',
    fontSize: '14.4px',
  }),
  singleValue: (provided:any, state:any) => ({
    ...provided,
    color: '#BFC8E2',
    fontSize: '14.4px',
  }),
}

export default styles