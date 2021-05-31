import axios from "axios";

import { ENDPOINTS } from "./endpoints";

export async function fetchBoards(data) {
  try {
    let res = await axios.get(ENDPOINTS.GET_BOARDS, JSON.stringify(data));
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewBoard(data) {
  console.log("data", data);
  try {
    let res = await axios.post(
      ENDPOINTS.CREATE_NEW_BOARD,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchLists() {
  try {
    let res = await axios.get(ENDPOINTS.GET_TO_DOS);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewList(data) {
  try {
    let res = await axios.post(
      ENDPOINTS.CREATE_NEW_TO_DO,
      JSON.stringify(data)
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
