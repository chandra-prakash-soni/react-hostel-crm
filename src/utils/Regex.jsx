export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
export const PASSWORD_REGEX =
  /(?=^.{8,}$)(?=.*\d)(?=.*[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]+)(?![.\n])(?!.* )(?=.*[A-Z])(?=.*[a-z]).*$/;

export const CHAR_REGEX = /^([a-z]+\s)*[a-z]+$/i;
// export const MOBILE_REGEX = /^(0|[1-9][0-9]{9})$/i;
export const MOBILE_REGEX = /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})$/i;
export const ZIP_REGEX = /^\S/;
// export const ZIP_REGEX = /^(\d){0,40}$/i;
export const SPECHAR_REGEX = /^[A-Za-z0-9 ]*[A-Za-z0-9][A-Za-z0-9 ]*$/i;
export const NUM_REGEX = /^\d+$/i;
export const SPECIAL_CHAR = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
export const GET_LOWER_CASE = /^(.*[a-z].*)/;
export const GET_UPPER_CASE = /^(.*[A-Z].*)/;
export const GET_NUMBER = /^(.*[0-9].*)/;
export const SPACE_REGEX = /^\s+$/;
export const E_REGEX = /^/;
// 2/jun/2023
// export const NAME_REGEX = /^[A-Za-z]+([- ][A-Za-z]+)*$/;
export const NAME_REGEX = /^(?=.*[a-zA-Z])[a-zA-Z\- ]+$/;

// export const NAME_REGEX = /^[A-Za-z]+([- ][A-Za-z]+)*$/;
// export const NAME_REGEX = /^[a-zA-Z]*$/;
// export const NAME_REGEX = /^\S.*[a-zA-Z]*\S.\S*$/g;
// export const NAME_REGEX = /^\S.*[A-Za-z\s]*\S.\S*$/g;
// export const NAME_REGEX = /^[A-Za-z]+[A-Za-z ]*$/;
// export const NAME_REGEX = /^[A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?$/;
// export const NAME_REGEX = /^[A-Za-z ]+$/;
export const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
export const LEN_EIGHT = /^.{8,}$/;
export const HTML_ENTITIES =
  /&(nbsp|amp|quot|lt|gt|rsquo|rdquo|ldquo|hellip);/g;
