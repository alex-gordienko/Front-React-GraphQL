const variables = {
    fontFamily: {
      bigTitle: "Roboto", 
      title: "Roboto",
      exception: "Roboto"
    },
    fontSize: {
      bigTitle: "34px",
      title: "15px",
      exception: '10px',
      button: '18px'
    }
  };
  
  interface IColorPalette {
    primaryBackground: string;
    inputBackground: string;
    errorMessage: string;
    disabledButton: string;
    button: string;
  }
  
  interface IFonts {
    bigTitle: string;
    title: string;
    exception: string;
  }
  
  interface IFontSizes {
    bigTitle: string;
    title: string;
    exception: string;
    button: string;
  }
  
  export interface ITheme {
    colors: IColorPalette;
    fontFamily: IFonts;
    fontSize: IFontSizes;
  }
  
  export default variables;