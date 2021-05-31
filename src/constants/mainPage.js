const ADD_BOARD = "Add Board";
const CREATE_BOARD = "Create Board";
const CLOSE = "Close";
const ENTER_NAME = "Enter name";
const NAME = "Name";
const REGEX_NAME = /^.{2,50}$/;
const INCORECT_NAME = "Incorect name";
const ENTER_DESCRIPTION = "Enter description";
const DESCRIPTION = "Description";

const MAIN_PAGE = {
  BUTTONS: {
    ADD_BOARD,
    CREATE_BOARD,
    CLOSE,
  },
  INPUTS: {
    PLACEHOLDERS: {
      ENTER_NAME,
      ENTER_DESCRIPTION,
    },
    LABELS: {
      NAME,
      DESCRIPTION,
    },
    REGEX: {
      REGEX_NAME,
    },
    ERRORS: {
      INCORECT_NAME,
    },
  },
};

export { MAIN_PAGE };
