//Route Cohnstants Start
export const LOGIN_SCREEN = '/login'
export const HOME_SCREEN = '/'
//Route Cohnstants End


//Error helper texts Start
export const REQUIRED = ' is a required field ';
export const MUST_CONTAIN = ' must contain ';
export const EMAIL = ' Email ID ';
export const INVALID = ' Invalid ';
export const PASSWORD = ' Password ';
export const USERNAME = ' Username ';
export const SPECIAL_CHAR = ' Special Characters ';
export const UPPER_CASE = ' Upper Case Character ';
export const NUMBERS = ' Numbers (0-9) ';
export const TOO_SHORT = ' is too short ';
export const NOT_MATCH = ' did not match ';

export const JOIN = (finalString) => {
    return finalString.replace(/\s\s/, ' ').trim();
}
//Error helper texts End



//Regex Constants Start
export const PASSWORD_VALIDATOR = new RegExp('^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9]).{5,}$');
export const UPPER_CASE_VALIDATOR = new RegExp('[A-Z]');
export const NUMBER_VALIDATOR = new RegExp('[0-9]');
export const SPECIAL_CHAR_VALIDATOR = new RegExp('[^A-Za-z0-9]');
export const EMAIL_VALIDATOR = new RegExp('[a-zA-Z_\\-]+@[a-zA-Z]+\\.[a-zA-Z]{2,}')
//Regex Constants End