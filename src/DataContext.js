//Sharing data without having to pass down as props in a safer and cleaner manner

import { createContext } from "react";


//gave it a value of an empty array, knowing data will come back of an array of tracks
export const DataContext = createContext([]);