import React from "react";

/*
 * Variable keep context which is using for
 * pass parameters between react components.
 * We can't pass parameters by using constructor
 * because we get data asynchronously. We don't
 * use componentWillReceiveProps because according
 * to documentation this function is unsafe and
 * will be later deprecated
 */
const FilmsContext = React.createContext();

export default FilmsContext;