// import { Styles, StylesConfig } from 'react-select'
// import { menuListCSS } from 'react-select/src/components/Menu'

const styles = {
  option: (provided:any, state:any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#0a9246' : '#FFFFFF',
    ':hover': {
      backgroundColor: '#000',
      color: '#ffffff'
    },
  }),
  menu: (provided:any, state:any) => ({
    ...provided,
  }),
  menuList: (provided:any, state:any) => ({
    ...provided,
    color: '#636363',
    fontSize: '18px',
  }),
  control: (provided:any, state:any) => ({
    ...provided,
    borderColor: '#cdc6c1',
    boxShadow: 'none',
    ':hover': {
      borderColor: '#cdc6c1',
    }
  }),
  indicatorSeparator: (provided:any, state:any) => ({
    ...provided,
  }),
  valueContainer: (provided:any, state:any) => ({
    ...provided,
  }),
  dropdownIndicator: (provided:any, state:any) => ({
    ...provided,
  }),
  placeholder: (provided:any, state:any) => ({
    ...provided,
    color: '#c2bfbf',
    fontSize: '18px',
  }),
  singleValue: (provided:any, state:any) => ({
    ...provided,
    color: '#636363',
    fontSize: '18px',
  }),
}

export default styles