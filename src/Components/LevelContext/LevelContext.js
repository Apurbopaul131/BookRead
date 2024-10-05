import { createContext } from "react";

//This context is created for handle Orginal list book
export const OrginalBooksData = createContext([]);

//This context is created for handle read list book
export const ReadBookList = createContext([]);

//This context is created for handle wishlist list book
export const WishBookList = createContext([]);

//This context is created for handle firebase auth realed funcitionalites and data
export const AuthContext = createContext({});
