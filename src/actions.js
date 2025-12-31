export const addEntry = (entry) => async (dispatch) => {
  // will add it into database and dispatch the code;

  try {
    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/add-income",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    ); //making post call;

    const data = await response.json(); //once we have respnse will do this;
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data }); //once we have data then;
    }
  } catch (error) {
    console.log("Error adding entry", error);
  }
};

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/income"
    );

    const data = await response.json();
    if (data) {
      dispatch({ type: "FETCH_INCOME_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching income", error);
  }
}; // we have to fetch data in other files to read the data.


export const fetchExpenses = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/expenses"
    );

    const data = await response.json();
    if (data) {
      dispatch({ type: "FETCH_EXPENSES_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching expenses", error);
  }
}; // we have to fetch data in other files to read the data.


